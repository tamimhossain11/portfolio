import React from "react";
import { motion } from "framer-motion";

export default function Card({ children, className = "", ...rest }) {
    return (
        <motion.div className={`card ${className}`} {...rest}>
            {children}
        </motion.div>
    );
}
