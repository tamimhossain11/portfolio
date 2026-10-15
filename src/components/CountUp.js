import React, { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { prefersReducedMotion } from "../lib/scroll";

export default function CountUp({ to, duration = 1.8, prefix = "", suffix = "" }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!inView) return;
        if (prefersReducedMotion()) {
            setValue(to);
            return;
        }
        const controls = animate(0, to, {
            duration,
            ease: [0.16, 1, 0.3, 1],
            onUpdate: (v) => setValue(Math.round(v)),
        });
        return () => controls.stop();
    }, [inView, to, duration]);

    return (
        <span ref={ref}>
            {prefix}
            {value}
            {suffix && <span className="count-suffix">{suffix}</span>}
        </span>
    );
}
