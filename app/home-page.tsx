import { AppStoreBadge, SiteFooter, SiteHeader } from "./site-shell";
import type { Locale } from "./i18n";
import { homeCopy, type HomeCopy } from "./home-copy";

const hebrewLtrTokens = /(support@kindbudget\.app|Cloud Storage for Firebase|Firebase Authentication|Cloud Firestore|Sign in with Apple|Sign in with Google|Delete My Account|Costco Wholesale|KS Paper Towels|Organic Eggs|Rotisserie Chicken|Avocados|KindBudget|App Store|iOS 18\.2|iPhone|Apple|Google|OCR|USD|CAD|EUR|GBP|\$[\d,.]+(?: CAD)?|\d+(?:[.:]\d+)*(?:%)?)/g;

function Text({ locale, value }: { locale: Locale; value: string }) {
  if (locale !== "he") return value;

  return value.split(hebrewLtrTokens).map((part, index) => (
    index % 2 === 1 ? <bdi dir="ltr" key={`${part}-${index}`}>{part}</bdi> : part
  ));
}

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

function ReceiptReviewPhone({ locale, copy }: { locale: Locale; copy: HomeCopy["receiptReview"] }) {
  return (
    <div
      className="phone phone--review"
      role="img"
      aria-label={copy.aria}
    >
      <div className="phone__island" aria-hidden="true" />
      <div className="receipt-review-screen">
        <div className="review-status"><bdi dir="ltr">1:42</bdi><span aria-hidden="true" dir="ltr">● ◔ ▰</span></div>
        <div className="review-nav"><span aria-hidden="true">{locale === "he" ? "›" : "‹"}</span><strong><Text locale={locale} value={copy.title} /></strong><span aria-hidden="true">•••</span></div>
        <div className="review-content">
          <span className="review-label"><Text locale={locale} value={copy.storeName} /></span>
          <div className="review-store"><bdi dir="ltr">Costco Wholesale</bdi> <span aria-hidden="true">✎</span></div>
          <div className="review-date"><Text locale={locale} value={copy.date} /> <span aria-hidden="true">✎</span></div>

          <div className="review-items">
            <span className="review-label"><Text locale={locale} value={copy.foundItems} /></span>
            {costcoDetectedItems.map(([name, price]) => (
              <div key={name}><bdi dir="ltr">{name}</bdi><strong><bdi dir="ltr">{price}</bdi></strong></div>
            ))}
          </div>

          <div className="review-totals">
            <div><span><Text locale={locale} value={copy.beforeTax} /></span><strong><bdi dir="ltr">$50.46</bdi></strong></div>
            <div><span><Text locale={locale} value={copy.tax} /></span><strong><bdi dir="ltr">$6.56</bdi></strong></div>
            <div className="review-total"><span><Text locale={locale} value={copy.total} /></span><strong><bdi dir="ltr">$57.02</bdi></strong><i aria-hidden="true">✎</i></div>
          </div>

          <div className="review-confidence"><i aria-hidden="true">✓</i><span><strong><Text locale={locale} value={copy.confidence} /></strong><small><Text locale={locale} value={copy.reviewBeforeSaving} /></small></span></div>
          <div className="review-type"><strong><Text locale={locale} value={copy.expense} /></strong><span><Text locale={locale} value={copy.income} /></span></div>
          <div className="review-category"><span><Text locale={locale} value={copy.suggestedCategory} /></span><strong>🛒 <Text locale={locale} value={copy.groceries} /></strong></div>
          <div className="review-save">＋ <Text locale={locale} value={copy.addFromScan} /></div>
        </div>
      </div>
    </div>
  );
}

