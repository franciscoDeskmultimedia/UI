"use client";

import Link from "next/link";
import FeAdvancedNav from "@/components/FeAdvancedNav";
import { motion } from "framer-motion";

const chapters = [
  {
    num: 1,
    title: "Web Performance",
    href: "/fe-advanced/performance",
    desc: "Optimizing loading speed and runtime efficiency. Core Web Vitals, code splitting, and lazy loading.",
    icon: "⚡",
    color: "#5ca8fc",
    topics: ["LCP, CLS, INP", "Code Splitting", "Lazy Loading", "Asset Optimization"],
  },
  {
    num: 2,
    title: "Accessibility (A11y)",
    href: "/fe-advanced/accessibility",
    desc: "Building inclusive applications for everyone. ARIA roles, keyboard navigation, and semantic HTML.",
    icon: "♿",
    color: "#9b82ff",
    topics: ["WCAG Guidelines", "Screen Readers", "Keyboard Nav", "ARIA Attributes"],
  },
  {
    num: 3,
    title: "Testing Strategies",
    href: "/fe-advanced/testing",
    desc: "Ensuring code quality and reliability. Unit testing, integration testing, and E2E testing.",
    icon: "🧪",
    color: "#5cf0d0",
    topics: ["Jest & Vitest", "React Testing Lib", "Cypress/Playwright", "TDD"],
  },
  {
    num: 4,
    title: "Scalable Architecture",
    href: "/fe-advanced/architecture",
    desc: "Designing large-scale frontend applications. Module federation, micro-frontends, and monorepos.",
    icon: "🏗️",
    color: "#fc5c8c",
    topics: ["Monorepos", "Micro-frontends", "Design Systems", "State Management"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function FeAdvancedPage() {
  return (
    <>
      <FeAdvancedNav />
      <div className="page-wrapper">
        <section className="hero" style={{ minHeight: "60vh", textAlign: "center" }}>
          <div className="hero-bg">
            <div className="hero-grid" />
          </div>
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-badge" style={{ borderColor: "#5ca8fc", color: "#5ca8fc" }}>
              <span className="hero-badge-dot" style={{ background: "#5ca8fc" }} />
              Advanced Course
            </div>
            <h1 className="hero-title">
              Advanced <span className="hero-title-gradient" style={{ background: "linear-gradient(135deg, #5ca8fc 0%, #9b82ff 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Frontend</span>
            </h1>
            <p className="hero-subtitle">
              Take your skills to the expert level. Master performance, accessibility, and scalable architecture.
            </p>
            <div className="hero-actions">
              <Link href="/fe-advanced/performance" className="btn btn-primary" style={{ background: "linear-gradient(135deg, #5ca8fc 0%, #9b82ff 100%)" }}>
                Start Learning →
              </Link>
            </div>
          </motion.div>
        </section>

        <div className="container" style={{ paddingBottom: 64 }}>
          <motion.div
            className="chapter-grid"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            {chapters.map((ch) => (
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
                      <span style={{ color: ch.color }}>Module {ch.num}</span>
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
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}
