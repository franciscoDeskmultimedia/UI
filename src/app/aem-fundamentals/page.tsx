"use client";

import Link from "next/link";
import AemNav from "@/components/AemNav";
import { motion } from "framer-motion";

const chapters = [
  {
    num: 1,
    title: "Architecture",
    href: "/aem-fundamentals/architecture",
    desc: "Understanding the building blocks of AEM: Author, Publish, Dispatcher, and the Repository.",
    icon: "🏛️",
    color: "#ff4d4d",
    topics: ["Sling & OSGi", "Author vs Publish", "Dispatcher Caching", "CRXDE Lite"],
  },
  {
    num: 2,
    title: "Components & Dialogs",
    href: "/aem-fundamentals/components",
    desc: "Building custom components using HTL, Sling Models, and Touch UI dialogs.",
    icon: "🧩",
    color: "#ff9933",
    topics: ["HTL (Sightly)", "Sling Models", "Touch UI Dialogs", "Core Components"],
  },
  {
    num: 3,
    title: "Client Libraries",
    href: "/aem-fundamentals/clientlibs",
    desc: "Managing frontend assets (CSS/JS) efficiently with AEM Clientlibs.",
    icon: "📦",
    color: "#ffd700",
    topics: ["Clientlib Folders", "Categories", "Dependencies", "Minification"],
  },
  {
    num: 4,
    title: "Editable Templates",
    href: "/aem-fundamentals/templates",
    desc: "Creating flexible page structures for content authors using Editable Templates and Policies.",
    icon: "📄",
    color: "#b30000",
    topics: ["Template Types", "Policies", "Layout Container", "Allowed Components"],
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

export default function AemFundamentalsPage() {
  return (
    <>
      <AemNav />
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
            <div className="hero-badge" style={{ borderColor: "#ff4d4d", color: "#ff4d4d" }}>
              <span className="hero-badge-dot" style={{ background: "#ff4d4d" }} />
              AEM Course
            </div>
            <h1 className="hero-title">
              AEM <span className="hero-title-gradient" style={{ background: "linear-gradient(135deg, #ff4d4d 0%, #b30000 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Fundamentals</span>
            </h1>
            <p className="hero-subtitle">
              Master Adobe Experience Manager. Learn to build, manage, and deploy enterprise-grade content sites.
            </p>
            <div className="hero-actions">
              <Link href="/aem-fundamentals/architecture" className="btn btn-primary" style={{ background: "linear-gradient(135deg, #ff4d4d 0%, #b30000 100%)" }}>
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
