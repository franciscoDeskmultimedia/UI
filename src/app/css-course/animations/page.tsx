"use client";

import CssNav from "@/components/CssNav";
import Link from "next/link";
import { motion } from "framer-motion";
import DemoPanel from "@/components/DemoPanel";
import CodeChallenge from "@/components/CodeChallenge";
import QuizSection from "@/components/QuizSection";
import { useProgress } from "@/lib/progress";
import { useState } from "react";

function AnimationPlayground() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <DemoPanel title="Animation Visualizer" icon="🎞️">
      <div style={{ padding: 20 }}>
        <div style={{ marginBottom: 20 }}>
            <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="btn btn-primary"
                style={{ background: "#fc5c8c", border: "none" }}
            >
                {isPlaying ? "Reset" : "Play Animation"}
            </button>
        </div>

        <div style={{ 
            height: 200, 
            background: "#1e1e1e", 
            border: "2px dashed #444", 
            borderRadius: 8,
            position: "relative",
            overflow: "hidden"
        }}>
           <div style={{
               width: 50,
               height: 50,
               background: "#5cf0d0",
               borderRadius: 8,
               position: "absolute",
               top: "50%",
               left: "10%",
               transform: "translateY(-50%)",
               animation: isPlaying ? "slide 2s ease-in-out infinite alternate" : "none"
           }}>
             <style jsx>{`
                @keyframes slide {
                    0% { left: 10%; transform: translateY(-50%) rotate(0deg); background: #5cf0d0; }
                    50% { background: #fcb85c; }
                    100% { left: 80%; transform: translateY(-50%) rotate(360deg); background: #fc5c8c; }
                }
             `}</style>
           </div>
        </div>
      </div>
    </DemoPanel>
  );
}

export default function AnimationsPage() {
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
            <h1 className="chapter-hero-title">CSS Animations</h1>
            <p className="chapter-hero-desc">
              Bringing pages to life with Keyframes, Transitions, and Transforms.
            </p>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <AnimationPlayground />
          </motion.div>

           <div className="content-block">
             <h2>Transitions vs Animations</h2>
             <p>There are two main ways to animate elements in CSS:</p>
             <ul style={{ marginTop: 16 }}>
                 <li>
                    <strong>Transitions:</strong> Simple state changes (e.g., hover). 
                    <code>transition: all 0.3s ease;</code>
                 </li>
                 <li>
                    <strong>Keyframe Animations:</strong> Complex, multi-step animations that can run infinitely.
                    <code>@keyframes slide &#123; ... &#125;</code>
                 </li>
             </ul>

             <h3>Performance Tips</h3>
             <p>Not all CSS properties are equal. Animating layout properties (like `width`, `height`, `margin`, `top`) is expensive because it triggers "Reflow".</p>
             <p>Always animate <strong>Composite</strong> properties for 60fps animations:</p>
             <ul>
                 <li><code>transform</code> (translate, scale, rotate)</li>
                 <li><code>opacity</code></li>
             </ul>
           </div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
             <CodeChallenge 
                title="Challenge: Button Hover" 
                description="Make the button grow slightly (scale) and change color when hovered. Use `transition`."
                files={{
                    "/styles.css": `.btn {
  background: #333;
  color: #fff;
  padding: 10px 20px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  
  /* TODO: Add transition */
  
}

.btn:hover {
  /* TODO: Change background and transform scale */
  
}`,
                    "/index.html": `<button class="btn">Hover Me</button>`
                }}
                solution={`.btn {
  background: #333;
  color: #fff;
  padding: 10px 20px;
  border-radius: 4px; border: none; cursor: pointer;
  transition: all 0.2s ease;
}

.btn:hover {
  background: #5cf0d0;
  color: #000;
  transform: scale(1.1);
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
                chapterId="css-animations"
                onComplete={(score) => saveQuizResult("css-animations", score)}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
