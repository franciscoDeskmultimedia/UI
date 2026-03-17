"use client";

import Link from "next/link";
import ReactNav from "@/components/ReactNav";
import DemoPanel from "@/components/DemoPanel";
import CodeChallenge from "@/components/CodeChallenge";
import QuizSection from "@/components/QuizSection";
import { motion } from "framer-motion";
import { useProgress } from "@/lib/progress";
import { quizData } from "@/lib/quizData";

function PropsDemo() {
  return (
    <DemoPanel title="Passing Data with Props" icon="📡">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>Props (Properties)</strong> allow you to pass data from a parent component to a child component. They are read-only.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "center", marginTop: 24 }}>
          {/* Code */}
          <div style={{ background: "var(--bg-tertiary)", padding: 20, borderRadius: 12, fontFamily: "monospace", fontSize: "0.82rem", lineHeight: 1.5 }}>
             <div style={{ color: "#7c5cfc" }}>function</div> <span style={{ color: "#fcb85c" }}>Greeting</span>({`{ name }`}) {`{`}
             <br/>
             &nbsp;&nbsp;<span style={{ color: "#7c5cfc" }}>return</span> <span style={{ color: "#5ca8fc" }}>&lt;h1&gt;</span>Hello, {`{name}`}!<span style={{ color: "#5ca8fc" }}>&lt;/h1&gt;</span>;
             <br/>
             {`}`}
             <br/><br/>
             <div style={{ color: "#6b6b85" }}>{`// Usage:`}</div>
             <span style={{ color: "#5ca8fc" }}>&lt;Greeting</span> name=<span style={{ color: "#5cf0d0" }}>&quot;Alice&quot;</span> <span style={{ color: "#5ca8fc" }}>/&gt;</span>
          </div>

          {/* Visualization */}
          <div style={{ textAlign: "center", padding: 24, background: "var(--bg-glass)", borderRadius: 12 }}>
             <div style={{ marginBottom: 16 }}>Parent Component</div>
             <div style={{ width: 2, height: 40, background: "#fcb85c", margin: "0 auto" }}></div>
             <div style={{ display: "inline-block", padding: "8px 16px", background: "#fcb85c22", border: "1px solid #fcb85c", borderRadius: 100, color: "#fcb85c", fontSize: "0.8rem", margin: "8px 0" }}>
                Props: {`{ name: "Alice" }`}
             </div>
             <div style={{ width: 2, height: 40, background: "#fcb85c", margin: "0 auto" }}></div>
             <div style={{ background: "white", color: "black", padding: "16px", borderRadius: 8, marginTop: 16 }}>
                <h1 style={{ margin: 0, fontSize: "1.5rem" }}>Hello, Alice!</h1>
             </div>
          </div>
      </div>
    </DemoPanel>
  );
}

export default function PropsPage() {
  const { getChapterProgress, saveQuizResult } = useProgress();
  const slug = "react-props";
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
            <div className="chapter-hero-number" style={{ color: "#fcb85c" }}>Module 3</div>
            <h1 className="chapter-hero-title">Props</h1>
            <p className="chapter-hero-desc">
              Props let you specificy what a component should display. They are like arguments to a function.
            </p>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <PropsDemo />
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
             <CodeChallenge 
                title="Challenge: Custom Button Component" 
                description="Create a Button component that accepts a 'label' prop and an 'onClick' prop."
                files={{
                    "/App.js": `export default function App() {
  return (
    <div style={{ padding: 20 }}>
      {/* Pass "Click Me" and an alert function */}
      <Button /> 
    </div>
  );
}

function Button(props) {
  // Use props.label and props.onClick here
  return <button>Label Here</button>;
}`
                }}
                solution={`export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <Button label="Click Me" onClick={() => alert("Clicked!")} /> 
    </div>
  );
}

function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
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
            <Link href="/react-fundamentals/state" className="btn btn-secondary">
              ← State
            </Link>
            <Link href="/react-fundamentals/events" className="btn btn-primary" style={{  background: "linear-gradient(135deg, #5cf0d0 0%, #5ca8fc 100%)"}}>
              Next: Events →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
