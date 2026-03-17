"use client";

import Link from "next/link";
import FeNav from "@/components/FeNav";
import { motion } from "framer-motion";
import DemoPanel from "@/components/DemoPanel";
import CodeChallenge from "@/components/CodeChallenge";
import QuizSection from "@/components/QuizSection";
import { useProgress } from "@/lib/progress";
import { useState, useRef, useEffect } from "react";

function DomDemo() {
  const [elements, setElements] = useState<string[]>([]);

  return (
    <DemoPanel title="Interactive DOM Tree" icon="🌲">
      <div style={{ padding: 20 }}>
        <p style={{ color: "var(--text-secondary)", marginBottom: 16 }}>
          The DOM (Document Object Model) is a tree structure representation of your HTML.
          When you modify elements via JavaScript, you are updating this tree.
        </p>

        <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
             <button 
                onClick={() => setElements([...elements, `Item ${elements.length + 1}`])}
                className="btn btn-secondary"
                style={{ fontSize: "0.8rem", padding: "8px 16px" }}
             >
                + Append Child
             </button>
             <button 
                onClick={() => setElements(elements.slice(0, -1))}
                className="btn btn-secondary"
                style={{ fontSize: "0.8rem", padding: "8px 16px" }}
                disabled={elements.length === 0}
             >
                - Remove Last Child
             </button>
        </div>
        
        <div style={{ 
          background: "#1e1e1e", 
          padding: 20, 
          borderRadius: 8, 
          fontFamily: "monospace",
          border: "1px solid #333"
        }}>
            <div style={{ color: "#569cd6" }}>&lt;ul id="list"&gt;</div>
            {elements.map((el, i) => (
                <div key={i} style={{ paddingLeft: 20 }}>
                    <span style={{ color: "#569cd6" }}>&lt;li&gt;</span>
                    <span style={{ color: "#ce9178" }}>{el}</span>
                    <span style={{ color: "#569cd6" }}>&lt;/li&gt;</span>
                </div>
            ))}
            <div style={{ color: "#569cd6" }}>&lt;/ul&gt;</div>
        </div>
      </div>
    </DemoPanel>
  );
}

function EventBubblingDemo() {
    const [messages, setMessages] = useState<string[]>([]);
    
    // Helper to log message
    const log = (msg: string) => {
        setMessages(prev => [...prev.slice(-4), msg]); 
    };

    return (
        <DemoPanel title="Event Bubbling" icon="💬">
            <div style={{ padding: 20 }}>
                <p style={{ color: "var(--text-secondary)", marginBottom: 16 }}>
                    Events bubble up from the target element to its parents. Click the inner box to see bubbling in action.
                    Using <code>event.stopPropagation()</code> stops this flow.
                </p>
                <div 
                    onClick={() => log("Outer Div Clicked")}
                    style={{ padding: "30px", background: "#333", border: "1px dashed #666", cursor: "pointer" }}
                >
                    Outer Div
                    <div 
                        onClick={() => log("Inner Div Clicked")}
                        style={{ padding: "30px", background: "#444", border: "1px dashed #888", margin: "10px", cursor: "pointer" }}
                    >
                        Inner Div
                        <button 
                            onClick={(e) => {
                                e.stopPropagation();
                                log("Button Clicked (Propagation Stopped)");
                            }}
                            className="btn btn-primary"
                            style={{ display: "block", marginTop: "10px", padding: "8px 12px", fontSize: "0.8rem" }}
                        >
                            Click Me (Stops Bubbling)
                        </button>
                    </div>
                </div>
                <div style={{ marginTop: "16px", minHeight: "80px", background: "#111", padding: "10px", fontFamily: "monospace", fontSize: "0.8rem", color: "#ddd" }}>
                    <strong style={{ display: "block", marginBottom: "4px", color: "#aaa" }}>Event Log:</strong>
                    {messages.map((m, i) => <div key={i}>{m}</div>)}
                </div>
            </div>
        </DemoPanel>
    )
}

export default function DomPage() {
  const { saveQuizResult } = useProgress();

  return (
    <>
      <FeNav />
      <div className="page-wrapper">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
             <Link href="/fe-fundamentals" className="back-link">
              ← Back to Course
            </Link>
            <div className="chapter-hero-number" style={{ color: "#5cf0d0" }}>Module 3</div>
            <h1 className="chapter-hero-title">DOM Manipulation</h1>
            <p className="chapter-hero-desc">
              Selecting elements, changing content, and handling events without a framework.
            </p>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <DomDemo />
          </motion.div>

           <div className="content-block">
             <h2>Selectors and Traversal</h2>
             <p>The most modern and flexible way to select elements is <code>querySelector</code>.</p>
             <ul style={{ paddingLeft: 20, margin: "16px 0", lineHeight: "1.6" }}>
                <li><code>document.getElementById('id')</code> - Fast, specific.</li>
                <li><code>document.querySelector('.class')</code> - Finds the first match.</li>
                <li><code>document.querySelectorAll('div')</code> - Finds all matches (returns NodeList).</li>
                <li><code>element.closest('.container')</code> - Finds the nearest ancestor matching the selector.</li>
                <li><code>element.nextElementSibling</code> - Finds the next sibling element.</li>
             </ul>
             
             <h3 style={{ marginTop: "32px", marginBottom: "16px" }}>The Event Loop & Event Delegation</h3>
             <p>
                <strong>Event Delegation</strong> is a technique where you attach a single event listener 
                to a parent element instead of attaching multiple listeners to individual child elements.
                This works because of Event Bubbling. It improves memory usage and handles dynamically added elements efficiently.
             </p>
           </div>
           
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
           >
                <EventBubblingDemo />
           </motion.div>

           <div className="content-block">
                <h2>Best Practices</h2>
                <div style={{ background: "rgba(92, 240, 208, 0.1)", borderLeft: "4px solid #5cf0d0", padding: "16px", borderRadius: "0 8px 8px 0" }}>
                   <strong>Performance Tip:</strong> Minimize DOM access. Touching the DOM is slow.
                   Store references to elements in variables if you need to access them multiple times.
                   Consider using `DocumentFragment` for batch inserts.
               </div>
               <ul style={{ marginTop: "16px" }}>
                   <li><strong>Readability:</strong> Cache your selectors. e.g. `const submitBtn = document.querySelector('#submit');`</li>
                   <li><strong>Security:</strong> Be careful with `innerHTML`. It can lead to Cross-Site Scripting (XSS) attacks if you insert user-generated content. Use `textContent` or `innerText` for plain text.</li>
               </ul>
           </div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
             <CodeChallenge 
                title="Challenge: Change Text on Click" 
                description="Use JavaScript to select the button and change its text content to 'Clicked!' when clicked."
                files={{
                    "/index.js": `// Select the button
const btn = document.querySelector('#myBtn');

// Add click event listener
btn.addEventListener('click', () => {
  // TODO: Change text content of btn
  
});`,
                    "/index.html": `<button id="myBtn">Click me</button>`
                }}
                solution={`const btn = document.querySelector('#myBtn');

btn.addEventListener('click', () => {
  btn.textContent = "Clicked!";
});`}
             />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <QuizSection
                chapterId="fe-dom"
                onComplete={(answers, score, total) => saveQuizResult("fe-dom", answers, score, total)}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
