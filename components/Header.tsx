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
  const isHome = pathname === "/";
  const forceCompact = !isHome;
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

  // Section anchors live on the homepage. On the homepage we smooth-scroll in
  // place; on any other route (e.g. /menu) we let the browser navigate to the
  // homepage hash (e.g. "/#about") so the links work from anywhere.
  const sectionHref = (hash: string) => (isHome ? hash : `/${hash}`);

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    hash: string
  ) => {
    if (isHome) {
      e.preventDefault();
      const target = document.querySelector(hash);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu();
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
          <a
            href={sectionHref("#about")}
            onClick={(e) => handleAnchorClick(e, "#about")}
          >
            ABOUT
          </a>
          <Link href="/menu">MENU</Link>
          <a
            href={sectionHref("#contact")}
            onClick={(e) => handleAnchorClick(e, "#contact")}
          >
            CONTACT
          </a>
          <a
            href={sectionHref("#booking-form")}
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
        <a
          href={sectionHref("#about")}
          onClick={(e) => handleAnchorClick(e, "#about")}
        >
          ABOUT
        </a>
        <Link href="/menu" onClick={closeMenu}>
          MENU
        </Link>
        <a
          href={sectionHref("#contact")}
          onClick={(e) => handleAnchorClick(e, "#contact")}
        >
          CONTACT
        </a>
        <a
          href={sectionHref("#booking-form")}
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
