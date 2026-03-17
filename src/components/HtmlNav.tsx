"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const chapters = [
  { href: "/html-course", label: "Intro" },
  { href: "/html-course/basics", label: "1. Basics & Structure" },
  { href: "/html-course/text", label: "2. Working with Text" },
  { href: "/html-course/media", label: "3. Media & Images" },
  { href: "/html-course/lists-tables", label: "4. Lists & Tables" },
  { href: "/html-course/block-inline", label: "5. Block vs Inline" },
  { href: "/html-course/semantic-html", label: "6. Semantic HTML" },
  { href: "/html-course/forms", label: "7. Forms & Inputs" },
  { href: "/html-course/seo", label: "8. SEO Basics" },
  { href: "/html-course/accessibility", label: "9. HTML A11y" },
  { href: "/html-course/final-quiz", label: "Final Exam" },
];

export default function HtmlNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/html-course" className="nav-logo">
          <div className="nav-logo-icon" style={{ background: "#E34F26" }}>H5</div>
          HTML Mastery
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
