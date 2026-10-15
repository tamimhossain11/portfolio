import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { FiTrendingUp } from "react-icons/fi";
import { Reveal, SectionHead } from "../components/Reveal";
import { ease, fadeUp, stagger, viewportOnce } from "../lib/motion";
import { experience } from "../content_option";
import "./Experience.css";

export default function Experience() {
    const lineRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: lineRef, offset: ["start 75%", "end 55%"] });
    const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

    return (
        <section id="experience" className="section experience">
            <div className="container exp-layout">
                <div className="exp-aside">
                    <SectionHead
                        eyebrow="Experience"
                        lines={[
                            <>Where I've</>,
                            <>
                                <span className="accent">built</span> things.
                            </>,
                        ]}
                        aside="Two-plus years shipping production software for fintech, commerce and government — remotely, from Dhaka, for teams in the Philippines."
                    />
                </div>

                <div className="timeline" ref={lineRef}>
                    <div className="timeline-track" aria-hidden="true">
                        <motion.div className="timeline-fill" style={{ scaleY: fill }} />
                    </div>

                    {experience.map((job) => (
                        <motion.article
                            key={job.company}
                            className="job"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={viewportOnce}
                            transition={{ duration: 0.9, ease }}
                        >
                            <span className="job-dot" aria-hidden="true" />
                            <div className="job-meta meta">
                                <span>{job.period}</span>
                                <span>{job.location}</span>
                            </div>
                            <h3 className="job-role">{job.role}</h3>
                            <p className="job-company">{job.company}</p>
                            {job.note && (
                                <span className="job-note">
                                    <FiTrendingUp /> {job.note}
                                </span>
                            )}
                            <motion.ul
                                className="job-points"
                                variants={stagger(0.07, 0.2)}
                                initial="hidden"
                                whileInView="show"
                                viewport={viewportOnce}
                            >
                                {job.points.map((p) => (
                                    <motion.li key={p} variants={fadeUp}>
                                        {p}
                                    </motion.li>
                                ))}
                            </motion.ul>
                            <Reveal className="job-stack" delay={0.2}>
                                {job.stack.map((s) => (
                                    <span key={s} className="chip">
                                        {s}
                                    </span>
                                ))}
                            </Reveal>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
