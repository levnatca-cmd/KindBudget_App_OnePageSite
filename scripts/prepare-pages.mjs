import { access, cp, readFile, rm, writeFile } from "node:fs/promises";

const projectRoot = new URL("../", import.meta.url);
const exportDirectory = new URL("out/", projectRoot);
const pagesDirectory = new URL("docs/", projectRoot);

await access(new URL("index.html", exportDirectory));

const customDomain = (await readFile(new URL("CNAME", projectRoot), "utf8")).trim();
if (!/^[a-z0-9.-]+$/i.test(customDomain)) {
  throw new Error("CNAME must contain one valid domain name.");
}

await rm(pagesDirectory, { recursive: true, force: true });
await cp(exportDirectory, pagesDirectory, { recursive: true });
await writeFile(new URL("CNAME", pagesDirectory), `${customDomain}\n`);
await writeFile(new URL(".nojekyll", pagesDirectory), "");

console.log(`Prepared docs/ for GitHub Pages at ${customDomain}.`);
