"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { useProgress } from "@/lib/progress"; 

const chapters = [
  { href: "/fe-advanced", label: "Advanced Frontend" },
  { href: "/fe-advanced/performance", label: "Web Performance" },
  { href: "/fe-advanced/accessibility", label: "Accessibility (A11y)" },
  { href: "/fe-advanced/testing", label: "Testing Strategies" },
  { href: "/fe-advanced/architecture", label: "Scalable Architecture" },
];

export default function FeAdvancedNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  // const { getChapterProgress } = useProgress();

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/fe-advanced" className="nav-logo">
          <div className="nav-logo-icon" style={{ background: "linear-gradient(135deg, #5ca8fc 0%, #9b82ff 100%)" }}>🚀</div>
          Advanced Frontend
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
            
            return (
              <Link
                key={c.href}
                href={c.href}
                className={`nav-link ${isActive ? "active" : ""}`}
                onClick={() => setOpen(false)}
                style={{ position: "relative" }}
              >
                {c.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
