"use client";

import HtmlNav from "@/components/HtmlNav";
import Link from "next/link";
import { motion } from "framer-motion";
import DemoPanel from "@/components/DemoPanel";
import CodeChallenge from "@/components/CodeChallenge";
import QuizSection from "@/components/QuizSection";
import { useProgress } from "@/lib/progress";

function StructureDemo() {
  return (
    <DemoPanel title="Basic HTML Structure" icon="🏗️">
      <div style={{ padding: 20 }}>
        <p style={{ color: "var(--text-secondary)", marginBottom: 16 }}>
          Every HTML document follows the same tree structure.
        </p>

        <div style={{ fontFamily: "monospace", lineHeight: 1.5 }}>
            <div style={{ color: "#aaa" }}>&lt;!DOCTYPE html&gt;</div>
            <div style={{ color: "#5cf0d0" }}>
                &lt;html&gt;
                <div style={{ paddingLeft: 20 }}>
                    <div style={{ color: "#fc5c8c" }}>
                        &lt;head&gt;
                        <div style={{ paddingLeft: 20, color: "#fff" }}>
                            &lt;title&gt;Page Title&lt;/title&gt;
                        </div>
                        &lt;/head&gt;
                    </div>
                    <div style={{ color: "#fcb85c" }}>
                        &lt;body&gt;
                        <div style={{ paddingLeft: 20, color: "#fff" }}>
                            &lt;h1&gt;My First Heading&lt;/h1&gt;<br/>
                            &lt;p&gt;My first paragraph.&lt;/p&gt;
                        </div>
                        &lt;/body&gt;
                    </div>
                </div>
                &lt;/html&gt;
            </div>
        </div>
      </div>
    </DemoPanel>
  );
}

export default function HtmlBasicsPage() {
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
            <div className="chapter-hero-number" style={{ color: "#E34F26" }}>Module 1</div>
            <h1 className="chapter-hero-title">Basics & Structure</h1>
            <p className="chapter-hero-desc">
              Tags, Elements, and Attributes. The building blocks of the web.
            </p>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <StructureDemo />
          </motion.div>

           <div className="content-block">
             <h2>Elements vs. Tags</h2>
             <p>An HTML <strong>element</strong> is everything from the start tag to the end tag:</p>
             <pre>&lt;tagname&gt;Content goes here...&lt;/tagname&gt;</pre>
             <ul style={{ marginTop: 16 }}>
                 <li><strong>Start tag:</strong> <code>&lt;p&gt;</code></li>
                 <li><strong>Content:</strong> "Hello World"</li>
                 <li><strong>End tag:</strong> <code>&lt;/p&gt;</code></li>
             </ul>

             <h3>Attributes</h3>
             <p>Attributes provide additional information about elements. They are always specified in the start tag and usually come in name/value pairs like: <code>name="value"</code>.</p>
             <ul>
                 <li><code>href</code> (for links)</li>
                 <li><code>src</code> (for images)</li>
                 <li><code>class</code> (for styling)</li>
                 <li><code>id</code> (unique identifier)</li>
             </ul>

             <h3>Headings & Paragraphs</h3>
             <p>HTML has 6 heading levels, <code>&lt;h1&gt;</code> being the most important and <code>&lt;h6&gt;</code> the least.</p>
           </div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
             <CodeChallenge 
                title="Challenge: Simple Page" 
                description="Create a basic HTML structure with a primary heading (h1) saying 'Hello' and a paragraph (p) saying 'This is my site'."
                files={{
                    "/index.html": `<!-- TODO: Add h1 and p tags -->
`
                }}
                solution={`<h1>Hello</h1>
<p>This is my site</p>`}
             />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <QuizSection
                chapterId="html-basics"
                onComplete={(answers, score, total) => saveQuizResult("html-basics", answers, score, total)}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
