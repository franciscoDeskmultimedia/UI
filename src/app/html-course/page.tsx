"use client";

import HtmlNav from "@/components/HtmlNav";
import Link from "next/link";
import { motion } from "framer-motion";

const chapters = [
  {
    num: 1,
    title: "Basics & Structure",
    href: "/html-course/basics",
    desc: "The skeleton of every page. Elements, Attributes, Headings, and Paragraphs.",
    icon: "🏗️",
    color: "#E34F26",
  },
  {
    num: 2,
    title: "Working with Text",
    href: "/html-course/text",
    desc: "Formatting, Quotations, Comments, Colors, and Links.",
    icon: "📝",
    color: "#E34F26",
  },
  {
    num: 3,
    title: "Media & Images",
    href: "/html-course/media",
    desc: "Adding Images, Favicons, Video, Audio, and Iframes.",
    icon: "🎞️",
    color: "#E34F26",
  },
  {
    num: 4,
    title: "Lists & Tables",
    href: "/html-course/lists-tables",
    desc: "Organizing data with Ordered/Unordered Lists and Table structures.",
    icon: "📊",
    color: "#E34F26",
  },
  {
    num: 5,
    title: "Block vs Inline",
    href: "/html-course/block-inline",
    desc: "Understanding Divs, Spans, Classes, ID, and default display behaviors.",
    icon: "🧱",
    color: "#E34F26",
  },
  {
    num: 6,
    title: "Semantic HTML",
    href: "/html-course/semantic-html",
    desc: "Writing meaningful HTML for better accessibility and SEO.",
    icon: "🧠",
    color: "#E34F26",
  },
  {
    num: 7,
    title: "Forms & Inputs",
    href: "/html-course/forms",
    desc: "Mastering user input with advanced form controls and validation.",
    icon: "📋",
    color: "#E34F26",
  },
  {
    num: 8,
    title: "SEO Basics",
    href: "/html-course/seo",
    desc: "Meta tags, Open Graph, and structuring content for search engines.",
    icon: "🔍",
    color: "#E34F26",
  },
  {
    num: 9,
    title: "Accessibility (A11y)",
    href: "/html-course/accessibility",
    desc: "ARIA roles, landmarks, and ensuring your site works for everyone.",
    icon: "♿",
    color: "#E34F26",
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

export default function HtmlCoursePage() {
  return (
    <>
      <HtmlNav />
      <div className="page-wrapper">
        <section className="hero" style={{ minHeight: "60vh", textAlign: "center" }}>
          <div className="hero-bg">
             <div className="hero-grid" style={{ opacity: 0.05, backgroundSize: "40px 40px", backgroundImage: "linear-gradient(to right, #E34F26 1px, transparent 1px), linear-gradient(to bottom, #E34F26 1px, transparent 1px)" }} />
          </div>
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-badge" style={{ borderColor: "#E34F26", color: "#E34F26" }}>
              <span className="hero-badge-dot" style={{ background: "#E34F26" }} />
              HTML Mastery
            </div>
            <h1 className="hero-title">
              Complete HTML <br />
              <span className="hero-title-gradient" style={{ background: "linear-gradient(135deg, #E34F26 0%, #FF8C6B 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Curriculum</span>
            </h1>
            <p className="hero-subtitle">
              From absolute basics to advanced semantics. Learn the language of the web.
            </p>
            <div className="hero-actions">
              <Link href="/html-course/basics" className="btn btn-primary" style={{ background: "#E34F26" }}>
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
                  style={{ display: "block", borderColor: "rgba(227, 79, 38, 0.2)" }}
                >
                  <div className="card-content">
                    <div className="chapter-number">
                      <div
                        className="chapter-icon"
                        style={{ background: "rgba(227, 79, 38, 0.1)", color: ch.color }}
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
