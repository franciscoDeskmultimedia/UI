"use client";

import HtmlNav from "@/components/HtmlNav";
import Link from "next/link";
import { motion } from "framer-motion";
import DemoPanel from "@/components/DemoPanel";
import CodeChallenge from "@/components/CodeChallenge";
import QuizSection from "@/components/QuizSection";
import { useProgress } from "@/lib/progress";

function DisplayDemo() {
  return (
    <DemoPanel title="Block vs Inline" icon="🧱">
      <div style={{ padding: 20 }}>
        <p style={{ color: "var(--text-secondary)", marginBottom: 16 }}>
          Elements have a default `display` property that determines how they sit on the page.
        </p>

        <div style={{ marginBottom: 24 }}>
            <h4 style={{ color: "#E34F26", marginBottom: 8 }}>Block Elements e.g. &lt;div&gt;</h4>
            <div style={{ padding: 8, background: "#333", border: "1px solid #555", borderRadius: 4, marginBottom: 8 }}>Takes up 100% width</div>
            <div style={{ padding: 8, background: "#333", border: "1px solid #555", borderRadius: 4 }}>Always starts on a new line</div>
        </div>

        <div>
            <h4 style={{ color: "#E34F26", marginBottom: 8 }}>Inline Elements e.g. &lt;span&gt;</h4>
            <div style={{ padding: 8, background: "#222", borderRadius: 4, lineHeight: 2 }}>
                This is a paragraph with <span style={{ background: "#fcb85c", color: "#000", padding: "2px 6px", borderRadius: 2 }}>inline</span> text inside it. 
                They <span style={{ background: "#5cf0d0", color: "#000", padding: "2px 6px", borderRadius: 2 }}>sit next to each other</span> without breaking the line.
            </div>
        </div>
      </div>
    </DemoPanel>
  );
}

export default function HtmlBlockInlinePage() {
  const { saveQuizResult } = useProgress();

  return (
    <>
      <HtmlNav />
      <div className="page-wrapper">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
             <Link href="/html-course" className="back-link">
              ← Back to Course
            </Link>
            <div className="chapter-hero-number" style={{ color: "#E34F26" }}>Module 5</div>
            <h1 className="chapter-hero-title">Block vs Inline</h1>
            <p className="chapter-hero-desc">
              How elements behave in the document flow. `div`, `span`, Classes, and IDs.
            </p>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <DisplayDemo />
          </motion.div>

           <div className="content-block">
             <h2>Block-Level Elements</h2>
             <p>A block-level element always starts on a new line and takes up the full width available.</p>
             <ul>
                 <li><code>&lt;div&gt;</code>, <code>&lt;h1&gt;-&lt;h6&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;form&gt;</code>, <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;section&gt;</code>.</li>
             </ul>

             <h2>Inline Elements</h2>
             <p>An inline element does not start on a new line and only takes up as much width as necessary.</p>
             <ul>
                 <li><code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>, <code>&lt;img&gt;</code>, <code>&lt;strong&gt;</code>.</li>
             </ul>

             <h3>Classes and IDs</h3>
             <ul style={{ marginTop: 16 }}>
                 <li>
                    <strong>Class (<code>.classname</code>):</strong> Can be used on multiple elements (reusable styles).
                    <pre>&lt;div class="card"&gt;...&lt;/div&gt;</pre>
                 </li>
                 <li>
                    <strong>ID (<code>#idname</code>):</strong> Must be unique on the page (used for JS hooks or anchor links).
                    <pre>&lt;div id="header"&gt;...&lt;/div&gt;</pre>
                 </li>
             </ul>
           </div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
             <CodeChallenge 
                title="Challenge: Span vs Div" 
                description="The word 'highlight' should be yellow and inline. Wrap it in a span with a style attribute."
                files={{
                    "/index.html": `<p>
  This text has a highlight inside.
</p>`
                }}
                solution={`<p>
  This text has a <span style="background: yellow">highlight</span> inside.
</p>`}
             />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <QuizSection
                chapterId="html-block"
                onComplete={(answers, score, total) => saveQuizResult("html-block", answers, score, total)}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
