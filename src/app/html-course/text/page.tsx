"use client";

import HtmlNav from "@/components/HtmlNav";
import Link from "next/link";
import { motion } from "framer-motion";
import DemoPanel from "@/components/DemoPanel";
import CodeChallenge from "@/components/CodeChallenge";
import QuizSection from "@/components/QuizSection";
import { useProgress } from "@/lib/progress";

function FormattingDemo() {
  return (
    <DemoPanel title="Text Formatting" icon="📝">
      <div style={{ padding: 20 }}>
        <p style={{ color: "var(--text-secondary)", marginBottom: 16 }}>
          HTML provides several elements for defining text with a special meaning.
        </p>

        <div style={{ background: "#fff", color: "#000", padding: 16, borderRadius: 8, lineHeight: 1.6 }}>
            <div>This text is <b>bold</b> (presentation).</div>
            <div>This text is <strong>important</strong> (semantic).</div>
            <div>This text is <i>italic</i> (flow of text).</div>
            <div>This text is <em>emphasized</em> (stress).</div>
            <div>This is <mark>highlighted</mark>.</div>
            <div>H<sub>2</sub>O (Subscript).</div>
            <div>X<sup>2</sup> (Superscript).</div>
        </div>
      </div>
    </DemoPanel>
  );
}

export default function HtmlTextPage() {
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
            <div className="chapter-hero-number" style={{ color: "#E34F26" }}>Module 2</div>
            <h1 className="chapter-hero-title">Working with Text</h1>
            <p className="chapter-hero-desc">
              Formatting, Links, Quotations, and special characters.
            </p>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <FormattingDemo />
          </motion.div>

           <div className="content-block">
             <h2>Semantic Formatting</h2>
             <p>Use <code>&lt;strong&gt;</code> over <code>&lt;b&gt;</code> and <code>&lt;em&gt;</code> over <code>&lt;i&gt;</code> unless there is a specific reason not to. Screen readers may change their tone for semantic tags.</p>
             
             <h3>Links (Anchors)</h3>
             <pre>&lt;a href="https://example.com" target="_blank"&gt;Visit Site&lt;/a&gt;</pre>
             <ul style={{ marginTop: 16 }}>
                 <li><code>target="_blank"</code>: Opens link in a new tab. (Security tip: Add `rel="noopener noreferrer"`)</li>
                 <li><code>href="mailto:someone@example.com"</code>: Opens email client.</li>
                 <li><code>href="#section"</code>: Jumps to an element with id="section".</li>
             </ul>

             <h3>Quotations</h3>
             <ul>
                 <li><code>&lt;blockquote&gt;</code>: For long, block-level quotes (indented).</li>
                 <li><code>&lt;q&gt;</code>: For short, inline quotes (auto adds "").</li>
                 <li><code>&lt;cite&gt;</code>: For the title of a work.</li>
             </ul>
           </div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
             <CodeChallenge 
                title="Challenge: Links & Emphasis" 
                description="Make the word 'Google' a link to google.com, and make the word 'important' strong/bold."
                files={{
                    "/index.html": `<p>
  Search on Google if it is important.
</p>`
                }}
                solution={`<p>
  Search on <a href="https://google.com">Google</a> if it is <strong>important</strong>.
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
                chapterId="html-text"
                onComplete={(score) => saveQuizResult("html-text", score)}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
