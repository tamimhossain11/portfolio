import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";

const readTheme = () => document.documentElement.getAttribute("data-theme") || "dark";

export default function ThemeToggle() {
    const [theme, setTheme] = useState(readTheme);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        try {
            localStorage.setItem("theme", theme);
        } catch (e) {}
    }, [theme]);

    const next = theme === "dark" ? "light" : "dark";

    return (
        <button
            className="theme-toggle"
            onClick={() => setTheme(next)}
            aria-label={`Switch to ${next} mode`}
            title={`Switch to ${next} mode`}
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.span
                    key={theme}
                    initial={{ rotate: -90, scale: 0.4, opacity: 0 }}
                    animate={{ rotate: 0, scale: 1, opacity: 1 }}
                    exit={{ rotate: 90, scale: 0.4, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                >
                    {theme === "dark" ? <FiSun /> : <FiMoon />}
                </motion.span>
            </AnimatePresence>
        </button>
    );
}
