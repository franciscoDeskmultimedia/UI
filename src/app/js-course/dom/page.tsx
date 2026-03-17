"use client";

import JsNav from "@/components/JsNav";
import Link from "next/link";
import { motion } from "framer-motion";
import DemoPanel from "@/components/DemoPanel";
import CodeChallenge from "@/components/CodeChallenge";
import QuizSection from "@/components/QuizSection";
import { useProgress } from "@/lib/progress";

function DomDemo() {
  return (
    <DemoPanel title="The DOM Tree" icon="🌲">
      <div style={{ padding: 20 }}>
        <p style={{ color: "var(--text-secondary)", marginBottom: 16 }}>
          The Document Object Model (DOM) is a tree of elements.
        </p>

        <div style={{ padding: 16, background: "#1e1e1e", borderRadius: 8, fontFamily: "monospace", lineHeight: 1.8 }}>
             <div style={{ color: "#aaa" }}>document</div>
             <div style={{ paddingLeft: 20, color: "#fc5c8c" }}>
                 body
                 <div style={{ paddingLeft: 20, color: "#fcb85c" }}>
                     h1 <span style={{ color: "#666" }}>("Welcome")</span>
                 </div>
                 <div style={{ paddingLeft: 20, color: "#fcb85c" }}>
                     div <span style={{ color: "#666" }}>(id="app")</span>
                     <div style={{ paddingLeft: 20, color: "#5cf0d0" }}>
                         p <span style={{ color: "#666" }}>("Hello")</span>
                     </div>
                 </div>
             </div>
        </div>
      </div>
    </DemoPanel>
  );
}

export default function JsDomPage() {
  const { saveQuizResult } = useProgress();

  return (
    <>
      <JsNav />
      <div className="page-wrapper">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
             <Link href="/js-course" className="back-link">
              ← Back to Course
            </Link>
            <div className="chapter-hero-number" style={{ color: "#F7DF1E" }}>Module 6</div>
            <h1 className="chapter-hero-title">DOM Manipulation</h1>
            <p className="chapter-hero-desc">
              Finding HTML elements, changing content, and modifying styles with JS.
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
             <h2>Methods for Finding Elements</h2>
             <ul>
                 <li><code>document.getElementById("demo")</code>: Used for finding an element by element id. (Fastest).</li>
                 <li><code>document.querySelector(".demo")</code>: Finds the first element that matches the CSS selector. (Most flexible).</li>
                 <li><code>document.querySelectorAll("p")</code>: Finds ALL matching elements (returns a NodeList).</li>
             </ul>

             <h3>Changing Content</h3>
             <pre>
const element = document.getElementById("demo");

// Change text
element.innerText = "New Text";

// Change HTML (careful with XSS!)
element.innerHTML = "&lt;strong&gt;Bold&lt;/strong&gt;";

// Change Style
element.style.color = "red";
element.style.display = "none";
             </pre>
           </div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
             <CodeChallenge 
                title="Challenge: Change Text" 
                description="Select the element with id 'header' and change its text content to 'Updated Title'."
                files={{
                    "/app.js": `// TODO: Select #header and update text
`,
                    "/index.html": `<h1 id="header">Old Title</h1>`
                }}
                solution={`const header = document.getElementById("header");
header.innerText = "Updated Title";`}
             />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <QuizSection
                chapterId="js-dom"
                onComplete={(score) => saveQuizResult("js-dom", score)}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
