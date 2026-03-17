"use client";

import CssNav from "@/components/CssNav";
import Link from "next/link";
import { motion } from "framer-motion";
import DemoPanel from "@/components/DemoPanel";
import CodeChallenge from "@/components/CodeChallenge";
import QuizSection from "@/components/QuizSection";
import { useProgress } from "@/lib/progress";
import { useState } from "react";

function ResponsivePlayground() {
  const [width, setWidth] = useState(100);

  return (
    <DemoPanel title="Responsive Visualizer" icon="📱">
      <div style={{ padding: 20 }}>
        <p style={{ color: "var(--text-secondary)", marginBottom: 16 }}>
          Drag the slider to resizing the "screen" and see how the layout adapts.
        </p>
        
        <input 
            type="range" 
            min="30" 
            max="100" 
            value={width} 
            onChange={(e) => setWidth(Number(e.target.value))}
            style={{ width: "100%", marginBottom: 16 }}
        />

        <div style={{ 
            width: `${width}%`, 
            height: 200, 
            background: "#1e1e1e", 
            border: "2px solid #5cf0d0", 
            borderRadius: 8,
            margin: "0 auto",
            display: width < 60 ? "block" : "flex", // Media query simulation
            gap: 10,
            padding: 10,
            transition: "all 0.3s ease"
        }}>
           <div style={{ flex: 1, background: "#fc5c8c", height: width < 60 ? 50 : "100%", borderRadius: 4, marginBottom: width < 60 ? 10 : 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
               {width < 60 ? "Mobile" : "Desktop"}
           </div>
           
           <div style={{ flex: 1, background: "#5ca8fc", height: width < 60 ? 50 : "100%", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
               Sidebar
           </div>
        </div>
      </div>
    </DemoPanel>
  );
}

export default function ResponsivePage() {
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
            <h1 className="chapter-hero-title">Responsive Design</h1>
            <p className="chapter-hero-desc">
              Making your site look great on any device. Media queries, fluid typography, and mobile-first.
            </p>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ResponsivePlayground />
          </motion.div>

           <div className="content-block">
             <h2>Mobile-First Approach</h2>
             <p>Design for the smallest screen first (the default style), then add <code>min-width</code> media queries for larger screens.</p>
             <pre>
/* Default (Mobile) */
.container &#123; display: block; &#125;

/* Desktop (min-width: 768px) */
@media (min-width: 768px) &#123;
  .container &#123; display: flex; &#125;
&#125;
             </pre>

             <h3>Modern Responsive Units</h3>
             <ul style={{ marginTop: 16 }}>
                 <li><code>rem</code>: Relative to root font size (usually 16px). Accessible for zooming.</li>
                 <li><code>vw / vh</code>: Percentage of the viewport width/height.</li>
                 <li><code>clamp(min, preferred, max)</code>: Fluid typography scaling.</li>
             </ul>
           </div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
             <CodeChallenge 
                title="Challenge: Mobile Stacking" 
                description="The columns are side-by-side on desktop. Write a media query to stack them (display: block) on screens smaller than 600px."
                files={{
                    "/styles.css": `.row {
  display: flex; /* Side-by-side by default */
}

/* TODO: Stack on mobile (< 600px) */

`,
                    "/index.html": `<div class="row">
  <div>Col 1</div>
  <div>Col 2</div>
</div>`
                }}
                solution={`.row {
  display: flex;
}

@media (max-width: 600px) {
  .row {
    display: block; /* Stack vertically */
  }
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
                chapterId="css-responsive"
                onComplete={(score) => saveQuizResult("css-responsive", score)}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
