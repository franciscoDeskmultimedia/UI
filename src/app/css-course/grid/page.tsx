"use client";

import CssNav from "@/components/CssNav";
import Link from "next/link";
import { motion } from "framer-motion";
import DemoPanel from "@/components/DemoPanel";
import CodeChallenge from "@/components/CodeChallenge";
import QuizSection from "@/components/QuizSection";
import { useProgress } from "@/lib/progress";
import { useState } from "react";

function GridPlayground() {
  const [columns, setColumns] = useState("1fr 1fr");
  const [gap, setGap] = useState("10px");

  return (
    <DemoPanel title="Grid Playground" icon="📏">
      <div style={{ padding: 20 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
           <div>
               <label style={{ display: "block", marginBottom: 8, fontSize: "0.8rem", color: "#aaa" }}>grid-template-columns</label>
               <input 
                 type="text" 
                 value={columns} 
                 onChange={(e) => setColumns(e.target.value)}
                 style={{ width: "100%", padding: 8, borderRadius: 4, background: "#333", border: "1px solid #555", color: "white" }}
                 placeholder="e.g. 1fr 2fr, repeat(3, 1fr)"
               />
               <span style={{ fontSize: "0.7rem", color: "#666" }}>Try: `1fr 2fr` or `repeat(3, 100px)`</span>
           </div>
           <div>
               <label style={{ display: "block", marginBottom: 8, fontSize: "0.8rem", color: "#aaa" }}>gap</label>
               <input 
                 type="text" 
                 value={gap} 
                 onChange={(e) => setGap(e.target.value)}
                 style={{ width: "100%", padding: 8, borderRadius: 4, background: "#333", border: "1px solid #555", color: "white" }}
               />
           </div>
        </div>

        <div style={{ 
            height: 300, 
            background: "#1e1e1e", 
            border: "2px dashed #444", 
            borderRadius: 8,
            display: "grid",
            gridTemplateColumns: columns,
            gap: gap,
            padding: 10,
            transition: "all 0.3s ease"
        }}>
            <div style={{ background: "#fc5c8c", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>1</div>
            <div style={{ background: "#5cf0d0", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", color: "black" }}>2</div>
            <div style={{ background: "#5ca8fc", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>3</div>
            <div style={{ background: "#fcb85c", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", color: "black" }}>4</div>
            <div style={{ background: "#9b82ff", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>5</div>
            <div style={{ background: "#ccc", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", color: "black" }}>6</div>
        </div>
      </div>
    </DemoPanel>
  );
}

export default function GridPage() {
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
            <div className="chapter-hero-number" style={{ color: "#1572B6" }}>Module 2</div>
            <h1 className="chapter-hero-title">CSS Grid</h1>
            <p className="chapter-hero-desc">
              Two-dimensional layout system. Rows AND Columns at the same time.
            </p>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <GridPlayground />
          </motion.div>

           <div className="content-block">
             <h2>Thinking in 2D</h2>
             <p>While Flexbox is great for a line of items, Grid is designed for entire page layouts.</p>
             <ul style={{ marginTop: 16 }}>
                 <li>
                    <strong>fr unit:</strong> Represents a fraction of the available space. <code>1fr 1fr</code> means two equal columns.
                 </li>
                 <li>
                    <strong>repeat():</strong> A function to simplify repetitive definitions. <code>repeat(3, 1fr)</code> is the same as `1fr 1fr 1fr`.
                 </li>
                 <li>
                    <strong>minmax():</strong> Defining a size range. <code>minmax(200px, 1fr)</code> means "at least 200px, but stretch if there's room."
                 </li>
             </ul>

             <h3>Auto-Placement Magic</h3>
             <pre>
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
             </pre>
             <p>This single line creates a responsive grid that automatically creates as many columns as will fit, wrapping to new rows when needed, without any media queries!</p>
           </div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
             <CodeChallenge 
                title="Challenge: Holy Grail Layout" 
                description="Create a layout with a header, sidebars, main content, and footer using grid-template-areas."
                files={{
                    "/styles.css": `.grid-container {
  display: grid;
  height: 100vh;
  /* TODO: Define grid areas */
  grid-template-areas: 
    "header header header"
    "nav main aside"
    "footer footer footer";
    
  /* Set sizes for rows and columns */
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 200px 1fr 200px;
}

header { grid-area: header; background: #fc5c8c; }
nav { grid-area: nav; background: #5ca8fc; }
main { grid-area: main; background: #fff; color: #000; }
aside { grid-area: aside; background: #fcb85c; }
footer { grid-area: footer; background: #5cf0d0; }`,
                    "/index.html": `<div class="grid-container">
  <header>Header</header>
  <nav>Menu</nav>
  <main>Content</main>
  <aside>Ads</aside>
  <footer>Footer</footer>
</div>`
                }}
                solution={`.grid-container {
  display: grid;
  height: 100vh;
  grid-template-areas: 
    "header header header"
    "nav main aside"
    "footer footer footer";
  grid-template-rows: 60px 1fr 60px;
  grid-template-columns: 200px 1fr 200px;
}

header { grid-area: header; background: #fc5c8c; }
nav { grid-area: nav; background: #5ca8fc; }
main { grid-area: main; background: #fff; color: #000; }
aside { grid-area: aside; background: #fcb85c; }
footer { grid-area: footer; background: #5cf0d0; }`}
             />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <QuizSection
                chapterId="css-grid"
                onComplete={(score) => saveQuizResult("css-grid", score)}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
