import { useEffect, useState } from "react";

/** Adds `is-visible` to every `.reveal` / `.reveal-words` element as it scrolls into view. */
export function useReveal() {
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal, .reveal-words"),
    );
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/** Subtle hero parallax: returns a scroll offset in px (disabled on touch/small screens). */
export function useParallax(strength = 0.15) {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        setOffset(window.scrollY * strength);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [strength]);
  return offset;
}

/** Soft glow that follows the cursor (pointer-fine devices only). */
export function useCursorGlow() {
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const el = document.createElement("div");
    el.setAttribute("aria-hidden", "true");
    el.style.cssText = [
      "position:fixed",
      "left:0",
      "top:0",
      "width:340px",
      "height:340px",
      "margin:-170px 0 0 -170px",
      "border-radius:9999px",
      "pointer-events:none",
      "z-index:0",
      "opacity:0",
      "transition:opacity .4s ease-out",
      "background:radial-gradient(circle, color-mix(in oklab, var(--cyan) 16%, transparent), transparent 70%)",
      "filter:blur(28px)",
      "will-change:transform",
    ].join(";");
    document.body.appendChild(el);

    let raf = 0;
    let x = 0;
    let y = 0;
    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      el.style.opacity = "1";
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
    };
    const onLeave = () => (el.style.opacity = "0");

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
      el.remove();
    };
  }, []);
}

const WORDS = ["Frontend Developer", "Vibe Coder", "React Enthusiast", "UI Builder"];

export { WORDS };
