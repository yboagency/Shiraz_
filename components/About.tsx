"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/**
 * Image pairs derived from actual file dimensions:
 *   Landscape (wider): aboutus1, aboutus3, aboutus5
 *   Portrait  (taller): aboutus2, aboutus4, aboutus6
 */
const PAIRS = [
  {
    landscape: { src: "/pictures/aboutus1.webp", alt: "Restaurant interior" },
    portrait:  { src: "/pictures/aboutus2.webp", alt: "Afghan dining experience" },
  },
  {
    landscape: { src: "/pictures/aboutus3.webp", alt: "Restaurant atmosphere" },
    portrait:  { src: "/pictures/aboutus4.webp", alt: "Afghan cuisine" },
  },
  {
    landscape: { src: "/pictures/aboutus5.webp", alt: "Restaurant ambiance" },
    portrait:  { src: "/pictures/aboutus2.webp", alt: "Traditional Afghan decor" },
  },
] as const;

export default function About() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (index: number) => {
    const next = ((index % PAIRS.length) + PAIRS.length) % PAIRS.length;
    if (next === current) return;
    setFading(current);
    setTimeout(() => setFading(null), 700);
    setCurrent(next);
  };

  const restartAutoplay = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % PAIRS.length);
    }, 2500);
  };

  useEffect(() => {
    restartAutoplay();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePrev = () => { goTo(current - 1); restartAutoplay(); };
  const handleNext = () => { goTo(current + 1); restartAutoplay(); };

  return (
    <div className="panel panel--about" id="about">
      <section className="about">
        <div className="section-title reveal">
          <h2>About Us</h2>
          <span />
        </div>
        <div className="about-grid-wrapper reveal">
          <button
            type="button"
            aria-label="Previous image"
            className="about-arrow about-arrow-left"
            onClick={handlePrev}
          >
            ‹
          </button>

          <div className="about-grid">
            {/* ── Landscape slider ─────────────────────────────────────── */}
            <div className="about-slider">
              {PAIRS.map((pair, i) => (
                <Image
                  key={i}
                  src={pair.landscape.src}
                  alt={pair.landscape.alt}
                  width={600}
                  height={400}
                  loading="lazy"
                  unoptimized
                  className={`about-landscape${i === current ? " active" : ""}${i === fading ? " fading" : ""}`}
                  style={{ color: "transparent" }}
                />
              ))}
            </div>

            {/* ── Portrait slider ──────────────────────────────────────── */}
            {/* .about-portrait supplies all responsive sizing from chunk2.css.
                .about-portrait-wrap adds stacking context for absolute slides. */}
            <div className="about-portrait about-portrait-wrap">
              {PAIRS.map((pair, i) => (
                <Image
                  key={i}
                  src={pair.portrait.src}
                  alt={pair.portrait.alt}
                  width={400}
                  height={600}
                  loading="lazy"
                  unoptimized
                  className={`about-portrait-slide${i === current ? " active" : ""}${i === fading ? " fading" : ""}`}
                  style={{ color: "transparent" }}
                />
              ))}
            </div>
          </div>

          <button
            type="button"
            aria-label="Next image"
            className="about-arrow about-arrow-right"
            onClick={handleNext}
          >
            ›
          </button>
        </div>
        <p className="reveal">
          Experience the rich heritage of Afghan cuisine in a warm, welcoming
          atmosphere. Our restaurant brings you authentic flavors passed down
          through generations.
        </p>

        <div className="about-features">
          <article className="about-feature reveal">
            <span className="about-feature-ico" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 6.6C10.5 5 8 4.4 4 5v13c4-.6 6.5 0 8 1.5 1.5-1.5 4-2.1 8-1.5V5c-4-.6-6.5 0-8 1.6z" />
                <path d="M12 6.6V20.5" />
              </svg>
            </span>
            <h3>Authentic Afghan Recipes</h3>
            <p>Time-honoured dishes carried through generations.</p>
          </article>

          <article className="about-feature reveal">
            <span className="about-feature-ico" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3c1 3 4 4.6 4 8.2a4 4 0 0 1-8 0c0-1.2.4-2.1 1.1-2.9.1 1.4.4 2.7 1.4 2.7.7 0 1-.6 1-1.5C11.5 7.6 11 5.6 12 3z" />
                <path d="M8.5 20.5h7" />
              </svg>
            </span>
            <h3>Charcoal-Grilled Specialties</h3>
            <p>Kebabs seared over an open charcoal flame.</p>
          </article>

          <article className="about-feature reveal">
            <span className="about-feature-ico" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20.4S4.6 16 2.3 11.6C.9 9 2.2 5.6 5.6 5.6c2 0 3.4 1.3 4.4 2.5 1-1.2 2.4-2.5 4.4-2.5 3.4 0 4.7 3.4 3.3 6-2.3 4.4-9.7 8.8-9.7 8.8z" />
              </svg>
            </span>
            <h3>Warm Family Hospitality</h3>
            <p>Afghan warmth woven into every welcome.</p>
          </article>
        </div>
      </section>
    </div>
  );
}
