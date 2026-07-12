import type { Locale } from "./i18n";

type Feature = { icon: string; title: string; text: string; tone: string };
type GalleryItem = { src: string; label: string; note: string };
type Faq = { q: string; a: string };

export type HomeCopy = {
  features: Feature[];
  gallery: GalleryItem[];
  faqs: Faq[];
  hero: {
    eyebrow: string; availability: string; title: string; emphasis: string; lead: string; seeApp: string;
    trustAria: string; trust: [string, string]; metricsAria: string;
    metrics: [[string, string], [string, string], [string, string]]; previewAria: string; stage: string;
    streakTitle: string; streakBody: string; receiptTitle: string; receiptBody: string;
    welcomeAlt: string; cameraAlt: string; buddyAlt: string;
  };
  proof: { aria: string; items: [string, string, string] };
  featureHeading: { eyebrow: string; title: string; body: string };
  steps: {
    eyebrow: string; title: string; body: string;
    items: [{ title: string; body: string; alt: string }, { title: string; body: string; alt: string }, { title: string; body: string; alt: string }];
  };
  tour: { eyebrow: string; title: string; body: string; listAria: string };
  signature: {
    welcomeIndex: string; welcomeTitle: string; welcomeBody: string; welcomeTagsAria: string;
    welcomeTags: [string, string, string]; welcomeAlt: string;
    cameraIndex: string; cameraTitle: string; cameraBody: string; cameraTagsAria: string;
    cameraTags: [string, string, string]; cameraAlt: string;
  };
  journey: {
    eyebrow: string; title: string; body: string; flowAria: string; capture: string; captureAlt: string;
    ocr: string; sample: string; confidence: string; merchant: string; date: string; dateValue: string;
    items: string; itemCount: string; subtotal: string; tax: string; total: string; ready: string; review: string;
    draft: string; typeCategory: string; nothingSaved: string;
  };
  receiptReview: {
    aria: string; title: string; storeName: string; date: string; foundItems: string; beforeTax: string;
    tax: string; total: string; confidence: string; reviewBeforeSaving: string; expense: string; income: string;
    suggestedCategory: string; groceries: string; addFromScan: string;
  };
  more: { eyebrow: string; title: string; body: string; listAria: string; altSuffix: string };
  together: {
    familyPlan: string; leftPrefix: string; trackSuffix: string; eyebrow: string; title: string; body: string;
    bullets: [string, string, string]; questions: string; arrow: string;
  };
  privacy: {
    eyebrow: string; title: string; body: string; link: string; arrow: string;
    points: [{ title: string; body: string }, { title: string; body: string }, { title: string; body: string }];
  };
  faqIntro: { eyebrow: string; title: string; body: string; buddyAlt: string };
  cta: { eyebrow: string; title: string; body: string; finePrint: string };
};

const media = {
  gallery: [
    "/screens/home-dashboard.webp", "/screens/add-transaction.webp", "/screens/category-picker.webp",
    "/screens/receipt-options.webp", "/screens/analytics.webp", "/screens/day-transactions.webp",
    "/screens/shared-budget.webp", "/screens/create-budget-form.webp", "/screens/profile-user.webp",
  ],
};

const commonFeatures = [
  ["↙", "mint"], ["▤", "lilac"], ["∞", "peach"], ["⌁", "sky"], ["✦", "gold"], ["✓", "rose"],
] as const;

function features(items: Array<[string, string]>): Feature[] {
  return items.map(([title, text], index) => ({ icon: commonFeatures[index][0], tone: commonFeatures[index][1], title, text }));
}

function gallery(items: Array<[string, string]>): GalleryItem[] {
  return items.map(([label, note], index) => ({ src: media.gallery[index], label, note }));
}

