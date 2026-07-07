import Image from "next/image";

export default function Contact() {
  return (
    <div className="panel panel--reservation" id="contact">
      <section className="contact">
        <p className="menu-kicker reveal">Find Us</p>
        <h2 className="reveal">Come &amp; Dine with Us</h2>
        <div className="contact-divider reveal">
          <span />
          <div className="diamond" />
          <span />
        </div>
        <div className="contact-grid">
          <article className="contact-item reveal">
            <Image
              src="/pictures/locationSVG.svg"
              alt=""
              loading="lazy"
              width={40}
              height={40}
              style={{ color: "transparent" }}
            />
            <h3>Address</h3>
            <p>830 Uxbridge Rd, Hayes UB4 0RR</p>
            <a
              href="https://maps.app.goo.gl/YceMETvKbp7ZWaVq9"
              target="_blank"
              rel="noreferrer"
              className="accent"
              aria-label="View Shiraz location on Google Maps"
            >
              View on Google Maps
            </a>
          </article>
          <article className="contact-item reveal">
            <Image
              src="/pictures/callenderSVG.svg"
              alt=""
              loading="lazy"
              width={40}
              height={40}
              style={{ color: "transparent" }}
            />
            <h3>Opening Hours</h3>
            <p>Monday – Sunday: 12pm – 11pm</p>
          </article>
          <article className="contact-item reveal">
            <Image
              src="/pictures/callSVG.svg"
              alt=""
              loading="lazy"
              width={40}
              height={40}
              style={{ color: "transparent" }}
            />
            <h3>Contact</h3>
            <p>
              <a href="tel:02085690777" className="accent">
                020 8569 0777
              </a>
              <br />
              <a href="mailto:enquiries@shirazafghan.co.uk" className="accent">
                enquiries@shirazafghan.co.uk
              </a>
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
