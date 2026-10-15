import React, { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";
import { scrollToId } from "../lib/scroll";

// Back-to-top button whose ring fills with scroll progress.
// Appears once the visitor has scrolled past the hero.
export default function ScrollProgress() {
    const { scrollY, scrollYProgress } = useScroll();
    const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
    const [visible, setVisible] = useState(false);

    useMotionValueEvent(scrollY, "change", (y) => setVisible(y > window.innerHeight * 0.6));

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    className="scroll-top"
                    onClick={() => scrollToId("top")}
                    aria-label="Back to top"
                    initial={{ opacity: 0, scale: 0.6, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.6, y: 20 }}
                    transition={{ type: "spring", stiffness: 300, damping: 24 }}
                >
                    <svg className="scroll-top-ring" viewBox="0 0 48 48" aria-hidden="true">
                        <circle className="scroll-top-track" cx="24" cy="24" r="21" />
                        <motion.circle className="scroll-top-fill" cx="24" cy="24" r="21" style={{ pathLength: progress }} />
                    </svg>
                    <FiArrowUp className="scroll-top-icon" />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
