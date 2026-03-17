"use client";

import Link from "next/link";
import FeNav from "@/components/FeNav";
import { motion } from "framer-motion";
import DemoPanel from "@/components/DemoPanel";
import CodeChallenge from "@/components/CodeChallenge";
import QuizSection from "@/components/QuizSection";
import { useProgress } from "@/lib/progress";

function BoxModelDemo() {
  return (
    <DemoPanel title="Box Model Visualization" icon="📦">
      <div style={{ padding: 20 }}>
        <p style={{ color: "var(--text-secondary)", marginBottom: 24 }}>
          Every element in CSS is a box. Understanding the box model (margin, border, padding, content) is crucial for layout.
        </p>
        
        <div style={{ 
          background: "#f8dea1", 
          padding: 20, 
          border: "2px dashed #e6c15c", 
          position: "relative",
          color: "#8a6d1c",
          fontWeight: "bold",
          textAlign: "center"
        }}>
          Margin
          <div style={{ 
            background: "#f5c396", 
            padding: 20, 
            border: "2px solid #d9965b", 
            color: "#945d2d"
          }}>
            Border
            <div style={{ 
              background: "#c3e6cb", 
              padding: 20, 
              border: "2px dashed #8ec79c", 
              color: "#3a6e47"
            }}>
              Padding
              <div style={{ 
                background: "#a8d1ff", 
                height: 60, 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                border: "2px solid #6faef7",
                color: "#1c5eb5"
              }}>
                Content
              </div>
            </div>
          </div>
        </div>
      </div>
    </DemoPanel>
  );
}

function FlexboxDemo() {
  return (
    <DemoPanel title="Flexbox Layout" icon="🏗️">
      <div style={{ padding: 20 }}>
        <p style={{ color: "var(--text-secondary)", marginBottom: 24 }}>
          Flexbox provides a more efficient way to lay out, align and distribute space among items in a container.
        </p>
        <div style={{ display: "flex", gap: "10px", padding: "20px", background: "#2a2a2a", borderRadius: "8px", border: "1px dashed #555" }}>
          <div style={{ background: "#fc5c8c", padding: "20px", borderRadius: "4px", color: "white", flex: 1, textAlign: "center" }}>Item 1</div>
          <div style={{ background: "#5cf0d0", padding: "20px", borderRadius: "4px", color: "black", flex: 2, textAlign: "center" }}>Item 2 (flex: 2)</div>
          <div style={{ background: "#5ca8fc", padding: "20px", borderRadius: "4px", color: "white", flex: 1, textAlign: "center" }}>Item 3</div>
        </div>
        <p style={{ fontSize: "0.8rem", color: "#888", marginTop: "10px" }}>
            <code>display: flex; gap: 10px;</code> applied to container.
        </p>
      </div>
    </DemoPanel>
  );
}

export default function HtmlCssPage() {
  const { saveQuizResult } = useProgress();

  return (
    <>
      <FeNav />
      <div className="page-wrapper">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
             <Link href="/fe-fundamentals" className="back-link">
              ← Back to Course
            </Link>
            <div className="chapter-hero-number" style={{ color: "#fc5c8c" }}>Module 1</div>
            <h1 className="chapter-hero-title">HTML & CSS</h1>
            <p className="chapter-hero-desc">
              The precision of HTML structure combined with the power of CSS layout.
            </p>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <BoxModelDemo />
          </motion.div>

          <div className="content-block">
             <h2>Semantic HTML</h2>
             <p>
               Semantic HTML introduces meaning to the web page rather than just presentation. 
               For example, a <code>&lt;p&gt;</code> tag indicates that the enclosed text is a paragraph. 
               This is both consistent with web standards and crucial for Accessibility (a11y) and SEO.
             </p>
             <h3>Key Semantic Tags</h3>
             <ul style={{ paddingLeft: "20px", lineHeight: "1.8" }}>
               <li><code>&lt;header&gt;</code>: Introductory content or navigational links.</li>
               <li><code>&lt;nav&gt;</code>: A section of the page capable of navigation.</li>
               <li><code>&lt;main&gt;</code>: The dominant content of the <code>&lt;body&gt;</code>.</li>
               <li><code>&lt;article&gt;</code>: Independent, self-contained content.</li>
               <li><code>&lt;section&gt;</code>: A thematic grouping of content, typically with a heading.</li>
               <li><code>&lt;aside&gt;</code>: Content aside from the content it is placed in (like a sidebar).</li>
               <li><code>&lt;footer&gt;</code>: A footer for its nearest sectioning content or sectioning root element.</li>
             </ul>
             
             <h2 style={{ marginTop: "32px" }}>CSS Layout: Flexbox & Grid</h2>
             <p>
               Modern layouts rely heavily on Flexbox and Grid. Flexbox is designed for one-dimensional layouts 
               (row or column), while CSS Grid is designed for two-dimensional layouts (rows and columns simultaneously).
             </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <FlexboxDemo />
          </motion.div>
          
          <div className="content-block">
            <h2>Best Practices</h2>
            <div style={{ background: "rgba(92, 240, 208, 0.1)", borderLeft: "4px solid #5cf0d0", padding: "16px", borderRadius: "0 8px 8px 0" }}>
                <strong>Tip:</strong> Always use a CSS Reset or Normalize.css. Browsers have different default styles 
                for elements, and a reset ensures your design looks consistent across all browsers.
            </div>
            <ul style={{ marginTop: "16px" }}>
                <li><strong>Class Naming:</strong> Use BEM (Block Element Modifier) or a consistent naming convention like `card__title`, `card--active`.</li>
                <li><strong>Specificity:</strong> Avoid using ID selectors for styling (`#header`) as they have very high specificity, making them hard to override.</li>
                <li><strong>Responsiveness:</strong> Use relative units (`rem`, `em`, `%`) instead of fixed pixels (`px`) where possible.</li>
            </ul>
          </div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
             <CodeChallenge 
                title="Challenge: Centering a Div" 
                description="The classic interview question! Use Flexbox to center the child div both vertically and horizontally. Also try to change the background color of the child on hover."
                files={{
                    "/styles.css": `.parent {
  height: 200px;
  background: #eee;
  /* TODO: Add flex properties here */
  
}

.child {
  width: 50px;
  height: 50px;
  background: #fc5c8c;
  transition: background 0.3s;
}

/* TODO: Add hover effect for .child */
`,
                    "/index.html": `<div class="parent">
  <div class="child"></div>
</div>`
                }}
                solution={`.parent {
  height: 200px;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}

.child {
  width: 50px;
  height: 50px;
  background: #fc5c8c;
  transition: background 0.3s;
}

.child:hover {
  background: #5cf0d0;
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
                chapterId="fe-html-css"
                onComplete={(score) => saveQuizResult("fe-html-css", score)}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
