"use client";

import JsNav from "@/components/JsNav";
import Link from "next/link";
import { motion } from "framer-motion";
import DemoPanel from "@/components/DemoPanel";
import CodeChallenge from "@/components/CodeChallenge";
import QuizSection from "@/components/QuizSection";
import { useProgress } from "@/lib/progress";

function FunctionsDemo() {
  return (
    <DemoPanel title="Function Types" icon="⚙️">
      <div style={{ padding: 20 }}>
        <p style={{ color: "var(--text-secondary)", marginBottom: 16 }}>
          A block of code designed to perform a particular task.
        </p>
        
        <div style={{ display: "grid", gap: 16 }}>
             <div style={{ background: "#222", padding: 16, borderRadius: 8 }}>
                <div style={{ fontSize: "0.8rem", color: "#aaa", marginBottom: 8 }}>Old School</div>
                <code style={{ color: "#fc5c8c" }}>function</code> <span style={{ color: "#5cf0d0" }}>add</span>(a, b) &#123;<br/>
                &nbsp;&nbsp;<span style={{ color: "#fc5c8c" }}>return</span> a + b;<br/>
                &#125;
            </div>
            <div style={{ background: "#222", border: "1px solid #5cf0d0", padding: 16, borderRadius: 8 }}>
                 <div style={{ fontSize: "0.8rem", color: "#aaa", marginBottom: 8 }}>Arrow Function (New)</div>
                 <code style={{ color: "#fcb85c" }}>const</code> <span style={{ color: "#5cf0d0" }}>add</span> = (a, b) =&gt; a + b;
            </div>
        </div>
      </div>
    </DemoPanel>
  );
}

export default function JsFunctionsPage() {
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
            <div className="chapter-hero-number" style={{ color: "#F7DF1E" }}>Module 3</div>
            <h1 className="chapter-hero-title">Functions</h1>
            <p className="chapter-hero-desc">
              Invoking, Return values, and Arrow Syntax.
            </p>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <FunctionsDemo />
          </motion.div>

           <div className="content-block">
             <h2>Defining Functions</h2>
             <p>A function is executed when "something" invokes it (calls it).</p>
             <pre>
// Define
function sayHello(name) &#123;
  return "Hello " + name;
&#125;

// Invoke
let result = sayHello("John"); 
             </pre>

             <h3>Arrow Functions</h3>
             <p>Introduced in ES6 (2015). They allow a shorter syntax for writing function expressions.</p>
             <ul>
                 <li>If only 1 parameter, parentheses are optional: <code>param =&gt; ...</code></li>
                 <li>If only 1 line, `return` and braces are implicit: <code>(a, b) =&gt; a + b</code></li>
                 <li>They do NOT bind their own <code>this</code>.</li>
             </ul>
           </div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
             <CodeChallenge 
                title="Challenge: Arrow Function" 
                description="Rewrite this function using arrow syntax: `function square(n) { return n * n; }`. Store it in a constant named `square`."
                files={{
                    "/app.js": `// TODO: Create arrow function 'square'
`
                }}
                solution={`const square = n => n * n;`}
             />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <QuizSection
                chapterId="js-functions"
                onComplete={(answers, score, total) => saveQuizResult("js-functions", answers, score, total)}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
