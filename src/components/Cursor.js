import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { useFinePointer } from "../lib/hooks";

// A soft ring that trails the mouse, grows over links and shows a label
// over elements marked with data-cursor="Label".
export default function Cursor() {
    const enabled = useFinePointer();
    const x = useMotionValue(-100);
    const y = useMotionValue(-100);
    const sx = useSpring(x, { stiffness: 450, damping: 38, mass: 0.6 });
    const sy = useSpring(y, { stiffness: 450, damping: 38, mass: 0.6 });
    const [mode, setMode] = useState("idle");
    const [label, setLabel] = useState("");
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!enabled) return;

        const onMove = (e) => {
            x.set(e.clientX);
            y.set(e.clientY);
            setVisible(true);
        };
        const onOver = (e) => {
            const labelled = e.target.closest("[data-cursor]");
            if (labelled) {
                setMode("label");
                setLabel(labelled.getAttribute("data-cursor"));
                return;
            }
            setLabel("");
            setMode(e.target.closest("a, button, [role='button']") ? "hover" : "idle");
        };
        const onLeave = () => setVisible(false);

        window.addEventListener("pointermove", onMove);
        window.addEventListener("pointerover", onOver);
        document.documentElement.addEventListener("pointerleave", onLeave);
        return () => {
            window.removeEventListener("pointermove", onMove);
            window.removeEventListener("pointerover", onOver);
            document.documentElement.removeEventListener("pointerleave", onLeave);
        };
    }, [enabled, x, y]);

    if (!enabled) return null;

    const size = mode === "label" ? 92 : mode === "hover" ? 56 : 28;

    return (
        <motion.div className="cursor" style={{ x: sx, y: sy }} aria-hidden="true">
            <motion.div
                className={`cursor-ring is-${mode}`}
                animate={{ width: size, height: size, opacity: visible ? 1 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 26 }}
            >
                <AnimatePresence>
                    {label && (
                        <motion.span
                            key={label}
                            initial={{ opacity: 0, scale: 0.6 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.6 }}
                            transition={{ duration: 0.2 }}
                        >
                            {label}
                        </motion.span>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
}
