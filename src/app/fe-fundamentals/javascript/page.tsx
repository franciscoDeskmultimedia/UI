"use client";

import Link from "next/link";
import FeNav from "@/components/FeNav";
import { motion } from "framer-motion";
import DemoPanel from "@/components/DemoPanel";
import CodeChallenge from "@/components/CodeChallenge";
import QuizSection from "@/components/QuizSection";
import { useProgress } from "@/lib/progress";

function ScopeDemo() {
  return (
    <DemoPanel title="Block Scope Visualizer" icon="📦">
      <div style={{ padding: 20, fontFamily: "monospace", fontSize: "0.9rem" }}>
        <p style={{ color: "var(--text-secondary)", marginBottom: 16 }}>
          Variables declared with <code>let</code> and <code>const</code> are block-scoped. They only exist within the nearest set of curly braces <code>{`{}`}</code>.
        </p>
        
        <div style={{ 
          background: "rgba(92, 240, 208, 0.1)", 
          border: "2px dashed #5cf0d0", 
          padding: 20, 
          borderRadius: 8,
          marginBottom: 16
        }}>
          <strong style={{ color: "#5cf0d0" }}>Global Scope</strong>
          <div style={{ margin: "10px 0" }}>let globalVar = "I am everywhere";</div>
          
          <div style={{ 
            background: "rgba(252, 92, 140, 0.1)", 
            border: "2px dashed #fc5c8c", 
            padding: 20, 
            borderRadius: 8 
          }}>
            <strong style={{ color: "#fc5c8c" }}>Function Scope</strong>
            <div style={{ margin: "10px 0" }}>
              function myFunction() {"{"}
            </div>
            <div style={{ marginLeft: 20 }}>
              let functionVar = "I am only in here";
            </div>

            <div style={{ 
              background: "rgba(252, 184, 92, 0.1)", 
              border: "2px dashed #fcb85c", 
              padding: 20, 
              borderRadius: 8,
              marginLeft: 20,
              marginTop: 10
            }}>
                <strong style={{ color: "#fcb85c" }}>Block Scope (if/for)</strong>
                <div style={{ margin: "10px 0" }}>
                  if (true) {"{"}
                </div>
                <div style={{ marginLeft: 20 }}>
                  let blockVar = "I am trapped inside this if block";
                </div>
                <div style={{ margin: "10px 0" }}> {"}"} </div>
            </div>

             <div style={{ margin: "10px 0" }}> {"}"} </div>
          </div>
        </div>
      </div>
    </DemoPanel>
  );
}

function HoistingDemo() {
    return (
        <DemoPanel title="Hoisting Mechanism" icon="🏗️">
            <div style={{ padding: 20 }}>
                <p style={{ color: "var(--text-secondary)", marginBottom: 16 }}>
                    Hoisting is JavaScript's default behavior of moving declarations to the top. Variables defined with <code>var</code> are hoisted and initialized with <code>undefined</code>.
                    <code>let</code> and <code>const</code> are hoisted but remain uninitialized (Temporal Dead Zone).
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                    <div style={{ padding: "16px", background: "#333", borderRadius: "8px", border: "1px solid #555" }}>
                        <strong style={{ color: "#fc5c8c", display: "block", marginBottom: "8px" }}>Code You Write</strong>
                        <pre style={{ margin: 0, color: "#ccc" }}>
{`console.log(x);
var x = 5;

console.log(y); // Error!
let y = 10;`}
                        </pre>
                    </div>
                    <div style={{ padding: "16px", background: "#333", borderRadius: "8px", border: "1px solid #555" }}>
                        <strong style={{ color: "#5cf0d0", display: "block", marginBottom: "8px" }}>How JS Sees It</strong>
                        <pre style={{ margin: 0, color: "#ccc" }}>
{`var x;      // Hoisted
console.log(x); // undefined
x = 5;

// y is in Temporal Dead Zone
console.log(y); // ReferenceError`}
                        </pre>
                    </div>
                </div>
            </div>
        </DemoPanel>
    )
}

export default function JavascriptPage() {
  const { saveQuizResult } = useProgress();

  return (
    <>
      <FeNav />
      <div className="page-wrapper">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
             <Link href="/fe-fundamentals" className="back-link">
              ← Back to Course
            </Link>
            <div className="chapter-hero-number" style={{ color: "#fcb85c" }}>Module 2</div>
            <h1 className="chapter-hero-title">JavaScript Basics</h1>
            <p className="chapter-hero-desc">
              Fundamental concepts: Variables, Scoping, Hoisting, and Closures.
            </p>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ScopeDemo />
          </motion.div>

           <div className="content-block">
             <h2>Data Types & Modern Syntax</h2>
             <p>ES6+ introduced features that make JavaScript cleaner and more robust.</p>
             <ul style={{ lineHeight: "1.8", marginTop: "16px" }}>
                 <li>
                    <strong>`const` vs `let`:</strong> Always use `const` by default. Only use `let` if you know the value will change. 
                    Avoid `var` entirely as it has confusing function-scoping rules.
                 </li>
                 <li>
                    <strong>Template Literals:</strong> Use backticks (`) for string interpolation: <code>{`const greeting = \`Hello \${name}\``}</code>.
                 </li>
                 <li>
                    <strong>Arrow Functions:</strong> Shorter syntax and lexically bind `this`. <code>{`const add = (a, b) => a + b;`}</code>.
                 </li>
                 <li>
                    <strong>Destructuring:</strong> Extract values from arrays or properties from objects into distinct variables.
                    <code>{`const { name, age } = user;`}</code>
                 </li>
             </ul>
             
             <h3 style={{ marginTop: "24px" }}>Closures</h3>
             <p>A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function.</p>
           </div>
           
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
           >
                <HoistingDemo />
           </motion.div>
           
           <div className="content-block">
               <h2>Best Practices</h2>
               <div style={{ background: "rgba(252, 184, 92, 0.1)", borderLeft: "4px solid #fcb85c", padding: "16px", borderRadius: "0 8px 8px 0" }}>
                   <strong>Clean Code Tip:</strong> Keep functions small and focused on a single task. This makes them easier to test and reason about.
               </div>
               <ul style={{ marginTop: "16px" }}>
                   <li><strong>Strict Mode:</strong> Always use <code>"use strict";</code> (or just use ES modules which happen automatically) to catch common coding bloopers.</li>
                   <li><strong>Comparisons:</strong> Always use `===` (strict equality) instead of `==` (loose equality) to avoid unexpected type coercion bugs.</li>
                   <li><strong>Comments:</strong> Comments should explain *why* something is done, not *what* is done. The code itself should be self-documenting.</li>
               </ul>
           </div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
             <CodeChallenge 
                title="Challenge: Fix Variable Scope" 
                description="The code below throws an error because 'message' is accessed outside its scope. Fix it by declaring the variable in the correct scope."
                files={{
                    "/index.js": `function greet() {
  if (true) {
    let message = "Hello, World!";
  }
  
  // Error: message is not defined here
  console.log(message); 
}

greet();`
                }}
                solution={`function greet() {
  let message;
  if (true) {
    message = "Hello, World!";
  }
  
  console.log(message); 
}

greet();`}
             />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <QuizSection
                chapterId="fe-javascript"
                onComplete={(score) => saveQuizResult("fe-javascript", score)}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
