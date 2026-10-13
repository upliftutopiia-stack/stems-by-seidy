"use client";

import { useState, type FormEvent } from "react";

const PHONE = "5122170620";
const PHONE_DISPLAY = "(512) 217-0620";
const INSTAGRAM = "https://www.instagram.com/stemsby.seidy/";

const nav = [
  { title: "The Studio", href: "#studio" },
  { title: "Inspiration", href: "#inspiration" },
  { title: "The Process", href: "#process" },
  { title: "Enquire", href: "#enquire" },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function FloralArtwork({
  variant = "hero",
}: {
  variant?: "hero" | "light" | "dark" | "neutral";
}) {
  return (
    <div className={`floral-art floral-${variant}`} aria-hidden="true">
      <div className="art-orbit orbit-one" />
      <div className="art-orbit orbit-two" />

      <div className="flower-stem stem-one" />
      <div className="flower-stem stem-two" />
      <div className="flower-stem stem-three" />
      <div className="flower-stem stem-four" />

      <div className="art-leaf leaf-one" />
      <div className="art-leaf leaf-two" />
      <div className="art-leaf leaf-three" />
      <div className="art-leaf leaf-four" />

      <div className="art-bloom bloom-one">
        <i /><i /><i /><i /><i /><b />
      </div>
      <div className="art-bloom bloom-two">
        <i /><i /><i /><i /><i /><b />
      </div>
      <div className="art-bloom bloom-three">
        <i /><i /><i /><i /><i /><b />
      </div>
      <div className="art-bloom bloom-four">
        <i /><i /><i /><i /><i /><b />
      </div>

      <div className="art-vase" />
      <div className="art-vase-neck" />
      <div className="art-surface" />
      <span className="art-spark">✳</span>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [name, setName] = useState("");
  const [occasion, setOccasion] = useState("");
  const [date, setDate] = useState("");
  const [budget, setBudget] = useState("");
  const [fulfillment, setFulfillment] = useState("");
  const [details, setDetails] = useState("");
  const [copied, setCopied] = useState(false);

  const message = [
    "Hi Seidy! I'd like to enquire about a bouquet.",
    "",
    `Name: ${name || "Not provided"}`,
    `Occasion: ${occasion || "Not specified"}`,
    `Preferred date: ${date || "Flexible"}`,
    `Budget: ${budget || "To discuss"}`,
    `Delivery/pickup: ${fulfillment || "To discuss"}`,
    `Details: ${details || "To discuss"}`,
    "",
    "Could you please confirm availability, options, and pricing?",
  ].join("\n");

  function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.href = `sms:${PHONE}?body=${encodeURIComponent(message)}`;
  }

  async function copyEnquiry() {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      window.alert("Copy is unavailable in this browser.");
    }
  }

  return (
    <>
      <div className="demo-notice">
        INDEPENDENT WEBSITE CONCEPT — NOT THE OFFICIAL BUSINESS WEBSITE
      </div>

      <header className="site-header" id="top">
        <a className="wordmark" href="#top" aria-label="Stems by Seidy home">
          <span className="wordmark-icon">✳</span>
          <span className="wordmark-text">
            <strong>stems</strong>
            <small>BY SEIDY</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {nav.map((item) => (
            <a href={item.href} key={item.href}>
              {item.title}
            </a>
          ))}
        </nav>

        <a className="header-order" href="#enquire">
          ORDER ENQUIRY <Arrow />
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
              <path d="M5 5L19 19M19 5L5 19" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
              <path d="M3 6H21M3 12H21M3 18H21" />
            </svg>
          )}
        </button>
      </header>

      <nav
        id="mobile-navigation"
        className={`mobile-navigation ${menuOpen ? "open" : ""}`}
        aria-label="Mobile navigation"
        inert={!menuOpen}
      >
        {nav.map((item) => (
          <a
            href={item.href}
            key={item.href}
            onClick={() => setMenuOpen(false)}
          >
            {item.title} <Arrow />
          </a>
        ))}
        <a
          href={`sms:${PHONE}`}
          onClick={() => setMenuOpen(false)}
        >
          TEXT THE STUDIO <Arrow />
        </a>
      </nav>

      <main>
        <section className="hero">
          <div className="hero-left">
            <div className="hero-topline">
              <span>FLORAL DESIGN CONCEPT</span>
              <span>ATX / TEXAS</span>
            </div>

            <div className="hero-title-wrap">
              <span className="hero-index">01 — AN EXPRESSION IN FLOWERS</span>
              <h1>
                Not just
                <br />
                flowers.
                <br />
                <em>A feeling.</em>
              </h1>
              <p>
                Beautiful gestures begin with thoughtful details.
                Discover floral inspiration and reach out to
                Stems by Seidy about a bouquet made for your moment.
              </p>

              <a className="primary-button" href="#enquire">
                ENQUIRE ABOUT A BOUQUET <Arrow />
              </a>
            </div>

            <div className="hero-bottomline">
              <span>SCROLL TO DISCOVER</span>
              <span>↓</span>
            </div>
          </div>

          <div className="hero-right">
            <FloralArtwork />
            <div className="hero-side-label">
              AN ARRANGEMENT OF LITTLE MOMENTS
            </div>
            <div className="hero-corner">
              <span>EST. IN IMAGINATION</span>
              <strong>✳</strong>
            </div>
          </div>
        </section>

        <div className="ticker" aria-hidden="true">
          <div>
            AN ART OF GIVING <span>✳</span>
            FLOWERS FOR EVERY FEELING <span>✳</span>
            MADE WITH INTENTION <span>✳</span>
            AN ART OF GIVING <span>✳</span>
            FLOWERS FOR EVERY FEELING <span>✳</span>
          </div>
        </div>

        <section className="studio section-pad" id="studio">
          <div className="section-marker">
            <span>01</span>
            <span>THE STUDIO</span>
          </div>

          <div className="studio-layout">
            <div className="studio-title">
              <span className="small-eyebrow">SOMETHING PERSONAL</span>
              <h2>
                A little beauty
                <br />
                goes a <em>long way.</em>
              </h2>
            </div>

            <div className="studio-copy">
              <p>
                A bouquet can celebrate a milestone, express
                gratitude, or simply brighten someone&apos;s day.
                It is the thought behind the gesture that
                makes it unforgettable.
              </p>
              <p>
                This independent website concept brings floral
                inspiration and the first step of ordering
                together in one elegant place.
              </p>
              <a href="#enquire" className="inline-link">
                LET&apos;S TALK FLOWERS <Arrow />
              </a>
            </div>
          </div>
        </section>

        <section className="inspiration section-pad" id="inspiration">
          <div className="section-marker">
            <span>02</span>
            <span>THE INSPIRATION</span>
          </div>

          <div className="inspiration-heading">
            <h2>
              Flowers for
              <br />
              <em>all the reasons.</em>
            </h2>
            <p>
              Consider these a starting point for your own
              custom bouquet conversation, not a verified
              catalogue of available products.
            </p>
          </div>

          <div className="editorial-grid">
            <article className="editorial-card editorial-feature">
              <div className="editorial-image">
                <FloralArtwork variant="light" />
                <span className="image-label">THE SOFT EDIT</span>
              </div>
              <div className="editorial-caption">
                <div>
                  <span>01 / INSPIRATION</span>
                  <h3>Soft gestures.</h3>
                  <p>For thoughtful, tender moments.</p>
                </div>
                <a href="#enquire" aria-label="Enquire about soft bouquet inspiration">
                  <Arrow />
                </a>
              </div>
            </article>

            <article className="editorial-card editorial-offset">
              <div className="editorial-image">
                <FloralArtwork variant="dark" />
                <span className="image-label">THE BOLD EDIT</span>
              </div>
              <div className="editorial-caption">
                <div>
                  <span>02 / INSPIRATION</span>
                  <h3>Big feelings.</h3>
                  <p>For celebrations worth remembering.</p>
                </div>
                <a href="#enquire" aria-label="Enquire about bold bouquet inspiration">
                  <Arrow />
                </a>
              </div>
            </article>

            <article className="editorial-card editorial-third">
              <div className="editorial-image">
                <FloralArtwork variant="neutral" />
                <span className="image-label">THE PERSONAL EDIT</span>
              </div>
              <div className="editorial-caption">
                <div>
                  <span>03 / INSPIRATION</span>
                  <h3>Just because.</h3>
                  <p>For moments that need no occasion.</p>
                </div>
                <a href="#enquire" aria-label="Enquire about custom bouquet inspiration">
                  <Arrow />
                </a>
              </div>
            </article>
          </div>

          <p className="editorial-disclaimer">
            ORIGINAL CSS ARTWORK FOR DEMONSTRATION ONLY.
            ACTUAL BOUQUETS, FLOWERS, PRICES AND AVAILABILITY
            MUST BE CONFIRMED DIRECTLY WITH STEMS BY SEIDY.
          </p>
        </section>

        <section className="manifesto">
          <div className="manifesto-inner">
            <span className="manifesto-star">✳</span>
            <p>
              The most meaningful things
              <br />
              are often the ones
              <br />
              <em>we give away.</em>
            </p>
            <span className="manifesto-note">
              AN ORIGINAL DESIGN SENTIMENT — NOT A CUSTOMER REVIEW
            </span>
          </div>
        </section>

        <section className="process section-pad" id="process">
          <div className="section-marker">
            <span>03</span>
            <span>THE PROCESS</span>
          </div>

          <div className="process-heading">
            <h2>
              A lovely idea.
              <br />
              <em>A simple start.</em>
            </h2>
            <p>
              Share a little about what you are looking for,
              then connect directly with Stems by Seidy
              to confirm the details.
            </p>
          </div>

          <div className="process-list">
            <div className="process-row">
              <span>01</span>
              <h3>Have a moment in mind.</h3>
              <p>
                Think about the occasion, your preferred
                colors, and when you need the bouquet.
              </p>
              <span className="process-symbol">✿</span>
            </div>

            <div className="process-row">
              <span>02</span>
              <h3>Tell us your vision.</h3>
              <p>
                Use the form to prepare a detailed text
                enquiry with your preferences.
              </p>
              <span className="process-symbol">✎</span>
            </div>

            <div className="process-row">
              <span>03</span>
              <h3>Confirm with Seidy.</h3>
              <p>
                Discuss bouquet options, pricing,
                timing, and delivery or pickup directly.
              </p>
              <span className="process-symbol">↗</span>
            </div>
          </div>
        </section>

        <section className="contact section-pad" id="enquire">
          <div className="section-marker">
            <span>04</span>
            <span>YOUR ENQUIRY</span>
          </div>

          <div className="contact-layout">
            <div className="contact-copy">
              <span className="small-eyebrow">LET&apos;S MAKE IT MEANINGFUL</span>
              <h2>
                Tell us
                <br />
                your <em>flower story.</em>
              </h2>
              <p>
                Have something special in mind? Prepare
                a text enquiry with your ideas, then
                send it directly to Stems by Seidy.
              </p>

              <div className="contact-method">
                <span>TEXT / CALL</span>
                <a href={`sms:${PHONE}`}>
                  {PHONE_DISPLAY} <Arrow />
                </a>
              </div>

              <div className="contact-method">
                <span>INSTAGRAM</span>
                <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
                  @stemsby.seidy <Arrow />
                </a>
              </div>

              <p className="contact-footnote">
                Austin / Pflugerville area. Confirm exact
                service coverage, delivery options, and
                availability with the business.
              </p>
            </div>

            <form className="enquiry-form" onSubmit={submitEnquiry}>
              <div className="form-heading">
                <span>START YOUR BOUQUET ENQUIRY</span>
                <span>✳</span>
              </div>

              <label>
                YOUR NAME
                <input
                  required
                  maxLength={100}
                  placeholder="Your full name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </label>

              <label>
                WHAT&apos;S THE OCCASION?
                <select
                  required
                  value={occasion}
                  onChange={(event) => setOccasion(event.target.value)}
                >
                  <option value="">Select an occasion</option>
                  <option>Birthday</option>
                  <option>Anniversary</option>
                  <option>Congratulations</option>
                  <option>Just because</option>
                  <option>Something else</option>
                </select>
              </label>

              <div className="form-row">
                <label>
                  PREFERRED DATE
                  <input
                    type="date"
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                  />
                </label>

                <label>
                  BUDGET (OPTIONAL)
                  <input
                    maxLength={50}
                    placeholder="Your budget"
                    value={budget}
                    onChange={(event) => setBudget(event.target.value)}
                  />
                </label>
              </div>

              <label>
                DELIVERY OR PICKUP?
                <select
                  value={fulfillment}
                  onChange={(event) => setFulfillment(event.target.value)}
                >
                  <option value="">Please advise</option>
                  <option>Ask about delivery</option>
                  <option>Ask about pickup</option>
                </select>
              </label>

              <label>
                TELL US YOUR VISION
                <textarea
                  required
                  rows={5}
                  maxLength={1200}
                  placeholder="Flowers, colors, size, occasion, and anything else you have in mind..."
                  value={details}
                  onChange={(event) => setDetails(event.target.value)}
                />
              </label>

              <button className="form-submit" type="submit">
                OPEN TEXT MESSAGE <Arrow />
              </button>

              <button
                className="copy-button"
                type="button"
                onClick={copyEnquiry}
              >
                {copied ? "✓ MESSAGE COPIED" : "OR COPY YOUR ENQUIRY"}
              </button>

              <p className="form-note">
                This demo does not collect or transmit your
                details to a website server. Your device&apos;s
                SMS app will open with a prepared message.
                Review and send it yourself. Messaging
                charges may apply.
              </p>
            </form>
          </div>
        </section>

        <section className="closing">
          <span>STEMS BY SEIDY · FLORAL STUDIO CONCEPT</span>
          <h2>
            Say it with
            <br />
            <em>flowers.</em>
          </h2>
          <a href="#enquire">
            START AN ENQUIRY <Arrow />
          </a>
          <span className="closing-decoration">✳</span>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-main">
          <div className="footer-brand">
            <span>✳</span>
            <strong>stems</strong>
            <small>BY SEIDY</small>
          </div>

          <div className="footer-links">
            <a href="#studio">THE STUDIO</a>
            <a href="#inspiration">INSPIRATION</a>
            <a href="#process">THE PROCESS</a>
            <a href="#enquire">ENQUIRE</a>
          </div>

          <div className="footer-social">
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
              INSTAGRAM ↗
            </a>
            <a href={`sms:${PHONE}`}>TEXT {PHONE_DISPLAY} ↗</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 STEMS BY SEIDY · WEBSITE CONCEPT</span>
          <span>INDEPENDENT DEMO · NOT AFFILIATED WITH THE BUSINESS</span>
          <a href="#top">BACK TO TOP ↑</a>
        </div>
      </footer>

      <a className="mobile-cta" href="#enquire">
        ENQUIRE ABOUT A BOUQUET <Arrow />
      </a>
    </>
  );
}