import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-inner">
        <div className="footer-header">
          <div className="footer-logo-wrap">
            <Image
              src="/pictures/logo.svg"
              alt="Shiraz Logo"
              loading="lazy"
              width={180}
              height={60}
              style={{ color: "transparent" }}
            />
            <p className="footer-sub-logo">AFGHAN RESTAURANT</p>
          </div>
          <div className="footer-location">Afghan Restaurant - London</div>
        </div>
        <div className="footer-grid">
          <div className="footer-column">
            <h4>Explore</h4>
            <ul>
              <li><a href="#about">Our Story</a></li>
              <li><a href="/menu">Menu</a></li>
              <li><a href="#gallery">Gallery</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Visit</h4>
            <ul>
              <li><a href="tel:02085690777">Reservations</a></li>
              <li><a href="tel:02085690777">Private Dining</a></li>
              <li><a href="#contact">Find Us</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Hours</h4>
            <ul>
              <li>Monday - Sunday: 12pm - 11pm</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Follow</h4>
            <ul>
              <li>
                <a
                  href="https://www.instagram.com/shiraz_ub4/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@shiraz_restaurant"
                  target="_blank"
                  rel="noreferrer"
                >
                  TikTok
                </a>
              </li>
              <li>
                <a
                  href="https://share.google/QEzKsqL8dQxxUcNhy"
                  target="_blank"
                  rel="noreferrer"
                >
                  Google Business Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 Shiraz Afghan Restaurant. All rights reserved. | 830
            Uxbridge Rd, Hayes UB4 0RR
          </p>
          <p
            style={{ marginTop: 8, fontSize: 12, color: "#8a9eb5" }}
          >
            <a
              href="/privacy-policy"
              style={{
                color: "#8a9eb5",
                textDecoration: "underline",
                marginRight: 12,
              }}
            >
              Privacy Policy
            </a>
            <a
              href="/cookie-policy"
              style={{
                color: "#8a9eb5",
                textDecoration: "underline",
                marginRight: 12,
              }}
            >
              Cookie Policy
            </a>
            <a
              href="https://shirazafghan.co.uk/terms"
              style={{ color: "#8a9eb5", textDecoration: "underline" }}
            >
              Terms &amp; Conditions
            </a>
          </p>
          <p style={{ marginTop: 15, fontSize: 13, color: "#C2844B" }}>
            Website Powered by{" "}
            <a
              href="https://yboagency.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ybo-agency-link"
            >
              YBO Agency
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
