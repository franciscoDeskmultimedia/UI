"use client";

import CssNav from "@/components/CssNav";
import Link from "next/link";
import { motion } from "framer-motion";
import DemoPanel from "@/components/DemoPanel";
import CodeChallenge from "@/components/CodeChallenge";
import QuizSection from "@/components/QuizSection";
import { useProgress } from "@/lib/progress";

function BoxModelDemo() {
  return (
    <DemoPanel title="The Box Model Visualizer" icon="📦">
      <div style={{ padding: 20, display: "flex", justifyContent: "center" }}>
        <div style={{ 
            background: "#fcb85c", // Margin area (simulated)
            padding: 20,
            borderRadius: 8,
            position: "relative"
        }}>
            <div style={{ position: "absolute", top: 4, left: 4, fontSize: "0.7rem", color: "black", fontWeight: "bold" }}>Margin</div>
            
            <div style={{ 
                background: "#fc5c8c", // Border area
                padding: 4, // Border width
                borderRadius: 4
            }}>
                <div style={{ 
                    background: "#5cf0d0", // Padding area
                    padding: 20, 
                    borderRadius: 2
                }}>
                    <div style={{ position: "absolute", marginTop: -24, marginLeft: -16, fontSize: "0.7rem", color: "black", fontWeight: "bold" }}>Border</div>
                    <div style={{ position: "absolute", marginTop: -14, marginLeft: 4, fontSize: "0.7rem", color: "black", fontWeight: "bold" }}>Padding</div>
                    
                    <div style={{ 
                        background: "#5ca8fc", // Content area
                        width: 100, 
                        height: 60,
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center",
                        color: "white",
                        fontWeight: "bold"
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

export default function CssBoxModelPage() {
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
            <div className="chapter-hero-number" style={{ color: "#1572B6" }}>Module 4</div>
            <h1 className="chapter-hero-title">The Box Model</h1>
            <p className="chapter-hero-desc">
              Every element on a page is a rectangular box. Learn how to size it.
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
             <h2>The 4 Layers</h2>
             <ol>
                 <li><strong>Content:</strong> The actual text, image, or nested elements.</li>
                 <li><strong>Padding:</strong> Space inside the box, between the content and the border. (Background color applies here).</li>
                 <li><strong>Border:</strong> A line surrounding the padding.</li>
                 <li><strong>Margin:</strong> Space outside the box, separates it from other boxes. (Transparent).</li>
             </ol>

             <h3>Box-Sizing: The Best Property</h3>
             <pre>
* &#123;
  box-sizing: border-box;
&#125;
             </pre>
             <p>Without `border-box`, adding padding increases the total width of the element. With `border-box`, padding eats into the content width, keeping the total size fixed. Always use this reset!</p>
           </div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
             <CodeChallenge 
                title="Challenge: Add Space" 
                description="Give the content some breathing room (padding) and space it from the edges (margin)."
                files={{
                    "/styles.css": `.box {
  background: #333;
  color: white;
  /* TODO: Add 20px padding and 40px margin */
  
}`,
                    "/index.html": `<div class="box">Content</div>`
                }}
                solution={`.box {
  background: #333;
  color: white;
  padding: 20px;
  margin: 40px;
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
                chapterId="css-box"
                onComplete={(answers, score, total) => saveQuizResult("css-box", answers, score, total)}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
