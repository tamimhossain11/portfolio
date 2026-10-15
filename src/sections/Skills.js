import React from "react";
import { motion } from "framer-motion";
import Card from "../components/Card";
import { Reveal, SectionHead } from "../components/Reveal";
import { ease, viewportOnce } from "../lib/motion";
import { leadership, leadershipPhoto, skills } from "../content_option";
import "./Skills.css";

export function Skills() {
    return (
        <section id="skills" className="section skills">
            <div className="container">
                <SectionHead
                    eyebrow="Toolkit"
                    lines={[
                        <>The stack I</>,
                        <>
                            ship <span className="accent">with</span>.
                        </>,
                    ]}
                />
                <div className="skill-grid">
                    {skills.map((group, i) => (
                        <Card
                            key={group.group}
                            className="skill-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={viewportOnce}
                            transition={{ duration: 0.8, ease, delay: (i % 3) * 0.08 }}
                        >
                            <div className="skill-head">
                                <h3>{group.group}</h3>
                                <span className="meta">{String(group.items.length).padStart(2, "0")}</span>
                            </div>
                            <div className="skill-items">
                                {group.items.map((item) => (
                                    <span key={item} className="chip">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function Leadership() {
    return (
        <section id="leadership" className="section leadership">
            <div className="container">
                <SectionHead
                    eyebrow="Leadership & community"
                    lines={[
                        <>Beyond the</>,
                        <>
                            <span className="accent">day job</span>.
                        </>,
                    ]}
                />
                <div className="lead-layout">
                    <ul className="lead-list">
                        {leadership.map((item, i) => (
                            <motion.li
                                key={item.role + item.org}
                                className="lead-row"
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={viewportOnce}
                                transition={{ duration: 0.7, ease, delay: i * 0.06 }}
                            >
                                <span className="lead-when meta">{item.when || "—"}</span>
                                <div className="lead-main">
                                    <h3>{item.role}</h3>
                                    <span className="lead-org">{item.org}</span>
                                </div>
                                <p className="lead-note">{item.note}</p>
                            </motion.li>
                        ))}
                    </ul>
                    <motion.figure
                        className="lead-photo"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewportOnce}
                        transition={{ duration: 0.9, ease }}
                    >
                        <img src={leadershipPhoto.src} alt="Tamim Hossain in Kuala Lumpur" loading="lazy" />
                        <figcaption>{leadershipPhoto.caption}</figcaption>
                    </motion.figure>
                </div>
                <Reveal as="p" className="lead-foot">
                    Hands-on with hardware too — ROS, Arduino, NVIDIA Jetson Nano and Raspberry Pi.
                </Reveal>
            </div>
        </section>
    );
}
