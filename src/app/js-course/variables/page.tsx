"use client";

import JsNav from "@/components/JsNav";
import Link from "next/link";
import { motion } from "framer-motion";
import DemoPanel from "@/components/DemoPanel";
import CodeChallenge from "@/components/CodeChallenge";
import QuizSection from "@/components/QuizSection";
import { useProgress } from "@/lib/progress";

function VariablesDemo() {
  return (
    <DemoPanel title="Variable Types" icon="📦">
      <div style={{ padding: 20 }}>
        <p style={{ color: "var(--text-secondary)", marginBottom: 16 }}>
          Variables store data values. Think of them as containers.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
            <div style={{ background: "#333", padding: 16, borderRadius: 8 }}>
                <code style={{ color: "#fc5c8c" }}>var</code>
                <div style={{ fontSize: "0.8rem", marginTop: 8, color: "#aaa" }}>Legacy. Function scoped. Hoisted. Avoid.</div>
            </div>
             <div style={{ background: "#222", border: "1px solid #5cf0d0", padding: 16, borderRadius: 8 }}>
                <code style={{ color: "#5cf0d0" }}>let</code>
                <div style={{ fontSize: "0.8rem", marginTop: 8, color: "#aaa" }}>Modern. Block scoped. Can be reassigned.</div>
            </div>
             <div style={{ background: "#222", border: "1px solid #fcb85c", padding: 16, borderRadius: 8 }}>
                <code style={{ color: "#fcb85c" }}>const</code>
                <div style={{ fontSize: "0.8rem", marginTop: 8, color: "#aaa" }}>Modern. Block scoped. Cannot be reassigned.</div>
            </div>
        </div>
      </div>
    </DemoPanel>
  );
}

export default function JsVariablesPage() {
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
            <div className="chapter-hero-number" style={{ color: "#F7DF1E" }}>Module 2</div>
            <h1 className="chapter-hero-title">Variables (let, const)</h1>
            <p className="chapter-hero-desc">
              Declaring, assigning, and understanding Scope.
            </p>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <VariablesDemo />
          </motion.div>

           <div className="content-block">
             <h2>The 3 Ways to Declare</h2>
             <ul>
                 <li><code>const</code>: Always strict. Use by default. Value cannot change (immutable binding).</li>
                 <li><code>let</code>: Use if the value needs to change later (loop counters, simple state).</li>
                 <li><code>var</code>: Old way (pre-2015). Has weird scoping rules (function scope vs block scope). <strong>Do not use.</strong></li>
             </ul>

             <h3>Scope</h3>
             <p>Block scope means the variable only exists inside the curly braces <code>&#123; ... &#125;</code> where it was defined.</p>
             <pre>
&#123;
  let x = 2;
&#125;
// x can NOT be used here
             </pre>
           </div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
             <CodeChallenge 
                title="Challenge: Declare Constants" 
                description="Create a constant variable `PI` with value 3.14, and a reassignable variable `radius` with value 5."
                files={{
                    "/app.js": `// TODO: Declare PI and radius
`
                }}
                solution={`const PI = 3.14;
let radius = 5;`}
             />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <QuizSection
                chapterId="js-variables"
                onComplete={(score) => saveQuizResult("js-variables", score)}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
