"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { useProgress } from "@/lib/progress"; 

const chapters = [
  { href: "/aem-fundamentals", label: "AEM Fundamentals" },
  { href: "/aem-fundamentals/architecture", label: "Architecture" },
  { href: "/aem-fundamentals/components", label: "Components & Dialogs" },
  { href: "/aem-fundamentals/clientlibs", label: "Client Libraries" },
  { href: "/aem-fundamentals/templates", label: "Editable Templates" },
];

export default function AemNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  // const { getChapterProgress } = useProgress();

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/aem-fundamentals" className="nav-logo">
          <div className="nav-logo-icon" style={{ background: "linear-gradient(135deg, #ff4d4d 0%, #b30000 100%)" }}>Adobe</div>
          AEM Fundamentals
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