export function HomePage({ locale = "en" }: { locale?: Locale }) {
  const copy = homeCopy[locale];
  const text = (value: string) => <Text locale={locale} value={value} />;

  return (
    <>
      <SiteHeader locale={locale} currentPath="/" />
      <main>
        <section className="hero" id="top">
          <div className="hero-orb hero-orb--one" aria-hidden="true" />
          <div className="hero-orb hero-orb--two" aria-hidden="true" />
          <div className="shell hero-grid">
            <div className="hero-copy">
              <div className="hero-status-row">
                <span className="eyebrow"><span aria-hidden="true">●</span> {text(copy.hero.eyebrow)}</span>
                <span className="hero-availability"><i aria-hidden="true" /> {text(copy.hero.availability)}</span>
              </div>
              <h1>{text(copy.hero.title)} <em>{text(copy.hero.emphasis)}</em></h1>
              <p className="hero-lead">
                {text(copy.hero.lead)}
              </p>
              <div className="hero-actions">
                <AppStoreBadge locale={locale} />
                <a className="text-link" href="#product-tour">{text(copy.hero.seeApp)} <span aria-hidden="true">↓</span></a>
              </div>
              <div className="trust-row" aria-label={copy.hero.trustAria}>
                {copy.hero.trust.map((item) => <span key={item}><b aria-hidden="true">✓</b> {text(item)}</span>)}
              </div>
              <div className="hero-metrics" aria-label={copy.hero.metricsAria}>
                {copy.hero.metrics.map(([value, label]) => <div key={value}><strong>{text(value)}</strong><span>{text(label)}</span></div>)}
              </div>
            </div>
            <div className="hero-visual" aria-label={copy.hero.previewAria}>
              <span className="hero-stage-label">{text(copy.hero.stage)}</span>
              <div className="hero-note hero-note--left">
                <span className="note-icon">✓</span>
                <div><strong>{text(copy.hero.streakTitle)}</strong><small>{text(copy.hero.streakBody)}</small></div>
              </div>
              <Phone src="/screens/daily-check-in.webp" alt={copy.hero.welcomeAlt} className="phone--hero phone--hero-primary" eager />
              <Phone src="/screens/receipt-camera-premium.webp" alt={copy.hero.cameraAlt} className="phone--hero-secondary phone--receipt-camera" eager />
              <div className="hero-note hero-note--right">
                <span className="note-icon note-icon--peach">▤</span>
                <div><strong>{text(copy.hero.receiptTitle)}</strong><small>{text(copy.hero.receiptBody)}</small></div>
              </div>
              <img className="hero-buddy" src="/brand/buddy-peek.png" alt={copy.hero.buddyAlt} />
            </div>
          </div>
        </section>

        <section className="soft-proof" aria-label={copy.proof.aria}>
          <div className="shell soft-proof__inner">
            <span>{text(copy.proof.items[0])}</span>
            <i aria-hidden="true" />
            <span>{text(copy.proof.items[1])}</span>
            <i aria-hidden="true" />
            <span>{text(copy.proof.items[2])}</span>
          </div>
        </section>

        <section className="section features" id="features">
          <div className="shell">
            <div className="section-heading section-heading--split">
              <div>
                <span className="eyebrow">{text(copy.featureHeading.eyebrow)}</span>
                <h2>{text(copy.featureHeading.title)}</h2>
              </div>
              <p>{text(copy.featureHeading.body)}</p>
            </div>
            <div className="feature-grid">
              {copy.features.map((feature) => (
                <article className="feature-card" key={feature.title}>
                  <span className={`feature-icon feature-icon--${feature.tone}`} aria-hidden="true">{feature.icon}</span>
                  <h3>{text(feature.title)}</h3>
                  <p>{text(feature.text)}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section steps" id="how-it-works">
          <div className="shell">
            <div className="section-heading section-heading--center">
              <span className="eyebrow">{text(copy.steps.eyebrow)}</span>
              <h2>{text(copy.steps.title)}</h2>
              <p>{text(copy.steps.body)}</p>
            </div>
            <div className="steps-grid">
              <article className="step-card">
                <span className="step-number">1</span>
                <div><strong>{text(copy.steps.items[0].title)}</strong><p>{text(copy.steps.items[0].body)}</p></div>
                <Phone src="/screens/create-budget.webp" alt={copy.steps.items[0].alt} />
              </article>
              <article className="step-card step-card--raised">
                <span className="step-number">2</span>
                <div><strong>{text(copy.steps.items[1].title)}</strong><p>{text(copy.steps.items[1].body)}</p></div>
                <Phone src="/screens/receipt-camera-premium.webp" alt={copy.steps.items[1].alt} className="phone--receipt-camera" />
              </article>
              <article className="step-card">
                <span className="step-number">3</span>
                <div><strong>{text(copy.steps.items[2].title)}</strong><p>{text(copy.steps.items[2].body)}</p></div>
                <Phone src="/screens/analytics.webp" alt={copy.steps.items[2].alt} />
              </article>
            </div>
          </div>
        </section>

        <section className="section gallery-section" id="product-tour">
          <div className="shell">
            <div className="section-heading section-heading--split">
              <div>
                <span className="eyebrow">{text(copy.tour.eyebrow)}</span>
                <h2>{text(copy.tour.title)}</h2>
              </div>
              <p>{text(copy.tour.body)}</p>
            </div>

            <div className="signature-showcase" role="list" aria-label={copy.tour.listAria}>
              <article className="signature-card signature-card--welcome" role="listitem">
                <div className="signature-copy">
                  <span className="signature-index">{text(copy.signature.welcomeIndex)}</span>
                  <h3>{text(copy.signature.welcomeTitle)}</h3>
                  <p>{text(copy.signature.welcomeBody)}</p>
                  <div className="signature-tags" aria-label={copy.signature.welcomeTagsAria}>
                    {copy.signature.welcomeTags.map((tag) => <span key={tag}>{text(tag)}</span>)}
                  </div>
                </div>
                <Phone src="/screens/daily-check-in.webp" alt={copy.signature.welcomeAlt} className="phone--signature" />
                <img className="signature-buddy" src="/brand/buddy-peek.png" alt="" />
              </article>

              <article className="signature-card signature-card--camera" role="listitem">
                <div className="signature-copy">
                  <span className="signature-index">{text(copy.signature.cameraIndex)}</span>
                  <h3>{text(copy.signature.cameraTitle)}</h3>
                  <p>{text(copy.signature.cameraBody)}</p>
                  <div className="signature-tags" aria-label={copy.signature.cameraTagsAria}>
                    {copy.signature.cameraTags.map((tag) => <span key={tag}>{text(tag)}</span>)}
                  </div>
                </div>
                <Phone src="/screens/receipt-camera-premium.webp" alt={copy.signature.cameraAlt} className="phone--signature phone--receipt-camera" />
              </article>
            </div>

            <article className="receipt-journey" aria-labelledby="receipt-journey-title">
              <div className="receipt-journey__heading">
                <span className="signature-index">{text(copy.journey.eyebrow)}</span>
                <h3 id="receipt-journey-title">{text(copy.journey.title)}</h3>
                <p>{text(copy.journey.body)}</p>
              </div>

              <div className="receipt-journey__flow" aria-label={copy.journey.flowAria}>
                <div className="journey-phone journey-phone--capture">
                  <span className="journey-step"><b>1</b> {text(copy.journey.capture)}</span>
                  <Phone src="/screens/receipt-camera-premium.webp" alt={copy.journey.captureAlt} className="phone--receipt-camera" />
                </div>

                <div className="journey-detected">
                  <span className="journey-step"><b>2</b> {text(copy.journey.ocr)}</span>
                  <div className="detected-card">
                    <div className="detected-card__top"><span>{text(copy.journey.sample)}</span><strong>{text(copy.journey.confidence)}</strong></div>
                    <dl>
                      <div><dt>{text(copy.journey.merchant)}</dt><dd><bdi dir="ltr">Costco Wholesale</bdi></dd></div>
                      <div><dt>{text(copy.journey.date)}</dt><dd>{text(copy.journey.dateValue)}</dd></div>
                      <div><dt>{text(copy.journey.items)}</dt><dd>{text(copy.journey.itemCount)}</dd></div>
                      <div><dt>{text(copy.journey.subtotal)}</dt><dd><bdi dir="ltr">$50.46</bdi></dd></div>
                      <div><dt>{text(copy.journey.tax)}</dt><dd><bdi dir="ltr">$6.56</bdi></dd></div>
                      <div className="detected-total"><dt>{text(copy.journey.total)}</dt><dd><bdi dir="ltr">$57.02 CAD</bdi></dd></div>
                    </dl>
                    <div className="detected-pulse"><i aria-hidden="true" /> {text(copy.journey.ready)}</div>
                  </div>
                </div>

                <div className="journey-phone journey-phone--review">
                  <span className="journey-step"><b>3</b> {text(copy.journey.review)}</span>
                  <ReceiptReviewPhone locale={locale} copy={copy.receiptReview} />
                </div>
              </div>

              <div className="receipt-output-strip">
                <span><i aria-hidden="true">✓</i> {text(copy.journey.draft)}</span>
                <strong><bdi dir="ltr">Costco Wholesale</bdi></strong>
                <span>{text(copy.journey.typeCategory)}</span>
                <b><bdi dir="ltr">$57.02 CAD</bdi></b>
                <small>{text(copy.journey.nothingSaved)}</small>
              </div>
            </article>

            <div className="gallery-subheading">
              <div><span>{text(copy.more.eyebrow)}</span><h3>{text(copy.more.title)}</h3></div>
              <p>{text(copy.more.body)}</p>
            </div>
            <div className="gallery-track" role="list" aria-label={copy.more.listAria}>
              {copy.gallery.map((item, index) => (
                <article className={`gallery-card gallery-card--${(index % 3) + 1}`} key={item.label} role="listitem">
                  <div className="gallery-card__copy"><span>{String(index + 1).padStart(2, "0")}</span><h3>{text(item.label)}</h3><p>{text(item.note)}</p></div>
                  <Phone src={item.src} alt={`${item.label} ${copy.more.altSuffix}`} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section together">
          <div className="shell together-card">
            <div className="together-art" aria-hidden="true">
              <div className="avatar avatar--one" dir="ltr">M</div>
              <div className="share-line" />
              <div className="avatar avatar--two" dir="ltr">A</div>
              <div className="shared-total"><small>{text(copy.together.familyPlan)}</small><strong>{locale === "en" ? <><bdi dir="ltr">$3,240</bdi> {text(copy.together.leftPrefix)}</> : <>{text(copy.together.leftPrefix)} <bdi dir="ltr">$3,240</bdi></>}</strong><span><i /> <bdi dir="ltr">62%</bdi> {text(copy.together.trackSuffix)}</span></div>
            </div>
            <div className="together-copy">
              <span className="eyebrow eyebrow--light">{text(copy.together.eyebrow)}</span>
              <h2>{text(copy.together.title)}</h2>
              <p>{text(copy.together.body)}</p>
              <ul>
                {copy.together.bullets.map((bullet) => <li key={bullet}><span aria-hidden="true">✓</span> {text(bullet)}</li>)}
              </ul>
              <a href="#faq" className="light-link">{text(copy.together.questions)} <span aria-hidden="true">{copy.together.arrow}</span></a>
            </div>
          </div>
        </section>

        <section className="section privacy-callout">
          <div className="shell privacy-grid">
            <div className="privacy-copy">
              <span className="eyebrow">{text(copy.privacy.eyebrow)}</span>
              <h2>{text(copy.privacy.title)}</h2>
              <p>{text(copy.privacy.body)}</p>
              <a className="text-link" href={locale === "en" ? "/privacy" : `/${locale}/privacy`}>{text(copy.privacy.link)} <span aria-hidden="true">{copy.privacy.arrow}</span></a>
            </div>
            <div className="privacy-points">
              {copy.privacy.points.map((point, index) => <div key={point.title}><span>{String(index + 1).padStart(2, "0")}</span><strong>{text(point.title)}</strong><p>{text(point.body)}</p></div>)}
            </div>
          </div>
        </section>

        <section className="section faq" id="faq">
          <div className="shell faq-grid">
            <div className="faq-intro">
              <span className="eyebrow">{text(copy.faqIntro.eyebrow)}</span>
              <h2>{text(copy.faqIntro.title)}</h2>
              <p>{text(copy.faqIntro.body)}</p>
              <a className="support-chip" href="mailto:support@kindbudget.app"><span aria-hidden="true">✉</span> <bdi dir="ltr">support@kindbudget.app</bdi></a>
              <img src="/brand/buddy-pointing.png" alt={copy.faqIntro.buddyAlt} />
            </div>
            <div className="faq-list">
              {copy.faqs.map((faq, index) => (
                <details key={faq.q} open={index === 0}>
                  <summary>{text(faq.q)}<span aria-hidden="true">+</span></summary>
                  <p>{text(faq.a)}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="shell final-cta__inner">
            <div className="cta-orbit cta-orbit--one" aria-hidden="true" />
            <div className="cta-orbit cta-orbit--two" aria-hidden="true" />
            <span className="eyebrow eyebrow--light">{text(copy.cta.eyebrow)}</span>
            <h2>{text(copy.cta.title)}</h2>
            <p>{text(copy.cta.body)}</p>
            <AppStoreBadge locale={locale} />
            <small>{text(copy.cta.finePrint)}</small>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
