import React from "react";
import { motion } from "framer-motion";
import CountUp from "../components/CountUp";
import Card from "../components/Card";
import { SectionHead } from "../components/Reveal";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";
import { marquee, stats } from "../content_option";
import "./Impact.css";

export function Marquee() {
    const row = [...marquee, ...marquee];
    return (
        <div className="marquee" aria-label="Technologies I work with">
            <div className="marquee-track">
                {row.map((item, i) => (
                    <span key={i} className="marquee-item" aria-hidden={i >= marquee.length}>
                        {item}
                        <span className="marquee-star">✦</span>
                    </span>
                ))}
            </div>
        </div>
    );
}

export default function Impact() {
    return (
        <section id="impact" className="section impact">
            <div className="container">
                <SectionHead
                    eyebrow="Impact"
                    lines={[
                        <>Results, not just</>,
                        <>
                            <span className="accent">features</span> shipped.
                        </>,
                    ]}
                />
                <motion.div
                    className="stats"
                    variants={stagger(0.1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportOnce}
                >
                    {stats.map((s, i) => (
                        <Card key={s.label} className="stat" variants={fadeUp}>
                            <span className="stat-index meta">0{i + 1}</span>
                            <div className="stat-value">
                                <CountUp to={s.value} suffix={s.suffix} />
                            </div>
                            <p className="stat-label">{s.label}</p>
                        </Card>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
