"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import ReactAdvancedNav from "@/components/ReactAdvancedNav";
import DemoPanel from "@/components/DemoPanel";
import CodeChallenge from "@/components/CodeChallenge";
import QuizSection from "@/components/QuizSection";
import { motion } from "framer-motion";
import { useProgress } from "@/lib/progress";
import { quizData } from "@/lib/quizData";

function RefsDemo() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");

  const handleFocus = () => {
    // Imperatively focus the DOM element
    if (inputRef.current) {
        inputRef.current.focus();
        // Optional: Select text
        inputRef.current.select();
    }
  };

  return (
    <DemoPanel title="useRef & The DOM" icon="🔗">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>useRef</strong> lets you access DOM nodes directly. 
        It&apos;s also used to store mutable values that don&apos;t trigger re-renders.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "start", marginTop: 24 }}>
        
        {/* Code Snippet */}
        <div style={{ background: "var(--bg-tertiary)", padding: 20, borderRadius: 12, fontFamily: "monospace", fontSize: "0.82rem", lineHeight: 1.5 }}>
           <div><span style={{ color: "#7c5cfc" }}>const</span> inputRef = useRef(null);</div>
           <br/>
           <div><span style={{ color: "#fcb85c" }}>function</span> handleClick() {"{"}</div>
           <div style={{ paddingLeft: 16 }}>
             <span style={{ color: "#7c5cfc" }}>if</span> (inputRef.current) {"{"}
           </div>
           <div style={{ paddingLeft: 32 }}>
             inputRef.current.focus();
           </div>
           <div style={{ paddingLeft: 16 }}>{"}"}</div>
           <div>{"}"}</div>
           <br/>
           <div><span style={{ color: "#5ca8fc" }}>&lt;input</span> ref={"{inputRef}"} <span style={{ color: "#5ca8fc" }}>/&gt;</span></div>
        </div>

        {/* Live Demo */}
        <div style={{ padding: 24, background: "var(--bg-glass)", borderRadius: 12 }}>
           <div style={{ marginBottom: 16 }}>
             <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: 4 }}>
                Target Input:
             </label>
             <input 
               ref={inputRef}
               type="text" 
               value={value}
               onChange={(e) => setValue(e.target.value)}
               placeholder="I'm the target!"
               style={{ 
                 width: "100%", 
                 padding: "10px 12px", 
                 background: "var(--bg-tertiary)", 
                 border: "1px solid var(--border-subtle)", 
                 borderRadius: 6,
                 color: "white"
               }}
             />
           </div>

           <button 
             onClick={handleFocus}
             className="btn-primary"
             style={{ width: "100%", background: "linear-gradient(135deg, #5cf0d0 0%, #5ca8fc 100%)" }}
           >
             Focus Input (Imperative)
           </button>
           
           <div style={{ fontSize: "0.8rem", color: "var(--text-tertiary)", marginTop: 12, textAlign: "center" }}>
              Clicking the button finds the DOM node and calls <code>.focus()</code>
           </div>
        </div>

      </div>
    </DemoPanel>
  );
}

export default function RefsPage() {
  const { getChapterProgress, saveQuizResult } = useProgress();
  const slug = "react-adv-refs";
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
            <div className="chapter-hero-number" style={{ color: "#5cf0d0" }}>Module 5</div>
            <h1 className="chapter-hero-title">Refs & The DOM</h1>
            <p className="chapter-hero-desc">
              Sometimes you need to step outside React&apos;s declarative flow. Use Refs to manage focus, scroll position, or integrate with third-party DOM libraries.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <RefsDemo />
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
             <CodeChallenge 
                title="Challenge: Focusing an Input" 
                description="Use 'useRef' to create a reference to the input element and focus it when the button is clicked."
                files={{
                    "/App.js": `import { useRef } from 'react';

export default function App() {
  // 1. Create a ref
  const inputRef = null; // Replace with useRef

  const handleClick = () => {
    // 2. Focus the input using the ref
  };

  return (
    <div style={{ padding: 20 }}>
      {/* 3. Attach ref to input */}
      <input type="text" placeholder="Focus me..." />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}`
                }}
                solution={`import { useRef } from 'react';

export default function App() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div style={{ padding: 20 }}>
      <input ref={inputRef} type="text" placeholder="Focus me..." />
      <button onClick={handleClick}>Focus Input</button>
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
            <div style={{ marginTop: 32, padding: 24, background: "rgba(92, 240, 208, 0.1)", border: "1px solid rgba(92, 240, 208, 0.2)", borderRadius: 12 }}>
                <h3 style={{ fontSize: "1rem", color: "#5cf0d0", margin: "0 0 8px" }}>💡 Pro Tip: Callback Refs</h3>
                <p style={{ fontSize: "0.9rem", margin: 0, lineHeight: 1.6, color: "var(--text-secondary)" }}>
                   If you need to know when a ref is attached or detached (e.g. for measuring size), <code>useRef</code> won&apos;t notify you. 
                   Instead, pass a function to the <code>ref</code> attribute (a callback ref). React calls it with the DOM node when it mounts, and with <code>null</code> when it unmounts.
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
              title="Chapter 5 Quiz"
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
            <Link href="/react-advanced/custom-hooks" className="btn btn-secondary">
              ← Custom Hooks
            </Link>
            <Link href="/react-advanced/final-quiz" className="btn btn-primary" style={{ background: "linear-gradient(135deg, #fcb85c 0%, #fc5c5c 100%)" }}>
              🏆 Final Quiz
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
