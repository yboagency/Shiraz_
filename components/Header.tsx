"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  // On interior routes (e.g. /menu) there is no full-screen hero video, so the
  // logo/nav should start in their compact "scrolled" state instead of the
  // large centered hero state used on the homepage.
  const forceCompact = pathname !== "/";
  const compact = scrolled || forceCompact;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock background scroll while the mobile/iPad drawer is open.
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      closeMenu();
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    } else {
      closeMenu();
    }
  };

  return (
    <>
      <header
        ref={navRef}
        className={`nav${compact ? " nav--scrolled" : ""}`}
        style={{ zIndex: 99999, pointerEvents: "auto" }}
      >
        <div className="nav-bg-container" />
        <button
          className="mobile-toggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-main-nav"
          style={{ position: "relative", zIndex: 100002 }}
          onClick={() => setMenuOpen((o) => !o)}
        >
          ☰
        </button>
        <nav className="desktop-menu-links">
          <Link href="/" className="is-active">
            HOME
          </Link>
          <a href="#about" onClick={(e) => handleAnchorClick(e, "#about")}>
            ABOUT
          </a>
          <Link href="/menu">MENU</Link>
          <a
            href="#contact"
            onClick={(e) => handleAnchorClick(e, "#contact")}
          >
            CONTACT
          </a>
          <a
            href="#booking-form"
            className="no-underline"
            onClick={(e) => handleAnchorClick(e, "#booking-form")}
          >
            <button type="button" className="pointybtn pointybtn--nav">
              Book a Table
            </button>
          </a>
        </nav>
      </header>

      <div
        className={`mobile-menu-backdrop${menuOpen ? " open" : ""}`}
        aria-hidden="true"
        onClick={closeMenu}
      />

      <nav
        id="mobile-main-nav"
        className={`mobile-menu-links${menuOpen ? " open" : ""}`}
      >
        <button
          type="button"
          className="menu-close"
          aria-label="Close menu"
          onClick={closeMenu}
        >
          ✕
        </button>
        <Link href="/" className="is-active" onClick={closeMenu}>
          HOME
        </Link>
        <a href="#about" onClick={(e) => handleAnchorClick(e, "#about")}>
          ABOUT
        </a>
        <Link href="/menu" onClick={closeMenu}>
          MENU
        </Link>
        <a
          href="#contact"
          onClick={(e) => handleAnchorClick(e, "#contact")}
        >
          CONTACT
        </a>
        <a
          href="#booking-form"
          className="no-underline"
          onClick={(e) => handleAnchorClick(e, "#booking-form")}
        >
          <button type="button" className="pointybtn pointybtn--nav">
            Book a Table
          </button>
        </a>
      </nav>

      <Link
        href="/"
        aria-label="Go to home"
        className="hero-logo-link"
        style={{ zIndex: 100000 }}
      >
        <Image
          alt="Shiraz Logo"
          width={580}
          height={200}
          className={`hero-logo hero-logo--morph${compact ? " is-scrolled" : ""}`}
          src="/pictures/navlogo.svg"
          priority
        />
      </Link>
    </>
  );
}
