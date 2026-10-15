import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";
import { ease, easeInOut } from "../lib/motion";
import { profile } from "../content_option";

// Logo strokes draw in, the accent dot pops, then the curtain lifts.
const DURATION = 1900;

export default function Preloader({ onDone }) {
    useEffect(() => {
        const id = setTimeout(onDone, DURATION);
        return () => clearTimeout(id);
    }, [onDone]);

    return (
        <motion.div
            className="preloader"
            exit={{ y: "-100%" }}
            transition={{ duration: 0.9, ease: easeInOut }}
            aria-hidden="true"
        >
            <div className="preloader-center">
                <Logo size={88} draw className="preloader-logo" />
                <motion.span
                    className="preloader-name"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease, delay: 1 }}
                >
                    {profile.name}
                </motion.span>
            </div>
            <motion.div
                className="preloader-bar"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: DURATION / 1000, ease: "easeInOut" }}
            />
        </motion.div>
    );
}
