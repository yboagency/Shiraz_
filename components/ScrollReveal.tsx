"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const revealEls = document.querySelectorAll<HTMLElement>(".reveal");

    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target as HTMLElement;
              el.classList.add("is-visible");
              io.unobserve(el);
              // Release the compositor-layer hint once the reveal transition
              // finishes. Leaving `will-change` on every section permanently
              // keeps dozens of promoted layers alive, which the browser must
              // re-composite when scrolling quickly and reversing direction —
              // the cause of the split-second scroll hang. Dropping it here
              // returns each section to a normal layer after it has animated.
              const release = () => {
                el.style.willChange = "auto";
                el.removeEventListener("transitionend", release);
              };
              el.addEventListener("transitionend", release);
              // Fallback for cases where transitionend never fires
              // (e.g. prefers-reduced-motion disables the transition).
              window.setTimeout(release, 1100);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
      );
      revealEls.forEach((el) => io.observe(el));
      return () => io.disconnect();
    } else {
      revealEls.forEach((el) => el.classList.add("is-visible"));
    }
  }, []);

  return null;
}
