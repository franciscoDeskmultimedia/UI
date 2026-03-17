"use client";

import Link from "next/link";
import AemNav from "@/components/AemNav";
import { motion } from "framer-motion";
import DemoPanel from "@/components/DemoPanel";
import QuizSection from "@/components/QuizSection";
import { useProgress } from "@/lib/progress";

function ArchitectureDemo() {
  return (
    <DemoPanel title="AEM Architecture Overview" icon="🏛️">
      <div style={{ padding: 20 }}>
        <p style={{ color: "var(--text-secondary)", marginBottom: 24 }}>
          AEM consists of Author and Publish instances, typically fronted by a Dispatcher (Apache/Nginx) for caching and security.
        </p>
        
        <div style={{ display: "flex", alignItems: "center", gap: 16, overflowX: "auto", paddingBottom: 16 }}>
             {/* Author */}
            <div style={{ flex: "0 0 160px", background: "#f8f9fa", border: "2px solid #d1d5db", padding: 16, borderRadius: 8, textAlign: "center" }}>
                <div style={{ fontSize: "2rem", marginBottom: 8 }}>📝</div>
                <h4 style={{ color: "#1f2937", margin: 0 }}>Author</h4>
                <div style={{ fontSize: "0.75rem", color: "#6b7280", marginTop: 4 }}>Content Creation</div>
            </div>

            <div style={{ fontSize: "1.5rem", color: "#9ca3af" }}>→</div>

            {/* Replication Agent */}
             <div style={{ flex: "0 0 100px", background: "#e5e7eb", padding: 8, borderRadius: 8, textAlign: "center", fontSize: "0.75rem" }}>
                Replication<br/>Agent
            </div>

            <div style={{ fontSize: "1.5rem", color: "#9ca3af" }}>→</div>

            {/* Publish */}
            <div style={{ flex: "0 0 160px", background: "#dbeafe", border: "2px solid #93c5fd", padding: 16, borderRadius: 8, textAlign: "center" }}>
                <div style={{ fontSize: "2rem", marginBottom: 8 }}>🌍</div>
                <h4 style={{ color: "#1e40af", margin: 0 }}>Publish</h4>
                <div style={{ fontSize: "0.75rem", color: "#60a5fa", marginTop: 4 }}>Content Delivery</div>
            </div>

             <div style={{ fontSize: "1.5rem", color: "#9ca3af" }}>↔</div>

             {/* Dispatcher */}
             <div style={{ flex: "0 0 160px", background: "#fef3c7", border: "2px solid #fcd34d", padding: 16, borderRadius: 8, textAlign: "center" }}>
                <div style={{ fontSize: "2rem", marginBottom: 8 }}>🛡️</div>
                <h4 style={{ color: "#92400e", margin: 0 }}>Dispatcher</h4>
                <div style={{ fontSize: "0.75rem", color: "#d97706", marginTop: 4 }}>Caching & Security</div>
            </div>
        </div>
      </div>
    </DemoPanel>
  );
}

export default function AemArchitecturePage() {
  const { saveQuizResult } = useProgress();

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
            <div className="chapter-hero-number" style={{ color: "#ff4d4d" }}>Module 1</div>
            <h1 className="chapter-hero-title">AEM Architecture</h1>
            <p className="chapter-hero-desc">
              Understand the core topology of an Adobe Experience Manager installation.
            </p>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ArchitectureDemo />
          </motion.div>

           <div className="content-block">
             <h2>The Dispatcher</h2>
             <p>The Dispatcher is Adobe&apos;s caching and/or load balancing tool. It helps protect your AEM server from attacks and delivers content fast by caching static HTML/assets.</p>
           </div>
          
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <QuizSection
                chapterId="aem-arch"
                onComplete={(score) => saveQuizResult("aem-arch", score)}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
