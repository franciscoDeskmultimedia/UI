"use client";

import Link from "next/link";
import FeNav from "@/components/FeNav";
import { motion } from "framer-motion";

const chapters = [
  {
    num: 1,
    title: "HTML & CSS",
    href: "/fe-fundamentals/html-css",
    desc: "The semantic structure and styling of the web. Learn Flexbox, Grid, and responsive design.",
    icon: "🎨",
    color: "#fc5c8c",
    topics: ["Semantic HTML", "Flexbox & Grid", "Box Model", "Responsive Design"],
  },
  {
    num: 2,
    title: "JavaScript Basics",
    href: "/fe-fundamentals/javascript",
    desc: "The programming language of the web. Variables, functions, loops, and ES6+ features.",
    icon: "📜",
    color: "#fcb85c",
    topics: ["Variables & Scope", "Functions", "ES6+ Syntax", "Arrays & Objects"],
  },
  {
    num: 3,
    title: "DOM Manipulation",
    href: "/fe-fundamentals/dom",
    desc: "Interacting with the browser. Selecting elements, handling events, and modifying content.",
    icon: "🖱️",
    color: "#5cf0d0",
    topics: ["Query Selector", "Event Listeners", "Creating Elements", "Traversing DOM"],
  },
  {
    num: 4,
    title: "Async Programming",
    href: "/fe-fundamentals/async",
    desc: "Handling asynchronous operations. Promises, Async/Await, and the Fetch API.",
    icon: "⏳",
    color: "#9b82ff",
    topics: ["Callbacks", "Promises", "Async/Await", "Fetch API"],
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

export default function FeFundamentalsPage() {
  return (
    <>
      <FeNav />
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
            <div className="hero-badge" style={{ borderColor: "#fc5c8c", color: "#fc5c8c" }}>
              <span className="hero-badge-dot" style={{ background: "#fc5c8c" }} />
              Frontend Course
            </div>
            <h1 className="hero-title">
              Frontend <span className="hero-title-gradient" style={{ background: "linear-gradient(135deg, #fc5c8c 0%, #fcb85c 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Fundamentals</span>
            </h1>
            <p className="hero-subtitle">
              Master the essential building blocks of the modern web. From semantic HTML to asynchronous JavaScript.
            </p>
            <div className="hero-actions">
              <Link href="/fe-fundamentals/html-css" className="btn btn-primary" style={{ background: "linear-gradient(135deg, #fc5c8c 0%, #fcb85c 100%)" }}>
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
