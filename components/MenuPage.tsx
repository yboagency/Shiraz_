"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

/* ---------------------------------------------------------------------------
 * Dish data
 * Images live in /public/food/**. For every dish we keep ONE image (the best
 * available format was resolved as webp > avif > png), so .avif/.png/.webp
 * versions of the same base name are never rendered as separate dishes.
 * ------------------------------------------------------------------------- */

type Dish = { name: string; img: string; desc: string };
type Category = { id: string; nav: string; title: string; blurb: string; dishes: Dish[] };

const F = "/food";

const categories: Category[] = [
  {
    id: "starters",
    nav: "Starters",
    title: "Starters",
    blurb: "Begin your feast with vibrant Afghan mezze and freshly made small plates.",
    dishes: [
      { name: "Chili Paneer", img: `${F}/starters/chili-paneer.webp`, desc: "Golden paneer tossed in a spiced chili glaze." },
      { name: "Hummus", img: `${F}/starters/hummus.webp`, desc: "Silky chickpea dip finished with olive oil." },
      { name: "Olives", img: `${F}/starters/olives.webp`, desc: "Marinated house olives with herbs." },
      { name: "Paneer Tikka", img: `${F}/starters/paneer-tikka.webp`, desc: "Char-grilled paneer with warm spices." },
      { name: "Yogurt with Cucumber", img: `${F}/starters/yogurt-with-cucumber.webp`, desc: "Cooling minted yogurt and cucumber." },
    ],
  },
  {
    id: "afghan-main-course",
    nav: "Afghan Main Course",
    title: "Afghan Main Course",
    blurb: "Time-honoured recipes carried straight from the Afghan kitchen.",
    dishes: [
      { name: "Bandjan Borani", img: `${F}/main-course/afghan-main-course/bandjan-borani.webp`, desc: "Layered aubergine with garlic yogurt." },
      { name: "Peshawari Chapli Kebab — Family Deal", img: `${F}/main-course/afghan-main-course/peshawari-chapli-kebab-family-deal.webp`, desc: "Generous sharing platter of spiced chapli kebabs." },
      { name: "Chef's Special", img: `${F}/main-course/afghan-main-course/unknown-18.webp`, desc: "A seasonal creation from our head chef." },
    ],
  },
  {
    id: "curry-dishes",
    nav: "Curry Dishes",
    title: "Curry Dishes",
    blurb: "Slow-cooked, richly spiced curries simmered to depth.",
    dishes: [
      { name: "Kofta Curry", img: `${F}/main-course/curry-dishes/kofta-curry.webp`, desc: "Hand-rolled meatballs in a fragrant sauce." },
      { name: "Nihari", img: `${F}/main-course/curry-dishes/nihari.webp`, desc: "Slow-braised, deeply spiced classic." },
      { name: "Spinach Sabzi", img: `${F}/main-course/curry-dishes/spinach-sabzi.webp`, desc: "Tender spinach cooked with herbs." },
      { name: "Tarka Daal", img: `${F}/main-course/curry-dishes/taraka-daal.webp`, desc: "Lentils tempered with sizzling spices." },
      { name: "Chicken Jalfrezi", img: `${F}/new-food/chicken-jalfrezi.webp`, desc: "Chicken wok-tossed with peppers and onions." },
    ],
  },
  {
    id: "grilled-kebabs-with-rice",
    nav: "Kebabs With Rice",
    title: "Grilled Kebabs with Rice",
    blurb: "Charcoal-grilled kebabs served over fragrant pilau rice.",
    dishes: [
      { name: "Chicken with Rice", img: `${F}/main-course/grilled-kebabs-with-rice/chicken-with-rice.avif`, desc: "Grilled chicken over seasoned rice." },
      { name: "Full / Half Chicken with Rice", img: `${F}/main-course/grilled-kebabs-with-rice/full-chicken---half-chicken-with-rice.webp`, desc: "Chargrilled chicken portions with pilau." },
      { name: "Grilled Kebabs with Rice", img: `${F}/main-course/grilled-kebabs-with-rice/grilled-kebabs-with-rice.webp`, desc: "Mixed grilled kebabs on a bed of rice." },
      { name: "Lamb Ribs with Rice", img: `${F}/main-course/grilled-kebabs-with-rice/lamb-ribs-with-rice.webp`, desc: "Tender lamb ribs with fragrant rice." },
      { name: "Namkin Lamb Chops with Rice", img: `${F}/main-course/grilled-kebabs-with-rice/namkin-lamb-chops-with-rice.webp`, desc: "Salt-and-spice lamb chops with rice." },
    ],
  },
  {
    id: "shiraz-special-kebabs",
    nav: "Shiraz Special Kebabs",
    title: "Shiraz Special Kebabs",
    blurb: "Our signature flame-grilled selection, cooked over open charcoal.",
    dishes: [
      { name: "Afghan Lamb Tikka Kebab", img: `${F}/main-course/shiraz-special-kebabs/afghan-lamb-tikka-kebab.webp`, desc: "Marinated lamb tikka, chargrilled." },
      { name: "Chicken Tikka", img: `${F}/main-course/shiraz-special-kebabs/chicken-tikka.webp`, desc: "Spiced chicken tikka off the grill." },
      { name: "Chicken Wings — 10 Pcs", img: `${F}/main-course/shiraz-special-kebabs/chicken-wings-10pcs.webp`, desc: "Ten grilled, seasoned chicken wings." },
      { name: "Chopan Kebab", img: `${F}/main-course/shiraz-special-kebabs/chopan-kebab.webp`, desc: "Traditional Afghan lamb chop kebab." },
      { name: "Grilled Chicken", img: `${F}/main-course/shiraz-special-kebabs/grilled-chicken.webp`, desc: "Whole marinated grilled chicken." },
      { name: "Lamb Chops — 4 Pcs", img: `${F}/main-course/shiraz-special-kebabs/lamb-chops-4pcs.webp`, desc: "Four chargrilled seasoned lamb chops." },
      { name: "Lamb Kofta Kebab", img: `${F}/main-course/shiraz-special-kebabs/lamb-kofta-kebab.webp`, desc: "Minced lamb kofta, char-grilled." },
      { name: "Lamb Ribs", img: `${F}/main-course/shiraz-special-kebabs/lamb-ribs.webp`, desc: "Slow-grilled tender lamb ribs." },
      { name: "Peshawari Chapli Kebab", img: `${F}/main-course/shiraz-special-kebabs/peshawari-chapli-kebab.webp`, desc: "Flat, spiced Peshawari-style kebab." },
    ],
  },
  {
    id: "shiraz-biryani-special",
    nav: "Biryani Specials",
    title: "Biryani Specials",
    blurb: "Layered, aromatic biryani cooked to order with whole spices.",
    dishes: [
      { name: "Chicken Biryani", img: `${F}/main-course/shiraz-biryani-special/chicken_piryani.webp`, desc: "Fragrant basmati layered with spiced chicken." },
      { name: "Lamb Biryani", img: `${F}/main-course/shiraz-biryani-special/lamp_piryani.webp`, desc: "Slow-cooked lamb folded through aromatic rice." },
    ],
  },
  {
    id: "shiraz-karahis",
    nav: "Karahis",
    title: "Shiraz Karahis",
    blurb: "Sizzling wok-cooked karahi, brought straight to your table.",
    dishes: [
      { name: "Full / Half Chicken Karahi", img: `${F}/main-course/shiraz-karahis/full-half-chicken-karahi.webp`, desc: "Chicken karahi in a rich tomato base." },
      { name: "Namak Mandi Style Karahi", img: `${F}/main-course/shiraz-karahis/namak-mandi-style-karahi.webp`, desc: "Peshawari salt-style karahi." },
      { name: "Full Chicken Karahi", img: `${F}/new-food/full-chicken-karahi.webp`, desc: "Whole chicken cooked karahi-style." },
    ],
  },
  {
    id: "shiraz-seafood-special",
    nav: "Seafood",
    title: "Seafood Specials",
    blurb: "Fresh seabass and king prawns, Afghan-spiced and grilled.",
    dishes: [
      { name: "Grilled Fish — Seabass", img: `${F}/main-course/shiraz-seafood-special/grilled-fish-seabass.webp`, desc: "Whole seabass grilled with herbs." },
      { name: "King Prawn", img: `${F}/main-course/shiraz-seafood-special/king-prawn.webp`, desc: "Succulent king prawns, spiced and seared." },
      { name: "Masala Fish — Seabass", img: `${F}/main-course/shiraz-seafood-special/masala-fish-seabass.webp`, desc: "Seabass in a bold masala coating." },
    ],
  },
  {
    id: "pasta-dish",
    nav: "Pasta Dishes",
    title: "Afghan Pasta Dishes",
    blurb: "Traditional Afghan dumplings and pasta, topped with yogurt and sauce.",
    dishes: [
      { name: "Ashak", img: `${F}/pasta-dish/ashak.webp`, desc: "Leek dumplings with yogurt and mince sauce." },
      { name: "Mantu", img: `${F}/pasta-dish/mantu.webp`, desc: "Steamed beef dumplings, Afghan-style." },
    ],
  },
  {
    id: "sides",
    nav: "Sides",
    title: "Sides & Breads",
    blurb: "The perfect accompaniments to complete your table.",
    dishes: [
      { name: "Chips", img: `${F}/sides/chips-v1.webp`, desc: "Golden, crisp hand-cut chips." },
      { name: "Pilau Rice", img: `${F}/sides/rice-v1.webp`, desc: "Fragrant seasoned basmati rice." },
      { name: "Shiraz Special Salad", img: `${F}/sides/shiraz-special-salad.webp`, desc: "Fresh house salad with dressing." },
      { name: "Afghan Naan", img: `${F}/main-course/naans/shiraz-first-export-123.webp`, desc: "Freshly baked traditional Afghan bread." },
    ],
  },
  {
    id: "desserts",
    nav: "Desserts",
    title: "Desserts",
    blurb: "Sweet endings crafted the Afghan way.",
    dishes: [
      { name: "Afghani Jeelebe — 4 Pcs", img: `${F}/desserts/afghani-jeelebe-4-pcs.webp`, desc: "Crisp golden swirls in fragrant syrup." },
      { name: "Gulab Jamun — 4 Pcs", img: `${F}/desserts/gulab-jamun-4-pcs.webp`, desc: "Soft milk dumplings soaked in syrup." },
      { name: "Kheer", img: `${F}/desserts/kheer-v1.webp`, desc: "Slow-cooked creamy rice pudding." },
      { name: "Sheer Yakh", img: `${F}/desserts/sheeryakh-v1.webp`, desc: "Traditional Afghan-style ice cream." },
    ],
  },
  {
    id: "drinks",
    nav: "Drinks",
    title: "Drinks",
    blurb: "Refresh with our selection of house beverages.",
    dishes: [
      { name: "Fresh Orange Juice", img: `${F}/drinks/fresh-orange-juice.webp`, desc: "Freshly squeezed orange juice." },
      { name: "Shiraz Signature Drink", img: `${F}/drinks/shiraz-first-export-117.webp`, desc: "Our house signature refresher." },
    ],
  },
];

