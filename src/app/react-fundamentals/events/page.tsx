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

function EventsDemo() {
  const [lastEvent, setLastEvent] = useState<string>("None");
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  return (
    <DemoPanel title="Handling Events" icon="🖱️">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>React events are named using camelCase,</strong> rather than lowercase.
        For example, `onclick` becomes `onClick`.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "start", marginTop: 24 }}>
          {/* Code */}
          <div style={{ background: "var(--bg-tertiary)", padding: 20, borderRadius: 12, fontFamily: "monospace", fontSize: "0.82rem", lineHeight: 1.5 }}>
             <div style={{ color: "#7c5cfc" }}>function</div> <span style={{ color: "#fcb85c" }}>handleClick</span>(e) {`{`}
             <br/>
             &nbsp;&nbsp;console.log(<span style={{ color: "#5cf0d0" }}>&quot;Clicked!&quot;</span>);
             <br/>
             {`}`}
             <br/><br/>
             <div style={{ color: "#6b6b85" }}>{`// Pass function reference:`}</div>
             <span style={{ color: "#5ca8fc" }}>&lt;button</span> onClick={"{handleClick}"}<span style={{ color: "#5ca8fc" }}>&gt;</span>
             <br/>
             &nbsp;&nbsp;Click Me
             <br/>
             <span style={{ color: "#5ca8fc" }}>&lt;/button&gt;</span>
          </div>

          {/* Visualization */}
          <div style={{ textAlign: "center", padding: 24, background: "var(--bg-glass)", borderRadius: 12 }}>
             <button 
                onClick={() => setLastEvent("Clicked!")}
                onMouseEnter={() => setLastEvent("Mouse Enter")}
                onMouseLeave={() => setLastEvent("Mouse Leave")}
                onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    setCoords({ x: Math.round(e.clientX - rect.left), y: Math.round(e.clientY - rect.top) });
                }}
                className="btn-primary"
                style={{ marginBottom: 16 }}
             >
                Interact with Me
             </button>
             <div style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                Last Event: <span style={{ color: "#fc5c8c", fontWeight: "bold" }}>{lastEvent}</span>
             </div>
             {lastEvent === "Mouse Leave" ? null : (
                <div style={{ fontSize: "0.8rem", color: "var(--text-tertiary)", marginTop: 4 }}>
                    Args: {`{ x: ${coords.x}, y: ${coords.y} }`}
                </div>
             )}
          </div>
      </div>
    </DemoPanel>
  );
}

export default function EventsPage() {
  const { getChapterProgress, saveQuizResult } = useProgress();
  const slug = "react-events";
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
            <div className="chapter-hero-number" style={{ color: "#fc5c8c" }}>Module 4</div>
            <h1 className="chapter-hero-title">Events</h1>
            <p className="chapter-hero-desc">
              Events are how your app responds to user interactions like clicks, form submissions, and key presses.
            </p>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <EventsDemo />
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
             <CodeChallenge 
                title="Challenge: Input Handler" 
                description="Update the state variable 'text' as the user types in the input field."
                files={{
                    "/App.js": `import { useState } from 'react';

export default function App() {
  const [text, setText] = useState('');

  // 1. Create a handleChange function
  // 2. Attach it to the input's onChange event

  return (
    <div style={{ padding: 20 }}>
      <input type="text" placeholder="Type here..." />
      <p>You typed: {text}</p>
    </div>
  );
}`
                }}
                solution={`import { useState } from 'react';

export default function App() {
  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div style={{ padding: 20 }}>
      <input 
        type="text" 
        placeholder="Type here..." 
        onChange={handleChange}
        value={text} // Controlled component
      />
      <p>You typed: {text}</p>
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
            <Link href="/react-fundamentals/props" className="btn btn-secondary">
              ← Props
            </Link>
            <Link href="/react-fundamentals/lists" className="btn btn-primary" style={{  background: "linear-gradient(135deg, #5cf0d0 0%, #5ca8fc 100%)"}}>
              Next: Lists →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
