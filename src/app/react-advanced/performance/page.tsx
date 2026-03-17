"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import ReactAdvancedNav from "@/components/ReactAdvancedNav";
import DemoPanel from "@/components/DemoPanel";
import CodeChallenge from "@/components/CodeChallenge";
import QuizSection from "@/components/QuizSection";
import { motion } from "framer-motion";
import { useProgress } from "@/lib/progress";
import { quizData } from "@/lib/quizData";

function PerformanceDemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Simulate heavy computation
  const heavyValue = useMemo(() => {
    // For a visual demo, we can just log or show a 'computing' indicator if we wanted, 
    // but here we just want to show the syntax and specific behavior.
    // Let's do a meaningful calculation that changes only when count changes.
    return count * 2; 
  }, [count]);

  return (
    <DemoPanel title="useMemo Optimization" icon="🚀">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>useMemo</strong> caches the result of a calculation between re-renders. 
        It only recalculates when dependencies change.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "start", marginTop: 24 }}>
        
        {/* Code Snippet */}
        <div style={{ background: "var(--bg-tertiary)", padding: 20, borderRadius: 12, fontFamily: "monospace", fontSize: "0.82rem", lineHeight: 1.5 }}>
           <div><span style={{ color: "#7c5cfc" }}>const</span> heavyValue = useMemo(() =&gt; {`{`}</div>
           <div style={{ paddingLeft: 32, color: "#6b6b85" }}>{`// Expensive calculation...`}</div>
           <div style={{ paddingLeft: 16 }}>
             <span style={{ color: "#7c5cfc" }}>return</span> count * 2;
           </div>
           <div>{`}`}, [<span style={{ color: "#fc5c8c" }}>count</span>]);</div>
           <br/>
           <div style={{ color: "#6b6b85" }}>{`// Only runs when 'count' changes.`}</div>
           <div style={{ color: "#6b6b85" }}>{`// Typing in the input below won't trigger it!`}</div>
        </div>

        {/* Live Demo */}
        <div style={{ padding: 24, background: "var(--bg-glass)", borderRadius: 12 }}>
          
           <div style={{ marginBottom: 24 }}>
             <div style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: 8 }}>
                1. Change Dependency (<span style={{ color: "#fc5c8c" }}>count</span>):
             </div>
             <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <button 
                  onClick={() => setCount(c => c + 1)}
                  className="btn-primary"
                  style={{ background: "linear-gradient(135deg, #5ca8fc 0%, #fc5c8c 100%)" }}
                >
                  Count: {count}
                </button>
                <div style={{ fontSize: "0.9rem" }}>
                   Result: <strong>{heavyValue}</strong>
                </div>
             </div>
           </div>

           <div>
             <div style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: 8 }}>
                2. Force Re-render (Unrelated State):
             </div>
             <input 
               type="text" 
               value={text}
               onChange={(e) => setText(e.target.value)}
               placeholder="Type here..."
               style={{ 
                 width: "100%", 
                 padding: "10px 12px", 
                 background: "var(--bg-tertiary)", 
                 border: "1px solid var(--border-subtle)", 
                 borderRadius: 6,
                 color: "white"
               }}
             />
             <div style={{ fontSize: "0.8rem", color: "var(--text-tertiary)", marginTop: 8 }}>
               Typing causes re-renders, but <code>useMemo</code> prevents the heavy calculation from running again.
             </div>
           </div>

        </div>

      </div>
    </DemoPanel>
  );
}

export default function PerformancePage() {
  const { getChapterProgress, saveQuizResult } = useProgress();
  const slug = "react-adv-perf";
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
            <div className="chapter-hero-number" style={{ color: "#5ca8fc" }}>Module 3</div>
            <h1 className="chapter-hero-title">Performance Optimization</h1>
            <p className="chapter-hero-desc">
              React is fast, but you can make it faster. Learn how to skip unnecessary calculations and re-renders using <code>useMemo</code> and <code>useCallback</code>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <PerformanceDemo />
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
             <CodeChallenge 
                title="Challenge: Skipping Re-Renders" 
                description="The 'SlowComponent' is slowing down the app. Wrap it in 'memo' so it only re-renders when its props change."
                files={{
                    "/App.js": `import { useState, memo } from 'react';

// TODO: Wrap this component with memo
const SlowComponent = ({ value }) => {
  console.log("SlowComponent rendered!");
  return <div>Value: {value}</div>;
};

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div style={{ padding: 20 }}>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <input 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Type here..." 
      />
      {/* This renders on every keystroke! Fix it. */}
      <SlowComponent value={count} />
    </div>
  );
}`
                }}
                solution={`import { useState, memo } from 'react';

const SlowComponent = memo(({ value }) => {
  console.log("SlowComponent rendered!");
  return <div>Value: {value}</div>;
});

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div style={{ padding: 20 }}>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <input 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Type here..." 
      />
      <SlowComponent value={count} />
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
                <h3 style={{ fontSize: "1rem", color: "#5cf0d0", margin: "0 0 8px" }}>💡 Pro Tip: Don&apos;t Over-Optimize</h3>
                <p style={{ fontSize: "0.9rem", margin: 0, lineHeight: 1.6, color: "var(--text-secondary)" }}>
                    <code>useMemo</code> and <code>useCallback</code> have a cost (memory + comparison). 
                    Only use them when:
                    <br/>1. The calculation is actually slow (measure it!).
                    <br/>2. You need referential equality (e.g. for dependency arrays).
                    <br/>Most simple arithmetic or filtering is fast enough without memoization.
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
              title="Chapter 3 Quiz"
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
            <Link href="/react-advanced/context" className="btn btn-secondary">
              ← Context API
            </Link>
            <Link href="/react-advanced/custom-hooks" className="btn btn-primary" style={{ background: "linear-gradient(135deg, #fcb85c 0%, #fc5c5c 100%)" }}>
              Next: Custom Hooks →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
