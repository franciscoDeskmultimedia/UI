"use client";

import JsNav from "@/components/JsNav";
import Link from "next/link";
import { motion } from "framer-motion";

const chapters = [
  {
    num: 1,
    title: "Basics & Output",
    href: "/js-course/basics",
    desc: "Syntax, Statements, and `console.log`.",
    icon: "🏗️",
    color: "#F7DF1E",
  },
  {
    num: 2,
    title: "Variables (let, const)",
    href: "/js-course/variables",
    desc: "Modern variable declaration. Scope and Hoisting.",
    icon: "📦",
    color: "#F7DF1E",
  },
  {
    num: 3,
    title: "Functions",
    href: "/js-course/functions",
    desc: "Writing reusable logic. Arrow functions vs. Traditional.",
    icon: "⚙️",
    color: "#F7DF1E",
  },
  {
    num: 4,
    title: "Objects",
    href: "/js-course/objects",
    desc: "Properties, Methods, and `this` keyword.",
    icon: "🧩",
    color: "#F7DF1E",
  },
  {
    num: 5,
    title: "Events",
    href: "/js-course/events",
    desc: "Responding to user interactions like clicks and input.",
    icon: "🖱️",
    color: "#F7DF1E",
  },
  {
    num: 6,
    title: "DOM Manipulation",
    href: "/js-course/dom",
    desc: "Selecting and changing HTML elements dynamically.",
    icon: "🌲",
    color: "#F7DF1E",
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

export default function JsCoursePage() {
  return (
    <>
      <JsNav />
      <div className="page-wrapper">
        <section className="hero" style={{ minHeight: "60vh", textAlign: "center" }}>
          <div className="hero-bg">
             <div className="hero-grid" style={{ opacity: 0.05, backgroundSize: "40px 40px", backgroundImage: "linear-gradient(to right, #F7DF1E 1px, transparent 1px), linear-gradient(to bottom, #F7DF1E 1px, transparent 1px)" }} />
          </div>
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-badge" style={{ borderColor: "#F7DF1E", color: "#F7DF1E" }}>
              <span className="hero-badge-dot" style={{ background: "#F7DF1E" }} />
              JS Mastery
            </div>
            <h1 className="hero-title">
              Complete JavaScript <br />
              <span className="hero-title-gradient" style={{ background: "linear-gradient(135deg, #F7DF1E 0%, #FFD700 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Curriculum</span>
            </h1>
            <p className="hero-subtitle">
              The programming language of the Web. Learn to make pages interactive.
            </p>
            <div className="hero-actions">
              <Link href="/js-course/basics" className="btn btn-primary" style={{ background: "#F7DF1E", color: "black", fontWeight: "bold" }}>
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
                  style={{ display: "block", borderColor: "rgba(247, 223, 30, 0.2)" }}
                >
                  <div className="card-content">
                    <div className="chapter-number">
                      <div
                        className="chapter-icon"
                        style={{ background: "rgba(247, 223, 30, 0.1)", color: ch.color }}
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
