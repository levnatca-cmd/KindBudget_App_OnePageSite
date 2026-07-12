import type { Metadata } from "next";
import { LegalPage } from "../../legal-page";

const title = "תמיכה";
const description = "קבלת עזרה עם KindBudget, סריקת קבלות, סנכרון, תקציבים משותפים והחשבון שלך.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/he/support/",
    languages: {
      en: "/support/",
      ru: "/ru/support/",
      he: "/he/support/",
      "x-default": "/support/",
    },
  },
  openGraph: { title, description, locale: "he_IL", url: "/he/support/" },
  twitter: { title, description },
};

export default function HebrewSupportPage() {
  return (
    <LegalPage
      locale="he"
      currentPath="/support"
      eyebrow={<>התמיכה של <bdi dir="ltr">KindBudget</bdi></>}
      title="קצת עזרה, בלי להעביר אותך מאחד לשני."
      intro="כדאי להתחיל בתשובות הקצרות שבהמשך. אם הבעיה עדיין לא נפתרה, אפשר לשלוח לנו אימייל ונעזור לעשות סדר."
    >
      <div className="support-cards">
        <div className="support-card">
          <span aria-hidden="true">✉</span>
          <strong>תמיכה באימייל</strong>
          <p><a href="mailto:support@kindbudget.app"><bdi dir="ltr">support@kindbudget.app</bdi></a><br />אנו שואפים להשיב בתוך 48 שעות.</p>
        </div>
        <div className="support-card">
          <span aria-hidden="true">◉</span>
          <strong>דרישות מערכת</strong>
          <p>נדרש <bdi dir="ltr">iPhone</bdi> עם <bdi dir="ltr">iOS 18.2</bdi> ואילך. יצירת חשבון וסנכרון דורשים חיבור לאינטרנט.</p>
        </div>
      </div>

      <h2>מתחילים</h2>
      <h3>איך יוצרים את התקציב הראשון?</h3>
      <p>אחרי הכניסה לחשבון, מקישים על <strong>„יצירת תקציב”</strong>, מוסיפים שם, בוחרים <bdi dir="ltr">USD</bdi>,‏ <bdi dir="ltr">CAD</bdi>,‏ <bdi dir="ltr">EUR</bdi> או <bdi dir="ltr">GBP</bdi> ומשלימים את שאר פרטי התקציב.</p>

      <h3>האם יהיה אפשר ליצור יותר מתקציב אחד?</h3>
      <p>פרטי המסלולים ומגבלות התקציבים יפורסמו לפני ההשקה ב-<bdi dir="ltr">App Store</bdi>.</p>

      <h2>פעולות וקבלות</h2>
      <h3>איך מוסיפים פעולה?</h3>
      <p>פותחים תקציב, מקישים על כפתור <strong><bdi dir="ltr">+</bdi></strong>, מזינים סכום וקטגוריה ואפשר גם להוסיף הערה. אפשר להתחיל גם מסריקת קבלה.</p>

      <h3>הסורק לא מצליח לקרוא את הקבלה.</h3>
      <p>כדאי להשתמש בתאורה אחידה, להחזיק את הטלפון ביציבות ולהכניס את כל הקבלה המודפסת למסגרת. קבלות דהויות, בכתב יד או מקופלות עלולות שלא להיסרק היטב. יש לבדוק תמיד את הסכום שזוהה.</p>

      <h2>תקציבים משותפים</h2>
      <h3>איך מזמינים מישהו?</h3>
      <p>פותחים תקציב משותף שזמין במסלול שלך, עוברים להגדרות שלו ובוחרים בפעולת ההזמנה. האדם שהזמנת זקוק לחשבון <bdi dir="ltr">KindBudget</bdi> כדי לקבל את ההזמנה.</p>

      <h3>חבר בתקציב משותף יכול לראות את כל הנתונים שלי?</h3>
      <p>לא. חברים בתקציב משותף יכולים לגשת רק לתקציבים המשותפים שאליהם הצטרפו. התקציבים האישיים האחרים שלך נשארים נפרדים.</p>

      <h2>חשבון וסנכרון</h2>
      <h3>הנתונים שלי לא מסתנכרנים.</h3>
      <p>יש לוודא ששני המכשירים משתמשים באותו חשבון ושיש להם חיבור לאינטרנט. משאירים את האפליקציה פתוחה לזמן קצר עד שהשינויים הממתינים יושלמו.</p>

      <h3>נרשמתי באמצעות אימייל ושכחתי את הסיסמה.</h3>
      <p>בוחרים ב<strong>„איפוס סיסמה”</strong> במסך הכניסה ופועלים לפי הקישור שנשלח לכתובת האימייל שלך.</p>

      <h3>איך מוחקים את החשבון?</h3>
      <p>פותחים את <strong>„פרופיל” ← „מחיקת החשבון שלי”</strong> ומשלימים את שני שלבי האישור. לפרטים נוספים, אפשר לעיין ב<a href="/he/delete-account">מדריך למחיקת חשבון</a>.</p>

      <h2>כשיוצרים איתנו קשר</h2>
      <p>כדי שנוכל להשיב במהירות, כדאי לציין את דגם ה-<bdi dir="ltr">iPhone</bdi>, גרסת <bdi dir="ltr">iOS</bdi>, גרסת <bdi dir="ltr">KindBudget</bdi> המופיעה בפרופיל ותיאור ברור של מה שקרה. אין לשלוח באימייל סיסמאות, תמונות מלאות של קבלות או פרטים פיננסיים רגישים.</p>
    </LegalPage>
  );
}