export const homeCopy: Record<Locale, HomeCopy> = {
  en: {
    features: features([
      ["Simple expense tracking", "Add income and expenses in seconds, with categories that keep everything easy to find."],
      ["Receipt scanning", "Scan a receipt and let on-device recognition extract the store name, date and total."],
      ["Shared budgets", "Invite a partner or family member and stay aligned without chasing updates."],
      ["Clear analytics", "See where your money goes with clear summaries, categories and spending trends."],
      ["Widgets", "View a budget at a glance from your Home Screen."],
      ["Security and privacy controls", "Protected sign-in, scoped cloud access and controls to export or delete your data."],
    ]),
    gallery: gallery([
      ["Home dashboard", "See what is left without doing the math."],
      ["Quick transaction", "A focused way to log money in or out."],
      ["Category picker", "Keep every expense organized with a quick, visual choice."],
      ["Receipt tools", "Scan with the camera or import a receipt you already have."],
      ["Analytics", "Useful patterns without financial noise."],
      ["Day details", "Open any day and see exactly what changed."],
      ["Shared budget", "One current view for everyone invited."],
      ["Create a budget", "Set the currency, goal and details of a new budget in one place."],
      ["Your profile", "Account, locale and privacy controls stay easy to find."],
    ]),
    faqs: [
      { q: "Will KindBudget be free?", a: "Pricing and plan details will be confirmed before KindBudget is released on the App Store." },
      { q: "Do I need an account?", a: "Yes. An account is required so KindBudget can protect your data, sync the data supported by your plan and enable shared budgets. You can sign in with Apple, Google or email." },
      { q: "Can I manage a budget with someone else?", a: "Yes. Shared-budget owners can invite a partner or family member. Shared members only see the budgets they have been invited to." },
      { q: "Which currencies are supported?", a: "KindBudget supports USD, CAD, EUR and GBP. Each budget keeps its own currency." },
      { q: "Can KindBudget scan receipts?", a: "Yes. KindBudget uses on-device recognition to extract receipt details. Always review the detected amount before saving." },
      { q: "Which devices does it work on?", a: "KindBudget is designed for iPhone and requires iOS 18.2 or later. Its widget brings selected budget information to the Home Screen." },
      { q: "How do I delete my account and data?", a: "In the app, open Profile and choose Delete My Account. The two-step confirmation deletes your account and starts removal of associated data, subject to the shared-budget and retention details on the Delete Account page." },
      { q: "How can I contact support?", a: "Email support@kindbudget.app. Include your iPhone model, iOS version and app version so the team can help faster." },
    ],
    hero: {
      eyebrow: "A calmer way to budget", availability: "Built for iPhone", title: "Budgeting that feels", emphasis: "kind.",
      lead: "Track spending, scan receipts and manage shared budgets—all in one simple app built to make money feel lighter.",
      seeApp: "See the app", trustAria: "Product highlights", trust: ["On-device receipt OCR", "No bank connection needed"],
      metricsAria: "KindBudget highlights", metrics: [["30 sec", "daily check-in"], ["Receipt scan", "starts a transaction draft"], ["Together", "shared family budgets"]],
      previewAria: "KindBudget app preview", stage: "The calmer money app", streakTitle: "12-day streak", streakBody: "A habit that feels possible",
      receiptTitle: "Receipt in frame", receiptBody: "Capture for review", welcomeAlt: "KindBudget welcome page on iPhone",
      cameraAlt: "KindBudget premium receipt camera showing an illustrative Costco sample on iPhone", buddyAlt: "KindBudget buddy smiling",
    },
    proof: { aria: "KindBudget approach", items: ["Designed for real life", "Clear, not complicated", "Supportive, never judgmental"] },
    featureHeading: { eyebrow: "Everything in one place", title: "Small tools. A lighter money routine.", body: "KindBudget keeps the useful parts of budgeting and leaves the spreadsheet stress behind." },
    steps: {
      eyebrow: "How it works", title: "Start simple. Keep going together.", body: "Three small steps are enough to turn everyday spending into a plan you can actually use.",
      items: [
        { title: "Create a budget", body: "Choose a name, currency and a goal that fits your life.", alt: "Create budget screen in KindBudget" },
        { title: "Add as you go", body: "Enter an expense by hand or scan the paper receipt.", alt: "KindBudget premium camera framing an illustrative Costco receipt" },
        { title: "Notice the pattern", body: "Review calm summaries and plan the next step together.", alt: "Analytics screen in KindBudget" },
      ],
    },
    tour: { eyebrow: "The KindBudget experience", title: "Designed to feel good every day.", body: "KindBudget product previews with seeded demo data—so the experience can speak for itself without exposing anyone’s finances.", listAria: "KindBudget signature screens" },
    signature: {
      welcomeIndex: "01 · Welcome", welcomeTitle: "A money habit designed to be easy to return to.", welcomeBody: "A warm daily check-in, a visible streak and one clear next step—without shame, alarms or financial noise.", welcomeTagsAria: "Welcome page highlights", welcomeTags: ["30-second check-in", "Gentle streaks", "Your buddy"], welcomeAlt: "KindBudget welcome page with daily check-in and buddy",
      cameraIndex: "02 · Receipt camera", cameraTitle: "Paper receipt in. Clear transaction out.", cameraBody: "Aim, capture and review. KindBudget reads receipt details on-device and keeps you in control before anything is saved.", cameraTagsAria: "Receipt camera highlights", cameraTags: ["On-device OCR", "Review first", "On-device in this policy version"], cameraAlt: "KindBudget premium camera digitizing an illustrative Costco receipt",
    },
    journey: {
      eyebrow: "Receipt intelligence", title: "See exactly what KindBudget detects.", body: "The scan becomes a draft—not a decision. Check every field, adjust anything, then add the transaction when it looks right.", flowAria: "Receipt scanning flow", capture: "Capture", captureAlt: "Illustrative Costco receipt framed in the premium KindBudget camera", ocr: "On-device OCR", sample: "Sample detection", confidence: "High confidence", merchant: "Merchant", date: "Date", dateValue: "Jul 10, 2026", items: "Items", itemCount: "4 line items", subtotal: "Subtotal", tax: "Tax", total: "Total", ready: "Ready to review", review: "Review output", draft: "Transaction draft", typeCategory: "Expense · Groceries", nothingSaved: "Nothing is saved until you confirm.",
    },
    receiptReview: { aria: "KindBudget review screen showing Costco Wholesale, four detected items, tax and a total of 57 dollars and 2 cents", title: "Review receipt", storeName: "Store name", date: "July 10, 2026", foundItems: "Found 4 items", beforeTax: "Before tax", tax: "Tax", total: "Receipt total", confidence: "High confidence", reviewBeforeSaving: "Review before saving", expense: "Expense", income: "Income", suggestedCategory: "Suggested category", groceries: "Groceries", addFromScan: "Add from scan" },
    more: { eyebrow: "More of the product", title: "Everyday tools, beautifully simple.", body: "Nine more real screens—from quick transactions to shared budgets and analytics.", listAria: "KindBudget product screens", altSuffix: "in KindBudget" },
    together: { familyPlan: "Family plan", leftPrefix: "left", trackSuffix: "on track", eyebrow: "Shared budgets", title: "Better budgets, together.", body: "Invite a partner or family member, add expenses from either phone and work from the same current view.", bullets: ["People you invite can access only that shared budget", "Owners can manage members and remove access", "Clear roles help everyone know what they can change"], questions: "Questions about sharing?", arrow: "→" },
    privacy: {
      eyebrow: "Privacy, in plain language", title: "Your money story is yours.", body: "KindBudget uses the data you enter to provide budgeting, sync and sharing features. It does not sell, rent or trade your personal data.", link: "Read the Privacy Policy", arrow: "→",
      points: [
        { title: "On-device in this policy version", body: "In the version described by our Privacy Policy, images are processed on-device and are not uploaded to Cloud Storage for Firebase or Cloud Firestore." },
        { title: "Protected account access", body: "Signed-in access is managed through Firebase Authentication and scoped Cloud Firestore security rules." },
        { title: "You stay in control", body: "Export supported budget data, remove shared access, or delete your account from the app." },
      ],
    },
    faqIntro: { eyebrow: "FAQ", title: "A few useful answers.", body: "Still unsure about something? We are happy to help.", buddyAlt: "KindBudget buddy pointing toward the questions" },
    cta: { eyebrow: "A kinder money habit", title: "Make money management feel lighter.", body: "Build a calmer money routine with KindBudget.", finePrint: "Join the waitlist. We will only email you about KindBudget availability." },
  },
  ru: {
    features: features([
      ["Простой учёт расходов", "Добавляйте доходы и расходы за несколько секунд, а категории помогут быстро найти нужное."],
      ["Сканирование чеков", "Отсканируйте чек — распознавание на устройстве извлечёт название магазина, дату и итоговую сумму."],
      ["Совместные бюджеты", "Пригласите партнёра или члена семьи и следите за общим бюджетом без лишних уточнений."],
      ["Понятная аналитика", "Смотрите, на что уходят ваши деньги, с помощью понятных сводок, категорий и динамики расходов."],
      ["Виджеты", "Быстро просматривайте бюджет на экране «Домой»."],
      ["Настройки безопасности и конфиденциальности", "Защищённый вход, ограниченный доступ к облачным данным и возможность экспортировать или удалить свои данные."],
    ]),
    gallery: gallery([
      ["Главный экран", "Сразу видно, сколько осталось, — считать вручную не нужно."], ["Быстрая операция", "Простой способ добавить доход или расход."],
      ["Выбор категории", "Распределяйте расходы по категориям с помощью простого наглядного выбора."], ["Инструменты для чеков", "Отсканируйте чек камерой или импортируйте готовое изображение."],
      ["Аналитика", "Полезные закономерности без финансового шума."], ["Операции за день", "Откройте любой день и посмотрите, что именно изменилось."],
      ["Совместный бюджет", "Единая актуальная картина для всех приглашённых."], ["Создать бюджет", "Настройте валюту, цель и данные нового бюджета в одном месте."],
      ["Ваш профиль", "Настройки аккаунта, языка, региона и конфиденциальности всегда под рукой."],
    ]),
    faqs: [
      { q: "KindBudget будет бесплатным?", a: "Цены и условия тарифов будут объявлены до выхода KindBudget в App Store." },
      { q: "Нужен ли аккаунт?", a: "Да. Аккаунт нужен для защиты ваших данных, синхронизации доступных по тарифу данных и работы совместных бюджетов. Войти можно через Apple, Google или по электронной почте." },
      { q: "Можно ли вести бюджет вместе с другим человеком?", a: "Да. Владелец совместного бюджета может пригласить партнёра или члена семьи. Участники видят только те бюджеты, в которые их пригласили." },
      { q: "Какие валюты поддерживаются?", a: "KindBudget поддерживает USD, CAD, EUR и GBP. Для каждого бюджета задаётся своя валюта." },
      { q: "Может ли KindBudget сканировать чеки?", a: "Да. KindBudget распознаёт данные чека на устройстве. Всегда проверяйте распознанную сумму перед сохранением." },
      { q: "На каких устройствах работает KindBudget?", a: "KindBudget создан для iPhone и требует iOS 18.2 или новее. Виджет показывает выбранную информацию о бюджете на экране «Домой»." },
      { q: "Как удалить аккаунт и данные?", a: "В приложении откройте раздел «Профиль» и выберите «Удалить мой аккаунт». После двух этапов подтверждения аккаунт будет удалён и начнётся удаление связанных данных с учётом правил совместных бюджетов и хранения, описанных на странице «Удаление аккаунта»." },
      { q: "Как связаться с поддержкой?", a: "Напишите на support@kindbudget.app. Укажите модель iPhone, версию iOS и версию приложения — так команда сможет помочь быстрее." },
    ],
    hero: { eyebrow: "Спокойный подход к бюджету", availability: "Создано для iPhone", title: "Бюджет —", emphasis: "по-доброму.", lead: "Учитывайте расходы, сканируйте чеки и ведите совместные бюджеты — всё в одном простом приложении, с которым управлять деньгами легче.", seeApp: "Посмотреть приложение", trustAria: "Главные возможности продукта", trust: ["Распознавание чеков на устройстве", "Без подключения к банку"], metricsAria: "Преимущества KindBudget", metrics: [["30 секунд", "на ежедневную отметку"], ["Сканирование чека", "создаёт черновик операции"], ["Вместе", "совместные семейные бюджеты"]], previewAria: "Предпросмотр приложения KindBudget", stage: "Приложение для спокойного управления деньгами", streakTitle: "12 дней подряд", streakBody: "Привычка, которую легко поддерживать", receiptTitle: "Чек в кадре", receiptBody: "Снимите, чтобы проверить", welcomeAlt: "Приветственный экран KindBudget на iPhone", cameraAlt: "Премиальный экран камеры KindBudget с демонстрационным чеком Costco на iPhone", buddyAlt: "Улыбающийся персонаж KindBudget" },
    proof: { aria: "Подход KindBudget", items: ["Создано для реальной жизни", "Понятно, без лишней сложности", "С поддержкой, без осуждения"] },
    featureHeading: { eyebrow: "Всё в одном месте", title: "Простые инструменты. Спокойнее каждый день.", body: "KindBudget сохраняет всё полезное в ведении бюджета и избавляет от стресса сложных таблиц." },
    steps: { eyebrow: "Как это работает", title: "Начните с простого. Продолжайте вместе.", body: "Трёх простых шагов достаточно, чтобы превратить повседневные расходы в понятный и полезный план.", items: [{ title: "Создайте бюджет", body: "Выберите название, валюту и цель, которая подходит именно вам.", alt: "Экран создания бюджета в KindBudget" }, { title: "Добавляйте по ходу дела", body: "Внесите расход вручную или отсканируйте бумажный чек.", alt: "Премиальный экран камеры KindBudget с демонстрационным чеком Costco в кадре" }, { title: "Замечайте закономерности", body: "Просматривайте понятные сводки и вместе планируйте следующий шаг.", alt: "Экран аналитики в KindBudget" }] },
    tour: { eyebrow: "Как устроен KindBudget", title: "Продумано для комфортного использования каждый день.", body: "Демонстрационные экраны KindBudget с тестовыми данными показывают возможности приложения, не раскрывая ничьих финансовых данных.", listAria: "Ключевые экраны KindBudget" },
    signature: { welcomeIndex: "01 · Приветствие", welcomeTitle: "Финансовая привычка, к которой легко возвращаться.", welcomeBody: "Тёплая ежедневная отметка, заметная серия и один понятный следующий шаг — без чувства вины, тревожных сигналов и финансового шума.", welcomeTagsAria: "Возможности приветственного экрана", welcomeTags: ["Отметка за 30 секунд", "Мягкая мотивация сериями", "Ваш помощник"], welcomeAlt: "Приветственный экран KindBudget с ежедневной отметкой и персонажем-помощником", cameraIndex: "02 · Камера для чеков", cameraTitle: "Бумажный чек на входе. Понятная операция на выходе.", cameraBody: "Наведите камеру, сделайте снимок и проверьте результат. KindBudget распознаёт данные чека на устройстве, а перед сохранением вы всё контролируете.", cameraTagsAria: "Возможности камеры для чеков", cameraTags: ["Распознавание на устройстве", "Сначала проверка", "На устройстве — для версии из Политики"], cameraAlt: "Премиальный экран камеры KindBudget, оцифровывающей демонстрационный чек Costco" },
    journey: { eyebrow: "Умное распознавание чеков", title: "Посмотрите, что именно распознал KindBudget.", body: "Результат сканирования становится черновиком, а не окончательным решением. Проверьте каждое поле, исправьте нужное и добавьте операцию, когда всё будет верно.", flowAria: "Процесс сканирования чека", capture: "Снимок", captureAlt: "Демонстрационный чек Costco в кадре премиальной камеры KindBudget", ocr: "Распознавание на устройстве", sample: "Пример распознавания", confidence: "Высокая уверенность", merchant: "Продавец", date: "Дата", dateValue: "10 июля 2026 г.", items: "Позиции", itemCount: "4 позиции", subtotal: "Промежуточный итог", tax: "Налог", total: "Итого", ready: "Готово к проверке", review: "Проверка результата", draft: "Черновик операции", typeCategory: "Расход · Продукты", nothingSaved: "Ничего не сохранится, пока вы не подтвердите." },
    receiptReview: { aria: "Экран проверки KindBudget: Costco Wholesale, четыре распознанные позиции, налог и итоговая сумма 57 долларов 2 цента", title: "Проверить чек", storeName: "Название магазина", date: "10 июля 2026 г.", foundItems: "Найдено позиций: 4", beforeTax: "До налога", tax: "Налог", total: "Итого по чеку", confidence: "Высокая уверенность распознавания", reviewBeforeSaving: "Проверьте перед сохранением", expense: "Расход", income: "Доход", suggestedCategory: "Предлагаемая категория", groceries: "Продукты", addFromScan: "Добавить из скана" },
    more: { eyebrow: "Больше возможностей", title: "Повседневные инструменты — просто и красиво.", body: "Ещё девять реальных экранов: от быстрого добавления операции до совместных бюджетов и аналитики.", listAria: "Экраны продукта KindBudget", altSuffix: "в KindBudget" },
    together: { familyPlan: "Семейный бюджет", leftPrefix: "Осталось", trackSuffix: "— по плану", eyebrow: "Совместные бюджеты", title: "Вместе вести бюджет проще.", body: "Пригласите партнёра или члена семьи, добавляйте расходы с любого телефона и вместе следите за актуальным состоянием бюджета.", bullets: ["Приглашённые вами пользователи получают доступ только к этому совместному бюджету", "Владельцы могут управлять участниками и отзывать доступ", "Понятные роли показывают каждому участнику, что он может изменять"], questions: "Остались вопросы о совместном доступе?", arrow: "→" },
    privacy: { eyebrow: "О конфиденциальности — простыми словами", title: "Ваши финансовые данные принадлежат вам.", body: "KindBudget использует введённые вами данные, чтобы вести бюджет, синхронизировать информацию и обеспечивать совместный доступ. Приложение не продаёт, не сдаёт в аренду и не использует ваши персональные данные как предмет обмена.", link: "Читать Политику конфиденциальности", arrow: "→", points: [{ title: "На устройстве — для версии из Политики", body: "В версии, описанной в нашей Политике конфиденциальности, изображения обрабатываются на устройстве и не загружаются в Cloud Storage for Firebase или Cloud Firestore." }, { title: "Защищённый доступ к аккаунту", body: "Доступ после входа управляется с помощью Firebase Authentication и ограниченных правил безопасности Cloud Firestore." }, { title: "Вы управляете своими данными", body: "Экспортируйте поддерживаемые данные бюджета, отзывайте совместный доступ или удаляйте аккаунт прямо в приложении." }] },
    faqIntro: { eyebrow: "Вопросы и ответы", title: "Ответы на частые вопросы.", body: "Остались вопросы? Мы с радостью поможем.", buddyAlt: "Персонаж KindBudget указывает на вопросы" },
    cta: { eyebrow: "Более бережная финансовая привычка", title: "Управляйте деньгами легче.", body: "Сделайте повседневное управление деньгами спокойнее с KindBudget.", finePrint: "Присоединяйтесь к списку ожидания. Мы напишем вам только о выходе KindBudget." },
  },
  he: {
    features: features([
      ["מעקב פשוט אחר הוצאות", "מוסיפים הכנסות והוצאות בתוך שניות, עם קטגוריות שעוזרות למצוא הכול בקלות."], ["סריקת קבלות", "סורקים קבלה, והזיהוי במכשיר מחלץ את שם העסק, התאריך והסכום הכולל."], ["תקציבים משותפים", "מזמינים בן או בת זוג או בן משפחה, ונשארים מתואמים בלי לרדוף אחרי עדכונים."], ["ניתוח נתונים ברור", "רואים לאן הכסף שלך הולך בעזרת סיכומים ברורים, קטגוריות ומגמות הוצאה."], ["ווידג'טים", "רואים את התקציב במבט אחד ממסך הבית."], ["בקרות אבטחה ופרטיות", "כניסה מוגנת, כללי גישה מוגבלים לנתוני הענן ואפשרויות לייצא או למחוק את הנתונים שלך."],
    ]),
    gallery: gallery([
      ["לוח הבקרה הראשי", "רואים כמה נשאר בלי לחשב לבד."], ["פעולה מהירה", "דרך ממוקדת לרשום כסף שנכנס או יצא."], ["בחירת קטגוריה", "מסדרים כל הוצאה בבחירה מהירה וחזותית."], ["כלי קבלות", "סורקים במצלמה או מייבאים קבלה שכבר קיימת."], ["ניתוח נתונים", "תובנות שימושיות בלי רעש פיננסי."], ["פרטי היום", "פותחים כל יום ורואים בדיוק מה השתנה."], ["תקציב משותף", "תצוגה עדכנית אחת לכל מי שהוזמן."], ["יצירת תקציב", "מגדירים במקום אחד את המטבע, היעד והפרטים של תקציב חדש."], ["הפרופיל שלך", "פרטי החשבון, השפה, האזור והגדרות הפרטיות נשארים נגישים."],
    ]),
    faqs: [
      { q: "KindBudget תהיה חינמית?", a: "פרטי התמחור והמסלולים יפורסמו לפני ההשקה של KindBudget ב-App Store." },
      { q: "צריך חשבון?", a: "כן. נדרש חשבון כדי ש-KindBudget תוכל להגן על הנתונים שלך, לסנכרן את הנתונים הנתמכים במסלול שלך ולאפשר תקציבים משותפים. אפשר להיכנס באמצעות Sign in with Apple, Sign in with Google או אימייל." },
      { q: "אפשר לנהל תקציב עם מישהו נוסף?", a: "כן. בעלים של תקציב משותף יכולים להזמין בן או בת זוג או בן משפחה. חברים בתקציב משותף רואים רק את התקציבים שאליהם הוזמנו." },
      { q: "אילו מטבעות נתמכים?", a: "KindBudget תומכת ב-USD, CAD, EUR ו-GBP. לכל תקציב נשמר מטבע משלו." },
      { q: "KindBudget יכולה לסרוק קבלות?", a: "כן. KindBudget משתמשת בזיהוי במכשיר כדי לחלץ פרטים מהקבלה. תמיד כדאי לבדוק את הסכום שזוהה לפני השמירה." },
      { q: "באילו מכשירים האפליקציה פועלת?", a: "KindBudget מיועדת ל-iPhone ודורשת iOS 18.2 ואילך. הווידג'ט שלה מציג מידע נבחר מהתקציב במסך הבית." },
      { q: "איך מוחקים את החשבון והנתונים?", a: "באפליקציה, פותחים את „פרופיל” ובוחרים „מחיקת החשבון שלי”. האישור הדו-שלבי מוחק את החשבון ומתחיל את מחיקת הנתונים המשויכים, בכפוף לפרטי התקציבים המשותפים ושמירת הנתונים שבעמוד מחיקת החשבון." },
      { q: "איך יוצרים קשר עם התמיכה?", a: "אפשר לשלוח אימייל ל-support@kindbudget.app. כדאי לציין את דגם ה-iPhone, גרסת iOS וגרסת האפליקציה כדי שהצוות יוכל לעזור מהר יותר." },
    ],
    hero: { eyebrow: "דרך רגועה יותר לנהל תקציב", availability: "נבנתה ל-iPhone", title: "ניהול תקציב,", emphasis: "בדרך נעימה.", lead: "עוקבים אחר הוצאות, סורקים קבלות ומנהלים תקציבים משותפים — הכול באפליקציה פשוטה אחת, שנועדה להפוך את ההתנהלות עם כסף לקלה יותר.", seeApp: "לראות את האפליקציה", trustAria: "יתרונות המוצר", trust: ["זיהוי טקסט בקבלות במכשיר", "אין צורך בחיבור לחשבון בנק"], metricsAria: "היתרונות של KindBudget", metrics: [["30 שניות", "בדיקה יומית קצרה"], ["סריקת קבלה", "להתחלת טיוטת פעולה"], ["יחד", "תקציבים משפחתיים משותפים"]], previewAria: "תצוגה מקדימה של אפליקציית KindBudget", stage: "האפליקציה הרגועה יותר לניהול כסף", streakTitle: "רצף של 12 ימים", streakBody: "הרגל שאפשר להתמיד בו", receiptTitle: "הקבלה בתוך המסגרת", receiptBody: "מצלמים כדי לבדוק", welcomeAlt: "עמוד הפתיחה של KindBudget ב-iPhone", cameraAlt: "מצלמת הקבלות של KindBudget ב-iPhone, המציגה קבלה מאוירת לדוגמה של Costco", buddyAlt: "הדמות של KindBudget מחייכת" },
    proof: { aria: "הגישה של KindBudget", items: ["נועדה לחיים האמיתיים", "ברור, בלי להסתבך", "תומכת, בלי לשפוט"] },
    featureHeading: { eyebrow: "הכול במקום אחד", title: "כלים קטנים. שגרה פיננסית קלה יותר.", body: "KindBudget שומרת את החלקים השימושיים של ניהול התקציב ומשאירה מאחור את הלחץ של גיליונות הנתונים." },
    steps: { eyebrow: "איך זה עובד", title: "מתחילים בפשטות. ממשיכים יחד.", body: "שלושה צעדים קטנים מספיקים כדי להפוך את ההוצאות היומיות לתוכנית שבאמת אפשר להשתמש בה.", items: [{ title: "יוצרים תקציב", body: "בוחרים שם, מטבע ויעד שמתאימים לחיים שלך.", alt: "מסך יצירת תקציב ב-KindBudget" }, { title: "מוסיפים תוך כדי", body: "מזינים הוצאה ידנית או סורקים קבלה מודפסת.", alt: "המצלמה של KindBudget ממסגרת קבלה מאוירת של Costco" }, { title: "מזהים את הדפוס", body: "עוברים על סיכומים ברורים ומתכננים יחד את הצעד הבא.", alt: "מסך ניתוח הנתונים ב-KindBudget" }] },
    tour: { eyebrow: "החוויה של KindBudget", title: "נועדה להרגיש טוב, בכל יום.", body: "תצוגות המוצר של KindBudget כוללות נתוני הדגמה שהוזנו מראש, כדי שהחוויה תדבר בעד עצמה בלי לחשוף מידע פיננסי של איש.", listAria: "המסכים המרכזיים של KindBudget" },
    signature: { welcomeIndex: "01 · פתיחה", welcomeTitle: "הרגל פיננסי שנועד להיות קל לחזור אליו.", welcomeBody: "בדיקה יומית נעימה, רצף גלוי וצעד הבא אחד וברור — בלי בושה, התראות מלחיצות או רעש פיננסי.", welcomeTagsAria: "יתרונות עמוד הפתיחה", welcomeTags: ["בדיקה של 30 שניות", "רצפים מעודדים", "הדמות שלך"], welcomeAlt: "עמוד הפתיחה של KindBudget עם בדיקה יומית והדמות המלווה", cameraIndex: "02 · מצלמת קבלות", cameraTitle: "קבלה מודפסת נכנסת. פעולה ברורה יוצאת.", cameraBody: "מכוונים, מצלמים ובודקים. KindBudget קוראת את פרטי הקבלה במכשיר ומשאירה את השליטה בידיים שלך לפני שמשהו נשמר.", cameraTagsAria: "יתרונות מצלמת הקבלות", cameraTags: ["זיהוי OCR במכשיר", "בודקים לפני השמירה", "במכשיר — בגרסת המדיניות"], cameraAlt: "המצלמה של KindBudget הופכת קבלה מאוירת של Costco לנתונים דיגיטליים" },
    journey: { eyebrow: "זיהוי חכם של קבלות", title: "רואים בדיוק מה KindBudget מזהה.", body: "הסריקה הופכת לטיוטה, לא להחלטה. בודקים כל שדה, מתקנים מה שצריך ורק אז מוסיפים את הפעולה.", flowAria: "תהליך סריקת קבלה", capture: "צילום", captureAlt: "קבלה מאוירת של Costco בתוך המסגרת של מצלמת KindBudget", ocr: "זיהוי OCR במכשיר", sample: "תוצאות לדוגמה", confidence: "רמת ודאות גבוהה", merchant: "בית עסק", date: "תאריך", dateValue: "10 ביולי 2026", items: "פריטים", itemCount: "4 שורות פריטים", subtotal: "סכום ביניים", tax: "מס", total: "סך הכול", ready: "מוכן לבדיקה", review: "בדיקת התוצאה", draft: "טיוטת פעולה", typeCategory: "הוצאה · מצרכים", nothingSaved: "דבר לא נשמר עד לאישור שלך." },
    receiptReview: { aria: "מסך בדיקת הקבלה של KindBudget, המציג את Costco Wholesale, ארבעה פריטים שזוהו, מס וסכום כולל של 57 דולר ושני סנט", title: "בדיקת הקבלה", storeName: "שם העסק", date: "10 ביולי 2026", foundItems: "נמצאו 4 פריטים", beforeTax: "לפני מס", tax: "מס", total: "סכום הקבלה", confidence: "רמת ודאות גבוהה", reviewBeforeSaving: "כדאי לבדוק לפני השמירה", expense: "הוצאה", income: "הכנסה", suggestedCategory: "קטגוריה מוצעת", groceries: "מצרכים", addFromScan: "הוספה מהסריקה" },
    more: { eyebrow: "עוד מהאפליקציה", title: "כלים ליומיום, פשוטים ויפים.", body: "עוד תשעה מסכים אמיתיים — מרישום מהיר ועד תקציבים משותפים וניתוח נתונים.", listAria: "מסכי המוצר של KindBudget", altSuffix: "ב-KindBudget" },
    together: { familyPlan: "תקציב משפחתי", leftPrefix: "נותרו", trackSuffix: "בהתאם לתוכנית", eyebrow: "תקציבים משותפים", title: "מנהלים תקציב טוב יותר, יחד.", body: "מזמינים בן או בת זוג או בן משפחה, מוסיפים הוצאות מכל אחד מהמכשירים ועובדים מול אותה תמונה עדכנית.", bullets: ["אנשים שהזמנת יכולים לגשת רק לאותו תקציב משותף", "בעלי התקציב יכולים לנהל חברים ולהסיר גישה", "תפקידים ברורים עוזרים לכל אחד להבין מה באפשרותו לשנות"], questions: "יש שאלות על שיתוף?", arrow: "←" },
    privacy: { eyebrow: "פרטיות, בשפה פשוטה", title: "הסיפור הפיננסי שלך שייך לך.", body: "KindBudget משתמשת בנתונים שהזנת כדי לספק תכונות של ניהול תקציב, סנכרון ושיתוף. היא אינה מוכרת, משכירה או סוחרת בנתונים האישיים שלך.", link: "לקריאת מדיניות הפרטיות", arrow: "←", points: [{ title: "במכשיר — בגרסת המדיניות", body: "בגרסה המתוארת במדיניות הפרטיות שלנו, התמונות מעובדות במכשיר ואינן מועלות ל-Cloud Storage for Firebase או ל-Cloud Firestore." }, { title: "גישה מוגנת לחשבון", body: "הגישה לאחר כניסה לחשבון מנוהלת באמצעות Firebase Authentication וכללי אבטחה מוגבלים ב-Cloud Firestore." }, { title: "השליטה נשארת בידיים שלך", body: "אפשר לייצא נתוני תקציב נתמכים, להסיר גישה משותפת או למחוק את החשבון מתוך האפליקציה." }] },
    faqIntro: { eyebrow: "שאלות נפוצות", title: "כמה תשובות שימושיות.", body: "עדיין לא בטוחים לגבי משהו? נשמח לעזור.", buddyAlt: "הדמות של KindBudget מצביעה לעבר השאלות" },
    cta: { eyebrow: "הרגל פיננסי נעים יותר", title: "הופכים את ההתנהלות עם כסף לקלה יותר.", body: "בונים שגרה פיננסית רגועה יותר עם KindBudget.", finePrint: "מצטרפים לרשימת ההמתנה. נשלח אימייל רק בנוגע לזמינות של KindBudget." },
  },
};
