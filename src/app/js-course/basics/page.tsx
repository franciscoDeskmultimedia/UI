"use client";

import JsNav from "@/components/JsNav";
import Link from "next/link";
import { motion } from "framer-motion";
import DemoPanel from "@/components/DemoPanel";
import CodeChallenge from "@/components/CodeChallenge";
import QuizSection from "@/components/QuizSection";
import { useProgress } from "@/lib/progress";

function ConsoleDemo() {
  return (
    <DemoPanel title="JavaScript Output" icon="📟">
      <div style={{ padding: 20 }}>
         <p style={{ color: "var(--text-secondary)", marginBottom: 16 }}>
           JavaScript sends output to the Developer Console or writes it to the HTML.
         </p>
         
         <div style={{ background: "#222", color: "#ddd", padding: 16, borderRadius: 8, fontFamily: "monospace", fontSize: "0.9rem" }}>
             <div style={{ color: "#aaa" }}>// app.js</div>
             <div style={{ marginTop: 8 }}>
                 <span style={{ color: "#5ca8fc" }}>console</span>.log(<span style={{ color: "#fcb85c" }}>"Hello World"</span>);
             </div>
             <div style={{ marginTop: 16, borderTop: "1px solid #444", paddingTop: 8, color: "#aaa" }}>
                 &gt; Console Output
             </div>
             <div style={{ marginTop: 4, color: "#fff" }}>
                 Hello World
             </div>
         </div>
      </div>
    </DemoPanel>
  );
}

export default function JsBasicsPage() {
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
            <div className="chapter-hero-number" style={{ color: "#F7DF1E" }}>Module 1</div>
            <h1 className="chapter-hero-title">Basics & Syntax</h1>
            <p className="chapter-hero-desc">
              Statements, Comments, and Outputting data.
            </p>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ConsoleDemo />
          </motion.div>

           <div className="content-block">
             <h2>JavaScript Statements</h2>
             <p>A computer program is a list of instructions to be executed. In a programming language, these programming instructions are called statements.</p>
             <pre>
let x, y, z;    // Statement 1
x = 5;          // Statement 2
y = 6;          // Statement 3
z = x + y;      // Statement 4
             </pre>

             <h3>Output Methods</h3>
             <ul>
                 <li><code>console.log()</code>: Writes to the browser console. Used for debugging.</li>
                 <li><code>document.write()</code>: Writes directly to the HTML document. (Not recommended).</li>
                 <li><code>window.alert()</code>: Pops up an alert box.</li>
                 <li><code>innerHTML</code>: Changes the content of an HTML element.</li>
             </ul>
           </div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
             <CodeChallenge 
                title="Challenge: Say Hello" 
                description="Use console.log to print 'Hello JavaScript' to the console."
                files={{
                    "/app.js": `// TODO: Print "Hello JavaScript"
`
                }}
                solution={`console.log("Hello JavaScript");`}
             />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <QuizSection
                chapterId="js-basics"
                onComplete={(score) => saveQuizResult("js-basics", score)}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
