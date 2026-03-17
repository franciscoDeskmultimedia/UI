"use client";

import HtmlNav from "@/components/HtmlNav";
import Link from "next/link";
import { motion } from "framer-motion";
import DemoPanel from "@/components/DemoPanel";
import CodeChallenge from "@/components/CodeChallenge";
import QuizSection from "@/components/QuizSection";
import { useProgress } from "@/lib/progress";

function SemanticDemo() {
  return (
    <DemoPanel title="Semantic Structure" icon="🏗️">
      <div style={{ padding: 20 }}>
        <p style={{ color: "var(--text-secondary)", marginBottom: 16 }}>
          Semantic HTML gives meaning to your content. Screen readers and search engines rely on it.
        </p>
        
        <div style={{ display: "grid", gap: 12 }}>
            <div style={{ border: "2px solid #E34F26", padding: 8, textAlign: "center", color: "#E34F26", borderRadius: 4 }}>
                &lt;header&gt;
            </div>
             <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr", gap: 12 }}>
                <div style={{ border: "2px solid #fcb85c", padding: 24, textAlign: "center", color: "#fcb85c", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    &lt;aside&gt;
                </div>
                <div style={{ display: "grid", gap: 12 }}>
                     <div style={{ border: "2px solid #5cf0d0", padding: 24, textAlign: "center", color: "#5cf0d0", borderRadius: 4 }}>
                        &lt;main&gt;
                        <div style={{ marginTop: 8, border: "1px dashed #5cf0d0", padding: 8, fontSize: "0.8rem" }}>
                            &lt;article&gt;
                        </div>
                    </div>
                </div>
             </div>
             <div style={{ border: "2px solid #5ca8fc", padding: 8, textAlign: "center", color: "#5ca8fc", borderRadius: 4 }}>
                &lt;footer&gt;
            </div>
        </div>
      </div>
    </DemoPanel>
  );
}

export default function SemanticHtmlPage() {
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
            <h1 className="chapter-hero-title">Semantic HTML</h1>
            <p className="chapter-hero-desc">
              Why <code>&lt;div&gt;</code> is not enough. Building meaningful document structures.
            </p>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SemanticDemo />
          </motion.div>

           <div className="content-block">
             <h2>Why Semantics Matter</h2>
             <ul>
                 <li><strong>Accessibility:</strong> Screen readers use landmarks like <code>&lt;nav&gt;</code> and <code>&lt;main&gt;</code> to let users jump around the page.</li>
                 <li><strong>SEO:</strong> Search engines prioritize content inside <code>&lt;h1&gt;</code>, <code>&lt;article&gt;</code>, and <code>&lt;main&gt;</code> over generic divs.</li>
                 <li><strong>Maintainability:</strong> It's easier to read code where tags describe their content.</li>
             </ul>
             
             <h3>Common Semantic Tags</h3>
             <ul style={{ marginTop: 16 }}>
                 <li><code>&lt;header&gt;</code>: Introductory content or navigational aids.</li>
                 <li><code>&lt;nav&gt;</code>: A section of the page capable of navigation.</li>
                 <li><code>&lt;main&gt;</code>: The dominant content of the body.</li>
                 <li><code>&lt;article&gt;</code>: Independent, self-contained content (blog post, news story).</li>
                 <li><code>&lt;section&gt;</code>: A thematic grouping of content, typically with a heading.</li>
                 <li><code>&lt;aside&gt;</code>: Content tangentially related (sidebar, callouts).</li>
                 <li><code>&lt;footer&gt;</code>: Footer for the nearest section or page.</li>
             </ul>
           </div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
             <CodeChallenge 
                title="Challenge: Semantic Refactor" 
                description="The code below uses only `div` tags. Replace them with semantic tags: `header`, `nav`, `main`, and `footer`."
                files={{
                    "/index.html": `<div class="page">
  <div class="top-bar">
    <h1>My Website</h1>
    <div class="menu">
      <a href="#">Home</a>
      <a href="#">About</a>
    </div>
  </div>
  
  <div class="content">
    <p>Welcome to my semantic website!</p>
  </div>
  
  <div class="bottom-bar">
    <p>&copy; 2024</p>
  </div>
</div>`
                }}
                solution={`<div class="page">
  <header class="top-bar">
    <h1>My Website</h1>
    <nav class="menu">
      <a href="#">Home</a>
      <a href="#">About</a>
    </nav>
  </header>
  
  <main class="content">
    <p>Welcome to my semantic website!</p>
  </main>
  
  <footer class="bottom-bar">
    <p>&copy; 2024</p>
  </footer>
</div>`}
             />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <QuizSection
                chapterId="html-semantic"
                onComplete={(answers, score, total) => saveQuizResult("html-semantic", answers, score, total)}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
