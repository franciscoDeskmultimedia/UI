"use client";

import JsNav from "@/components/JsNav";
import Link from "next/link";
import { motion } from "framer-motion";
import DemoPanel from "@/components/DemoPanel";
import CodeChallenge from "@/components/CodeChallenge";
import QuizSection from "@/components/QuizSection";
import { useProgress } from "@/lib/progress";

function ObjectsDemo() {
  return (
    <DemoPanel title="Object Structure" icon="🧩">
      <div style={{ padding: 20 }}>
        <p style={{ color: "var(--text-secondary)", marginBottom: 16 }}>
          Objects are variables that can contain many values. They are written with curly braces.
        </p>
        
        <div style={{ background: "#222", padding: 16, borderRadius: 8, fontFamily: "monospace" }}>
             <span style={{ color: "#fcb85c" }}>const</span> <span style={{ color: "#5cf0d0" }}>car</span> = &#123;<br/>
             &nbsp;&nbsp;<span style={{ color: "#fc5c8c" }}>type</span>: "Fiat",<br/>
             &nbsp;&nbsp;<span style={{ color: "#fc5c8c" }}>model</span>: "500",<br/>
             &nbsp;&nbsp;<span style={{ color: "#fc5c8c" }}>color</span>: "white",<br/>
             &nbsp;&nbsp;<span style={{ color: "#5ca8fc" }}>drive</span>: function() &#123;<br/>
             &nbsp;&nbsp;&nbsp;&nbsp;console.log("Vroom!");<br/>
             &nbsp;&nbsp;&#125;<br/>
             &#125;;
        </div>

        <div style={{ marginTop: 16 }}>
             <code style={{ background: "#333", padding: 4, borderRadius: 4 }}>car.type</code> // "Fiat"
        </div>
      </div>
    </DemoPanel>
  );
}

export default function JsObjectsPage() {
  const { saveQuizResult } = useProgress();

  return (
    <>
      <JsNav />
      <div className="page-wrapper">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
             <Link href="/js-course" className="back-link">
              ← Back to Course
            </Link>
            <div className="chapter-hero-number" style={{ color: "#F7DF1E" }}>Module 4</div>
            <h1 className="chapter-hero-title">Objects & Methods</h1>
            <p className="chapter-hero-desc">
              Key-value pairs (Properties). Functions inside objects (Methods).
            </p>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ObjectsDemo />
          </motion.div>

           <div className="content-block">
             <h2>Accessing Properties</h2>
             <p>You can access object properties in two ways:</p>
             <ul>
                 <li>Dot Notation: <code>object.property</code> (Best practice, cleaner).</li>
                 <li>Bracket Notation: <code>object["property"]</code> (Useful if property name is a variable or has spaces).</li>
             </ul>

             <h3>The `this` Keyword</h3>
             <p>In a method, <code>this</code> refers to the <strong>owner object</strong>.</p>
             <pre>
const person = &#123;
  firstName: "John",
  full: function() &#123;
    return this.firstName; // "John"
  &#125;
&#125;
             </pre>
             <p style={{ fontSize: "0.9rem", color: "#aaa" }}>Warning: Arrow functions do <strong>not</strong> have their own `this`. Don't use them for object methods if you need `this`.</p>
           </div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
             <CodeChallenge 
                title="Challenge: Create Object" 
                description="Create an object `user` with properties `name` ('Alex') and `age` (30)."
                files={{
                    "/app.js": `// TODO: Define user object
`
                }}
                solution={`const user = {
  name: "Alex",
  age: 30
};`}
             />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <QuizSection
                chapterId="js-objects"
                onComplete={(answers, score, total) => saveQuizResult("js-objects", answers, score, total)}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
