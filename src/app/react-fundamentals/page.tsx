"use client";

import Link from "next/link";
import ReactNav from "@/components/ReactNav";
import { motion } from "framer-motion";

const chapters = [
  {
    num: 1,
    title: "Components & JSX",
    href: "/react-fundamentals/components",
    desc: "Learn the building blocks of React: Functional components and JSX syntax.",
    icon: "🧩",
    color: "#5ca8fc",
    topics: ["Functional Components", "JSX vs HTML", "Single Parent Rule", "CamelCase"],
  },
  {
    num: 2,
    title: "State with useState",
    href: "/react-fundamentals/state",
    desc: "Understanding local component state and how to update it.",
    icon: "💾",
    color: "#5cf0d0",
    topics: ["useState Hook", "Updating State", "Re-rendering"],
  },
  {
    num: 3,
    title: "Props & Data Flow",
    href: "/react-fundamentals/props",
    desc: "Passing data between components using props.",
    icon: "📡",
    color: "#fcb85c",
    topics: ["Passing Props", "Destructuring Props", "Children Prop"],
  },
  {
    num: 4,
    title: "Handling Events",
    href: "/react-fundamentals/events",
    desc: "Responding to user interactions like clicks and form inputs.",
    icon: "🖱️",
    color: "#fc5c8c",
    topics: ["onClick", "onChange", "Synthetic Events"],
  },
  {
    num: 5,
    title: "Lists & Keys",
    href: "/react-fundamentals/lists",
    desc: "Rendering lists of data and understanding the importance of keys.",
    icon: "📝",
    color: "#9b82ff",
    topics: ["Mapping Arrays", "Unique Keys", "Index as Key"],
  },
  {
    num: 6,
    title: "Effects & Lifecycle",
    href: "/react-fundamentals/effects",
    desc: "Managing side effects like data fetching with useEffect.",
    icon: "⚡",
    color: "#7c5cfc",
    topics: ["useEffect Hook", "Dependency Array", "Cleanup Function"],
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

export default function ReactFundamentalsPage() {
  return (
    <>
      <ReactNav />
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
              React Course
            </div>
            <h1 className="hero-title">
              React <span className="hero-title-gradient" style={{ background: "linear-gradient(135deg, #5cf0d0 0%, #5ca8fc 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Fundamentals</span>
            </h1>
            <p className="hero-subtitle">
              Master the core concepts of React through interactive examples.
              Build a solid foundation for modern web development.
            </p>
            <div className="hero-actions">
              <Link href="/react-fundamentals/components" className="btn btn-primary" style={{ background: "linear-gradient(135deg, #5cf0d0 0%, #5ca8fc 100%)" }}>
                Start Learning →
              </Link>
              <Link href="/react-fundamentals/final-quiz" className="btn btn-secondary" style={{ marginLeft: 16 }}>
                Take the Quiz 🏆
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
            {chapters.map((ch) => {
              // Note: We need to define new slugs for React chapters in progress logic eventually
              // For now, we just link to them.
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
              );
            })}
          </motion.div>
        </div>
      </div>
    </>
  );
}
