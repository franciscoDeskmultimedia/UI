"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ReactNav from "@/components/ReactNav";
import DemoPanel from "@/components/DemoPanel";
import CodeChallenge from "@/components/CodeChallenge";
import QuizSection from "@/components/QuizSection";
import { motion } from "framer-motion";
import { useProgress } from "@/lib/progress";
import { quizData } from "@/lib/quizData";

function EffectsDemo() {
  const [count, setCount] = useState(0);
  const [effectRunCount, setEffectRunCount] = useState(0);
  const [dependency, setDependency] = useState("count"); // 'count' or 'none'

  // This is a simulation for visual purposes
  useEffect(() => {
    // Only update visual counter if dependency matches
    if (dependency === "count") {
      setEffectRunCount(prev => prev + 1);
    }
  }, [count, dependency]);

  return (
    <DemoPanel title="Side Effects with useEffect" icon="⚡">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>useEffect</strong> lets you perform side effects (fetching data, subscriptions, timers). 
        The dependency array controls when it runs.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "center", marginTop: 24 }}>
          {/* Code */}
          <div style={{ background: "var(--bg-tertiary)", padding: 20, borderRadius: 12, fontFamily: "monospace", fontSize: "0.82rem", lineHeight: 1.5 }}>
             <div style={{ color: "#7c5cfc" }}>useEffect</div>(() =&gt; {`{`}
             <br/>
             &nbsp;&nbsp;console.log(<span style={{ color: "#5cf0d0" }}>&quot;Ran!&quot;</span>);
             <br/>
             {`}`}, [
                <span 
                    style={{ 
                        color: dependency === "count" ? "#fc5c8c" : "#6b6b85", 
                        textDecoration: dependency === "none" ? "line-through" : "none" 
                    }}
                >
                    count
                </span>
             ]);

             <div style={{ marginTop: 24, fontSize: "0.8rem", color: "var(--text-secondary)" }}>
                Dependency Array: <span style={{ color: "#fc5c8c" }}>{dependency === "count" ? "[count]" : "[]"}</span>
             </div>
          </div>

          {/* Visualization */}
          <div style={{ textAlign: "center", padding: 24, background: "var(--bg-glass)", borderRadius: 12 }}>
             <div style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: 16 }}>Count: {count}</div>
             <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 24 }}>
                 <button onClick={() => setCount(count + 1)} className="btn-primary">Update Count</button>
             </div>

             <div style={{ paddingTop: 16, borderTop: "1px solid var(--border-subtle)" }}>
                 <div style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: 8 }}>Effect Run Count:</div>
                 <div style={{ fontSize: "1.5rem", color: "#5ca8fc", fontWeight: "bold" }}>{effectRunCount}</div>
             </div>

             <div style={{ marginTop: 16, display: "flex", justifyContent: "center", gap: 8 }}>
                 <button 
                    onClick={() => { setDependency(dependency === "count" ? "none" : "count"); setEffectRunCount(0); }} 
                    style={{ fontSize: "0.8rem", padding: "4px 8px", background: "var(--bg-tertiary)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)", borderRadius: 4 }}
                 >
                    Toggle Dependency: {dependency === "count" ? "On" : "Off"}
                 </button>
             </div>
          </div>
      </div>
    </DemoPanel>
  );
}

export default function EffectsPage() {
  const { getChapterProgress, saveQuizResult } = useProgress();
  const slug = "react-effects";
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
            <div className="chapter-hero-number" style={{ color: "#7c5cfc" }}>Module 6</div>
            <h1 className="chapter-hero-title">Effects</h1>
            <p className="chapter-hero-desc">
              Synchronize your component with external systems (like the DOM, network, or timers) using the useEffect hook.
            </p>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <EffectsDemo />
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
             <CodeChallenge 
                title="Challenge: Component Title" 
                description="Update the document title (window.document.title) to match the count every time it changes."
                files={{
                    "/App.js": `import { useState, useEffect } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  // 1. Use useEffect
  // 2. Set document.title = \`Count: \${count}\`
  // 3. Add count to the dependency array

  return (
    <div style={{ padding: 20 }}>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
      <p>Look at the browser tab title!</p>
    </div>
  );
}`
                }}
                solution={`import { useState, useEffect } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={() => setCount(count + 1)}>
         Count: {count}
      </button>
      <p>Look at the browser tab title!</p>
    </div>
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
              title="Chapter 6 Quiz"
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
            <Link href="/react-fundamentals/lists" className="btn btn-secondary">
              ← Lists
            </Link>
            <Link href="/react-fundamentals/final-quiz" className="btn btn-primary" style={{  background: "linear-gradient(135deg, #fcb85c 0%, #fc5c5c 100%)"}}>
              🏆 Final Quiz
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
