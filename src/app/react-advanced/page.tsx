"use client";

import Link from "next/link";
import ReactAdvancedNav from "@/components/ReactAdvancedNav";
import { motion } from "framer-motion";

const chapters = [
  {
    num: 1,
    title: "Advanced State with useReducer",
    href: "/react-advanced/use-reducer",
    desc: "Managing complex state logic with actions and reducers.",
    icon: "🧠",
    color: "#fc5c5c",
    topics: ["Reducer Pattern", "Actions", "Dispatch", "State Predictability"],
  },
  {
    num: 2,
    title: "Context API & Prop Drilling",
    href: "/react-advanced/context",
    desc: "Passing data deeply through the component tree without passing props.",
    icon: "🌲",
    color: "#fcb85c",
    topics: ["createContext", "useContext", "Provider Pattern", "Avoiding Prop Drilling"],
  },
  {
    num: 3,
    title: "Performance Optimization",
    href: "/react-advanced/performance",
    desc: "Preventing unnecessary re-renders with caching hooks.",
    icon: "🚀",
    color: "#5ca8fc",
    topics: ["useMemo", "useCallback", "React.memo", "Referential Equality"],
  },
  {
    num: 4,
    title: "Custom Hooks",
    href: "/react-advanced/custom-hooks",
    desc: "Extracting and reusing stateful component logic.",
    icon: "🎣",
    color: "#9b82ff",
    topics: ["Abstraction", "Composition", "Hook Rules", "Reusability"],
  },
  {
    num: 5,
    title: "Refs & The DOM",
    href: "/react-advanced/refs",
    desc: "Imperative programming in React: accessing DOM nodes directly.",
    icon: "🔗",
    color: "#5cf0d0",
    topics: ["useRef", "Focus Management", "Measuring Elements", "Imperative Handle"],
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

export default function ReactAdvancedPage() {
  return (
    <>
      <ReactAdvancedNav />
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
            <div className="hero-badge" style={{ borderColor: "#fcb85c", color: "#fcb85c" }}>
              <span className="hero-badge-dot" style={{ background: "#fc5c5c" }} />
              Advanced React
            </div>
            <h1 className="hero-title">
              React <span className="hero-title-gradient" style={{ background: "linear-gradient(135deg, #fcb85c 0%, #fc5c5c 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Advanced Patterns</span>
            </h1>
            <p className="hero-subtitle">
              Move beyond the basics. Master state management, performance optimization, and scalable patterns for enterprise applications.
            </p>
            <div className="hero-actions">
              <Link href="/react-advanced/use-reducer" className="btn btn-primary" style={{ background: "linear-gradient(135deg, #fcb85c 0%, #fc5c5c 100%)" }}>
                Start Advanced Course →
              </Link>
              <Link href="/react-advanced/final-quiz" className="btn btn-secondary" style={{ marginLeft: 16 }}>
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
