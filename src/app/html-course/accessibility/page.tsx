"use client";

import HtmlNav from "@/components/HtmlNav";
import Link from "next/link";
import { motion } from "framer-motion";
import DemoPanel from "@/components/DemoPanel";
import CodeChallenge from "@/components/CodeChallenge";
import QuizSection from "@/components/QuizSection";
import { useProgress } from "@/lib/progress";

function AltTextDemo() {
  return (
    <DemoPanel title="Alt Text Importance" icon="🖼️">
      <div style={{ padding: 20 }}>
        <p style={{ color: "var(--text-secondary)", marginBottom: 16 }}>
          Without <code>alt</code> text, screen readers just say "Image" or read the filename.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {/* Bad */}
             <div style={{ border: "2px solid #fc5c5c", padding: 16, borderRadius: 8 }}>
                 <div style={{ height: 100, background: "#fc5c5c20", display: "flex", alignItems: "center", justifyContent: "center", color: "#fc5c5c" }}>
                     🖼️ (No Alt)
                 </div>
                 <div style={{ marginTop: 16, fontSize: "0.8rem", color: "#fc5c5c" }}>
                     Screen Reader: "IMG_5928.JPG"
                 </div>
             </div>

             {/* Good */}
             <div style={{ border: "2px solid #5cf0d0", padding: 16, borderRadius: 8 }}>
                 <div style={{ height: 100, background: "#5cf0d020", display: "flex", alignItems: "center", justifyContent: "center", color: "#5cf0d0" }}>
                     🖼️ (With Alt)
                 </div>
                 <div style={{ marginTop: 16, fontSize: "0.8rem", color: "#5cf0d0" }}>
                     Screen Reader: "A golden retriever puppy sitting in grass."
                 </div>
             </div>
        </div>
      </div>
    </DemoPanel>
  );
}

export default function HtmlA11yPage() {
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
            <div className="chapter-hero-number" style={{ color: "#E34F26" }}>Module 4</div>
            <h1 className="chapter-hero-title">HTML Accessibility</h1>
            <p className="chapter-hero-desc">
              Building for everyone. ARIA, semantic roles, and checking your work.
            </p>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <AltTextDemo />
          </motion.div>

           <div className="content-block">
             <h2>The Basics of A11y</h2>
             <p>Accessibility (A11y) isn't just a checklist; it's about making your site usable by people with disabilities (visual, motor, cognitive).</p>
             <ul style={{ marginTop: 16 }}>
                 <li>
                    <strong>Focus Management:</strong> Can you navigate using only the Tab key? Are interactive elements highlighted?
                 </li>
                 <li>
                     <strong>Images:</strong> Every <code>&lt;img&gt;</code> must have an <code>alt</code> attribute. If decorative, use <code>alt=""</code>.
                 </li>
                 <li>
                     <strong>Language:</strong> Define the language of your page: <code>&lt;html lang="en"&gt;</code> so screen readers use the correct pronunciation.
                 </li>
             </ul>
             
             <h3>Aria Hints</h3>
             <p>ARIA (Accessible Rich Internet Applications) attributes help when standard HTML isn't enough (e.g. for custom widgets).</p>
             <ul>
                 <li><code>aria-expanded="false"</code> (for accordions/menus)</li>
                 <li><code>aria-hidden="true"</code> (to hide decorative icons from screen readers)</li>
                 <li><code>role="alert"</code> (for live error messages)</li>
             </ul>
           </div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
             <CodeChallenge 
                title="Challenge: Fix Accessibility" 
                description="The image below is decorative (doesn't add meaning), but it's missing an alt attribute. Also, the language is missing from the html tag."
                files={{
                    "/index.html": `<html>
<body>
  <h1>Welcome</h1>
  <!-- Decorative separator line image -->
  <img src="line.png">
</body>
</html>`
                }}
                solution={`<html lang="en">
<body>
  <h1>Welcome</h1>
  <!-- Decorative images need empty alt -->
  <img src="line.png" alt="">
</body>
</html>`}
             />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <QuizSection
                chapterId="html-a11y"
                onComplete={(score) => saveQuizResult("html-a11y", score)}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
