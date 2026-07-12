export const locales = ["en", "ru", "he"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  ru: "RU",
  he: "HE",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localeDirection(locale: Locale): "ltr" | "rtl" {
  return locale === "he" ? "rtl" : "ltr";
}

export function pathWithoutLocale(path: string): string {
  const [pathname = "/", ...suffixParts] = path.split(/(?=[?#])/);
  const suffix = suffixParts.join("");
  const normalizedPathname = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const unprefixed = normalizedPathname.replace(/^\/(?:ru|he)(?=\/|$)/, "");

  return `${unprefixed || "/"}${suffix}`;
}

export function localizedPath(path: string, locale: Locale = defaultLocale): string {
  const unprefixed = pathWithoutLocale(path);

  if (locale === defaultLocale) {
    return unprefixed;
  }

  if (unprefixed === "/") {
    return `/${locale}`;
  }

  if (unprefixed.startsWith("/?") || unprefixed.startsWith("/#")) {
    return `/${locale}${unprefixed.slice(1)}`;
  }

  return `/${locale}${unprefixed}`;
}

export const siteMessages = {
  en: {
    brandHome: "KindBudget home",
    appStoreWaitlist: "Join the KindBudget App Store waitlist",
    appStoreComingSoon: "Coming soon on the",
    mainNavigation: "Main navigation",
    features: "Features",
    howItWorks: "How it works",
    faq: "FAQ",
    languageSelection: "Language selection",
    footerDescription: "Personal and shared budgeting with less pressure and more clarity.",
    product: "Product",
    helpAndLegal: "Help & legal",
    support: "Support",
    privacyPolicy: "Privacy Policy",
    termsOfUse: "Terms of Use",
    deleteAccount: "Delete Account",
    legalAndSupport: "Legal and support",
    copyright: "© 2026 AP Software. All rights reserved.",
    footerNote: "Made to make money feel lighter.",
    lastUpdated: "Last updated:",
    notFoundImageAlt: "KindBudget buddy peeking",
    notFoundCode: "404 · that page wandered off",
    notFoundTitle: "Nothing stressful here.",
    notFoundBody: "The page you were looking for does not exist or may have moved. Let’s get you back to KindBudget.",
    notFoundBack: "Back to KindBudget",
  },
  ru: {
    brandHome: "Главная страница KindBudget",
    appStoreWaitlist: "Присоединиться к списку ожидания KindBudget в App Store",
    appStoreComingSoon: "Скоро в",
    mainNavigation: "Основная навигация",
    features: "Возможности",
    howItWorks: "Как это работает",
    faq: "Частые вопросы",
    languageSelection: "Выбор языка",
    footerDescription: "Личный и совместный бюджет — меньше давления, больше ясности.",
    product: "Продукт",
    helpAndLegal: "Помощь и документы",
    support: "Поддержка",
    privacyPolicy: "Политика конфиденциальности",
    termsOfUse: "Условия использования",
    deleteAccount: "Удалить аккаунт",
    legalAndSupport: "Помощь и юридическая информация",
    copyright: "© 2026 AP Software. Все права защищены.",
    footerNote: "Чтобы управлять деньгами было легче.",
    lastUpdated: "Последнее обновление:",
    notFoundImageAlt: "Выглядывающий персонаж KindBudget",
    notFoundCode: "404 · эта страница потерялась",
    notFoundTitle: "Ничего страшного.",
    notFoundBody: "Страница, которую вы искали, не существует или была перемещена. Давайте вернёмся в KindBudget.",
    notFoundBack: "Вернуться в KindBudget",
  },
  he: {
    brandHome: "דף הבית של KindBudget",
    appStoreWaitlist: "הצטרפות לרשימת ההמתנה של KindBudget ב-App Store",
    appStoreComingSoon: "בקרוב ב-",
    mainNavigation: "ניווט ראשי",
    features: "תכונות",
    howItWorks: "איך זה עובד",
    faq: "שאלות נפוצות",
    languageSelection: "בחירת שפה",
    footerDescription: "ניהול תקציב אישי ומשותף בפחות לחץ וביותר בהירות.",
    product: "המוצר",
    helpAndLegal: "עזרה ומידע משפטי",
    support: "תמיכה",
    privacyPolicy: "מדיניות פרטיות",
    termsOfUse: "תנאי שימוש",
    deleteAccount: "מחיקת חשבון",
    legalAndSupport: "עזרה ומידע משפטי",
    copyright: "© 2026 AP Software. כל הזכויות שמורות.",
    footerNote: "כדי שניהול הכסף ירגיש קל יותר.",
    lastUpdated: "עודכן לאחרונה:",
    notFoundImageAlt: "הדמות של KindBudget מציצה",
    notFoundCode: "404 · הדף הזה הלך לאיבוד",
    notFoundTitle: "אין כאן שום דבר מלחיץ.",
    notFoundBody: "הדף שחיפשת לא קיים או שהועבר. בואו נחזור ל-KindBudget.",
    notFoundBack: "חזרה ל-KindBudget",
  },
} as const;

export function getSiteMessages(locale: Locale = defaultLocale) {
  return siteMessages[locale];
}
