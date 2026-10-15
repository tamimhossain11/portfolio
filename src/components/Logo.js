import React from "react";
import { motion } from "framer-motion";
import { ease } from "../lib/motion";

// "TH" monogram: the T's stem doubles as the H's left leg, finished with a
// square accent dot. Drawn on a 48×48 grid with 6px strokes.
const STROKES = [
    "M4 12H26", // T bar
    "M15 9V39", // shared stem
    "M15 24H34", // H crossbar (overlaps both legs so no seam)
    "M34 9V39", // H right leg
];

export default function Logo({ size = 32, draw = false, className = "" }) {
    return (
        <svg
            className={`logo ${className}`}
            viewBox="0 0 48 48"
            width={size}
            height={size}
            fill="none"
            aria-hidden="true"
        >
            {STROKES.map((d, i) =>
                draw ? (
                    <motion.path
                        key={d}
                        d={d}
                        stroke="currentColor"
                        strokeWidth="6"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.45, ease, delay: 0.15 + i * 0.16 }}
                    />
                ) : (
                    <path key={d} d={d} stroke="currentColor" strokeWidth="6" />
                )
            )}
            <motion.rect
                className="logo-dot"
                x="39"
                y="34"
                width="5"
                height="5"
                style={{ transformOrigin: "41.5px 36.5px" }}
                initial={draw ? { scale: 0 } : false}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 420, damping: 14, delay: draw ? 0.95 : 0 }}
            />
        </svg>
    );
}
