"use client";

import Link from "next/link";
import FeAdvancedNav from "@/components/FeAdvancedNav";
import { motion } from "framer-motion";
import DemoPanel from "@/components/DemoPanel";
import CodeChallenge from "@/components/CodeChallenge";
import QuizSection from "@/components/QuizSection";
import { useProgress } from "@/lib/progress";

function A11yDemo() {
  return (
    <DemoPanel title="Accessibility Simulator" icon="♿">
      <div style={{ padding: 20 }}>
        <p style={{ color: "var(--text-secondary)", marginBottom: 16 }}>
          Accessible elements must be focusable, have sufficient contrast, and provide labels for screen readers.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
             {/* Inaccessible Example */}
            <div style={{ border: "1px solid var(--border-subtle)", padding: 16, borderRadius: 8 }}>
                <h4 style={{ color: "#fc5c5c", marginBottom: 8 }}>Bad: Inaccessible</h4>
                <div style={{ fontSize: "0.8rem", color: "var(--text-tertiary)", marginBottom: 16 }}>
                    - Low contrast<br/>
                    - Not focusable (div)<br/>
                    - No label
                </div>
                {/* A div button with low contrast */}
                <div style={{ 
                    cursor: "pointer", 
                    background: "#ddd", 
                    color: "#ccc", 
                    padding: "8px 16px", 
                    display: "inline-block" 
                }}>
                    Submit
                </div>
            </div>

             {/* Accessible Example */}
             <div style={{ border: "1px solid var(--border-subtle)", padding: 16, borderRadius: 8 }}>
                <h4 style={{ color: "#5cf0d0", marginBottom: 8 }}>Good: Accessible</h4>
                <div style={{ fontSize: "0.8rem", color: "var(--text-tertiary)", marginBottom: 16 }}>
                    + High contrast<br/>
                    + Native button (focusable)<br/>
                    + Clear label
                </div>
                <button className="btn btn-primary" aria-label="Submit form">
                    Submit
                </button>
            </div>
        </div>
      </div>
    </DemoPanel>
  );
}

function AriaDemo() {
    return (
        <DemoPanel title="Screen Reader Simulation (ARIA)" icon="🔊">
            <div style={{ padding: 20 }}>
                <p style={{ color: "var(--text-secondary)", marginBottom: 16 }}>
                    Screen readers announce elements differently based on semantic roles and ARIA labels.
                </p>
                <div style={{ display: "grid", gap: "10px" }}>
                    <div style={{ background: "#222", padding: "12px", borderRadius: "6px", border: "1px solid #333" }}>
                        <strong style={{ color: "#fc5c8c", display: "block", marginBottom: "4px" }}>&lt;div&gt;Menu&lt;/div&gt;</strong>
                        <div style={{ color: "#888", fontSize: "0.9rem" }}>Screen Reader says: &quot;Menu&quot; (No indication it's interactable)</div>
                    </div>
                    <div style={{ background: "#222", padding: "12px", borderRadius: "6px", border: "1px solid #333" }}>
                        <strong style={{ color: "#5cf0d0", display: "block", marginBottom: "4px" }}>&lt;button&gt;Menu&lt;/button&gt;</strong>
                        <div style={{ color: "#888", fontSize: "0.9rem" }}>Screen Reader says: &quot;Menu, button&quot; (User knows to click)</div>
                    </div>
                     <div style={{ background: "#222", padding: "12px", borderRadius: "6px", border: "1px solid #333" }}>
                        <strong style={{ color: "#fcb85c", display: "block", marginBottom: "4px" }}>&lt;button aria-expanded=&quot;true&quot;&gt;Menu&lt;/button&gt;</strong>
                        <div style={{ color: "#888", fontSize: "0.9rem" }}>Screen Reader says: &quot;Menu, button, expanded&quot; (State is communicated)</div>
                    </div>
                </div>
            </div>
        </DemoPanel>
    )
}

export default function A11yPage() {
  const { saveQuizResult } = useProgress();

  return (
    <>
      <FeAdvancedNav />
      <div className="page-wrapper">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
             <Link href="/fe-advanced" className="back-link">
              ← Back to Course
            </Link>
            <div className="chapter-hero-number" style={{ color: "#9b82ff" }}>Module 2</div>
            <h1 className="chapter-hero-title">Accessibility (A11y)</h1>
            <p className="chapter-hero-desc">
              Building inclusive applications. Semantic HTML, ARIA, and Keyboard Navigation.
            </p>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <A11yDemo />
          </motion.div>

           <div className="content-block">
             <h2>The POUR Principles</h2>
             <p>The Web Content Accessibility Guidelines (WCAG) rely on four main principles:</p>
             <ul style={{ lineHeight: "1.8", marginTop: "16px" }}>
                 <li><strong>Perceivable:</strong> Users must be able to perceive the information being presented (it can't be invisible to all their senses). e.g., Alt text for images, captions for video.</li>
                 <li><strong>Operable:</strong> Users must be able to operate the interface. e.g., Keyboard navigation, no keyboard traps.</li>
                 <li><strong>Understandable:</strong> Operation and information must be understandable. e.g., Clear error messages, predictable navigation.</li>
                 <li><strong>Robust:</strong> Content must be compatible with a wide variety of user agents, including assistive technologies.</li>
             </ul>
             
             <h3 style={{ marginTop: "32px", marginBottom: "16px" }}>Semantic HTML First</h3>
             <p>
                 Always prefer native HTML elements over custom ARIA implementations. 
                 A native <code>&lt;button&gt;</code> comes with focus handling and keyboard support (Enter/Space) built-in. 
                 A <code>&lt;div onClick&gt;</code> has none of this and requires significant work to make accessible.
             </p>
           </div>
           
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
           >
                <AriaDemo />
           </motion.div>

           <div className="content-block">
                <h2>Best Practices</h2>
                <div style={{ background: "rgba(252, 92, 140, 0.1)", borderLeft: "4px solid #fc5c8c", padding: "16px", borderRadius: "0 8px 8px 0" }}>
                   <strong>Dev Tip:</strong> Unplug your mouse! Try to navigate your site using only the Tab key. Can you access everything? Can you see where you are (focus ring)?
               </div>
               <ul style={{ marginTop: "16px" }}>
                   <li><strong>Color Contrast:</strong> Ensure text meets WCAG AA standards (4.5:1 ratio for normal text).</li>
                   <li><strong>Focus Management:</strong> When a modal opens, move focus inside it. When it closes, return focus to the trigger button.</li>
                   <li><strong>Skip Links:</strong> Provide a "Skip to Content" link for keyboard users to bypass repetitive navigation.</li>
               </ul>
           </div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
             <CodeChallenge 
                title="Challenge: Fix the Button" 
                description="The 'button' below is just a div. It's not keyboard accessible. Change it to a real <button> and add an aria-label for the icon."
                files={{
                    "/App.js": `export default function App() {
  return (
    <div style={{ padding: 20 }}>
      {/* 
        TODO: 
        1. Change <div> to <button>
        2. Add aria-label="Close" 
      */}
      <div 
        onClick={() => alert("Closed!")}
        style={{ fontSize: 24, cursor: "pointer" }}
      >
        ❌
      </div>
    </div>
  );
}`
                }}
                solution={`export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <button 
        onClick={() => alert("Closed!")}
        aria-label="Close"
        style={{ fontSize: 24, cursor: "pointer", background: "none", border: "none" }}
      >
        ❌
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
            <QuizSection
                chapterId="fe-adv-a11y"
                onComplete={(score) => saveQuizResult("fe-adv-a11y", score)}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
