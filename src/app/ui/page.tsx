"use client";

import Link from "next/link";
import Nav from "@/components/Nav";
import { motion } from "framer-motion";
import { useProgress } from "@/lib/progress";

const chapters = [
  {
    num: 1,
    title: "Fundamentals",
    slug: "fundamentals",
    href: "/ui/fundamentals",
    desc: "Core principles that underpin every great UI: usability, design systems, accessibility, and interaction states.",
    icon: "🏛️",
    color: "#7c5cfc",
    topics: ["Usability", "Design Systems", "Accessibility", "80/20 Rule", "Consistency"],
  },
  {
    num: 2,
    title: "Less Is More",
    slug: "less-is-more",
    href: "/ui/less-is-more",
    desc: "Simplify interfaces by removing clutter, using progressive disclosure, and designing mobile-first.",
    icon: "✨",
    color: "#fc5c8c",
    topics: ["Progressive Disclosure", "Mobile First", "Reduce Choice", "Simplicity"],
  },
  {
    num: 3,
    title: "Colour",
    slug: "colour",
    href: "/ui/colour",
    desc: "Build palettes using HSB, ensure contrast, create dark modes, and master transparent layers.",
    icon: "🎨",
    color: "#5cf0d0",
    topics: ["HSB System", "Contrast", "Dark Mode", "Brand Colour", "Transparency"],
  },
  {
    num: 4,
    title: "Layout & Spacing",
    slug: "layout",
    href: "/ui/layout",
    desc: "Group elements, create hierarchy with depth, use grids, and master the box model.",
    icon: "📐",
    color: "#5ca8fc",
    topics: ["Proximity", "12-Column Grid", "White Space", "Visual Hierarchy", "Alignment"],
  },
  {
    num: 5,
    title: "Typography",
    slug: "typography",
    href: "/ui/typography",
    desc: "Choose typefaces, set scales, control line height, and ensure readability at every size.",
    icon: "🔤",
    color: "#fcb85c",
    topics: ["Type Scale", "Line Height", "Font Weight", "Readability", "Typeface Pairing"],
  },
  {
    num: 6,
    title: "Copywriting",
    slug: "copywriting",
    href: "/ui/copywriting",
    desc: "Write concise, clear interface text using sentence case, plain language, and front-loading.",
    icon: "✍️",
    color: "#fc5c5c",
    topics: ["Conciseness", "Sentence Case", "Front-loading", "Error Messages"],
  },
  {
    num: 7,
    title: "Buttons",
    slug: "buttons",
    href: "/ui/buttons",
    desc: "Define button weights, ensure proper hierarchy, accessible sizing, and destructive action patterns.",
    icon: "🔘",
    color: "#9b82ff",
    topics: ["Primary/Secondary/Tertiary", "Target Size", "Disabled States", "Destructive Actions"],
  },
  {
    num: 8,
    title: "Forms",
    slug: "forms",
    href: "/ui/forms",
    desc: "Design accessible, efficient forms with single-column layout, proper labels, and smart validation.",
    icon: "📝",
    color: "#5cf0d0",
    topics: ["Single Column", "Labels", "Validation", "Radio vs Dropdown", "Multi-step"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function HomePage() {
  const { getChapterProgress, getTotalProgress, progress } = useProgress();
  const totalProg = getTotalProgress();

  return (
    <>
      <Nav />
      <div className="page-wrapper">
        {/* Hero */}
        <section className="hero">
          <div className="hero-bg">
            <div className="hero-grid" />
          </div>
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Interactive Design Guide
            </div>
            <h1 className="hero-title">
              Master the Art of <br />
              <span className="hero-title-gradient">Practical UI Design</span>
            </h1>
            <p className="hero-subtitle">
              Explore 100+ actionable UI design principles through interactive
              demos. Based on the book{" "}
              <em>Practical UI 2nd Edition</em> by Adham Dannaway.
            </p>
            <div className="hero-actions">
              <Link href="/ui/fundamentals" className="btn btn-primary">
                Start Exploring →
              </Link>
              <Link href="/ui/final-quiz" className="btn btn-secondary">
                🧠 Final Quiz
              </Link>
            </div>

            {/* Progress */}
            {totalProg.completed > 0 && (
              <motion.div
                className="overall-progress"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="overall-progress-bar">
                  <div
                    className="overall-progress-fill"
                    style={{ width: `${totalProg.percentage}%` }}
                  />
                </div>
                <div className="overall-progress-text">
                  <strong>{totalProg.completed}/{totalProg.total}</strong> chapters completed
                  {progress.finalQuiz.completed && (
                    <> · Final Quiz: <strong>{progress.finalQuiz.bestScore}/{progress.finalQuiz.total}</strong></>
                  )}
                </div>
              </motion.div>
            )}
          </motion.div>
        </section>

        {/* Stats */}
        <div className="container">
          <motion.div
            className="stats-row"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="stat">
              <div className="stat-value">8</div>
              <div className="stat-label">Chapters</div>
            </div>
            <div className="stat">
              <div className="stat-value">100+</div>
              <div className="stat-label">Design Principles</div>
            </div>
            <div className="stat">
              <div className="stat-value">40</div>
              <div className="stat-label">Quiz Questions</div>
            </div>
            <div className="stat">
              <div className="stat-value">373</div>
              <div className="stat-label">Pages Distilled</div>
            </div>
          </motion.div>
        </div>

        {/* Chapter Grid */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <div className="section-label">Explore Chapters</div>
              <h2 className="section-title">
                Everything You Need to Design Beautiful, Usable Interfaces
              </h2>
              <p className="section-desc">
                Each chapter contains interactive demos and a quiz to test your understanding.
                Complete all chapters to unlock the Final Quiz.
              </p>
            </div>

            <motion.div
              className="chapter-grid"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
            >
              {chapters.map((ch) => {
                const cp = getChapterProgress(ch.slug);
                return (
                  <motion.div key={ch.num} variants={item}>
                    <Link
                      href={ch.href}
                      className="chapter-card card"
                      style={{ display: "block" }}
                    >
                      <div className="card-content">
                        <div className="chapter-number">
                          <div
                            className="chapter-icon"
                            style={{ background: `${ch.color}20`, color: ch.color }}
                          >
                            {ch.icon}
                          </div>
                          <span style={{ color: ch.color }}>Chapter {ch.num}</span>
                          {cp.completed && (
                            <span
                              style={{
                                marginLeft: "auto",
                                fontSize: "0.72rem",
                                padding: "2px 10px",
                                borderRadius: 100,
                                background: "rgba(92,240,208,0.12)",
                                color: "#5cf0d0",
                                fontWeight: 600,
                              }}
                            >
                              ✓ {cp.bestScore}/{cp.quizTotal}
                            </span>
                          )}
                        </div>
                        <h3 className="chapter-title">{ch.title}</h3>
                        <p className="chapter-desc">{ch.desc}</p>
                        <div className="chapter-topics">
                          {ch.topics.map((t) => (
                            <span key={t} className="chapter-topic-tag">
                              {t}
                            </span>
                          ))}
                        </div>
                        {cp.completed && (
                          <div className="chapter-card-progress">
                            <div className="chapter-card-progress-bar">
                              <div
                                className="chapter-card-progress-fill"
                                style={{
                                  width: `${cp.quizTotal ? (cp.bestScore / cp.quizTotal) * 100 : 0}%`,
                                }}
                              />
                            </div>
                            <span className="chapter-card-progress-label">
                              Quiz: {Math.round(cp.quizTotal ? (cp.bestScore / cp.quizTotal) * 100 : 0)}%
                            </span>
                          </div>
                        )}
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Final Quiz CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                textAlign: "center",
                padding: "48px 24px",
                background: "var(--bg-secondary)",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--border-subtle)",
                marginTop: 24,
              }}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: 12 }}>🏆</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", marginBottom: 8 }}>
                Ready for the Final Quiz?
              </h3>
              <p style={{ color: "var(--text-secondary)", marginBottom: 20, maxWidth: 500, margin: "0 auto 20px" }}>
                Test your knowledge across all 8 chapters with 16 randomised questions.
                {totalProg.completed < totalProg.total
                  ? ` Complete ${totalProg.total - totalProg.completed} more chapter quiz${totalProg.total - totalProg.completed > 1 ? "zes" : ""} first.`
                  : " You've completed all chapters — go for it!"}
              </p>
              <Link href="/ui/final-quiz" className="btn btn-primary">
                Take the Final Quiz →
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p className="footer-text">
            Based on <strong>Practical UI 2nd Edition</strong> by Adham Dannaway
            — interactive companion built for learning.
          </p>
        </footer>
      </div>
    </>
  );
}
