import type { Metadata } from "next";
import { LegalPage } from "../../legal-page";

const title = "מחיקת חשבון";
const description = "איך למחוק לצמיתות את חשבון KindBudget ולהתחיל במחיקת הנתונים המשויכים אליו, בכפוף לפרטי התקציבים המשותפים ושמירת הנתונים.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/he/delete-account/",
    languages: {
      en: "/delete-account/",
      ru: "/ru/delete-account/",
      he: "/he/delete-account/",
      "x-default": "/delete-account/",
    },
  },
  openGraph: { title, description, locale: "he_IL", url: "/he/delete-account/" },
  twitter: { title, description },
};

export default function HebrewDeleteAccountPage() {
  return (
    <LegalPage
      locale="he"
      currentPath="/delete-account"
      eyebrow="מחיקת חשבון"
      title="אפשר למחוק את החשבון ואת הנתונים המשויכים אליו."
      intro={<><bdi dir="ltr">KindBudget</bdi> כוללת תהליך בתוך האפליקציה למחיקה לצמיתות של החשבון ולהתחלת המחיקה של הנתונים המשויכים, בכפוף לפרטי התקציבים המשותפים ושמירת הנתונים שבהמשך.</>}
    >
      <div className="legal-callout">
        <strong>לפני שמתחילים</strong>
        <p>מחיקת החשבון היא לצמיתות. יש לייצא כל נתון תקציבי נתמך שברצונך לשמור ולוודא תחילה שלחברים האחרים בתקציבים המשותפים יש את כל מה שנחוץ להם.</p>
      </div>

      <h2>מחיקת החשבון באפליקציה</h2>
      <ol>
        <li>פותחים את <bdi dir="ltr">KindBudget</bdi> ונכנסים לחשבון שרוצים למחוק.</li>
        <li>פותחים את <strong>„פרופיל”</strong>.</li>
        <li>מקישים על <strong>„מחיקת החשבון שלי”</strong>.</li>
        <li>עוברים על השלכות המחיקה ובוחרים <strong>„המשך”</strong>.</li>
        <li>מאשרים את המחיקה לצמיתות. ייתכן שיידרש אימות נוסף של הזהות.</li>
        <li>משאירים את <bdi dir="ltr">KindBudget</bdi> פתוחה עד לסיום המחיקה.</li>
      </ol>

      <h2>מה נמחק</h2>
      <ul>
        <li>חשבון <bdi dir="ltr">Firebase Authentication</bdi> שלך.</li>
        <li>תקציבים ונתונים שבבעלות החשבון שלך, בכפוף לכללי התקציב המשותף שיוצגו לפני האישור.</li>
        <li>הנתונים המקומיים של <bdi dir="ltr">KindBudget</bdi> ופרטי ההפעלה במכשיר שבו הושלמה המחיקה.</li>
        <li>תמונות קבלות שנשמרו מקומית במכשיר שבו הושלמה המחיקה.</li>
      </ul>

      <h2>תקציבים משותפים</h2>
      <p>מחיקת חשבון עשויה להשפיע על תקציבים שבבעלותך או שמשותפים עם אנשים אחרים. יש לקרוא בעיון את האישור באפליקציה. אם צריך, כדאי לתאם עם החברים בתקציבים המשותפים לפני המחיקה.</p>

      <h2>אם אין לך גישה לאפליקציה</h2>
      <p>יש לשלוח אימייל ל-<a href="mailto:privacy@kindbudget.app?subject=KindBudget%20account%20deletion"><bdi dir="ltr">privacy@kindbudget.app</bdi></a> מהכתובת המשויכת לחשבון שלך. ייתכן שנצטרך לאמת בעלות לפני הטיפול בבקשת המחיקה. אין לשלוח לנו את הסיסמה שלך.</p>

      <h2>צריכים עזרה?</h2>
      <p>אפשר ליצור קשר ב-<a href="mailto:support@kindbudget.app"><bdi dir="ltr">support@kindbudget.app</bdi></a> או לבקר ב<a href="/he/support">עמוד התמיכה</a>.</p>
    </LegalPage>
  );
}
