import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import { ease, viewportOnce } from "../lib/motion";

// Artwork for case studies that don't have a screenshot.

export function BrowserShot({ src, alt }) {
    return (
        <div className="browser">
            <div className="browser-bar">
                <span />
                <span />
                <span />
            </div>
            <div className="browser-view">
                <img src={src} alt={alt} loading="lazy" />
            </div>
        </div>
    );
}

const bars = [62, 84, 45, 92, 70, 38, 76, 58, 88, 50, 66, 80];

// Bars start at zero height, so their parent is observed instead of each bar.
const grow = {
    hidden: { scaleY: 0 },
    show: (h) => ({ scaleY: h / 100 }),
};

export function DashboardVisual() {
    return (
        <div className="viz viz-dash" aria-hidden="true">
            <div className="dash-head">
                <span className="meta">School facilities · Province view</span>
                <span className="dash-live">
                    <i /> Live
                </span>
            </div>
            <motion.div className="dash-kpis" initial="hidden" whileInView="show" viewport={viewportOnce}>
                {["Benches", "Boards", "Classrooms"].map((k, i) => (
                    <div key={k} className="dash-kpi">
                        <span>{k}</span>
                        <div className="dash-spark">
                            {[40, 65, 50, 80, 70, 95].map((h, j) => (
                                <motion.i
                                    key={j}
                                    custom={h}
                                    variants={grow}
                                    transition={{ duration: 0.8, ease, delay: 0.3 + i * 0.1 + j * 0.04 }}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </motion.div>
            <motion.div className="dash-chart" initial="hidden" whileInView="show" viewport={viewportOnce}>
                {bars.map((h, i) => (
                    <motion.span
                        key={i}
                        custom={h}
                        variants={grow}
                        transition={{ duration: 1, ease, delay: 0.4 + i * 0.05 }}
                        className={i === 3 ? "is-hot" : ""}
                    />
                ))}
            </motion.div>
            <div className="dash-foot meta">
                <span>Tableau embed</span>
                <span>Wrike field data</span>
            </div>
        </div>
    );
}

export function TimeflowVisual() {
    const rows = ["Time logs synced", "Approvals collected", "Hours calculated", "Payroll released"];
    return (
        <div className="viz viz-time" aria-hidden="true">
            <div className="time-compare">
                <div>
                    <span className="meta">Before</span>
                    <strong className="time-before">~1 week</strong>
                </div>
                <div>
                    <span className="meta">With TimeFlow</span>
                    <strong className="time-after">30 min</strong>
                </div>
            </div>
            <div className="time-bar">
                <motion.span
                    initial={{ scaleX: 1 }}
                    whileInView={{ scaleX: 0.06 }}
                    viewport={viewportOnce}
                    transition={{ duration: 1.8, ease, delay: 0.4 }}
                />
            </div>
            <ul className="time-rows">
                {rows.map((r, i) => (
                    <motion.li
                        key={r}
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={viewportOnce}
                        transition={{ duration: 0.6, ease, delay: 0.8 + i * 0.15 }}
                    >
                        <span className="time-check">
                            <FiCheck />
                        </span>
                        {r}
                        <span className="meta">Wrike API</span>
                    </motion.li>
                ))}
            </ul>
        </div>
    );
}

// Deterministic QR-looking pattern (decorative, not a real code).
function useQrCells(size = 21) {
    return useMemo(() => {
        let seed = 7;
        const rand = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280);
        const finder = (x, y) =>
            [[0, 0], [size - 7, 0], [0, size - 7]].some(([fx, fy]) => x >= fx && x < fx + 7 && y >= fy && y < fy + 7);
        const finderOn = (x, y) => {
            const lx = x < 7 ? x : x - (size - 7);
            const ly = y < 7 ? y : y - (size - 7);
            const edge = lx === 0 || lx === 6 || ly === 0 || ly === 6;
            const core = lx >= 2 && lx <= 4 && ly >= 2 && ly <= 4;
            return edge || core;
        };
        const cells = [];
        for (let y = 0; y < size; y++) {
            for (let x = 0; x < size; x++) {
                const on = finder(x, y) ? finderOn(x, y) : rand() > 0.52;
                if (on) cells.push([x, y]);
            }
        }
        return cells;
    }, [size]);
}

export function QrVisual() {
    const cells = useQrCells();
    return (
        <div className="viz viz-qr" aria-hidden="true">
            <div className="phone">
                <div className="phone-notch" />
                <span className="meta phone-label">Scan to pay</span>
                <div className="qr">
                    <svg viewBox="0 0 21 21" shapeRendering="crispEdges">
                        {cells.map(([x, y]) => (
                            <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" />
                        ))}
                    </svg>
                    <span className="qr-scan" />
                </div>
                <span className="phone-brand">GiyaPay</span>
            </div>
            <motion.div
                className="toast"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={viewportOnce}
                transition={{ duration: 0.7, ease, delay: 1 }}
            >
                <span className="toast-icon">
                    <FiCheck />
                </span>
                <span>
                    Payment confirmed
                    <small>Reconciled in real time</small>
                </span>
            </motion.div>
        </div>
    );
}
