import React from "react";
import { motion } from "framer-motion";
import { ease, viewportOnce } from "../lib/motion";

// Fades + lifts its children into place the first time they scroll into view.
export function Reveal({ children, delay = 0, y = 28, as = "div", className, ...rest }) {
    const Component = motion[as];
    return (
        <Component
            className={className}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.9, ease, delay }}
            {...rest}
        >
            {children}
        </Component>
    );
}

// Slides a line of text up from behind a mask. The mask is what gets observed:
// the inner line starts fully clipped, so observing it would never fire.
export function MaskLine({ children, delay = 0, className = "" }) {
    return (
        <motion.span
            className={`line-mask ${className}`}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
        >
            <motion.span
                style={{ display: "block" }}
                variants={{ hidden: { y: "105%" }, show: { y: "0%" } }}
                transition={{ duration: 1, ease, delay }}
            >
                {children}
            </motion.span>
        </motion.span>
    );
}

export function SectionHead({ eyebrow, lines, aside }) {
    return (
        <div className="section-head">
            <Reveal>
                <span className="eyebrow">{eyebrow}</span>
            </Reveal>
            <h2 className="section-title">
                {lines.map((line, i) => (
                    <MaskLine key={i} delay={0.08 * i}>
                        {line}
                    </MaskLine>
                ))}
            </h2>
            {aside && (
                <Reveal delay={0.2} as="p" className="section-aside">
                    {aside}
                </Reveal>
            )}
        </div>
    );
}
