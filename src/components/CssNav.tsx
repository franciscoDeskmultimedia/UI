"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const chapters = [
  { href: "/css-course", label: "Intro" },
  { href: "/css-course/basics", label: "1. Basics & Selectors" },
  { href: "/css-course/colors", label: "2. Colors & Backgrounds" },
  { href: "/css-course/text", label: "3. Fonts & Text" },
  { href: "/css-course/box-model", label: "4. The Box Model" },
  { href: "/css-course/flexbox", label: "5. Flexbox" },
  { href: "/css-course/grid", label: "6. Grid Layout" },
  { href: "/css-course/animations", label: "7. Animations" },
  { href: "/css-course/responsive", label: "8. Responsive Design" },
  { href: "/css-course/final-quiz", label: "Final Exam" },
];

export default function CssNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/css-course" className="nav-logo">
          <div className="nav-logo-icon" style={{ background: "#1572B6" }}>CSS</div>
          CSS Mastery
        </Link>
        
         <Link href="/" className="nav-link" style={{ marginLeft: 20, fontSize: "0.8rem", color: "var(--text-tertiary)" }}>
          ← Hub
        </Link>

        <button
          className="nav-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? "✕" : "☰"}
        </button>

        <div className={`nav-links${open ? " open" : ""}`}>
          {chapters.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className={`nav-link ${pathname === c.href ? "active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {c.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
