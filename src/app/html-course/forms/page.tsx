"use client";

import HtmlNav from "@/components/HtmlNav";
import Link from "next/link";
import { motion } from "framer-motion";
import DemoPanel from "@/components/DemoPanel";
import CodeChallenge from "@/components/CodeChallenge";
import QuizSection from "@/components/QuizSection";
import { useProgress } from "@/lib/progress";

function FormDemo() {
  return (
    <DemoPanel title="Input Types" icon="📝">
      <div style={{ padding: 20 }}>
        <p style={{ color: "var(--text-secondary)", marginBottom: 16 }}>
          HTML5 introduced many specific input types that improve the user experience, especially on mobile.
        </p>

        <form onSubmit={(e) => e.preventDefault()} style={{ display: "grid", gap: 16 }}>
            <div>
                <label style={{ display: "block", marginBottom: 8, fontSize: "0.9rem" }}>Text (Standard)</label>
                <input type="text" placeholder="John Doe" style={{ width: "100%", padding: 8, borderRadius: 4, background: "#333", border: "1px solid #555", color: "#fff" }} />
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                 <div>
                    <label style={{ display: "block", marginBottom: 8, fontSize: "0.9rem" }}>Email (Validates format)</label>
                    <input type="email" placeholder="john@example.com" style={{ width: "100%", padding: 8, borderRadius: 4, background: "#333", border: "1px solid #555", color: "#fff" }} />
                </div>
                 <div>
                    <label style={{ display: "block", marginBottom: 8, fontSize: "0.9rem" }}>Password (Masked)</label>
                    <input type="password" placeholder="••••••••" style={{ width: "100%", padding: 8, borderRadius: 4, background: "#333", border: "1px solid #555", color: "#fff" }} />
                </div>
            </div>

             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                 <div>
                    <label style={{ display: "block", marginBottom: 8, fontSize: "0.9rem" }}>Date (Picker)</label>
                    <input type="date" style={{ width: "100%", padding: 8, borderRadius: 4, background: "#333", border: "1px solid #555", color: "#fff" }} />
                </div>
                 <div>
                    <label style={{ display: "block", marginBottom: 8, fontSize: "0.9rem" }}>Color (Picker)</label>
                    <input type="color" style={{ width: "100%", height: 40, cursor: "pointer", border: "none", background: "none" }} />
                </div>
            </div>

             <div>
                <label style={{ display: "block", marginBottom: 8, fontSize: "0.9rem" }}>Range (Slider)</label>
                <input type="range" style={{ width: "100%" }} />
            </div>
        </form>
      </div>
    </DemoPanel>
  );
}

export default function FormsPage() {
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
            <div className="chapter-hero-number" style={{ color: "#E34F26" }}>Module 2</div>
            <h1 className="chapter-hero-title">Forms & Inputs</h1>
            <p className="chapter-hero-desc">
              Collecting user data securely and accessible. Labels, validation, and types.
            </p>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <FormDemo />
          </motion.div>

           <div className="content-block">
             <h2>The Importance of Labels</h2>
             <p>
                 Every input MUST have a label. The <code>&lt;label&gt;</code> element is associated with an input using the `for` attribute (or `htmlFor` in React), which must match the input's `id`.
             </p>
             <p>Clicking the label focuses the input, which is crucial for users with motor impairments (larger click target).</p>
             
             <h3>HTML5 Validation</h3>
             <ul style={{ marginTop: 16 }}>
                 <li><code>required</code>: Prevents submission if empty.</li>
                 <li><code>minlength / maxlength</code>: Enforces character count.</li>
                 <li><code>pattern</code>: Uses Regex to validate content (e.g. for Zip codes).</li>
                 <li><code>type="email"</code>: Checks for @ symbol and domain structure.</li>
             </ul>
           </div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
             <CodeChallenge 
                title="Challenge: Accessible Form" 
                description="Link the label to the input using `for`/`id`, and make the email input required."
                files={{
                    "/index.html": `<form>
  <!-- TODO: Connect label to input -->
  <label>Email Address</label>
  <input type="text" placeholder="me@example.com">
  
  <button>Subscribe</button>
</form>`
                }}
                solution={`<form>
  <label for="email">Email Address</label>
  <input id="email" type="email" placeholder="me@example.com" required>
  
  <button>Subscribe</button>
</form>`}
             />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <QuizSection
                chapterId="html-forms"
                onComplete={(answers, score, total) => saveQuizResult("html-forms", answers, score, total)}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
