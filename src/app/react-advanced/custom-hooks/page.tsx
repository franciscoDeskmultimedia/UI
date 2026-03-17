"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ReactAdvancedNav from "@/components/ReactAdvancedNav";
import DemoPanel from "@/components/DemoPanel";
import CodeChallenge from "@/components/CodeChallenge";
import QuizSection from "@/components/QuizSection";
import { motion } from "framer-motion";
import { useProgress } from "@/lib/progress";
import { quizData } from "@/lib/quizData";

// Custom Hook
function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined") return;

    function handleResize() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Set initial size
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}

function CustomHookDemo() {
  const { width, height } = useWindowSize();

  return (
    <DemoPanel title="Creating a Custom Hook" icon="🎣">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>Custom Hooks</strong> let you extract component logic into reusable functions.
        They must start with `use` and can call other hooks.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "start", marginTop: 24 }}>
        
        {/* Code Snippet */}
        <div style={{ background: "var(--bg-tertiary)", padding: 20, borderRadius: 12, fontFamily: "monospace", fontSize: "0.82rem", lineHeight: 1.5 }}>
           <div><span style={{ color: "#7c5cfc" }}>function</span> <span style={{ color: "#fcb85c" }}>useWindowSize</span>() {"{"}</div>
           <div style={{ paddingLeft: 16 }}>
             <span style={{ color: "#7c5cfc" }}>const</span> [size, setSize] = useState(...);
           </div>
           <br/>
           <div style={{ paddingLeft: 16 }}>
             <span style={{ color: "#7c5cfc" }}>useEffect</span>(() =&gt; {"{"}
           </div>
           <div style={{ paddingLeft: 32, color: "#6b6b85" }}>{`// Listen to resize...`}</div>
           <div style={{ paddingLeft: 16 }}>{"}, []);"}</div>
           <br/>
           <div style={{ paddingLeft: 16 }}>
             <span style={{ color: "#7c5cfc" }}>return</span> size;
           </div>
           <div>{"}"}</div>
           <br/>
           <div style={{ color: "#6b6b85" }}>{`// Usage (Clean!):`}</div>
           <div><span style={{ color: "#7c5cfc" }}>const</span> size = useWindowSize();</div>
        </div>

        {/* Live Demo */}
        <div style={{ padding: 24, background: "var(--bg-glass)", borderRadius: 12, textAlign: "center" }}>
           <div style={{ marginBottom: 16, fontSize: "2rem" }}>📏</div>
           <div style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: 8 }}>
              Current Window Dimensions:
           </div>
           <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#5cf0d0" }}>
              {width} x {height}
           </div>
           <div style={{ fontSize: "0.8rem", color: "var(--text-tertiary)", marginTop: 12 }}>
              Try resizing your browser window!
           </div>
        </div>

      </div>
    </DemoPanel>
  );
}

export default function CustomHooksPage() {
  const { getChapterProgress, saveQuizResult } = useProgress();
  const slug = "react-adv-hooks";
  const progress = getChapterProgress(slug);

  return (
    <>
      <ReactAdvancedNav />
      <div className="page-wrapper">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center" }}
          >
             <Link href="/react-advanced" className="back-link">
              ← Back to Overview
            </Link>
            <div className="chapter-hero-number" style={{ color: "#9b82ff" }}>Module 4</div>
            <h1 className="chapter-hero-title">Custom Hooks</h1>
            <p className="chapter-hero-desc">
              Don&apos;t duplicate logic. Extract stateful behavior into reusable functions that you can share across components.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <CustomHookDemo />
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
             <CodeChallenge 
                title="Challenge: Toggle Hook" 
                description="Create a custom hook called 'useToggle' that manages a boolean state and returns [value, toggleFunction]."
                files={{
                    "/App.js": `import { useState } from 'react';

// 1. Create useToggle hook
// function useToggle(initialValue = false) { ... }

export default function App() {
  // 2. Use the hook
  const [isOn, toggle] = useState(false); // Replace this with useToggle

  return (
    <div style={{ padding: 20, textAlign: 'center' }}>
      <h1>{isOn ? 'ON' : 'OFF'}</h1>
      <button onClick={() => toggle(!isOn)}>
        Toggle
      </button>
    </div>
  );
}`
                }}
                solution={`import { useState } from 'react';

function useToggle(initialValue = false) {
  const [state, setState] = useState(initialValue);
  const toggle = () => setState(prev => !prev);
  return [state, toggle];
}

export default function App() {
  const [isOn, toggle] = useToggle(false);

  return (
    <div style={{ padding: 20, textAlign: 'center' }}>
      <h1>{isOn ? 'ON' : 'OFF'}</h1>
      <button onClick={toggle}>
        Toggle
      </button>
    </div>
  );
}`}
             />
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
             <div style={{ marginTop: 32, padding: 24, background: "rgba(155, 130, 255, 0.1)", border: "1px solid rgba(155, 130, 255, 0.2)", borderRadius: 12 }}>
                <h3 style={{ fontSize: "1rem", color: "#9b82ff", margin: "0 0 8px" }}>💡 Pro Tip: Hooks Composition</h3>
                <p style={{ fontSize: "0.9rem", margin: 0, lineHeight: 1.6, color: "var(--text-secondary)" }}>
                    Custom hooks can use other custom hooks! You can build small, focused hooks (like <code>useWindowSize</code> or <code>useLocalStorage</code>) 
                    and combine them into more complex hooks (like <code>useResponsiveLocalStorage</code>).
                </p>
            </div>
          </motion.div>

           {/* QUIZ SECTION */}
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <QuizSection
              title="Chapter 4 Quiz"
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
            <Link href="/react-advanced/performance" className="btn btn-secondary">
              ← Performance
            </Link>
            <Link href="/react-advanced/refs" className="btn btn-primary" style={{ background: "linear-gradient(135deg, #fcb85c 0%, #fc5c5c 100%)" }}>
              Next: Refs & DOM →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
