"use client";

import CssNav from "@/components/CssNav";
import Link from "next/link";
import { motion } from "framer-motion";
import DemoPanel from "@/components/DemoPanel";
import CodeChallenge from "@/components/CodeChallenge";
import QuizSection from "@/components/QuizSection";
import { useProgress } from "@/lib/progress";

function FontDemo() {
  return (
    <DemoPanel title="Typography" icon="📝">
      <div style={{ padding: 20, display: "grid", gap: 16 }}>
          <div style={{ fontFamily: "serif", fontSize: "1.5rem" }}>Serif (Times New Roman)</div>
          <div style={{ fontFamily: "sans-serif", fontSize: "1.5rem" }}>Sans-Serif (Arial)</div>
          <div style={{ fontFamily: "monospace", fontSize: "1.2rem", background: "#333", padding: 8, borderRadius: 4 }}>Monospace (Code)</div>
          
          <div style={{ marginTop: 16, borderTop: "1px solid #444", paddingTop: 16 }}>
              <div style={{ fontWeight: 100 }}>Thin (100)</div>
              <div style={{ fontWeight: 400 }}>Normal (400)</div>
              <div style={{ fontWeight: 700 }}>Bold (700)</div>
              <div style={{ fontWeight: 900 }}>Black (900)</div>
          </div>
      </div>
    </DemoPanel>
  );
}

export default function CssTextPage() {
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
            <div className="chapter-hero-number" style={{ color: "#1572B6" }}>Module 3</div>
            <h1 className="chapter-hero-title">Fonts & Text</h1>
            <p className="chapter-hero-desc">
              Styling text. Font families, weights, spacing, and decoration.
            </p>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <FontDemo />
          </motion.div>

           <div className="content-block">
             <h2>Font Properties</h2>
             <ul>
                 <li><code>font-family</code>: Prioritized list of fonts. e.g. <code>"Inter", sans-serif</code>.</li>
                 <li><code>font-size</code>: Size of the text (px, em, rem). <code>rem</code> is best for accessibility.</li>
                 <li><code>font-weight</code>: Thickness of characters (100 to 900).</li>
                 <li><code>line-height</code>: Vertical spacing between lines. 1.5 is a good default for readability.</li>
             </ul>

             <h3>Text Decoration & Align</h3>
             <ul>
                 <li><code>text-align</code>: left, center, right, justify.</li>
                 <li><code>text-decoration</code>: none (removes underline), underline, line-through.</li>
                 <li><code>text-transform</code>: uppercase, lowercase, capitalize.</li>
             </ul>

             <h3>Web Fonts</h3>
             <p>Use <code>@import</code> or <code>&lt;link&gt;</code> to load custom fonts from Google Fonts.</p>
           </div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
             <CodeChallenge 
                title="Challenge: Center & Bold" 
                description="Center the heading text and make it bold."
                files={{
                    "/styles.css": `h1 {
  /* TODO: Align center and set weight to bold */
  
}`,
                    "/index.html": `<h1>Welcome</h1>`
                }}
                solution={`h1 {
  text-align: center;
  font-weight: bold;
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
                chapterId="css-text"
                onComplete={(score) => saveQuizResult("css-text", score)}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
