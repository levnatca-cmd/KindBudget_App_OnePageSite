import { AppStoreBadge, SiteFooter, SiteHeader } from "./site-shell";

const features = [
  {
    icon: "↙",
    title: "Simple expense tracking",
    text: "Add income and expenses in seconds, with categories that keep everything easy to find.",
    tone: "mint",
  },
  {
    icon: "▤",
    title: "Receipt scanning",
    text: "Scan a receipt and let on-device recognition pull out the store, date and total for you.",
    tone: "lilac",
  },
  {
    icon: "∞",
    title: "Shared budgets",
    text: "Invite a partner or family member and stay aligned without chasing updates.",
    tone: "peach",
  },
  {
    icon: "⌁",
    title: "Clear analytics",
    text: "See where money goes through calm summaries, categories and spending trends.",
    tone: "sky",
  },
  {
    icon: "✦",
    title: "Widgets & Siri",
    text: "Check a budget at a glance and add transactions with less tapping.",
    tone: "gold",
  },
  {
    icon: "✓",
    title: "Secure and private",
    text: "Protected sign-in, scoped cloud access and controls to export or delete your data.",
    tone: "rose",
  },
];

const gallery = [
  { src: "/screens/home-dashboard.webp", label: "Home dashboard", note: "See what is left without doing the math." },
  { src: "/screens/add-transaction.webp", label: "Quick note", note: "A focused way to log money in or out." },
  { src: "/screens/category-picker.webp", label: "Category picker", note: "Keep every expense organised with a quick, visual choice." },
  { src: "/screens/receipt-options.webp", label: "Receipt tools", note: "Scan with the camera or import a receipt you already have." },
  { src: "/screens/analytics.webp", label: "Analytics", note: "Useful patterns without financial noise." },
  { src: "/screens/day-transactions.webp", label: "Day details", note: "Open any day and see exactly what changed." },
  { src: "/screens/shared-budget.webp", label: "Shared budget", note: "One current view for everyone invited." },
  { src: "/screens/create-budget-form.webp", label: "Create a budget", note: "Set the currency, goal and shape of a new budget in one place." },
  { src: "/screens/profile.webp", label: "Your profile", note: "Account, locale and privacy controls stay easy to find." },
];

const faqs = [
  {
    q: "Is KindBudget free?",
    a: "KindBudget includes a free tier for everyday budgeting. Some higher limits and advanced features are available on paid plans.",
  },
  {
    q: "Do I need an account?",
    a: "Yes. An account is required so KindBudget can protect your data, sync supported plan data and enable shared budgets. You can sign in with Apple, Google or email.",
  },
  {
    q: "Can I manage a budget with someone else?",
    a: "Yes. Shared-budget owners can invite a partner or family member. Shared members only see the budgets they have been invited to.",
  },
  {
    q: "Which currencies are supported?",
    a: "The current release supports USD, CAD, EUR and GBP. Each budget keeps its own currency.",
  },
  {
    q: "Can KindBudget scan receipts?",
    a: "Yes. The current scanner uses on-device recognition to extract receipt details. Always review the detected amount before saving.",
  },
  {
    q: "Which devices does it work on?",
    a: "KindBudget is designed for iPhone and requires iOS 18.2 or later. Its widget brings selected budget information to the Home Screen.",
  },
  {
    q: "How do I delete my account and data?",
    a: "In the app, open Profile and choose Delete My Account. The two-step confirmation permanently removes your account and associated data. Full instructions are available on the Delete Account page.",
  },
  {
    q: "How can I contact support?",
    a: "Email support@kindbudget.app. Include your iPhone model, iOS version and app version so the team can help faster.",
  },
];

function Phone({ src, alt, className = "", eager = false }: { src: string; alt: string; className?: string; eager?: boolean }) {
  return (
    <div className={`phone ${className}`}>
      <div className="phone__island" aria-hidden="true" />
      <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} />
    </div>
  );
}

const costcoDetectedItems = [
  ["KS Paper Towels", "$19.99"],
  ["Organic Eggs", "$12.49"],
  ["Avocados", "$9.99"],
  ["Rotisserie Chicken", "$7.99"],
];

