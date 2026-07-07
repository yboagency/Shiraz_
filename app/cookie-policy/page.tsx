import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Cookie Policy — Shiraz Afghan Restaurant, Hayes London",
  description:
    "How Shiraz Afghan Restaurant uses cookies. We do not currently use non-essential analytics or marketing cookies.",
  alternates: { canonical: "/cookie-policy" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Cookie Policy — Shiraz Afghan Restaurant",
    description:
      "How Shiraz Afghan Restaurant uses cookies. No non-essential analytics or marketing cookies are used.",
    url: "https://shirazafghan.co.uk/cookie-policy",
    siteName: "Shiraz",
    locale: "en_GB",
    type: "website",
  },
};

export default function CookiePolicy() {
  return (
    <>
      <Header />
      <main className="privacy-page">
        <ScrollReveal />

        <header className="privacy-hero reveal">
          <p className="privacy-eyebrow">Shiraz Afghan Restaurant</p>
          <h1 className="privacy-title">Cookie Policy</h1>
          <p className="privacy-updated">Last Updated: 6 July 2026</p>
          <hr className="privacy-hero-rule" />
        </header>

        <div className="privacy-container">
          <div className="privacy-card">
            <section className="privacy-section reveal">
              <h2>1. What Are Cookies?</h2>
              <p>
                Cookies are small text files that a website may place on your
                device (such as a computer, tablet, or phone) when you visit.
                They are widely used to make websites work, to remember your
                preferences, and — on many sites — to measure usage or serve
                advertising. Similar technologies, such as local storage, can be
                used for comparable purposes.
              </p>
            </section>

            <section className="privacy-section reveal">
              <h2>2. Cookies We Currently Use</h2>
              <p>
                We want to be clear and transparent. Our website{" "}
                <span className="privacy-term">
                  does not currently use non-essential analytics or marketing
                  cookies
                </span>
                . We do not use Google Analytics, Google Tag Manager, Google
                Ads, Meta (Facebook) Pixel, Microsoft Clarity, or any similar
                tracking or advertising services, and we do not build advertising
                profiles or track you across other websites.
              </p>
            </section>

            <section className="privacy-section reveal">
              <h2>3. Essential Technical Storage</h2>
              <p>
                A limited amount of essential technical storage or cookies may be
                used only where necessary for basic website functionality and
                security. Where used, these are strictly necessary to deliver the
                website you have requested, do not require consent under UK
                rules, and are never used for analytics or advertising.
              </p>
            </section>

            <section className="privacy-section reveal">
              <h2>4. Structured Data &amp; Fonts</h2>
              <p>
                The structured data (JSON-LD) on our website helps search engines
                understand our content, and the fonts we display are served from
                our own website (self-hosted). Neither of these sets tracking
                cookies or collects personal information about you.
              </p>
            </section>

            <section className="privacy-section reveal">
              <h2>5. Future Changes &amp; Consent</h2>
              <p>
                If we introduce analytics or marketing cookies in the future,
                users will be asked for consent before those cookies are loaded,
                where required. At that point we will update this Cookie Policy
                and provide a way to manage and withdraw your preferences.
              </p>
              <p>
                For more information about how we handle personal data, please
                see our <Link href="/privacy-policy">Privacy Policy</Link>.
              </p>
            </section>

            <section className="privacy-section reveal">
              <h2>6. Contact Information</h2>
              <p>
                If you have any questions about this Cookie Policy, you can
                contact us using the same details as our Privacy Policy:
              </p>
              <div className="privacy-contact-card">
                <p className="privacy-contact-name">Shiraz Afghan Restaurant</p>
                <p>830 Uxbridge Rd, Hayes, Middlesex, UB4 0RR</p>
                <p>
                  <span className="privacy-label">Email: </span>
                  <a href="mailto:enquiries@shirazafghan.co.uk">
                    enquiries@shirazafghan.co.uk
                  </a>
                </p>
                <p>
                  <span className="privacy-label">Phone: </span>
                  <a href="tel:02085690777">020 8569 0777</a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
