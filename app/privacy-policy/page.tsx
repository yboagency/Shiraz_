import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Privacy Policy — Shiraz Afghan Restaurant, Hayes London",
  description:
    "How Shiraz Afghan Restaurant collects, uses, and safeguards your data under UK GDPR and the Data Protection Act 2018.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Privacy Policy — Shiraz Afghan Restaurant",
    description:
      "How Shiraz Afghan Restaurant collects, uses, and safeguards your data.",
    url: "https://shirazafghan.co.uk/privacy-policy",
    siteName: "Shiraz",
    locale: "en_GB",
    type: "website",
  },
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="privacy-page">
        <ScrollReveal />

        <header className="privacy-hero reveal">
          <p className="privacy-eyebrow">Shiraz Afghan Restaurant</p>
          <h1 className="privacy-title">Privacy Policy</h1>
          <p className="privacy-updated">Last Updated: 6 July 2026</p>
          <hr className="privacy-hero-rule" />
        </header>

        <div className="privacy-container">
          <div className="privacy-card">
            <section className="privacy-section reveal">
              <h2>1. Introduction &amp; Identity</h2>
              <p>
                At Shiraz Afghan Restaurant, we are committed to protecting your
                privacy and ensuring the security of your personal data. This
                Privacy Policy explains how we collect, use, and safeguard your
                data when you visit our website (shirazafghan.co.uk).
              </p>
              <p>
                Under UK GDPR and the Data Protection Act 2018, the data
                controller is{" "}
                <span className="privacy-term">
                  Shiraz Afghan Restaurant Ltd
                </span>
                , located at 830 Uxbridge Rd, Hayes, Middlesex, UB4 0RR, United
                Kingdom.
              </p>
            </section>

            <section className="privacy-section reveal">
              <h2>2. Data We Collect &amp; Data Minimisation</h2>
              <p>
                We practise strict data minimisation. Our website does not
                currently provide online registration, customer accounts, online
                reservation forms, contact forms, or newsletter sign-up forms.
                As a result, we do not collect your name, email address, postal
                address, or phone number directly through the website.
              </p>
              <p>
                All table bookings are made by telephone (
                <a href="tel:02085690777">020 8569 0777</a>). If you call to
                book, we only collect the details necessary to manage your
                reservation (such as name, phone number, date, time, and number
                of guests). This information is kept secure and is never used
                for unsolicited marketing.
              </p>
            </section>

            <section className="privacy-section reveal">
              <h2>3. Cookies &amp; Tracking Technologies</h2>
              <p>
                We want to be transparent about tracking. Our website{" "}
                <span className="privacy-term">
                  does not currently use non-essential analytics or marketing
                  cookies
                </span>
                . We do not use Google Analytics, Google Tag Manager, Google
                Ads, Meta (Facebook) Pixel, Microsoft Clarity, or any similar
                tracking or advertising services.
              </p>
              <p>
                A limited amount of essential technical storage may be used only
                where necessary for basic website functionality and security.
                These essential items do not track you across other websites and
                are not used for advertising.
              </p>
              <p>
                The structured data (JSON-LD) that helps search engines
                understand our content, and the fonts we serve, are self-hosted
                and do not set tracking cookies.
              </p>
              <p>
                If we introduce analytics or marketing cookies in the future,
                they will only be used after consent has been requested where
                required. You can read more in our{" "}
                <Link href="/cookie-policy">Cookie Policy</Link>.
              </p>
            </section>

            <section className="privacy-section reveal">
              <h2>4. Legal Basis for Processing</h2>
              <p>
                For reservations made by telephone, we process your personal
                data on the basis of taking steps at your request to enter into
                a contract (booking a table) and our legitimate business
                interest in managing restaurant capacity and customer service.
              </p>
              <p>
                Because the website does not currently set non-essential
                cookies, we do not rely on consent for website tracking at this
                time. Should we introduce analytics or marketing cookies in the
                future, we will rely on your consent, which you will be able to
                grant or withdraw where required.
              </p>
            </section>

            <section className="privacy-section reveal">
              <h2>5. Your Rights</h2>
              <p>
                Under UK GDPR, you have the following rights regarding your
                personal data:
              </p>
              <ul className="privacy-list">
                <li>The right to access the personal data we hold about you.</li>
                <li>
                  The right to request the correction of inaccurate personal
                  data.
                </li>
                <li>
                  The right to request the erasure of your data (&ldquo;right to
                  be forgotten&rdquo;).
                </li>
                <li>
                  The right to withdraw consent at any time, where we rely on
                  your consent (for example, if analytics or marketing cookies
                  are introduced in the future).
                </li>
              </ul>
              <p>
                To exercise any of these rights, please contact us using the
                details below.
              </p>
            </section>

            <section className="privacy-section reveal">
              <h2>6. Contact Information</h2>
              <p>
                If you have any questions about this Privacy Policy or how we
                handle your information, you can contact us:
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
