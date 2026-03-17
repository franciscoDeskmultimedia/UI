"use client";

import CssNav from "@/components/CssNav";
import Link from "next/link";
import { motion } from "framer-motion";
import DemoPanel from "@/components/DemoPanel";
import CodeChallenge from "@/components/CodeChallenge";
import QuizSection from "@/components/QuizSection";
import { useProgress } from "@/lib/progress";

function SyntaxDemo() {
  return (
    <DemoPanel title="CSS Syntax" icon="📜">
      <div style={{ padding: 20 }}>
        <p style={{ color: "var(--text-secondary)", marginBottom: 16 }}>
          A CSS rule consists of a selector and a declaration block.
        </p>

        <div style={{ fontFamily: "monospace", lineHeight: 1.5 }}>
            <span style={{ color: "#fcb85c" }}>h1</span> <span style={{ color: "#fff" }}>&#123;</span><br/>
            &nbsp;&nbsp;<span style={{ color: "#5cf0d0" }}>color</span>: <span style={{ color: "#fc5c8c" }}>blue</span>;<br/>
            &nbsp;&nbsp;<span style={{ color: "#5cf0d0" }}>font-size</span>: <span style={{ color: "#fc5c8c" }}>12px</span>;<br/>
            <span style={{ color: "#fff" }}>&#125;</span>
        </div>
      </div>
    </DemoPanel>
  );
}

export default function CssBasicsPage() {
  const { saveQuizResult } = useProgress();

  return (
    <>
      <CssNav />
      <div className="page-wrapper">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
             <Link href="/css-course" className="back-link">
              ← Back to Course
            </Link>
            <div className="chapter-hero-number" style={{ color: "#1572B6" }}>Module 1</div>
            <h1 className="chapter-hero-title">Basics & Selectors</h1>
            <p className="chapter-hero-desc">
              How to target elements. Classes, IDs, and Specificity.
            </p>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SyntaxDemo />
          </motion.div>

           <div className="content-block">
             <h2>Selectors</h2>
             <ul style={{ marginTop: 16 }}>
                 <li><strong>Element Selector:</strong> <code>p</code> (selects all &lt;p&gt; elements)</li>
                 <li><strong>Class Selector:</strong> <code>.my-class</code> (selects all elements with class="my-class")</li>
                 <li><strong>ID Selector:</strong> <code>#my-id</code> (selects the unique element with id="my-id")</li>
                 <li><strong>Universal Selector:</strong> <code>*</code> (selects all elements)</li>
             </ul>

             <h3>Specificity (The Scoreboard)</h3>
             <p>When multiple rules apply to the same element, the most specific one wins.</p>
             <ol>
                 <li>Inline styles (`style="..."`) - Highest priority</li>
                 <li>IDs (`#id`)</li>
                 <li>Classes, Attributes, Pseudo-classes (`.class`, `:hover`)</li>
                 <li>Elements (`div`, `h1`) - Lowest priority</li>
             </ol>
             <p><strong>Note:</strong> <code>!important</code> overrides everything, but use it sparingly!</p>
           </div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
             <CodeChallenge 
                title="Challenge: Target by Class" 
                description="The text needs to be red. Add a CSS rule targeting the class `.error`."
                files={{
                    "/styles.css": `/* TODO: Target .error class and set color to red */
`,
                    "/index.html": `<p class="error">Something went wrong!</p>`
                }}
                solution={`.error {
  color: red;
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
                chapterId="css-basics"
                onComplete={(answers, score, total) => saveQuizResult("css-basics", answers, score, total)}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
