import { access, cp, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const projectRoot = new URL("../", import.meta.url);
const exportDirectory = new URL("out/", projectRoot);
const projectRootPath = fileURLToPath(projectRoot);
const exportDirectoryPath = fileURLToPath(exportDirectory);
const manifestPath = path.join(projectRootPath, "pages-root-manifest.json");
const protectedEntries = new Set([
  ".git",
  ".github",
  ".openai",
  "app",
  "build",
  "db",
  "docs",
  "node_modules",
  "out",
  "public",
  "scripts",
  "tests",
  "worker",
  "CNAME",
  "README.md",
  "package.json",
  "package-lock.json",
]);

await access(new URL("index.html", exportDirectory));

const customDomain = (await readFile(new URL("CNAME", projectRoot), "utf8")).trim();
if (!/^[a-z0-9.-]+$/i.test(customDomain)) {
  throw new Error("CNAME must contain one valid domain name.");
}

const outputEntries = (await readdir(exportDirectoryPath)).sort();
let previousEntries = [];
try {
  const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
  previousEntries = Array.isArray(manifest.entries) ? manifest.entries : [];
} catch (error) {
  if (error?.code !== "ENOENT") throw error;
}

const managedEntries = [...new Set([...previousEntries, ...outputEntries])];
for (const entry of managedEntries) {
  if (protectedEntries.has(entry) || entry.includes("/") || entry.includes("\\")) {
    throw new Error(`Refusing to replace protected project entry: ${entry}`);
  }
}

for (const entry of managedEntries) {
  await rm(path.join(projectRootPath, entry), { recursive: true, force: true });
}

for (const entry of outputEntries) {
  await cp(path.join(exportDirectoryPath, entry), path.join(projectRootPath, entry), {
    recursive: true,
    force: true,
  });
}

await writeFile(path.join(projectRootPath, ".nojekyll"), "");
await writeFile(manifestPath, `${JSON.stringify({ entries: outputEntries }, null, 2)}\n`);

console.log(`Prepared main/root for GitHub Pages at ${customDomain}.`);
