"use client";

import { useState } from "react";
import Link from "next/link";
import ReactNav from "@/components/ReactNav";
import DemoPanel from "@/components/DemoPanel";
import CodeChallenge from "@/components/CodeChallenge";
import QuizSection from "@/components/QuizSection";
import { motion, AnimatePresence } from "framer-motion";
import { useProgress } from "@/lib/progress";
import { quizData } from "@/lib/quizData";

function ListsDemo() {
  const [items, setItems] = useState([
    { id: 1, text: "Buy milk" },
    { id: 2, text: "Walk the dog" },
    { id: 3, text: "Learn React" },
  ]);

  const remove = (id: number) => {
    setItems(items.filter(i => i.id !== id));
  };

  const addItem = () => {
    const nextId = items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1;
    setItems([...items, { id: nextId, text: `New Item ${nextId}` }]);
  };

  return (
    <DemoPanel title="Rendering Lists" icon="📝">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>Lists need Keys.</strong> Keys help React identify which items have changed, appeared, or disappeared.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "start", marginTop: 24 }}>
          {/* Code */}
          <div style={{ background: "var(--bg-tertiary)", padding: 20, borderRadius: 12, fontFamily: "monospace", fontSize: "0.82rem", lineHeight: 1.5 }}>
             <div style={{ color: "#7c5cfc" }}>{`{items.map(item => (`}</div>
             <div style={{ paddingLeft: 16 }}>
               <span style={{ color: "#5ca8fc" }}>&lt;li</span> key={"{item.id}"}<span style={{ color: "#5ca8fc" }}>&gt;</span>
             </div>
             <div style={{ paddingLeft: 32 }}>
               {`{item.text}`}
             </div>
             <div style={{ paddingLeft: 16 }}>
               <span style={{ color: "#5ca8fc" }}>&lt;/li&gt;</span>
             </div>
             <div>{`))}`}</div>

             <div style={{ marginTop: 16, borderTop: "1px solid var(--border-subtle)", paddingTop: 16 }}>
                <span style={{ color: "#fc5c8c" }}>Tip:</span> Avoid using array index as key if items can be reordered or deleted.
             </div>
          </div>

          {/* Visualization */}
          <div style={{ padding: 24, background: "var(--bg-glass)", borderRadius: 12 }}>
             <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <AnimatePresence initial={false}>
                    {items.map(item => (
                        <motion.li
                            key={item.id}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            style={{ 
                                background: "var(--bg-tertiary)", 
                                padding: "12px 16px", 
                                marginBottom: 8, 
                                borderRadius: 8, 
                                border: "1px solid var(--border-subtle)",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }}
                        >
                            <span>{item.text}</span>
                            <button 
                                onClick={() => remove(item.id)}
                                style={{ background: "none", border: "none", color: "#fc5c5c", cursor: "pointer", fontSize: "1.2rem", padding: "0 4px" }}
                            >
                                ×
                            </button>
                        </motion.li>
                    ))}
                </AnimatePresence>
             </ul>
             <button 
                onClick={addItem}
                className="btn-secondary"
                style={{ width: "100%", marginTop: 12, padding: "8px" }}
             >
                + Add Item
             </button>
          </div>
      </div>
    </DemoPanel>
  );
}

export default function ListsPage() {
  const { getChapterProgress, saveQuizResult } = useProgress();
  const slug = "react-lists";
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
            <div className="chapter-hero-number" style={{ color: "#9b82ff" }}>Module 5</div>
            <h1 className="chapter-hero-title">Lists & Keys</h1>
            <p className="chapter-hero-desc">
              Learn how to transform arrays of data into lists of elements and why keys are crucial for performance.
            </p>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <ListsDemo />
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
             <CodeChallenge 
                title="Challenge: Rendering a List" 
                description="Map over the 'fruits' array to display an unordered list (<ul>) of list items (<li>). Don't forget the key!"
                files={{
                    "/App.js": `export default function App() {
  const fruits = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
  ];

  return (
    <div>
      <h1>Shopping List</h1>
      {/* 
        Render the list here using fruits.map()
        Each item should be an <li>
      */}
    </div>
  );
}`
                }}
                solution={`export default function App() {
  const fruits = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
  ];

  return (
    <div>
      <h1>Shopping List</h1>
      <ul>
        {fruits.map(fruit => (
          <li key={fruit.id}>{fruit.name}</li>
        ))}
      </ul>
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
            <Link href="/react-fundamentals/events" className="btn btn-secondary">
              ← Events
            </Link>
            <Link href="/react-fundamentals/effects" className="btn btn-primary" style={{  background: "linear-gradient(135deg, #5cf0d0 0%, #5ca8fc 100%)"}}>
              Next: Effects →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
