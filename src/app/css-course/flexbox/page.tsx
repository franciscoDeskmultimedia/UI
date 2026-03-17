"use client";

import CssNav from "@/components/CssNav";
import Link from "next/link";
import { motion } from "framer-motion";
import DemoPanel from "@/components/DemoPanel";
import CodeChallenge from "@/components/CodeChallenge";
import QuizSection from "@/components/QuizSection";
import { useProgress } from "@/lib/progress";
import { useState } from "react";

function FlexPlayground() {
  const [justify, setJustify] = useState("flex-start");
  const [align, setAlign] = useState("stretch");
  const [direction, setDirection] = useState("row");

  return (
    <DemoPanel title="Flexbox Playground" icon="🎛️">
      <div style={{ padding: 20 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 20 }}>
           <div>
               <label style={{ display: "block", marginBottom: 8, fontSize: "0.8rem", color: "#aaa" }}>justify-content</label>
               <select 
                 value={justify} 
                 onChange={(e) => setJustify(e.target.value)}
                 style={{ width: "100%", padding: 8, borderRadius: 4, background: "#333", border: "1px solid #555", color: "white" }}
               >
                   <option value="flex-start">flex-start</option>
                   <option value="center">center</option>
                   <option value="flex-end">flex-end</option>
                   <option value="space-between">space-between</option>
                   <option value="space-around">space-around</option>
                   <option value="space-evenly">space-evenly</option>
               </select>
           </div>
           <div>
               <label style={{ display: "block", marginBottom: 8, fontSize: "0.8rem", color: "#aaa" }}>align-items</label>
               <select 
                 value={align} 
                 onChange={(e) => setAlign(e.target.value)}
                 style={{ width: "100%", padding: 8, borderRadius: 4, background: "#333", border: "1px solid #555", color: "white" }}
               >
                   <option value="stretch">stretch</option>
                   <option value="flex-start">flex-start</option>
                   <option value="center">center</option>
                   <option value="flex-end">flex-end</option>
               </select>
           </div>
           <div>
               <label style={{ display: "block", marginBottom: 8, fontSize: "0.8rem", color: "#aaa" }}>flex-direction</label>
               <select 
                 value={direction} 
                 onChange={(e) => setDirection(e.target.value)}
                 style={{ width: "100%", padding: 8, borderRadius: 4, background: "#333", border: "1px solid #555", color: "white" }}
               >
                   <option value="row">row</option>
                   <option value="column">column</option>
                   <option value="row-reverse">row-reverse</option>
                   <option value="column-reverse">column-reverse</option>
               </select>
           </div>
        </div>

        <div style={{ 
            height: 300, 
            background: "#1e1e1e", 
            border: "2px dashed #444", 
            borderRadius: 8,
            display: "flex",
            justifyContent: justify,
            alignItems: align,
            flexDirection: direction as any,
            padding: 10,
            transition: "all 0.3s ease"
        }}>
            <div style={{ width: 60, height: 60, background: "#fc5c8c", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "1.2rem" }}>1</div>
            <div style={{ width: 80, height: 80, background: "#5cf0d0", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "1.2rem", color: "black" }}>2</div>
            <div style={{ width: 50, height: 50, background: "#5ca8fc", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "1.2rem" }}>3</div>
        </div>
      </div>
    </DemoPanel>
  );
}

export default function FlexboxPage() {
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
            <div className="chapter-hero-number" style={{ color: "#1572B6" }}>Module 1</div>
            <h1 className="chapter-hero-title">Flexbox Mastery</h1>
            <p className="chapter-hero-desc">
              The Flexible Box Module. Designed for one-dimensional layouts (rows or columns).
            </p>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <FlexPlayground />
          </motion.div>

           <div className="content-block">
             <h2>The Two Axes</h2>
             <p>Flexbox works on two axes: the <strong>Main Axis</strong> and the <strong>Cross Axis</strong>.</p>
             <ul style={{ marginTop: 16 }}>
                 <li>
                    <strong>Main Axis:</strong> Defined by <code>flex-direction</code>. If `row`, main axis is horizontal. If `column`, main axis is vertical.
                    <br/>Controlled by <code>justify-content</code>.
                 </li>
                 <li>
                    <strong>Cross Axis:</strong> Perpendicular to the main axis.
                    <br/>Controlled by <code>align-items</code>.
                 </li>
             </ul>

             <h3>Flex Item Properties</h3>
             <p>The children of a flex container can also control their own sizing:</p>
             <ul style={{ marginTop: 16 }}>
                 <li><code>flex-grow</code>: How much the item should grow relative to others.</li>
                 <li><code>flex-shrink</code>: How much the item should shrink if space is unavailble.</li>
                 <li><code>flex-basis</code>: The initial size of the item before remaining space is distributed.</li>
                 <li><code>flex: 1</code>: Shorthand for <code>flex-grow: 1; flex-shrink: 1; flex-basis: 0%;</code>.</li>
             </ul>
           </div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
             <CodeChallenge 
                title="Challenge: Navbar Layout" 
                description="Use Flexbox to separate the logo (left) and the links (right). Hint: Use `justify-content`."
                files={{
                    "/styles.css": `.navbar {
  background: #222;
  padding: 10px 20px;
  /* TODO: Turn this into a flex container and space items apart */
  
}

.logo { color: #5cf0d0; font-weight: bold; }
.links { display: flex; gap: 20px; color: #fff; }`,
                    "/index.html": `<nav class="navbar">
  <div class="logo">MySite</div>
  <div class="links">
    <span>Home</span>
    <span>About</span>
    <span>Contact</span>
  </div>
</nav>`
                }}
                solution={`.navbar {
  background: #222;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo { color: #5cf0d0; font-weight: bold; }
.links { display: flex; gap: 20px; color: #fff; }`}
             />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <QuizSection
                chapterId="css-flexbox"
                onComplete={(score) => saveQuizResult("css-flexbox", score)}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
