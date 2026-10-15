import Lenis from "lenis";

let lenis = null;

export const prefersReducedMotion = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Starts Lenis smooth scrolling. Returns a cleanup function.
export function initSmoothScroll() {
    if (prefersReducedMotion()) return () => {};

    lenis = new Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    let frame;
    const raf = (time) => {
        lenis.raf(time);
        frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
        cancelAnimationFrame(frame);
        lenis.destroy();
        lenis = null;
    };
}

export function scrollToId(id) {
    const target = id === "top" ? 0 : document.getElementById(id);
    if (target === null) return;

    if (lenis) {
        lenis.scrollTo(target, { offset: 0 });
    } else if (target === 0) {
        window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
        target.scrollIntoView({ behavior: "smooth" });
    }
}

export function lockScroll(locked) {
    if (lenis) locked ? lenis.stop() : lenis.start();
    document.body.classList.toggle("no-scroll", locked);
}

// Click handler for in-page anchors: <a href="#work" onClick={handleAnchor}>.
export function handleAnchor(e) {
    const href = e.currentTarget.getAttribute("href");
    if (!href || !href.startsWith("#")) return;
    e.preventDefault();
    scrollToId(href.slice(1) || "top");
}