function ReceiptReviewPhone() {
  return (
    <div
      className="phone phone--review"
      role="img"
      aria-label="KindBudget review screen showing Costco Wholesale, four detected items, tax and a total of 57 dollars and 2 cents"
    >
      <div className="phone__island" aria-hidden="true" />
      <div className="receipt-review-screen">
        <div className="review-status"><span>1:42</span><span>● ◔ ▰</span></div>
        <div className="review-nav"><span>‹</span><strong>Review receipt</strong><span>•••</span></div>
        <div className="review-content">
          <span className="review-label">Store name</span>
          <div className="review-store">Costco Wholesale <span>✎</span></div>
          <div className="review-date">July 10, 2026 <span>✎</span></div>

          <div className="review-items">
            <span className="review-label">Found 4 items</span>
            {costcoDetectedItems.map(([name, price]) => (
              <div key={name}><span>{name}</span><strong>{price}</strong></div>
            ))}
          </div>

          <div className="review-totals">
            <div><span>Before tax</span><strong>$50.46</strong></div>
            <div><span>Tax</span><strong>$6.56</strong></div>
            <div className="review-total"><span>You spent</span><strong>$57.02</strong><i>✎</i></div>
          </div>

          <div className="review-confidence"><i>✓</i><span><strong>High confidence</strong><small>Review before saving</small></span></div>
          <div className="review-type"><strong>Expense</strong><span>Income</span></div>
          <div className="review-category"><span>Suggested category</span><strong>🛒 Groceries</strong></div>
          <div className="review-save">＋ Add From Scan</div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero" id="top">
          <div className="hero-orb hero-orb--one" aria-hidden="true" />
          <div className="hero-orb hero-orb--two" aria-hidden="true" />
          <div className="shell hero-grid">
            <div className="hero-copy">
              <div className="hero-status-row">
                <span className="eyebrow"><span>●</span> A calmer way to budget</span>
                <span className="hero-availability"><i /> Built for iPhone</span>
              </div>
              <h1>Budgeting that feels <em>kind.</em></h1>
              <p className="hero-lead">
                Track spending, scan receipts and manage shared budgets—all in one simple app built to make money feel lighter.
              </p>
              <div className="hero-actions">
                <AppStoreBadge />
                <a className="text-link" href="#product-tour">See the app <span aria-hidden="true">↓</span></a>
              </div>
              <div className="trust-row" aria-label="Product highlights">
                <span><b>✓</b> On-device receipt OCR</span>
                <span><b>✓</b> No bank connection needed</span>
              </div>
              <div className="hero-metrics" aria-label="KindBudget highlights">
                <div><strong>30 sec</strong><span>daily check-in</span></div>
                <div><strong>1 scan</strong><span>to digitise a receipt</span></div>
                <div><strong>Together</strong><span>shared family budgets</span></div>
              </div>
            </div>
            <div className="hero-visual" aria-label="KindBudget app preview">
              <span className="hero-stage-label">The calmer money app</span>
              <div className="hero-note hero-note--left">
                <span className="note-icon">✓</span>
                <div><strong>12-day streak</strong><small>A habit that feels possible</small></div>
              </div>
              <Phone src="/screens/daily-check-in.webp" alt="KindBudget welcome page on iPhone" className="phone--hero phone--hero-primary" eager />
              <Phone src="/screens/receipt-camera-costco.webp" alt="KindBudget receipt camera scanning a sample Costco receipt on iPhone" className="phone--hero-secondary" />
              <div className="hero-note hero-note--right">
                <span className="note-icon note-icon--peach">▤</span>
                <div><strong>Receipt ready</strong><small>Review before saving</small></div>
              </div>
              <img className="hero-buddy" src="/brand/buddy-peek.png" alt="KindBudget buddy smiling" />
            </div>
          </div>
        </section>

        <section className="soft-proof" aria-label="KindBudget approach">
          <div className="shell soft-proof__inner">
            <span>Designed for real life</span>
            <i aria-hidden="true" />
            <span>Clear, not complicated</span>
            <i aria-hidden="true" />
            <span>Supportive, never judgmental</span>
          </div>
        </section>

        <section className="section features" id="features">
          <div className="shell">
            <div className="section-heading section-heading--split">
              <div>
                <span className="eyebrow">Everything in one place</span>
                <h2>Small tools. A lighter money routine.</h2>
              </div>
              <p>KindBudget keeps the useful parts of budgeting and leaves the spreadsheet stress behind.</p>
            </div>
            <div className="feature-grid">
              {features.map((feature) => (
                <article className="feature-card" key={feature.title}>
                  <span className={`feature-icon feature-icon--${feature.tone}`} aria-hidden="true">{feature.icon}</span>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section steps" id="how-it-works">
          <div className="shell">
            <div className="section-heading section-heading--center">
              <span className="eyebrow">How it works</span>
              <h2>Start simple. Keep going together.</h2>
              <p>Three small steps are enough to turn everyday spending into a plan you can actually use.</p>
            </div>
            <div className="steps-grid">
              <article className="step-card">
                <span className="step-number">1</span>
                <div><strong>Create a budget</strong><p>Choose a name, currency and a goal that fits your life.</p></div>
                <Phone src="/screens/create-budget.webp" alt="Create budget screen in KindBudget" />
              </article>
              <article className="step-card step-card--raised">
                <span className="step-number">2</span>
                <div><strong>Add as you go</strong><p>Enter an expense by hand or scan the paper receipt.</p></div>
                <Phone src="/screens/receipt-camera-costco.webp" alt="KindBudget camera scanning a sample Costco receipt" />
              </article>
              <article className="step-card">
                <span className="step-number">3</span>
                <div><strong>Notice the pattern</strong><p>Review calm summaries and plan the next step together.</p></div>
                <Phone src="/screens/analytics.webp" alt="Analytics screen in KindBudget" />
              </article>
            </div>
          </div>
        </section>

        <section className="section gallery-section" id="product-tour">
          <div className="shell">
            <div className="section-heading section-heading--split">
              <div>
                <span className="eyebrow">The KindBudget experience</span>
                <h2>Designed to feel good every day.</h2>
              </div>
              <p>Real KindBudget screens with seeded demo data—so the product can speak for itself without exposing anyone’s finances.</p>
            </div>

            <div className="signature-showcase" role="list" aria-label="KindBudget signature screens">
              <article className="signature-card signature-card--welcome" role="listitem">
                <div className="signature-copy">
                  <span className="signature-index">01 · Welcome</span>
                  <h3>A money habit you will want to return to.</h3>
                  <p>A warm daily check-in, a visible streak and one clear next step—without shame, alarms or financial noise.</p>
                  <div className="signature-tags" aria-label="Welcome page highlights">
                    <span>30-second check-in</span><span>Gentle streaks</span><span>Your buddy</span>
                  </div>
                </div>
                <Phone src="/screens/daily-check-in.webp" alt="KindBudget welcome page with daily check-in and buddy" className="phone--signature" />
                <img className="signature-buddy" src="/brand/buddy-peek.png" alt="" />
              </article>

              <article className="signature-card signature-card--camera" role="listitem">
                <div className="signature-copy">
                  <span className="signature-index">02 · Receipt camera</span>
                  <h3>Paper receipt in. Clear transaction out.</h3>
                  <p>Aim, capture and review. KindBudget reads receipt details on-device and keeps you in control before anything is saved.</p>
                  <div className="signature-tags" aria-label="Receipt camera highlights">
                    <span>On-device OCR</span><span>Review first</span><span>Images stay local</span>
                  </div>
                </div>
                <Phone src="/screens/receipt-camera-costco.webp" alt="KindBudget camera digitising a sample Costco receipt" className="phone--signature" />
                <div className="scan-status"><i /> Costco receipt in frame</div>
              </article>
            </div>

            <article className="receipt-journey" aria-labelledby="receipt-journey-title">
              <div className="receipt-journey__heading">
                <span className="signature-index">Receipt intelligence</span>
                <h3 id="receipt-journey-title">See exactly what KindBudget detects.</h3>
                <p>The scan becomes a draft—not a decision. Check every field, adjust anything, then add the transaction when it looks right.</p>
              </div>

              <div className="receipt-journey__flow" aria-label="Receipt scanning flow">
                <div className="journey-phone journey-phone--capture">
                  <span className="journey-step"><b>1</b> Capture</span>
                  <Phone src="/screens/receipt-camera-costco.webp" alt="Sample Costco receipt framed in the KindBudget camera" />
                </div>

                <div className="journey-detected">
                  <span className="journey-step"><b>2</b> On-device OCR</span>
                  <div className="detected-card">
                    <div className="detected-card__top"><span>Sample detection</span><strong>High</strong></div>
                    <dl>
                      <div><dt>Merchant</dt><dd>Costco Wholesale</dd></div>
                      <div><dt>Date</dt><dd>Jul 10, 2026</dd></div>
                      <div><dt>Items</dt><dd>4 line items</dd></div>
                      <div><dt>Subtotal</dt><dd>$50.46</dd></div>
                      <div><dt>Tax</dt><dd>$6.56</dd></div>
                      <div className="detected-total"><dt>Total</dt><dd>$57.02 CAD</dd></div>
                    </dl>
                    <div className="detected-pulse"><i /> Ready to review</div>
                  </div>
                </div>

                <div className="journey-phone journey-phone--review">
                  <span className="journey-step"><b>3</b> Review output</span>
                  <ReceiptReviewPhone />
                </div>
              </div>

              <div className="receipt-output-strip">
                <span><i>✓</i> Final draft</span>
                <strong>Costco Wholesale</strong>
                <span>Expense · Groceries</span>
                <b>$57.02 CAD</b>
                <small>Nothing is saved until you confirm.</small>
              </div>
            </article>

            <div className="gallery-subheading">
              <div><span>More of the product</span><h3>Everyday tools, beautifully simple.</h3></div>
              <p>Nine more real screens—from quick notes to shared budgets and analytics.</p>
            </div>
            <div className="gallery-track" role="list" aria-label="KindBudget product screens">
              {gallery.map((item, index) => (
                <article className={`gallery-card gallery-card--${(index % 3) + 1}`} key={item.label} role="listitem">
                  <div className="gallery-card__copy"><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.label}</h3><p>{item.note}</p></div>
                  <Phone src={item.src} alt={`${item.label} in KindBudget`} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section together">
          <div className="shell together-card">
            <div className="together-art" aria-hidden="true">
              <div className="avatar avatar--one">M</div>
              <div className="share-line" />
              <div className="avatar avatar--two">A</div>
              <div className="shared-total"><small>Family plan</small><strong>$3,240 left</strong><span><i /> 62% on track</span></div>
            </div>
            <div className="together-copy">
              <span className="eyebrow eyebrow--light">Shared budgets</span>
              <h2>Better budgets, together.</h2>
              <p>Invite a partner or family member, add expenses from either phone and work from the same current view.</p>
              <ul>
                <li><span>✓</span> Shared data stays inside the budget you invite them to</li>
                <li><span>✓</span> Owners can manage members and remove access</li>
                <li><span>✓</span> Clear roles help everyone know what they can change</li>
              </ul>
              <a href="#faq" className="light-link">Questions about sharing? <span>→</span></a>
            </div>
          </div>
        </section>

        <section className="section privacy-callout">
          <div className="shell privacy-grid">
            <div className="privacy-copy">
              <span className="eyebrow">Privacy, in plain language</span>
              <h2>Your money story is yours.</h2>
              <p>KindBudget uses the data you enter to provide budgeting, sync and sharing features. It does not sell, rent or trade your personal data.</p>
              <a className="text-link" href="/privacy">Read the Privacy Policy <span>→</span></a>
            </div>
            <div className="privacy-points">
              <div><span>01</span><strong>Receipt images stay local</strong><p>In the current release, images are processed on-device and are not uploaded to cloud storage.</p></div>
              <div><span>02</span><strong>Protected account access</strong><p>Firebase Authentication and scoped Firestore rules protect signed-in data access.</p></div>
              <div><span>03</span><strong>You stay in control</strong><p>Export supported budget data, remove shared access, or delete your account from the app.</p></div>
            </div>
          </div>
        </section>

        <section className="section faq" id="faq">
          <div className="shell faq-grid">
            <div className="faq-intro">
              <span className="eyebrow">FAQ</span>
              <h2>A few useful answers.</h2>
              <p>Still unsure about something? We are happy to help.</p>
              <a className="support-chip" href="mailto:support@kindbudget.app"><span>✉</span> support@kindbudget.app</a>
              <img src="/brand/buddy-pointing.png" alt="KindBudget buddy pointing toward the questions" />
            </div>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <details key={faq.q} open={index === 0}>
                  <summary>{faq.q}<span aria-hidden="true">+</span></summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="shell final-cta__inner">
            <div className="cta-orbit cta-orbit--one" aria-hidden="true" />
            <div className="cta-orbit cta-orbit--two" aria-hidden="true" />
            <span className="eyebrow eyebrow--light">A kinder money habit</span>
            <h2>Make money management feel lighter.</h2>
            <p>Start building better financial habits with KindBudget.</p>
            <AppStoreBadge />
            <small>Join the waitlist. We will only email you about KindBudget availability.</small>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
