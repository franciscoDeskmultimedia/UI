"use client";

import Link from "next/link";
import AemNav from "@/components/AemNav";
import { motion } from "framer-motion";

export default function AemClientlibsPage() {
  return (
    <>
      <AemNav />
      <div className="page-wrapper">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
             <Link href="/aem-fundamentals" className="back-link">
              ← Back to Course
            </Link>
            <div className="chapter-hero-number" style={{ color: "#ff4d4d" }}>Module 3</div>
            <h1 className="chapter-hero-title">Client Libraries</h1>
            <p className="chapter-hero-desc">
              Organizing and optimizing CSS and JavaScript in AEM.
            </p>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{ padding: 40, background: "var(--bg-card)", borderRadius: 16, border: "1px solid var(--border-subtle)", textAlign: "center", marginTop: 32 }}
          >
             <div style={{ fontSize: "3rem", marginBottom: 16 }}>🚧</div>
             <h3 style={{ marginBottom: 8 }}>Content Coming Soon</h3>
             <p style={{ color: "var(--text-secondary)" }}>We are actively building this module.</p>
          </motion.div>
        </div>
      </div>
    </>
  );
}
