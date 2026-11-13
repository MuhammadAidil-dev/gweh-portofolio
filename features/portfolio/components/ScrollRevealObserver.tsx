"use client";

import { useEffect } from "react";

export function ScrollRevealObserver() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) return;

    const sections = document.querySelectorAll<HTMLElement>(
      ".portfolio-page main > section:not(.hero-section)",
    );
    if (sections.length === 0) return;

    const root = document.documentElement;
    root.classList.add("scroll-motion-ready");

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          if (entry.target.matches("section")) {
            entry.target.classList.add("scroll-motion-visible");
          } else {
            entry.target.classList.add("scroll-item-visible");
          }
          currentObserver.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -5% 0px",
      },
    );

    sections.forEach((section) => {
      observer.observe(section);

      section.querySelectorAll<HTMLElement>("[data-reveal-item]").forEach((item, index) => {
        item.style.setProperty("--reveal-delay", Math.min(index * 60, 300) + "ms");
        observer.observe(item);
      });
    });

    return () => {
      observer.disconnect();
      root.classList.remove("scroll-motion-ready");
    };
  }, []);

  return null;
}

