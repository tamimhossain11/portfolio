import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiBookOpen, FiBriefcase, FiGlobe, FiMapPin, FiZap } from "react-icons/fi";
import Card from "../components/Card";
import { Reveal } from "../components/Reveal";
import { ease, fadeUp, stagger, viewportOnce } from "../lib/motion";
import { useLocalTime } from "../lib/hooks";
import { about, profile } from "../content_option";
import "./About.css";

function Word({ children, progress, range }) {
    const opacity = useTransform(progress, range, [0.14, 1]);
    return (
        <span className="statement-word">
            <motion.span style={{ opacity }}>{children}</motion.span>{" "}
        </span>
    );
}

function Statement({ text }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 45%"] });
    const words = text.split(" ");

    return (
        <p className="statement" ref={ref}>
            {words.map((w, i) => {
                const start = i / words.length;
                return (
                    <Word key={i} progress={scrollYProgress} range={[start, start + 1 / words.length]}>
                        {w}
                    </Word>
                );
            })}
        </p>
    );
}

export default function About() {
    const time = useLocalTime(profile.timezone);

    return (
        <section id="about" className="section about">
            <div className="container">
                <Reveal>
                    <span className="eyebrow">About</span>
                </Reveal>
                <Statement text={about.statement} />

                <motion.div
                    className="bento"
                    variants={stagger(0.08)}
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportOnce}
                >
                    <Card className="bento-card b-photo" variants={fadeUp}>
                        <motion.img
                            src={about.photo.src}
                            alt="Tamim Hossain in front of the Petronas Towers"
                            loading="lazy"
                            initial={{ scale: 1.15 }}
                            whileInView={{ scale: 1 }}
                            viewport={viewportOnce}
                            transition={{ duration: 1.4, ease }}
                        />
                        <span className="photo-caption">
                            <FiMapPin /> {about.photo.caption}
                        </span>
                    </Card>

                    <Card className="bento-card b-now" variants={fadeUp}>
                        <span className="bento-label">
                            <FiBriefcase /> Currently
                        </span>
                        <div className="now-list">
                            <div>
                                <strong>Product Engineer</strong>
                                <span>BIMS Technologies Inc. · Remote, Philippines</span>
                            </div>
                            <div>
                                <strong>Chief Technology Officer (Volunteer)</strong>
                                <span>Dreams of Bangladesh · Part-time</span>
                            </div>
                        </div>
                    </Card>

                    <Card className="bento-card b-loc" variants={fadeUp}>
                        <span className="bento-label">
                            <FiMapPin /> Based in
                        </span>
                        <div className="loc">
                            <strong>Dhaka</strong>
                            <span>Bangladesh</span>
                        </div>
                        <div className="loc-time meta">
                            <span className="pulse" /> {time} local · GMT+6
                        </div>
                    </Card>

                    <Card className="bento-card b-edu" variants={fadeUp}>
                        <span className="bento-label">
                            <FiBookOpen /> Education
                        </span>
                        <ul className="edu">
                            {about.education.map((e) => (
                                <li key={e.title}>
                                    <div>
                                        <strong>{e.title}</strong>
                                        <span>{e.place}</span>
                                    </div>
                                    <span className="meta">{e.when}</span>
                                </li>
                            ))}
                        </ul>
                    </Card>

                    <Card className="bento-card b-focus" variants={fadeUp}>
                        <span className="bento-label">
                            <FiZap /> Focus areas
                        </span>
                        <div className="focus">
                            {about.focus.map((f) => (
                                <span key={f} className="chip">
                                    {f}
                                </span>
                            ))}
                        </div>
                    </Card>

                    <Card className="bento-card b-lang" variants={fadeUp}>
                        <span className="bento-label">
                            <FiGlobe /> Languages
                        </span>
                        <ul className="langs">
                            {about.languages.map((l) => (
                                <li key={l.name}>
                                    <strong>{l.name}</strong>
                                    <span className="meta">{l.level}</span>
                                </li>
                            ))}
                        </ul>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}
