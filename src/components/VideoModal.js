import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import { ease } from "../lib/motion";
import { lockScroll } from "../lib/scroll";

const toEmbed = (url) => {
    const match = url.match(/(?:youtu\.be\/|v=|embed\/)([\w-]{6,})/);
    return match ? `https://www.youtube-nocookie.com/embed/${match[1]}?autoplay=1&rel=0` : url;
};

export default function VideoModal({ video, onClose }) {
    useEffect(() => {
        if (!video) return;
        lockScroll(true);
        const onKey = (e) => e.key === "Escape" && onClose();
        window.addEventListener("keydown", onKey);
        return () => {
            lockScroll(false);
            window.removeEventListener("keydown", onKey);
        };
    }, [video, onClose]);

    return (
        <AnimatePresence>
            {video && (
                <motion.div
                    className="modal"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    role="dialog"
                    aria-modal="true"
                    aria-label={video.title}
                >
                    <motion.div
                        className="modal-body"
                        initial={{ scale: 0.92, y: 30, opacity: 0 }}
                        animate={{ scale: 1, y: 0, opacity: 1 }}
                        exit={{ scale: 0.95, y: 20, opacity: 0 }}
                        transition={{ duration: 0.5, ease }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="modal-head">
                            <span>{video.title}</span>
                            <button className="modal-close" onClick={onClose} aria-label="Close video">
                                <FiX />
                            </button>
                        </div>
                        <div className="modal-frame">
                            <iframe
                                src={toEmbed(video.url)}
                                title={video.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
