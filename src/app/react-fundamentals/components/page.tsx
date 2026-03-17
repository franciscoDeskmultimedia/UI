"use client";

import { useState } from "react";
import Link from "next/link";
import ReactNav from "@/components/ReactNav";
import DemoPanel from "@/components/DemoPanel";
import CodeChallenge from "@/components/CodeChallenge";
import QuizSection from "@/components/QuizSection";
import { motion } from "framer-motion";
import { useProgress } from "@/lib/progress";
import { quizData } from "@/lib/quizData";

function ComponentsDemo() {
  return (
    <DemoPanel title="Functional Components" icon="🧩">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>Components are the building blocks of React.</strong> They are just JavaScript functions that return JSX (elements that look like HTML).
        Components let you split the UI into independent, reusable pieces.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 24, alignItems: "center" }}>
        
        {/* Code View */}
        <div style={{ background: "var(--bg-tertiary)", borderRadius: 12, padding: 20, fontFamily: "monospace", fontSize: "0.82rem", lineHeight: 1.6 }}>
          <div style={{ color: "#fc5c8c", marginBottom: 8 }}>{`// Profile.js`}</div>
          <div>
            <span style={{ color: "#7c5cfc" }}>function</span> <span style={{ color: "#fcb85c" }}>Profile</span>() {"{"}
          </div>
          <div style={{ paddingLeft: 16 }}>
            <span style={{ color: "#7c5cfc" }}>return</span> (
          </div>
          <div style={{ paddingLeft: 32 }}>
            <span style={{ color: "#5ca8fc" }}>&lt;div</span> className=<span style={{ color: "#5cf0d0" }}>&quot;card&quot;</span><span style={{ color: "#5ca8fc" }}>&gt;</span>
          </div>
          <div style={{ paddingLeft: 48 }}>
            <span style={{ color: "#5ca8fc" }}>&lt;h3&gt;</span>Alex<span style={{ color: "#5ca8fc" }}>&lt;/h3&gt;</span>
          </div>
          <div style={{ paddingLeft: 48 }}>
            <span style={{ color: "#5ca8fc" }}>&lt;p&gt;</span>Developer<span style={{ color: "#5ca8fc" }}>&lt;/p&gt;</span>
          </div>
          <div style={{ paddingLeft: 32 }}>
            <span style={{ color: "#5ca8fc" }}>&lt;/div&gt;</span>
          </div>
          <div style={{ paddingLeft: 16 }}>
            );
          </div>
          <div>{"}"}</div>
        </div>

        {/* Live Preview */}
        <div>
          <div className="card" style={{ maxWidth: 200, margin: "0 auto", padding: 20, textAlign: "center" }}>
            <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#5cf0d0", margin: "0 auto 12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem" }}>
              👤
            </div>
            <h3 style={{ margin: "0 0 4px", fontSize: "1.1rem" }}>Alex</h3>
            <p style={{ margin: 0, fontSize: "0.88rem", color: "var(--text-secondary)" }}>Developer</p>
          </div>
          <div style={{ textAlign: "center", marginTop: 16, fontSize: "0.82rem", color: "var(--text-tertiary)" }}>
             The function returns the UI you see above 👆
          </div>
        </div>
      </div>
    </DemoPanel>
  );
}

function JsxRulesDemo() {
  const [errorMode, setErrorMode] = useState(false);

  return (
    <DemoPanel title="JSX Rules" icon="⚖️">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>JSX looks like HTML, but it&apos;s stricter.</strong> Two key rules:
        <br/>1. You must close all tags (e.g. <code>&lt;br /&gt;</code>).
        <br/>2. You must return a single parent element.
      </p>
      
      <div className="before-after">
        <div className="before-panel" style={{ opacity: errorMode ? 1 : 0.4 }}>
           <div className="panel-label">✗ Broken (Multiple Parents)</div>
           <div style={{ background: "#2a0a0a", borderRadius: 8, padding: 16, color: "#fc5c5c", fontFamily: "monospace", fontSize: "0.8rem" }}>
             return (<br/>
             &nbsp;&nbsp;&lt;h1&gt;Header&lt;/h1&gt;<br/>
             &nbsp;&nbsp;&lt;p&gt;Paragraph&lt;/p&gt;<br/>
             );
           </div>
           <div style={{ marginTop: 8, fontSize: "0.75rem", color: "#fc5c5c" }}>
             Error: Adjacent JSX elements must be wrapped in an enclosing tag.
           </div>
        </div>

        <div className="after-panel" style={{ opacity: !errorMode ? 1 : 0.4 }}>
           <div className="panel-label">✓ Fixed (Fragment or Wrapper)</div>
           <div style={{ background: "#0a2a1a", borderRadius: 8, padding: 16, color: "#5cf0d0", fontFamily: "monospace", fontSize: "0.8rem" }}>
             return (<br/>
             &nbsp;&nbsp;&lt;&gt;<br/>
             &nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Header&lt;/h1&gt;<br/>
             &nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Paragraph&lt;/p&gt;<br/>
             &nbsp;&nbsp;&lt;/&gt;<br/>
             );
           </div>
           <div style={{ marginTop: 8, fontSize: "0.75rem", color: "#5cf0d0" }}>
             Success! Wrapped in a Fragment &lt;&gt;...&lt;/&gt;
           </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
        <button 
          className="toggle-option active" 
          onClick={() => setErrorMode(!errorMode)}
          style={{ background: "var(--bg-glass)", border: "1px solid var(--border-subtle)", padding: "10px 20px", borderRadius: 8, color: "var(--text-primary)" }}
        >
          Toggle Example
        </button>  
      </div>
    </DemoPanel>
  );
}

export default function ComponentsPage() {
  const { getChapterProgress, saveQuizResult } = useProgress();
  const slug = "react-components";
  const progress = getChapterProgress(slug);

  return (
    <>
      <ReactNav />
      <div className="page-wrapper">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/react-fundamentals" className="back-link">
              ← Back to Course
            </Link>
            <div className="chapter-hero-number" style={{ color: "#5ca8fc" }}>Module 1</div>
            <h1 className="chapter-hero-title">Components & JSX</h1>
            <p className="chapter-hero-desc">
              React applications are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <ComponentsDemo />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <JsxRulesDemo />
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
             <CodeChallenge 
                title="Challenge: Fix the Broken Component" 
                description="The component below is trying to return two elements side-by-side, but React requires a single parent. Can you fix it?"
                files={{
                    "/App.js": `export default function App() {
  return (
    // ❌ Error: JSX expressions must have one parent element.
    <h1>Welcome to React</h1>
    <p>This component is broken because it returns two elements.</p>
  );
}`
                }}
                solution={`export default function App() {
  return (
    <>
      <h1>Welcome to React</h1>
      <p>Fixed! Wrapped in a Fragment.</p>
    </>
  );
}`}
             />
          </motion.div>

           {/* QUIZ SECTION */}
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <QuizSection
              title="Chapter 1 Quiz"
              questions={quizData[slug]}
              onComplete={(answers, score, total) => saveQuizResult(slug, answers, score, total)}
              previousBest={progress.bestScore}
            />
          </motion.div>

           <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "64px 0 48px",
              borderTop: "1px solid var(--border-subtle)",
              marginTop: 64,
            }}
          >
            <Link href="/react-fundamentals" className="btn btn-secondary">
              ← Course Index
            </Link>
            <Link href="/react-fundamentals/state" className="btn btn-primary" style={{  background: "linear-gradient(135deg, #5cf0d0 0%, #5ca8fc 100%)"}}>
              Next: State →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
