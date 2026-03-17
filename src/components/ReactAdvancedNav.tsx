"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useProgress } from "@/lib/progress";

const chapters = [
  { href: "/react-advanced", label: "Advanced Course", slug: "" },
  { href: "/react-advanced/use-reducer", label: "useReducer", slug: "react-adv-reducer" },
  { href: "/react-advanced/context", label: "Context API", slug: "react-adv-context" },
  { href: "/react-advanced/performance", label: "Performance", slug: "react-adv-perf" },
  { href: "/react-advanced/custom-hooks", label: "Custom Hooks", slug: "react-adv-hooks" },
  { href: "/react-advanced/refs", label: "Refs & DOM", slug: "react-adv-refs" },
  { href: "/react-advanced/final-quiz", label: "🏆 Quiz", slug: "react-adv-final-quiz" },
];

export default function ReactAdvancedNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { getChapterProgress } = useProgress();

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/react-advanced" className="nav-logo">
          <div className="nav-logo-icon" style={{ background: "linear-gradient(135deg, #fcb85c 0%, #fc5c5c 100%)" }}>🔬</div>
          Advanced React
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
                      background: "#fcb85c",
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
