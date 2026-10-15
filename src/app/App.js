import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, MotionConfig, motion, useScroll, useSpring } from "framer-motion";
import Preloader from "../components/Preloader";
import Cursor from "../components/Cursor";
import Nav from "../components/Nav";
import Hero from "../sections/Hero";
import Impact, { Marquee } from "../sections/Impact";
import Work from "../sections/Work";
import Experience from "../sections/Experience";
import About from "../sections/About";
import { Leadership, Skills } from "../sections/Skills";
import Contact from "../sections/Contact";
import { initSmoothScroll, lockScroll, prefersReducedMotion } from "../lib/scroll";
import "../components/components.css";

// Show the intro once per browser session.
const shouldShowIntro = () => {
    if (prefersReducedMotion()) return false;
    try {
        return !sessionStorage.getItem("intro-seen");
    } catch (e) {
        return true;
    }
};

export default function App() {
    const [showIntro] = useState(shouldShowIntro);
    const [ready, setReady] = useState(!showIntro);
    const { scrollYProgress } = useScroll();
    const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

    useEffect(() => initSmoothScroll(), []);

    useEffect(() => {
        if (!showIntro) return;
        if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";
        window.scrollTo(0, 0);
        lockScroll(true);
    }, [showIntro]);

    const finishIntro = useCallback(() => {
        try {
            sessionStorage.setItem("intro-seen", "1");
        } catch (e) {}
        lockScroll(false);
        setReady(true);
    }, []);

    return (
        <MotionConfig reducedMotion="user">
            <AnimatePresence>{!ready && <Preloader key="preloader" onDone={finishIntro} />}</AnimatePresence>
            <motion.div className="scroll-progress" style={{ scaleX: progress }} />
            <Cursor />
            <Nav ready={ready} />
            <main>
                <Hero ready={ready} />
                <Marquee />
                <Impact />
                <Work />
                <Experience />
                <About />
                <Skills />
                <Leadership />
                <Contact />
            </main>
        </MotionConfig>
    );
}