/* Chef's signature highlights for the featured strip. Mix Grill is exclusive
 * to this strip (it has no dedicated category section). */
const featured: { name: string; tag: string; img: string }[] = [
  { name: "Shiraz Mix Grill", tag: "Chef's Signature", img: `${F}/main-course/shiraz-mix-grill/shiraz-mix-grill.webp` },
  { name: "King Prawn", tag: "Seafood", img: `${F}/main-course/shiraz-seafood-special/king-prawn.webp` },
  { name: "Chicken Biryani", tag: "Biryani", img: `${F}/main-course/shiraz-biryani-special/chicken_piryani.webp` },
  { name: "Chopan Kebab", tag: "Kebab", img: `${F}/main-course/shiraz-special-kebabs/chopan-kebab.webp` },
];

/* How many dishes are shown before a category needs "Show More". */
const PREVIEW = 3;

export default function MenuPage() {
  const [activeId, setActiveId] = useState<string>(categories[0].id);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const navTrackRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  const toggleCategory = useCallback((id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  /* Scroll-reveal — self-contained, uses .mnu-reveal (not the global .reveal) */
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const els = root.querySelectorAll<HTMLElement>(".mnu-reveal");

    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-shown"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-shown");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  /* Active-category tracking for the sticky nav */
  useEffect(() => {
    const sections = categories
      .map((c) => document.getElementById(`cat-${c.id}`))
      .filter((el): el is HTMLElement => !!el);
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          const id = visible[0].target.id.replace("cat-", "");
          setActiveId(id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  /* Keep the active pill within view of the horizontal nav.
   * Recentres INSTANTLY and only when the pill is actually off-screen, so it
   * never runs a smooth animation that competes with the user's vertical
   * scroll (that competition is what made the sticky bar bounce/jitter). */
  useEffect(() => {
    const track = navTrackRef.current;
    if (!track) return;
    const btn = track.querySelector<HTMLElement>(`[data-nav="${activeId}"]`);
    if (!btn) return;
    const viewStart = track.scrollLeft;
    const viewEnd = viewStart + track.clientWidth;
    const btnStart = btn.offsetLeft;
    const btnEnd = btnStart + btn.clientWidth;
    if (btnStart < viewStart + 8 || btnEnd > viewEnd - 8) {
      track.scrollTo({
        left: btnStart - track.clientWidth / 2 + btn.clientWidth / 2,
        behavior: "auto",
      });
    }
  }, [activeId]);

  const handleNavClick = useCallback((id: string) => {
    const el = document.getElementById(`cat-${id}`);
    if (el) {
      setActiveId(id);
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <div className="menu-page" ref={rootRef}>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <header className="mnu-hero">
        <div className="mnu-hero-float mnu-hero-float--right">
          <Image src={`${F}/desserts/gulab-jamun-4-pcs.webp`} alt="" width={200} height={200} sizes="160px" />
        </div>
        <div className="mnu-hero-float mnu-hero-float--left">
          <Image src={`${F}/desserts/gulab-jamun-4-pcs.webp`} alt="" width={200} height={200} sizes="160px" />
        </div>

        <div className="mnu-hero-inner">
          <p className="mnu-eyebrow">Shiraz · Authentic Afghan Cuisine</p>
          <h1>
            Explore Our <span className="mnu-gold-word">Menu</span>
          </h1>
          <p>
            From charcoal-grilled kebabs to fragrant biryani and slow-cooked
            curries — a journey through the soul of Afghan and Persian flavour.
          </p>
          <hr className="mnu-rule mnu-hero-rule" />
          <span className="mnu-hero-scroll">
            Scroll to explore
            <span aria-hidden="true" />
          </span>
        </div>
      </header>

      {/* ── STICKY CATEGORY NAV ──────────────────────────────── */}
      <nav className="mnu-nav" aria-label="Menu categories">
        <div className="mnu-nav-wrap">
          <div className="mnu-nav-track" ref={navTrackRef}>
            {categories.map((c) => (
              <button
                key={c.id}
                type="button"
                data-nav={c.id}
                className={`mnu-nav-btn${activeId === c.id ? " is-active" : ""}`}
                onClick={() => handleNavClick(c.id)}
              >
                {c.nav}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ── FEATURED ─────────────────────────────────────────── */}
      <section className="mnu-section mnu-featured" aria-label="Chef's signatures">
        <div className="mnu-section-head mnu-reveal">
          <p className="mnu-eyebrow">Chef&apos;s Signatures</p>
          <h2>The Feast Begins Here</h2>
          <p>A handpicked selection of the dishes that define the Shiraz table.</p>
        </div>
        <div className="mnu-featured-grid">
          {featured.map((f, i) => (
            <article
              key={f.name}
              className="mnu-feat-card mnu-reveal"
              style={{ ["--i" as string]: i }}
            >
              <Image
                src={f.img}
                alt={f.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1180px) 50vw, 25vw"
                style={{ objectFit: "cover" }}
              />
              <div className="mnu-feat-body">
                <span className="mnu-feat-tag">{f.tag}</span>
                <h3>{f.name}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── CATEGORY SECTIONS ────────────────────────────────── */}
      {categories.map((c) => {
        const isExpanded = !!expanded[c.id];
        const hasMore = c.dishes.length > PREVIEW;
        const visibleDishes = isExpanded ? c.dishes : c.dishes.slice(0, PREVIEW);
        return (
          <section key={c.id} id={`cat-${c.id}`} className="mnu-section">
            <div className="mnu-section-head mnu-reveal">
              <p className="mnu-eyebrow">{c.nav}</p>
              <h2>{c.title}</h2>
              <p>{c.blurb}</p>
              <hr className="mnu-rule" />
            </div>
            <div className="mnu-grid">
              {visibleDishes.map((d, i) => {
                const isExtra = i >= PREVIEW;
                return (
                  <article
                    key={d.name}
                    className={`mnu-card ${isExtra ? "mnu-card--extra" : "mnu-reveal"}`}
                    style={{ ["--i" as string]: (isExtra ? i - PREVIEW : i) % 3 }}
                  >
                    <div className="mnu-card-media">
                      <span className="mnu-card-tag">{c.nav}</span>
                      <Image
                        src={d.img}
                        alt={d.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1180px) 50vw, 33vw"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="mnu-card-body">
                      <h3>{d.name}</h3>
                      <p>{d.desc}</p>
                      <span className="mnu-card-foot">
                        View <span className="mnu-arrow" aria-hidden="true">→</span>
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>
            {hasMore && (
              <div className="mnu-more-wrap">
                <button
                  type="button"
                  className="mnu-more-btn"
                  aria-expanded={isExpanded}
                  onClick={() => toggleCategory(c.id)}
                >
                  <span>{isExpanded ? "Show Less" : "Show More"}</span>
                  <span className="mnu-more-ico" aria-hidden="true" />
                </button>
              </div>
            )}
          </section>
        );
      })}

      {/* ── OUTRO ────────────────────────────────────────────── */}
      <section className="mnu-outro mnu-reveal">
        <p className="mnu-eyebrow">Reserve Your Table</p>
        <h2>Dine with Us at Shiraz</h2>
        <p>
          Experience authentic Afghan hospitality in the heart of Hayes. Book a
          table and let us take you on a journey of flavour.
        </p>
        <a href="/#booking-form" className="no-underline">
          <button type="button" className="pointybtn pointybtn--dark">
            Book a Table
          </button>
        </a>
      </section>
    </div>
  );
}
