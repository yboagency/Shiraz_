"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const showVideo = () => video.classList.add("is-ready");

    if (video.readyState >= 3) {
      showVideo();
    } else {
      video.addEventListener("canplay", showVideo, { once: true });
    }

    const fallback = setTimeout(showVideo, 2500);
    return () => clearTimeout(fallback);
  }, []);

  const scrollTo = (selector: string) => {
    const target = document.querySelector(selector);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="panel panel--dark">
      <section className="hero">
        <video
          ref={videoRef}
          className="hero-bg hero-bg--fade"
          autoPlay
          muted
          loop
          playsInline
          poster="/pictures/Image.webp"
          style={{ objectFit: "cover" }}
        >
          <source src="/pictures/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-content" id="home">
          <div className="hero-actions reveal">
            <button
              type="button"
              className="pointybtn pointybtn--fill"
              onClick={() => scrollTo("#booking-form")}
            >
              Book a Table
            </button>
            <button
              type="button"
              className="pointybtn pointybtn--outline"
              onClick={() => (window.location.href = "/menu")}
            >
              View Menu
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
