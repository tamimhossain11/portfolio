import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const spring = { stiffness: 220, damping: 16, mass: 0.4 };

// Pulls its child toward the mouse while hovered.
export default function Magnetic({ children, strength = 0.3, className = "" }) {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const sx = useSpring(x, spring);
    const sy = useSpring(y, spring);

    const onMove = (e) => {
        if (e.pointerType !== "mouse" || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
    };

    const reset = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            className={`magnetic ${className}`}
            style={{ x: sx, y: sy, display: "inline-flex" }}
            onPointerMove={onMove}
            onPointerLeave={reset}
        >
            {children}
        </motion.div>
    );
}
