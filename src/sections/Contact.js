import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiCheck, FiCopy, FiDownload } from "react-icons/fi";
import Magnetic from "../components/Magnetic";
import { MaskLine, Reveal } from "../components/Reveal";
import { useLocalTime } from "../lib/hooks";
import { profile, socials } from "../content_option";
import "./Contact.css";

function CopyEmail() {
    const [copied, setCopied] = useState(false);

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(profile.email);
            setCopied(true);
            setTimeout(() => setCopied(false), 1800);
        } catch (e) {
            window.location.href = `mailto:${profile.email}`;
        }
    };

    return (
        <button className="copy-btn" onClick={copy} aria-label="Copy email address">
            <AnimatePresence mode="wait" initial={false}>
                <motion.span
                    key={copied ? "done" : "copy"}
                    initial={{ y: 12, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -12, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {copied ? (
                        <>
                            <FiCheck /> Copied
                        </>
                    ) : (
                        <>
                            <FiCopy /> Copy
                        </>
                    )}
                </motion.span>
            </AnimatePresence>
        </button>
    );
}

export default function Contact() {
    const time = useLocalTime(profile.timezone);

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="contact-hero">
                    <Reveal>
                        <span className="eyebrow">Contact</span>
                    </Reveal>
                    <h2 className="contact-title">
                        <MaskLine>Have a product</MaskLine>
                        <MaskLine delay={0.08}>
                            to <span className="accent">build</span>?
                        </MaskLine>
                        <MaskLine delay={0.16}>Let's talk.</MaskLine>
                    </h2>

                    <Reveal className="contact-email-row" delay={0.2}>
                        <a href={`mailto:${profile.email}`} className="contact-email" data-cursor="Email">
                            {profile.email}
                        </a>
                        <CopyEmail />
                    </Reveal>

                    <Reveal className="contact-actions" delay={0.3}>
                        <Magnetic>
                            <a href={`mailto:${profile.email}`} className="btn btn-primary">
                                Send an email <FiArrowUpRight />
                            </a>
                        </Magnetic>
                        <Magnetic>
                            <a href={`tel:${profile.phoneHref}`} className="btn btn-ghost">
                                {profile.phone}
                            </a>
                        </Magnetic>
                        <Magnetic>
                            <a
                                href={encodeURI(profile.cv)}
                                className="btn btn-ghost"
                                download="MD_Tamim_Hossain_CV.pdf"
                            >
                                CV <FiDownload />
                            </a>
                        </Magnetic>
                    </Reveal>
                </div>

                <footer className="footer">
                    <div className="footer-cols">
                        <div>
                            <span className="footer-label meta">Socials</span>
                            <ul>
                                {socials.map((s) => (
                                    <li key={s.label}>
                                        <a href={s.href} target="_blank" rel="noreferrer" className="footer-link">
                                            {s.label} <FiArrowUpRight />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <span className="footer-label meta">Local time</span>
                            <p>
                                {time} <span className="footer-dim">Dhaka, GMT+6</span>
                            </p>
                        </div>
                        <div>
                            <span className="footer-label meta">Built with</span>
                            <p>
                                React <span className="footer-dim">& Framer Motion</span>
                            </p>
                        </div>
                    </div>

                    <div className="footer-bottom meta">
                        <span>
                            © {new Date().getFullYear()} {profile.name}
                        </span>
                        <span>Designed & built by me</span>
                    </div>
                </footer>
            </div>
        </section>
    );
}
