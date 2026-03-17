"use client";

import Link from "next/link";
import AemNav from "@/components/AemNav";
import { motion } from "framer-motion";
import DemoPanel from "@/components/DemoPanel";
import CodeChallenge from "@/components/CodeChallenge";
import QuizSection from "@/components/QuizSection";
import { useProgress } from "@/lib/progress";
import { useState } from "react";

function DialogDemo() {
  const [title, setTitle] = useState("Hero Banner");
  const [desc, setDesc] = useState("Enter description here...");

  return (
    <DemoPanel title="AEM Touch UI Dialog Simulator" icon="⚙️">
      <div style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: 24, height: 300 }}>
        {/* Dialog Side */}
        <div style={{ background: "#474747", padding: 16, borderRadius: 8, color: "#fff", display: "flex", flexDirection: "column" }}>
            <div style={{ borderBottom: "1px solid #666", paddingBottom: 12, marginBottom: 16, fontWeight: "bold" }}>
                Properties
            </div>
            
            <label style={{ fontSize: "0.8rem", color: "#ccc", marginBottom: 4 }}>Title</label>
            <input 
                type="text" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{ background: "#333", border: "1px solid #555", padding: 8, borderRadius: 4, color: "#fff", marginBottom: 16 }}
            />

            <label style={{ fontSize: "0.8rem", color: "#ccc", marginBottom: 4 }}>Description</label>
            <textarea 
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                style={{ background: "#333", border: "1px solid #555", padding: 8, borderRadius: 4, color: "#fff", height: 100, marginBottom: 16 }}
            />

            <div style={{ marginTop: "auto", display: "flex", justifyContent: "flex-end", gap: 8 }}>
                <div style={{ padding: "6px 12px", background: "#333", borderRadius: 4, fontSize: "0.8rem" }}>Cancel</div>
                <div style={{ padding: "6px 12px", background: "#2D7DFA", borderRadius: 4, fontSize: "0.8rem" }}>Done</div>
            </div>
        </div>

        {/* Preview Side */}
        <div style={{ background: "#fff", borderRadius: 8, padding: 24, color: "#333" }}>
            <h3 style={{ margin: "0 0 16px" }}>Component Preview</h3>
            <div style={{ border: "1px dashed #ccc", padding: 24, textAlign: "center" }}>
                <h1 style={{ margin: "0 0 16px", color: "#333" }}>{title}</h1>
                <p style={{ color: "#666" }}>{desc}</p>
            </div>
            <div style={{ fontSize: "0.75rem", color: "#999", marginTop: 16 }}>
                Content stored in JCR: <br/>
                <code>/content/mysite/jcr:content/root/cmp</code>
            </div>
        </div>
      </div>
    </DemoPanel>
  );
}

export default function AemComponentsPage() {
  const { saveQuizResult } = useProgress();

  return (
    <>
      <AemNav />
      <div className="page-wrapper">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
             <Link href="/aem-fundamentals" className="back-link">
              ← Back to Course
            </Link>
            <div className="chapter-hero-number" style={{ color: "#ff9933" }}>Module 2</div>
            <h1 className="chapter-hero-title">Components & Dialogs</h1>
            <p className="chapter-hero-desc">
              Building reusable content blocks with Sling Models, HTL, and Dialogs.
            </p>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <DialogDemo />
          </motion.div>

           <div className="content-block">
             <h2>Anatomy of a Component</h2>
             <ul>
                 <li><strong>HTL (file.html):</strong> The template that renders HTML.</li>
                 <li><strong>Dialog (content.xml):</strong> The authoring interface.</li>
                 <li><strong>Sling Model (Java):</strong> The backend logic that processes data.</li>
                 <li><strong>Clientlib (CSS/JS):</strong> Styles and scripts specific to the component.</li>
             </ul>
           </div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
             <CodeChallenge 
                title="Challenge: Write Simple HTL" 
                description="Use HTL syntax to render the 'title' property. Hint: Use ${properties.title}."
                files={{
                    "/component.html": `<!-- 
  TODO: Render the title inside the <h1> tag.
  Assume 'properties.title' contains the text.
-->
<div class="cmp-helloworld">
    <h1>Hello World</h1> 
</div>`
                }}
                solution={`<div class="cmp-helloworld">
    <h1>\${properties.title}</h1> 
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
                chapterId="aem-components"
                onComplete={(answers, score, total) => saveQuizResult("aem-components", answers, score, total)}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
