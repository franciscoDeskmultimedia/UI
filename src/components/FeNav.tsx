"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { useProgress } from "@/lib/progress"; // Re-enable when progress is tracked

const chapters = [
  { href: "/fe-fundamentals", label: "Frontend Fundamentals" },
  { href: "/fe-fundamentals/html-css", label: "HTML & CSS" },
  { href: "/fe-fundamentals/javascript", label: "JavaScript Basics" },
  { href: "/fe-fundamentals/dom", label: "DOM Manipulation" },
  { href: "/fe-fundamentals/async", label: "Async Programming" },
];

export default function FeNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  // const { getChapterProgress } = useProgress();

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/fe-fundamentals" className="nav-logo">
          <div className="nav-logo-icon" style={{ background: "linear-gradient(135deg, #fc5c8c 0%, #fcb85c 100%)" }}>🏗️</div>
          Frontend Fundamentals
        </Link>
        
        {/* Back to Hub Link */}
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
          {chapters.map((c) => {
            const isActive = pathname === c.href;
            // const cp = c.slug ? getChapterProgress(c.slug) : null;
            // const isCompleted = cp?.completed;

            return (
              <Link
                key={c.href}
                href={c.href}
                className={`nav-link ${isActive ? "active" : ""}`}
                onClick={() => setOpen(false)}
                style={{ position: "relative" }}
              >
                {/* {isCompleted && (
                  <span
                    style={{
                      position: "absolute",
                      top: 2,
                      right: 4,
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "#fc5c8c",
                    }}
                  />
                )} */}
                {c.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
