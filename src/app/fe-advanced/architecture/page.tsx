"use client";

import Link from "next/link";
import FeAdvancedNav from "@/components/FeAdvancedNav";
import { motion } from "framer-motion";
import DemoPanel from "@/components/DemoPanel";
import CodeChallenge from "@/components/CodeChallenge";
import QuizSection from "@/components/QuizSection";
import { useProgress } from "@/lib/progress";

function MonorepoDemo() {
  return (
    <DemoPanel title="Monorepo Visualizer" icon="🏢">
      <div style={{ padding: 20 }}>
        <p style={{ color: "var(--text-secondary)", marginBottom: 16 }}>
          A monorepo stores code for multiple projects in the same repository, allowing them to share dependencies and code easily.
        </p>
        
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
             <div style={{ border: "1px dashed #666", padding: 16, borderRadius: 8, position: "relative" }}>
                 <div style={{ position: "absolute", top: -12, left: 16, background: "#111", padding: "0 8px", fontSize: "0.8rem", color: "#888" }}>Root (Git Repo)</div>
                 
                 <div style={{ marginBottom: 16, paddingLeft: 12, borderLeft: "2px solid #5cf0d0" }}>
                     <strong style={{ color: "#5cf0d0" }}>/packages/ui-library</strong>
                     <div style={{ fontSize: "0.8rem", color: "#aaa" }}>Shared Buttons, Inputs, Theme</div>
                 </div>

                 <div style={{ marginBottom: 16, paddingLeft: 12, borderLeft: "2px solid #5ca8fc" }}>
                     <strong style={{ color: "#5ca8fc" }}>/apps/web-store</strong>
                     <div style={{ fontSize: "0.8rem", color: "#aaa" }}>Next.js E-commerce App</div>
                     <div style={{ fontSize: "0.7rem", color: "#666", marginTop: 4 }}>Dependencies: ui-library</div>
                 </div>

                 <div style={{ paddingLeft: 12, borderLeft: "2px solid #fcb85c" }}>
                     <strong style={{ color: "#fcb85c" }}>/apps/admin-dashboard</strong>
                     <div style={{ fontSize: "0.8rem", color: "#aaa" }}>React Admin Tool</div>
                     <div style={{ fontSize: "0.7rem", color: "#666", marginTop: 4 }}>Dependencies: ui-library</div>
                 </div>
             </div>
             
             <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 12 }}>
                 <div style={{ padding: 12, background: "#222", borderRadius: 6, fontSize: "0.9rem" }}>✅ Atomic Commits across apps</div>
                 <div style={{ padding: 12, background: "#222", borderRadius: 6, fontSize: "0.9rem" }}>✅ Shared Types & Configs</div>
                 <div style={{ padding: 12, background: "#222", borderRadius: 6, fontSize: "0.9rem" }}>✅ Simplified Dependency Management</div>
             </div>
        </div>
      </div>
    </DemoPanel>
  );
}

