"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const courses = [
  {
    title: "Practical UI",
    desc: "Master the fundamentals of UI design. Learn typography, color, layout, and more through interactive demos.",
    href: "/ui",
    icon: "🎨",
    color: "#7c5cfc",
    status: "Available",
  },
  {
    title: "Modern Frontend Fundamentals",
    desc: "The essential building blocks of the modern web. HTML, CSS, and JavaScript deep dives.",
    href: "/fe-fundamentals",
    icon: "🏗️",
    color: "#fc5c8c",
    status: "Available",
  },
  {
    title: "Advanced Frontend Engineering",
    desc: "Performance, accessibility, and scalable architecture for enterprise applications.",
    href: "/fe-advanced",
    icon: "🚀",
    color: "#5ca8fc",
    status: "Available",
  },
  {
    title: "React Fundamentals",
    desc: "From zero to hero. Learn components, hooks, state management, and the React mindset.",
    href: "/react-fundamentals",
    icon: "⚛️",
    color: "#5cf0d0",
    status: "Available",
  },
  {
    title: "Advanced React Patterns",
    desc: "Master compound components, render props, custom hooks, and performance optimization.",
    href: "/react-advanced",
    icon: "🔬",
    color: "#fcb85c",
    status: "Available",
  },
  {
    title: "AEM Fundamentals",
    desc: "Adobe Experience Manager: Architecture, Components, HTL, and Sling Models.",
    href: "/aem-fundamentals",
    icon: "🅰️",
    color: "#ff4d4d",
    status: "Available",
  },
  {
    title: "HTML Mastery",
    desc: "The structure of the web. Semantic HTML, Forms, SEO, and Accessibility deep dives.",
    href: "/html-course",
    icon: "🏗️",
    color: "#E34F26",
    status: "Available",
  },
  {
    title: "CSS Mastery",
    desc: "The style of the web. Flexbox, Grid, Animations, and Responsive Design.",
    href: "/css-course",
    icon: "🎨",
    color: "#1572B6",
    status: "Available",
  },
  {
    title: "JavaScript Mastery",
    desc: "The language of the web. Variables, Functions, Objects, DOM, and Events.",
    href: "/js-course",
    icon: "⚡",
    color: "#F7DF1E",
    status: "Available",
  },
  {
    title: "Next.js Mastery",
    desc: "Build full-stack apps with the latest App Router, Server Components, and Vercel features.",
    href: "/nextjs",
    icon: "▲",
    color: "#000000",
    status: "Coming Soon",
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

export default function HubPage() {
  return (
    <div className="page-wrapper" style={{ minHeight: "100vh", paddingBottom: 64 }}>
      {/* Simple Hub Nav */}
      <nav className="nav">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">
            <div className="nav-logo-icon" style={{ background: "linear-gradient(135deg, #FF6B6B, #556270)" }}>H</div>
            DevAcademy Hub
          </Link>
        </div>
      </nav>

      <div className="container" style={{ marginTop: 48 }}>
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           style={{ textAlign: "center", marginBottom: 64 }}
        >
          <div className="hero-badge" style={{ margin: "0 auto 16px" }}>
            <span className="hero-badge-dot" style={{ background: "#5cf0d0" }} />
            Interactive Learning Platform
          </div>
          <h1 className="hero-title">
            Level Up Your <br />
            <span className="hero-title-gradient">Development Skills</span>
          </h1>
          <p className="hero-subtitle" style={{ maxWidth: 600, margin: "0 auto" }}>
            Interactive, practice-based courses to help you master modern web development.
            From design systems to advanced React patterns.
          </p>
        </motion.div>

        <motion.div
          className="chapter-grid"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {courses.map((course) => (
            <motion.div key={course.href} variants={item}>
              <Link
                href={course.href}
                className="chapter-card card"
                style={{ 
                  display: "block",
                  opacity: course.status === "Coming Soon" ? 0.8 : 1,
                  filter: course.status === "Coming Soon" ? "grayscale(0.3)" : "none",
                  cursor: course.status === "Coming Soon" ? "default" : "pointer"
                }}
                onClick={(e) => {
                  if (course.status === "Coming Soon") e.preventDefault();
                }}
              >
                <div className="card-content">
                  <div className="chapter-number">
                    <div
                      className="chapter-icon"
                      style={{ background: `${course.color}20`, color: course.color }}
                    >
                      {course.icon}
                    </div>
                    {course.status === "Coming Soon" && (
                      <span 
                        style={{ 
                          marginLeft: "auto", 
                          fontSize: "0.7rem", 
                          padding: "2px 8px", 
                          borderRadius: 100, 
                          background: "var(--bg-tertiary)", 
                          color: "var(--text-tertiary)",
                          border: "1px solid var(--border-subtle)"
                        }}
                      >
                        Coming Soon
                      </span>
                    )}
                    {course.status === "Available" && (
                      <span 
                        style={{ 
                          marginLeft: "auto", 
                          fontSize: "0.7rem", 
                          padding: "2px 8px", 
                          borderRadius: 100, 
                          background: "rgba(92,240,208,0.12)", 
                          color: "#5cf0d0", 
                          fontWeight: 600
                        }}
                      >
                        Available
                      </span>
                    )}
                  </div>
                  <h3 className="chapter-title">{course.title}</h3>
                  <p className="chapter-desc">{course.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
