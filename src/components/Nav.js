import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import { ease, easeInOut } from "../lib/motion";
import { handleAnchor, lockScroll, scrollToId } from "../lib/scroll";
import { profile, socials } from "../content_option";

const links = [
    { id: "work", label: "Work" },
    { id: "experience", label: "Experience" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
];

function useActiveSection() {
    const [active, setActive] = useState("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id));
            },
            { rootMargin: "-45% 0px -50% 0px" },
        );
        ["top", ...links.map((l) => l.id)].forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    return active;
}

export default function Nav({ ready }) {
    const active = useActiveSection();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [introDone, setIntroDone] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const prev = scrollY.getPrevious() ?? 0;
        setHidden(latest > prev && latest > 240);
        setScrolled(latest > 24);
    });

    useEffect(() => {
        if (!open) return;
        lockScroll(true);
        return () => lockScroll(false);
    }, [open]);

    useEffect(() => {
        const onResize = () => window.innerWidth > 900 && setOpen(false);
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    const go = (e) => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href").slice(1);
        setOpen(false);
        lockScroll(false);
        requestAnimationFrame(() => scrollToId(id));
    };

    return (
        <>
            <motion.header
                className={`nav ${scrolled ? "is-scrolled" : ""}`}
                initial={{ y: -100, opacity: 0 }}
                animate={ready ? { y: hidden && !open ? -100 : 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, ease, delay: introDone ? 0 : 0.9 }}
                onAnimationComplete={() => ready && setIntroDone(true)}
            >
                <div className="nav-inner">
                    <a href="#top" className="nav-brand" onClick={handleAnchor} aria-label="Back to top">
                        <Logo size={30} className="nav-logo" />
                        <span className="nav-name">
                            {profile.firstName} {profile.lastName}
                        </span>
                    </a>

                    <nav className="nav-links" aria-label="Primary">
                        {links.map((link) => (
                            <a
                                key={link.id}
                                href={`#${link.id}`}
                                onClick={handleAnchor}
                                className={active === link.id ? "is-active" : ""}
                            >
                                {active === link.id && (
                                    <motion.span
                                        className="nav-pill"
                                        layoutId="nav-pill"
                                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                                    />
                                )}
                                <span className="nav-label">{link.label}</span>
                            </a>
                        ))}
                    </nav>

                    <div className="nav-actions">
                        <ThemeToggle />
                        <a href="#contact" className="nav-cta" onClick={handleAnchor}>
                            Let's talk
                        </a>
                        <button
                            className={`nav-burger ${open ? "is-open" : ""}`}
                            onClick={() => setOpen((v) => !v)}
                            aria-label={open ? "Close menu" : "Open menu"}
                            aria-expanded={open}
                        >
                            <span />
                            <span />
                        </button>
                    </div>
                </div>
            </motion.header>

            <AnimatePresence>
                {open && (
                    <motion.div
                        className="mobile-menu"
                        initial={{ clipPath: "inset(0 0 100% 0)" }}
                        animate={{ clipPath: "inset(0 0 0% 0)" }}
                        exit={{ clipPath: "inset(0 0 100% 0)" }}
                        transition={{ duration: 0.7, ease: easeInOut }}
                    >
                        <nav className="mobile-links" aria-label="Mobile">
                            {links.map((link, i) => (
                                <span className="line-mask" key={link.id}>
                                    <motion.a
                                        href={`#${link.id}`}
                                        onClick={go}
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0 }}
                                        exit={{ y: "100%" }}
                                        transition={{ duration: 0.6, ease, delay: 0.25 + i * 0.06 }}
                                    >
                                        <span className="meta">0{i + 1}</span>
                                        {link.label}
                                    </motion.a>
                                </span>
                            ))}
                        </nav>
                        <motion.div
                            className="mobile-foot"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <a href={`mailto:${profile.email}`}>{profile.email}</a>
                            <div>
                                {socials.map((s) => (
                                    <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                                        {s.label}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
