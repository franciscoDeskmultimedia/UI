"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useProgress } from "@/lib/progress";

const chapters = [
  { href: "/ui", label: "UI Course", slug: "" },
  { href: "/ui/fundamentals", label: "Fundamentals", slug: "fundamentals" },
  { href: "/ui/less-is-more", label: "Less Is More", slug: "less-is-more" },
  { href: "/ui/colour", label: "Colour", slug: "colour" },
  { href: "/ui/layout", label: "Layout", slug: "layout" },
  { href: "/ui/typography", label: "Typography", slug: "typography" },
  { href: "/ui/copywriting", label: "Copywriting", slug: "copywriting" },
  { href: "/ui/buttons", label: "Buttons", slug: "buttons" },
  { href: "/ui/forms", label: "Forms", slug: "forms" },
  { href: "/ui/final-quiz", label: "🏆 Quiz", slug: "final-quiz" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { getChapterProgress, getTotalProgress } = useProgress();
  const totalProg = getTotalProgress();

  return (
    <nav className="nav">
      <div className="nav-inner">
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Link href="/ui" className="nav-logo">
            <div className="nav-logo-icon">P</div>
            Practical UI
            {totalProg.completed > 0 && (
              <span
                style={{
                  fontSize: "0.65rem",
                  padding: "2px 8px",
                  borderRadius: 100,
                  background: "rgba(92, 240, 208, 0.12)",
                  color: "#5cf0d0",
                  fontWeight: 600,
                  marginLeft: 12,
                }}
              >
                {totalProg.completed}/{totalProg.total}
              </span>
            )}
          </Link>
          <Link href="/" className="nav-link" style={{ fontSize: "0.8rem", color: "var(--text-tertiary)" }}>
            ← Hub
          </Link>
        </div>
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
            const cp = c.slug && c.slug !== "final-quiz" ? getChapterProgress(c.slug) : null;
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
