import React, { useCallback, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiPlay } from "react-icons/fi";
import { Reveal, SectionHead } from "../components/Reveal";
import VideoModal from "../components/VideoModal";
import { BrowserShot, DashboardVisual, QrVisual, TimeflowVisual } from "./Visuals";
import { useMediaQuery } from "../lib/hooks";
import { ease, viewportOnce } from "../lib/motion";
import { caseStudies, moreProjects } from "../content_option";
import "./Work.css";

const visuals = {
    dashboard: DashboardVisual,
    timeflow: TimeflowVisual,
    qr: QrVisual,
};

function CaseCard({ item, index, total, progress, stacked }) {
    const targetScale = 1 - (total - 1 - index) * 0.045;
    const scale = useTransform(progress, [index / total, 1], [1, targetScale]);
    const Visual = visuals[item.visual];

    return (
        <div className="stack-item" style={stacked ? { top: `calc(96px + ${index * 26}px)` } : undefined}>
            <motion.article
                className="case"
                style={stacked ? { scale } : undefined}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.9, ease }}
            >
                <div className="case-copy">
                    <div className="case-top">
                        <span className="meta case-num">
                            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                        </span>
                        <span className="chip">{item.tag}</span>
                    </div>
                    <h3 className="case-title">{item.title}</h3>
                    <p className="case-kicker">{item.kicker}</p>

                    <dl className="case-body">
                        <div>
                            <dt className="meta">Problem</dt>
                            <dd>{item.problem}</dd>
                        </div>
                        <div>
                            <dt className="meta">What I built</dt>
                            <dd>{item.build}</dd>
                        </div>
                    </dl>

                    <div className="case-result">
                        <span className="meta">Result</span>
                        <strong>{item.result}</strong>
                    </div>

                    <div className="case-stack">
                        {item.stack.slice(0, 7).map((s) => (
                            <span key={s} className="chip">
                                {s}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="case-visual">
                    {item.visual === "image" ? <BrowserShot src={item.img} alt={`${item.title} screenshot`} /> : <Visual />}
                </div>
            </motion.article>
        </div>
    );
}

function ProjectCard({ project, onPlay, index }) {
    const hasVideo = Boolean(project.video);
    return (
        <motion.article
            className="project"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, ease, delay: (index % 2) * 0.1 }}
        >
            <button
                className="project-media"
                onClick={hasVideo ? () => onPlay({ url: project.video, title: project.title }) : undefined}
                data-cursor={hasVideo ? "Play" : undefined}
                disabled={!hasVideo}
                aria-label={hasVideo ? `Play ${project.title} demo video` : project.title}
            >
                {project.img ? (
                    <img src={project.img} alt="" loading="lazy" />
                ) : (
                    <div className="project-placeholder">
                        <span>{project.title}</span>
                    </div>
                )}
                {hasVideo && (
                    <span className="project-play">
                        <FiPlay /> Watch demo
                    </span>
                )}
                {project.badge && <span className="project-badge meta">{project.badge}</span>}
            </button>
            <div className="project-info">
                <h4>{project.title}</h4>
                <p>{project.desc}</p>
                <div className="project-stack">
                    {project.stack.map((s) => (
                        <span key={s} className="meta">
                            {s}
                        </span>
                    ))}
                </div>
            </div>
        </motion.article>
    );
}

export default function Work() {
    const stackRef = useRef(null);
    const stacked = useMediaQuery("(min-width: 1000px) and (min-height: 700px)");
    const { scrollYProgress } = useScroll({ target: stackRef, offset: ["start start", "end end"] });
    const [video, setVideo] = useState(null);
    const closeVideo = useCallback(() => setVideo(null), []);

    return (
        <section id="work" className="section work">
            <div className="container">
                <SectionHead
                    eyebrow="Selected work"
                    lines={[
                        <>Case studies that</>,
                        <>
                            <span className="accent">moved</span> the needle.
                        </>,
                    ]}
                />

                <div className={`stack ${stacked ? "is-stacked" : ""}`} ref={stackRef}>
                    {caseStudies.map((item, i) => (
                        <CaseCard
                            key={item.id}
                            item={item}
                            index={i}
                            total={caseStudies.length}
                            progress={scrollYProgress}
                            stacked={stacked}
                        />
                    ))}
                </div>

                <div className="more">
                    <Reveal className="more-head">
                        <h3>More projects</h3>
                        <span className="meta">Events · Robotics · E-commerce</span>
                    </Reveal>
                    <div className="more-grid">
                        {moreProjects.map((p, i) => (
                            <ProjectCard key={p.title} project={p} onPlay={setVideo} index={i} />
                        ))}
                    </div>
                </div>
            </div>
            <VideoModal video={video} onClose={closeVideo} />
        </section>
    );
}
