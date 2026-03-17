"use client";

import HtmlNav from "@/components/HtmlNav";
import Link from "next/link";
import { motion } from "framer-motion";
import DemoPanel from "@/components/DemoPanel";
import CodeChallenge from "@/components/CodeChallenge";
import QuizSection from "@/components/QuizSection";
import { useProgress } from "@/lib/progress";

function ListDemo() {
  return (
    <DemoPanel title="Lists & Tables" icon="📊">
      <div style={{ padding: 20 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <div>
                <h4 style={{ color: "#E34F26", marginBottom: 8 }}>Unordered List &lt;ul&gt;</h4>
                <ul style={{ paddingLeft: 20, color: "#ccc" }}>
                    <li>Milk</li>
                    <li>Eggs</li>
                    <li>Bread</li>
                </ul>
                <div style={{ marginTop: 16 }}>
                     <h4 style={{ color: "#E34F26", marginBottom: 8 }}>Ordered List &lt;ol&gt;</h4>
                    <ol style={{ paddingLeft: 20, color: "#ccc" }}>
                        <li>Step 1</li>
                        <li>Step 2</li>
                        <li>Step 3</li>
                    </ol>
                </div>
            </div>

            <div>
                 <h4 style={{ color: "#E34F26", marginBottom: 8 }}>Table &lt;table&gt;</h4>
                 <table style={{ width: "100%", borderCollapse: "collapse", color: "#ccc", fontSize: "0.9rem" }}>
                     <thead>
                         <tr>
                             <th style={{ borderBottom: "1px solid #555", textAlign: "left", padding: 4 }}>Name</th>
                             <th style={{ borderBottom: "1px solid #555", textAlign: "left", padding: 4 }}>Age</th>
                         </tr>
                     </thead>
                     <tbody>
                         <tr>
                             <td style={{ padding: 4 }}>John</td>
                             <td style={{ padding: 4 }}>25</td>
                         </tr>
                          <tr>
                             <td style={{ padding: 4 }}>Jane</td>
                             <td style={{ padding: 4 }}>30</td>
                         </tr>
                     </tbody>
                 </table>
            </div>
        </div>
      </div>
    </DemoPanel>
  );
}

export default function HtmlListsTablesPage() {
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
            <div className="chapter-hero-number" style={{ color: "#E34F26" }}>Module 4</div>
            <h1 className="chapter-hero-title">Lists & Tables</h1>
            <p className="chapter-hero-desc">
              Structuring data. Steps, Bullet points, and tabular data.
            </p>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ListDemo />
          </motion.div>

           <div className="content-block">
             <h2>Lists</h2>
             <p>Lists are used to group related items.</p>
             <ul style={{ marginTop: 16 }}>
                 <li><code>&lt;ul&gt;</code>: Unordered (bulleted) list. Use for items where order doesn't matter (e.g. navigation, ingredients).</li>
                 <li><code>&lt;ol&gt;</code>: Ordered (numbered) list. Use for steps or ranking.</li>
                 <li><code>&lt;li&gt;</code>: List item (must be inside a list container).</li>
             </ul>

             <h2>Tables</h2>
             <p>Use tables only for <strong>tabular data</strong> (charts, pricing tables), NOT for layout.</p>
             <pre>
&lt;table&gt;
  &lt;thead&gt;
    &lt;tr&gt; &lt;th&gt;Name&lt;/th&gt; &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt; &lt;td&gt;John&lt;/td&gt; &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;
             </pre>
             <ul>
                 <li><code>&lt;tr&gt;</code>: Table Row</li>
                 <li><code>&lt;th&gt;</code>: Table Header (bold, centered by default)</li>
                 <li><code>&lt;td&gt;</code>: Table Data cell</li>
             </ul>
           </div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
             <CodeChallenge 
                title="Challenge: Simple List" 
                description="Create an unordered list (bullets) of 3 items: 'Apple', 'Banana', 'Cherry'."
                files={{
                    "/index.html": `<!-- TODO: Unordered list -->`
                }}
                solution={`<ul>
  <li>Apple</li>
  <li>Banana</li>
  <li>Cherry</li>
</ul>`}
             />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <QuizSection
                chapterId="html-lists"
                onComplete={(score) => saveQuizResult("html-lists", score)}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