function FederationDemo() {
    return (
        <DemoPanel title="Module Federation" icon="🛸">
            <div style={{ padding: 20 }}>
                <p style={{ color: "var(--text-secondary)", marginBottom: 16 }}>
                    Module Federation allows a JavaScript application to dynamically load code from another application at runtime.
                </p>
                <div style={{ display: "flex", gap: "20px", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: "120px", height: "120px", border: "2px solid #fc5c8c", borderRadius: "8px", padding: "10px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <div style={{ color: "#fc5c8c", fontWeight: "bold", marginBottom: "8px" }}>App A (Host)</div>
                        <div style={{ width: "100%", height: "40px", background: "#333", borderRadius: "4px", fontSize: "0.6rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            Header (Remote)
                        </div>
                    </div>

                    <div style={{ fontSize: "2rem", color: "#666" }}>⬅️</div>

                    <div style={{ width: "120px", height: "120px", border: "2px dashed #5cf0d0", borderRadius: "8px", padding: "10px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <div style={{ color: "#5cf0d0", fontWeight: "bold", marginBottom: "8px" }}>App B (Remote)</div>
                        <div style={{ width: "100%", height: "40px", background: "#5cf0d022", border: "1px solid #5cf0d0", borderRadius: "4px", fontSize: "0.6rem", display: "flex", alignItems: "center", justifyContent: "center", color: "#5cf0d0" }}>
                            Exposes Header
                        </div>
                    </div>
                </div>
            </div>
        </DemoPanel>
    )
}

export default function ArchitecturePage() {
  const { saveQuizResult } = useProgress();

  return (
    <>
      <FeAdvancedNav />
      <div className="page-wrapper">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
             <Link href="/fe-advanced" className="back-link">
              ← Back to Course
            </Link>
            <div className="chapter-hero-number" style={{ color: "#fcb85c" }}>Module 4</div>
            <h1 className="chapter-hero-title">Scalable Architecture</h1>
            <p className="chapter-hero-desc">
              Designing large-scale frontend applications: Monorepos, Micro-frontends, and State Management patterns.
            </p>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <MonorepoDemo />
          </motion.div>

           <div className="content-block">
             <h2>Managing Scale</h2>
             <p>As applications grow, keeping all code in one place (Monolith) vs splitting it up (Polylepo) becomes a major decision. Monorepos offer a middle ground.</p>
             <ul style={{ lineHeight: "1.8", marginTop: "16px" }}>
                 <li>
                    <strong>Monorepos:</strong> Tools like <strong>Turborepo</strong>, <strong>Nx</strong>, or <strong>Lerna</strong> help manage multiple packages in a single git repo.
                    They optimize build times by caching tasks.
                 </li>
                 <li>
                    <strong>Micro-Frontends:</strong> Breaking a large frontend into smaller, independently deployable apps. 
                    Useful for large organizations with autonomous teams.
                 </li>
                 <li>
                    <strong>Design Systems:</strong> A centralized library of UI components (buttons, inputs) and tokens (colors, spacing) ensures consistency across all apps.
                 </li>
             </ul>
           </div>
           
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
           >
                <FederationDemo />
           </motion.div>

           <div className="content-block">
                <h2>Best Practices</h2>
                <div style={{ background: "rgba(252, 184, 92, 0.1)", borderLeft: "4px solid #fcb85c", padding: "16px", borderRadius: "0 8px 8px 0" }}>
                   <strong>Keep It Simple:</strong> Don't reach for Micro-frontends unless you have organizational scaling problems (e.g. 5+ teams on one frontend). For most projects, a Modular Monolith is cleaner.
               </div>
               <ul style={{ marginTop: "16px" }}>
                   <li><strong>Strict Boundaries:</strong> Enforce boundaries between modules. Feature A shouldn't import internal helpers from Feature B.</li>
                   <li><strong>Shared Utils:</strong> Extract common logic (date formatting, API clients) into shared packages.</li>
                   <li><strong>Feature Flags:</strong> Use feature flags to decouple deployment from release. Ship code safely and toggle features on/off.</li>
               </ul>
           </div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
             <CodeChallenge 
                title="Challenge: Config Object Pattern" 
                description="Refactor the code to use a configuration object instead of a long specific function for scalable settings."
                files={{
                    "/index.js": `// Hard to scale if we add 10 more themes
function getThemeColor(theme) {
  if (theme === 'dark') return '#000';
  if (theme === 'light') return '#fff';
  if (theme === 'blue') return '#00f';
  return '#ccc'; // default
}

console.log(getThemeColor('dark'));`
                }}
                solution={`const themeConfig = {
  dark: '#000',
  light: '#fff',
  blue: '#00f'
};

function getThemeColor(theme) {
  return themeConfig[theme] || '#ccc';
}

console.log(getThemeColor('dark'));`}
             />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <QuizSection
                chapterId="fe-adv-arch"
                onComplete={(answers, score, total) => saveQuizResult("fe-adv-arch", answers, score, total)}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
