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

function StateDemo() {
  const [count, setCount] = useState(0);

  return (
    <DemoPanel title="State" icon="💾">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>State is component memory.</strong> It allows a component to &quot;remember&quot; information between renders.
      </p>
      
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "start" }}>
        
        {/* Code */}
        <div style={{ background: "var(--bg-tertiary)", padding: 20, borderRadius: 12, fontFamily: "monospace", fontSize: "0.82rem", lineHeight: 1.5 }}>
           <div style={{ color: "#7c5cfc" }}>const [count, setCount] = useState(0);</div>
           <br/>
           <div>
             <span style={{ color: "#fc5c8c" }}>button</span> onClick={`{`}<br/>
             &nbsp;&nbsp;() =&gt; setCount(count + 1)<br/>
             {`}`}
           </div>
        </div>

        {/* Interactive */}
        <div style={{ textAlign: "center", padding: 20, background: "var(--bg-glass)", borderRadius: 12 }}>
           <div style={{ fontSize: "3rem", fontWeight: 800, marginBottom: 16, color: "#5cf0d0" }}>{count}</div>
           <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
             <button 
               onClick={() => setCount(count - 1)}
               className="btn-secondary"
               style={{ borderRadius: 8, padding: "8px 16px" }}
             >
               -
             </button>
             <button 
               onClick={() => setCount(count + 1)}
               className="btn-primary"
               style={{ borderRadius: 8, padding: "8px 16px", background: "linear-gradient(135deg, #5cf0d0 0%, #5ca8fc 100%)" }}
             >
               Increment +
             </button>
           </div>
           <div style={{ marginTop: 16, fontSize: "0.8rem", color: "var(--text-tertiary)" }}>
             Clicking updates the specific state variable, causing a re-render.
           </div>
        </div>

      </div>
    </DemoPanel>
  );
}

function ToggleDemo() {
  const [isOn, setIsOn] = useState(false);

  return (
    <DemoPanel title="Boolean State" icon="💡">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        State can be any type: number, string, object, or boolean. Booleans are great for toggles.
      </p>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
        <motion.div
           animate={{ 
             backgroundColor: isOn ? "#fcb85c" : "#1a1a28",
             boxShadow: isOn ? "0 0 40px #fcb85c44" : "none"
           }}
           style={{ 
             width: 80, 
             height: 80, 
             borderRadius: "50%", 
             border: "2px solid rgba(255,255,255,0.1)",
             display: "flex",
             alignItems: "center",
             justifyContent: "center",
             fontSize: "2rem"
           }}
        >
          {isOn ? "☀️" : "🌑"}
        </motion.div>

        <button 
          onClick={() => setIsOn(!isOn)}
          className="btn-secondary"
          style={{ width: "100%", maxWidth: 200, padding: 12, borderRadius: 8 }}
        >
          {isOn ? "Turn Off" : "Turn On"}
        </button>
      </div>

    </DemoPanel>
  );
}


export default function StatePage() {
  const { getChapterProgress, saveQuizResult } = useProgress();
  const slug = "react-state";
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
            <div className="chapter-hero-number" style={{ color: "#5ca8fc" }}>Module 2</div>
            <h1 className="chapter-hero-title">State</h1>
            <p className="chapter-hero-desc">
              State lets your components &quot;remember&quot; things—like user input, a timer, or whether a menu is open.
            </p>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <StateDemo />
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <ToggleDemo />
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
             <CodeChallenge 
                title="Challenge: Toggle Visibility" 
                description="Create a button that toggles the visibility of the text below. Use a boolean state variable."
                files={{
                    "/App.js": `import { useState } from 'react';

export default function App() {
  const [isVisible, setIsVisible] = useState(false); 

  return (
    <div style={{ padding: 20, textAlign: 'center' }}>
      <button>
        {isVisible ? 'Hide' : 'Show'} Secret
      </button>
      
      {/* Conditionally render this paragraph based on isVisible */}
      <p>This is a secret message! 🕵️‍♂️</p>
    </div>
  );
}`
                }}
                solution={`import { useState } from 'react';

export default function App() {
  const [isVisible, setIsVisible] = useState(false); 

  return (
    <div style={{ padding: 20, textAlign: 'center' }}>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'} Secret
      </button>
      
      {isVisible && <p>This is a secret message! 🕵️‍♂️</p>}
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
              title="Chapter 2 Quiz"
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
            <Link href="/react-fundamentals/components" className="btn btn-secondary">
              ← Components
            </Link>
            <Link href="/react-fundamentals/props" className="btn btn-primary" style={{  background: "linear-gradient(135deg, #5cf0d0 0%, #5ca8fc 100%)"}}>
              Next: Props →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
