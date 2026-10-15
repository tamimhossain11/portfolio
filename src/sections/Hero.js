import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { FiArrowDownRight, FiArrowUpRight, FiDownload } from "react-icons/fi";
import Magnetic from "../components/Magnetic";
import { ease } from "../lib/motion";
import { handleAnchor } from "../lib/scroll";
import { useLocalTime } from "../lib/hooks";
import { profile } from "../content_option";
import "./Hero.css";

function Letters({ text, start, ready, className = "" }) {
    return (
        <span className={`hero-word ${className}`} aria-hidden="true">
            {text.split("").map((ch, i) => (
                <span className="hero-letter-mask" key={i}>
                    <motion.span
                        className="hero-letter"
                        initial={{ y: "110%", rotate: 8 }}
                        animate={ready ? { y: "0%", rotate: 0 } : {}}
                        transition={{ duration: 1.1, ease, delay: start + i * 0.045 }}
                    >
                        {ch}
                    </motion.span>
                </span>
            ))}
        </span>
    );
}

function RotatingWord({ words }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => setIndex((i) => (i + 1) % words.length), 2400);
        return () => clearInterval(id);
    }, [words.length]);

    return (
        <span className="rotator">
            <AnimatePresence mode="wait" initial={false}>
                <motion.span
                    key={words[index]}
                    className="accent"
                    initial={{ y: "70%", opacity: 0, filter: "blur(6px)" }}
                    animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: "-70%", opacity: 0, filter: "blur(6px)" }}
                    transition={{ duration: 0.35, ease }}
                >
                    {words[index]}.
                </motion.span>
            </AnimatePresence>
        </span>
    );
}

function Portrait({ ready }) {
    const ref = useRef(null);
    const rx = useMotionValue(0);
    const ry = useMotionValue(0);
    const rotateX = useSpring(rx, { stiffness: 140, damping: 18 });
    const rotateY = useSpring(ry, { stiffness: 140, damping: 18 });

    const onMove = (e) => {
        if (e.pointerType !== "mouse" || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        ry.set(px * 16);
        rx.set(-py * 16);
    };
    const reset = () => {
        rx.set(0);
        ry.set(0);
    };

    return (
        <motion.div
            className="hero-visual"
            initial={{ opacity: 0, y: 60 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease, delay: 0.35 }}
        >
            <motion.div
                ref={ref}
                className="portrait"
                style={{ rotateX, rotateY }}
                onPointerMove={onMove}
                onPointerLeave={reset}
            >
                <motion.div
                    className="portrait-media"
                    initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
                    animate={ready ? { clipPath: "inset(0% 0% 0% 0%)" } : {}}
                    transition={{ duration: 1.3, ease, delay: 0.45 }}
                >
                    <motion.img
                        src={profile.portrait}
                        alt="Portrait of MD Tamim Hossain"
                        initial={{ scale: 1.35 }}
                        animate={ready ? { scale: 1 } : {}}
                        transition={{ duration: 1.8, ease, delay: 0.45 }}
                    />
                </motion.div>

                <motion.div
                    className="float-chip chip-a"
                    initial={{ opacity: 0, scale: 0.8, x: -20 }}
                    animate={ready ? { opacity: 1, scale: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, ease, delay: 1.3 }}
                >
                    <span className="chip-dot" />
                    <span>
                        Gov't contract won
                        <small>DepEd POC — point person</small>
                    </span>
                </motion.div>
                <motion.div
                    className="float-chip chip-b"
                    initial={{ opacity: 0, scale: 0.8, x: 20 }}
                    animate={ready ? { opacity: 1, scale: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, ease, delay: 1.5 }}
                >
                    <span className="chip-big">
                        <s>1 week</s> → <b>30 min</b>
                    </span>
                    <small>Payroll release with TimeFlow</small>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default function Hero({ ready }) {
    const sectionRef = useRef(null);
    const time = useLocalTime(profile.timezone);
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
    const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

    const fadeIn = (delay) => ({
        initial: { opacity: 0, y: 24 },
        animate: ready ? { opacity: 1, y: 0 } : {},
        transition: { duration: 0.9, ease, delay },
    });

    return (
        <section id="top" className="hero" ref={sectionRef}>
            <motion.div className="container hero-inner" style={{ y, opacity: fade }}>
                <div className="hero-copy">
                    <motion.div className="hero-status" {...fadeIn(0.2)}>
                        <span className="pulse" />
                        {profile.status}
                    </motion.div>

                    <h1 className="hero-name" aria-label={profile.name}>
                        <Letters text={profile.firstName} start={0.25} ready={ready} />
                        <span className="hero-line-2">
                            <Letters text={profile.lastName} start={0.45} ready={ready} />
                            <span className="hero-letter-mask" aria-hidden="true">
                                <motion.span
                                    className="hero-letter hero-dot"
                                    initial={{ y: "110%" }}
                                    animate={ready ? { y: "0%" } : {}}
                                    transition={{ duration: 1.1, ease, delay: 0.85 }}
                                >
                                    .
                                </motion.span>
                            </span>
                        </span>
                    </h1>

                    <motion.p className="hero-lede" {...fadeIn(0.8)}>
                        Full-stack product engineer shipping software{" "}
                        <span className="nowrap">
                            for <RotatingWord words={profile.rotatingWords} />
                        </span>
                    </motion.p>

                    <motion.p className="hero-intro" {...fadeIn(0.95)}>
                        {profile.intro}
                    </motion.p>

                    <motion.div className="hero-ctas" {...fadeIn(1.1)}>
                        <Magnetic>
                            <a href="#work" className="btn btn-primary" onClick={handleAnchor}>
                                See my work <FiArrowUpRight />
                            </a>
                        </Magnetic>
                        <Magnetic>
                            <a
                                href={encodeURI(profile.cv)}
                                className="btn btn-ghost"
                                download="MD_Tamim_Hossain_CV.pdf"
                            >
                                Download CV <FiDownload />
                            </a>
                        </Magnetic>
                    </motion.div>
                </div>

                <Portrait ready={ready} />
            </motion.div>

            <motion.div className="container hero-foot" {...fadeIn(1.3)}>
                <span className="meta">
                    {profile.location} — {time} GMT+6
                </span>
                <a href="#impact" className="hero-scroll meta" onClick={handleAnchor}>
                    <span className="hero-scroll-track">
                        <span className="hero-scroll-thumb" />
                    </span>
                    Scroll
                </a>
                <span className="meta hero-foot-right">
                    2+ yrs · Fintech · Commerce · Gov-tech <FiArrowDownRight />
                </span>
            </motion.div>
        </section>
    );
}
