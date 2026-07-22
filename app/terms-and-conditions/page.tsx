import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Terms & Conditions — Shiraz Afghan Restaurant, Hayes London",
  description:
    "The terms and conditions governing your use of the Shiraz Afghan Restaurant website, including reservations, allergen information, intellectual property, and liability.",
  alternates: { canonical: "/terms-and-conditions" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Terms & Conditions — Shiraz Afghan Restaurant",
    description:
      "The terms and conditions governing your use of the Shiraz Afghan Restaurant website.",
    url: "https://shirazafghan.co.uk/terms-and-conditions",
    siteName: "Shiraz",
    locale: "en_GB",
    type: "website",
  },
};

export default function TermsAndConditions() {
  return (
    <>
      {/* Scoped to this route: React hoists <link> tags to <head> regardless of
          nesting, so privacy.css only loads on legal pages instead of every page. */}
      <link rel="stylesheet" href="/css/privacy.css" />
      <Header />
      <main className="privacy-page">
        <ScrollReveal />

        <header className="privacy-hero reveal">
          <p className="privacy-eyebrow">Shiraz Afghan Restaurant</p>
          <h1 className="privacy-title">Terms &amp; Conditions</h1>
          <p className="privacy-updated">Last Updated: 11 June 2026</p>
          <hr className="privacy-hero-rule" />
        </header>

        <div className="privacy-container">
          <div className="privacy-card">
            <section className="privacy-section reveal">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and browsing the website shirazafghan.co.uk (the
                &ldquo;Site&rdquo;), you acknowledge and agree to be bound by
                these Terms and Conditions and all applicable laws and
                regulations in the United Kingdom.
              </p>
              <p>
                If you do not agree to these terms, you must discontinue using
                our Site immediately.
              </p>
            </section>

            <section className="privacy-section reveal">
              <h2>2. Website Content &amp; Descriptions</h2>
              <p>
                All descriptions of menu items, ingredients, prices, opening
                hours, and facilities are published in good faith. However, we
                reserve the right to modify prices or discontinue dishes without
                prior notice.
              </p>
              <p>
                Images displayed on the Site are for illustrative and marketing
                purposes. The presentation and appearance of served dishes may
                vary in restaurant service.
              </p>
            </section>

            <section className="privacy-section reveal">
              <h2>3. Table Reservations &amp; Traditional Seating</h2>
              <p>
                All reservations must be made directly by calling us at{" "}
                <a href="tel:02085690777">020 8569 0777</a>. No online booking
                mechanism is currently enabled.
              </p>
              <p>
                Our dining atmosphere features a mix of traditional partitioned
                floor seating and standard table seating. While we make every
                effort to accommodate requests for specific seating layouts,
                such as floor seating, we cannot guarantee availability. All
                seating allocations are subject to restaurant capacity and
                manager discretion.
              </p>
            </section>

            <section className="privacy-section reveal">
              <h2>4. Food Allergies and Dietary Information</h2>
              <p>
                We serve authentic Afghan cuisine, which frequently includes
                spices, nuts, gluten, dairy, and other common allergens.
                Detailed ingredient information is available upon request in the
                restaurant.
              </p>
              <p>
                <span className="privacy-term">Allergen Notice:</span> If you or
                any member of your party has a food allergy or dietary
                intolerance, you must inform our staff before placing your order
                on the phone or in person. While we take commercial care to
                avoid cross-contamination, we cannot guarantee any dish is 100%
                free of allergens.
              </p>
            </section>

            <section className="privacy-section reveal">
              <h2>5. Intellectual Property</h2>
              <p>
                The Site and all its contents, including text, high-resolution
                food photography, layout designs, CSS stylesheets, graphics, and
                the Shiraz logos, are the exclusive intellectual property of
                Shiraz Afghan Restaurant Ltd or our design partners, and are
                protected by UK and international copyright laws.
              </p>
              <p>
                You may not copy, reproduce, scrape, republish, distribute, or
                modify any content on the Site for commercial use without our
                explicit written consent.
              </p>
            </section>

            <section className="privacy-section reveal">
              <h2>6. Limitation of Liability</h2>
              <p>
                Shiraz Afghan Restaurant Ltd provides the Site on an{" "}
                <span className="privacy-term">&ldquo;as is&rdquo;</span> and{" "}
                <span className="privacy-term">&ldquo;as available&rdquo;</span>{" "}
                basis. We do not guarantee that the website will be free of
                interruptions, errors, or security vulnerabilities.
              </p>
              <p>
                To the maximum extent permitted by law, we shall not be liable
                for any direct, indirect, incidental, or consequential damages
                arising out of your access to, or use of, this Site.
              </p>
            </section>

            <section className="privacy-section reveal">
              <h2>7. Governing Law</h2>
              <p>
                These Terms and Conditions are governed by and construed in
                accordance with the laws of England and Wales. Any dispute
                arising out of or related to your use of this Site shall be
                subject to the exclusive jurisdiction of the courts of England
                and Wales.
              </p>
            </section>

            <section className="privacy-section reveal">
              <h2>8. Contacting Us</h2>
              <p>
                If you have any feedback, questions, or concerns about these
                Terms, please contact us:
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
              <p>
                You may also wish to read our{" "}
                <Link href="/privacy-policy">Privacy Policy</Link> and{" "}
                <Link href="/cookie-policy">Cookie Policy</Link>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
