"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const chapters = [
  { href: "/js-course", label: "Intro" },
  { href: "/js-course/basics", label: "1. Basics & Output" },
  { href: "/js-course/variables", label: "2. Let, Const, Var" },
  { href: "/js-course/functions", label: "3. Functions" },
  { href: "/js-course/objects", label: "4. Objects" },
  { href: "/js-course/events", label: "5. Events" },
  { href: "/js-course/dom", label: "6. DOM Manipulation" },
];

export default function JsNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/js-course" className="nav-logo">
          <div className="nav-logo-icon" style={{ background: "#F7DF1E", color: "#000" }}>JS</div>
          JS Mastery
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
