import type { Metadata } from "next";
import { LegalPage } from "../../legal-page";

const title = "Удаление аккаунта";
const description = "Как безвозвратно удалить аккаунт KindBudget и начать удаление связанных данных с учётом правил совместных бюджетов и хранения.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/ru/delete-account/",
    languages: {
      en: "/delete-account/",
      ru: "/ru/delete-account/",
      he: "/he/delete-account/",
      "x-default": "/delete-account/",
    },
  },
  openGraph: { title, description, locale: "ru_RU", url: "/ru/delete-account/" },
  twitter: { title, description },
};

export default function RussianDeleteAccountPage() {
  return (
    <LegalPage
      locale="ru"
      currentPath="/delete-account"
      eyebrow="Удаление аккаунта"
      title="Вы можете удалить аккаунт и связанные с ним данные."
      intro="В KindBudget можно безвозвратно удалить аккаунт прямо из приложения и начать удаление связанных данных с учётом правил совместных бюджетов и хранения, описанных ниже."
    >
      <div className="legal-callout">
        <strong>Перед началом</strong>
        <p>Удаление аккаунта необратимо. Сначала экспортируйте поддерживаемые данные бюджета, которые хотите сохранить, и убедитесь, что у других участников совместных бюджетов есть всё необходимое.</p>
      </div>

      <h2>Удаление аккаунта в Приложении</h2>
      <ol>
        <li>Откройте KindBudget и войдите в аккаунт, который хотите удалить.</li>
        <li>Откройте раздел <strong>«Профиль»</strong>.</li>
        <li>Нажмите <strong>«Удалить мой аккаунт»</strong>.</li>
        <li>Ознакомьтесь с последствиями и выберите <strong>«Продолжить»</strong>.</li>
        <li>Подтвердите безвозвратное удаление. Возможно, вам потребуется повторно подтвердить свою личность.</li>
        <li>Не закрывайте KindBudget до завершения удаления.</li>
      </ol>

      <h2>Что будет удалено</h2>
      <ul>
        <li>Ваш аккаунт Firebase Authentication.</li>
        <li>Бюджеты и данные, принадлежащие вашему аккаунту, с учётом правил совместных бюджетов, показанных перед подтверждением.</li>
        <li>Локальные данные KindBudget и сведения о сеансе на устройстве, на котором вы выполняете удаление.</li>
        <li>Локально сохранённые изображения чеков на устройстве, на котором вы выполняете удаление.</li>
      </ul>

      <h2>Совместные бюджеты</h2>
      <p>Удаление аккаунта может повлиять на бюджеты, которыми вы владеете или делитесь с другими людьми. Внимательно прочитайте подтверждение в приложении. При необходимости согласуйте удаление с участниками совместных бюджетов.</p>

      <h2>Если у вас нет доступа к Приложению</h2>
      <p>Напишите на <a href="mailto:privacy@kindbudget.app?subject=KindBudget%20account%20deletion"><bdi dir="ltr">privacy@kindbudget.app</bdi></a> с адреса, связанного с вашим аккаунтом. Перед обработкой запроса на удаление нам может потребоваться подтвердить, что аккаунт принадлежит вам. Никогда не отправляйте пароль.</p>

      <h2>Нужна помощь?</h2>
      <p>Напишите на <a href="mailto:support@kindbudget.app"><bdi dir="ltr">support@kindbudget.app</bdi></a> или перейдите на <a href="/ru/support">страницу поддержки</a>.</p>
    </LegalPage>
  );
}
