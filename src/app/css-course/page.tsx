"use client";

import CssNav from "@/components/CssNav";
import Link from "next/link";
import { motion } from "framer-motion";

const chapters = [
  {
    num: 1,
    title: "Basics & Selectors",
    href: "/css-course/basics",
    desc: "Syntax, Classes, IDs, and Combinators. Understanding specificity.",
    icon: "🏗️",
    color: "#1572B6",
  },
  {
    num: 2,
    title: "Colors & Backgrounds",
    href: "/css-course/colors",
    desc: "RGB, HSL, Gradients, and Background properties.",
    icon: "🎨",
    color: "#1572B6",
  },
   {
    num: 3,
    title: "Fonts & Text",
    href: "/css-course/text",
    desc: "Typography, Web Fonts, Spacing, and Decorations.",
    icon: "📝",
    color: "#1572B6",
  },
  {
    num: 4,
    title: "The Box Model",
    href: "/css-course/box-model",
    desc: "Margin, Border, Padding, and Content. Box-sizing strategies.",
    icon: "📦",
    color: "#1572B6",
  },
  {
    num: 5,
    title: "Flexbox Mastery",
    href: "/css-course/flexbox",
    desc: "Align, distribute, and reorder elements with ease using Flexbox.",
    icon: "📐",
    color: "#1572B6",
  },
  {
    num: 6,
    title: "CSS Grid",
    href: "/css-course/grid",
    desc: "Two-dimensional layouts made simple. Build complex dashboard layouts.",
    icon: "📏",
    color: "#1572B6",
  },
  {
    num: 7,
    title: "Animations",
    href: "/css-course/animations",
    desc: "Keyframes, transitions, and performance-optimized transforms.",
    icon: "🎞️",
    color: "#1572B6",
  },
  {
    num: 8,
    title: "Responsive Design",
    href: "/css-course/responsive",
    desc: "Media queries, container queries, and fluid typography.",
    icon: "📱",
    color: "#1572B6",
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

export default function CssCoursePage() {
  return (
    <>
      <CssNav />
      <div className="page-wrapper">
        <section className="hero" style={{ minHeight: "60vh", textAlign: "center" }}>
          <div className="hero-bg">
             <div className="hero-grid" style={{ opacity: 0.05, backgroundSize: "40px 40px", backgroundImage: "linear-gradient(to right, #1572B6 1px, transparent 1px), linear-gradient(to bottom, #1572B6 1px, transparent 1px)" }} />
          </div>
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-badge" style={{ borderColor: "#1572B6", color: "#1572B6" }}>
              <span className="hero-badge-dot" style={{ background: "#1572B6" }} />
              CSS Mastery
            </div>
            <h1 className="hero-title">
             Complete CSS <br />
              <span className="hero-title-gradient" style={{ background: "linear-gradient(135deg, #1572B6 0%, #33AADD 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Curriculum</span>
            </h1>
            <p className="hero-subtitle">
              Learn to create stunning, responsive, and accessible layouts with modern CSS techniques.
            </p>
            <div className="hero-actions">
              <Link href="/css-course/basics" className="btn btn-primary" style={{ background: "#1572B6" }}>
                Start Course →
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
                  style={{ display: "block", borderColor: "rgba(21, 114, 182, 0.2)" }}
                >
                  <div className="card-content">
                    <div className="chapter-number">
                      <div
                        className="chapter-icon"
                        style={{ background: "rgba(21, 114, 182, 0.1)", color: ch.color }}
                      >
                        {ch.icon}
                      </div>
                      <span style={{ color: ch.color }}>Module {ch.num}</span>
                    </div>
                    <h3 className="chapter-title">{ch.title}</h3>
                    <p className="chapter-desc">{ch.desc}</p>
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
