"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useProgress } from "@/lib/progress";

const chapters = [
  { href: "/react-fundamentals", label: "React Course", slug: "" },
  { href: "/react-fundamentals/components", label: "Components", slug: "react-components" },
  { href: "/react-fundamentals/state", label: "State", slug: "react-state" },
  { href: "/react-fundamentals/props", label: "Props", slug: "react-props" },
  { href: "/react-fundamentals/effects", label: "Effects", slug: "react-effects" },
  { href: "/react-fundamentals/lists", label: "Lists", slug: "react-lists" },
  { href: "/react-fundamentals/events", label: "Events", slug: "react-events" },
  { href: "/react-fundamentals/final-quiz", label: "🏆 Quiz", slug: "react-final-quiz" },
];

export default function ReactNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { getChapterProgress } = useProgress();

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/react-fundamentals" className="nav-logo">
          <div className="nav-logo-icon" style={{ background: "linear-gradient(135deg, #5cf0d0 0%, #5ca8fc 100%)" }}>⚛️</div>
          React Fundamentals
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
            const cp = c.slug ? getChapterProgress(c.slug) : null;
            const isCompleted = cp?.completed;

            return (
              <Link
                key={c.href}
                href={c.href}
                className={isActive ? "active" : ""}
                onClick={() => setOpen(false)}
                style={{ position: "relative" }}
              >
                {isCompleted && (
                  <span
                    style={{
                      position: "absolute",
                      top: 2,
                      right: 4,
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "#5cf0d0",
                    }}
                  />
                )}
                {c.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
