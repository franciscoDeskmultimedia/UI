"use client";

import CssNav from "@/components/CssNav";
import Link from "next/link";
import { motion } from "framer-motion";
import DemoPanel from "@/components/DemoPanel";
import CodeChallenge from "@/components/CodeChallenge";
import QuizSection from "@/components/QuizSection";
import { useProgress } from "@/lib/progress";

function ColorDemo() {
  return (
    <DemoPanel title="Color Formats" icon="🎨">
     <div style={{ padding: 20 }}>
       <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
           <div style={{ background: "red", color: "white", padding: 16, borderRadius: 8 }}>
               Keyword: <br/><strong>red</strong>
           </div>
           <div style={{ background: "#ff0000", color: "white", padding: 16, borderRadius: 8 }}>
               HEX: <br/><strong>#FF0000</strong>
           </div>
           <div style={{ background: "rgb(255, 0, 0)", color: "white", padding: 16, borderRadius: 8 }}>
               RGB: <br/><strong>rgb(255, 0, 0)</strong>
           </div>
            <div style={{ background: "hsl(0, 100%, 50%)", color: "white", padding: 16, borderRadius: 8 }}>
               HSL: <br/><strong>hsl(0, 100%, 50%)</strong>
           </div>
       </div>
       <div style={{ marginTop: 20, height: 40, background: "linear-gradient(to right, red, blue)", borderRadius: 8 }}>
           <div style={{ textAlign: "center", color: "white", lineHeight: "40px", fontWeight: "bold", textShadow: "0 1px 2px black" }}>Gradient</div>
       </div>
     </div>
    </DemoPanel>
  );
}

export default function CssColorsPage() {
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
            <h1 className="chapter-hero-title">Colors & Backgrounds</h1>
            <p className="chapter-hero-desc">
              Different ways to define color (RGB, HEX, HSL) and setting backgrounds.
            </p>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ColorDemo />
          </motion.div>

           <div className="content-block">
             <h2>Color Values</h2>
             <ul>
                 <li><strong>HEX:</strong> Use hexadecimal (#RRGGBB). e.g., <code>#ff0000</code>.</li>
                 <li><strong>RGB/RGBA:</strong> Red, Green, Blue values (0-255). Add 'A' for Alpha (transparency). e.g., <code>rgba(255, 0, 0, 0.5)</code>.</li>
                 <li><strong>HSL/HSLA:</strong> Hue (0-360), Saturation (%), Lightness (%). Generally easier to tweak colors.</li>
             </ul>

             <h3>Backgrounds</h3>
             <pre>background: #fff url("image.jpg") no-repeat center / cover;</pre>
             <p>The <code>background</code> shorthand sets color, image, repeat, position, and size all at once.</p>
             <ul>
                 <li><code>background-image</code>: url(...)</li>
                 <li><code>background-position</code>: center, top left, 50% 50%</li>
                 <li><code>background-size</code>: cover (fills area) or contain (fits area)</li>
                 <li><code>background-repeat</code>: no-repeat, repeat-x, repeat-y</li>
             </ul>
           </div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
             <CodeChallenge 
                title="Challenge: Blue Background" 
                description="Set the body background to a light blue color using HEX code #e0f7fa."
                files={{
                    "/styles.css": `body {
  /* TODO: Set background color */
  
}`,
                    "/index.html": `<body></body>`
                }}
                solution={`body {
  background-color: #e0f7fa;
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
                chapterId="css-colors"
                onComplete={(answers, score, total) => saveQuizResult("css-colors", answers, score, total)}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
