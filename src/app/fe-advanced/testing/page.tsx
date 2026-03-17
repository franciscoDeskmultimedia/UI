"use client";

import Link from "next/link";
import FeAdvancedNav from "@/components/FeAdvancedNav";
import { motion } from "framer-motion";
import DemoPanel from "@/components/DemoPanel";
import CodeChallenge from "@/components/CodeChallenge";
import QuizSection from "@/components/QuizSection";
import { useProgress } from "@/lib/progress";
import { useState } from "react";

function TestRunnerDemo() {
  const [results, setResults] = useState<{name: string, status: string}[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const runTests = () => {
    setIsRunning(true);
    setResults([]);
    
    const tests = [
        { name: "should render button", delay: 500 },
        { name: "should increment counter", delay: 1000 },
        { name: "should handle API error", delay: 1500 },
    ];

    tests.forEach((test, i) => {
        setTimeout(() => {
            setResults(prev => [...prev, { name: test.name, status: "PASS" }]);
            if (i === tests.length - 1) setIsRunning(false);
        }, test.delay);
    });
  };

  return (
    <DemoPanel title="Test Runner Simulation" icon="🧪">
      <div style={{ padding: 20 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <h4 style={{ margin: 0 }}>Create React App Test Suite</h4>
            <button 
                onClick={runTests}
                className="btn btn-primary"
                disabled={isRunning}
                style={{ fontSize: "0.8rem", padding: "6px 12px" }}
            >
                {isRunning ? "Running..." : "Run Tests"}
            </button>
        </div>

        <div style={{ background: "#1e1e1e", padding: 16, borderRadius: 8, minHeight: 120, fontFamily: "monospace" }}>
            {results.length === 0 && !isRunning && <span style={{ color: "#666" }}>Ready to run.</span>}
            {results.map((res, i) => (
                <div key={i} style={{ marginBottom: 4 }}>
                    <span style={{ color: "#5cf0d0", fontWeight: "bold" }}>✔ {res.status}</span> <span style={{ color: "#ddd" }}>{res.name}</span>
                </div>
            ))}
            {isRunning && <div style={{ color: "#999", marginTop: 8 }}>Running...</div>}
        </div>
      </div>
    </DemoPanel>
  );
}

function TestPyramidDemo() {
    return (
        <DemoPanel title="The Testing Pyramid" icon="📐">
            <div style={{ padding: 20, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <p style={{ color: "var(--text-secondary)", marginBottom: 16, textAlign: "center" }}>
                    A balanced testing strategy focuses mostly on fast, cheap unit tests and fewer slow, expensive E2E tests.
                </p>
                <div style={{ width: "300px", display: "flex", flexDirection: "column", gap: "4px" }}>
                    <div style={{ padding: "12px", background: "#fc5c5c", color: "white", textAlign: "center", borderRadius: "4px 4px 0 0", fontSize: "0.9rem" }}>
                        <strong>E2E (End-to-End)</strong><br/>
                        <span style={{ fontSize: "0.75rem", opacity: 0.9 }}>Simulate real user flow. Slowest.</span>
                    </div>
                    <div style={{ padding: "24px", background: "#fcb85c", color: "black", textAlign: "center", fontSize: "0.9rem", clipPath: "polygon(10% 0, 90% 0, 100% 100%, 0% 100%)" }}>
                         <strong>Integration</strong><br/>
                         <span style={{ fontSize: "0.75rem", opacity: 0.9 }}>Check how modules work together.</span>
                    </div>
                    <div style={{ padding: "32px", background: "#5cf0d0", color: "black", textAlign: "center", borderRadius: "0 0 4px 4px", fontSize: "0.9rem" }}>
                         <strong>Unit Tests</strong><br/>
                         <span style={{ fontSize: "0.75rem", opacity: 0.9 }}>Test individual functions. Fastest.</span>
                    </div>
                </div>
            </div>
        </DemoPanel>
    )
}

export default function TestingPage() {
  const { saveQuizResult } = useProgress();

  return (
    <>
      <FeAdvancedNav />
      <div className="page-wrapper">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
             <Link href="/fe-advanced" className="back-link">
              ← Back to Course
            </Link>
            <div className="chapter-hero-number" style={{ color: "#5cf0d0" }}>Module 3</div>
            <h1 className="chapter-hero-title">Testing Strategies</h1>
            <p className="chapter-hero-desc">
              Unit, Integration, and End-to-End testing. Ensuring your code works as expected.
            </p>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <TestRunnerDemo />
          </motion.div>

           <div className="content-block">
             <h2>Types of Testing</h2>
             <p>A robust application relies on multiple layers of testing.</p>
             <ul style={{ lineHeight: "1.8", marginTop: "16px" }}>
                 <li>
                    <strong>Unit Testing:</strong> Testing small, isolated pieces of code (functions, components).
                    <br/><em>Tools: Jest, Vitest, React Testing Library.</em>
                 </li>
                 <li>
                    <strong>Integration Testing:</strong> Testing how multiple units work together (e.g., A component fetching data from a hook).
                 </li>
                 <li>
                    <strong>End-to-End (E2E) Testing:</strong> Testing the full application flow in a real browser environment.
                    <br/><em>Tools: Cypress, Playwright.</em>
                 </li>
                 <li>
                    <strong>Static Analysis:</strong> Catching errors before running code.
                    <br/><em>Tools: TypeScript, ESLint, Prettier.</em>
                 </li>
             </ul>
           </div>
           
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
           >
                <TestPyramidDemo />
           </motion.div>

           <div className="content-block">
                <h2>Best Practices</h2>
                <div style={{ background: "rgba(92, 240, 208, 0.1)", borderLeft: "4px solid #5cf0d0", padding: "16px", borderRadius: "0 8px 8px 0" }}>
                   <strong>Golden Rule:</strong> Test behavior, not implementation details.
                   Instead of checking if a component has a state variable named `isOpen`, check if the modal text is visible on the screen.
               </div>
               <ul style={{ marginTop: "16px" }}>
                   <li><strong>Mock External Dependencies:</strong> Don't make real API calls in unit tests. Mock the fetch request or the API client.</li>
                   <li><strong>Arrange-Act-Assert:</strong> Structure your tests clearly: Setup the data (Arrange), perform the action (Act), and verify the result (Assert).</li>
                   <li><strong>Avoid Flaky Tests:</strong> If a test fails randomly (often due to timing/network in E2E), it erodes trust. Fix it or delete it.</li>
               </ul>
           </div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
             <CodeChallenge 
                title="Challenge: Write a Test" 
                description="Write a test assertion to verify that 2 + 2 equals 4. Use the `expect` function."
                files={{
                    "/index.test.js": `// A simple sum function
const sum = (a, b) => a + b;

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 2 + 2 to equal 4', () => {
  // TODO: Write the assertion here
  
});`
                }}
                solution={`const sum = (a, b) => a + b;

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 2 + 2 to equal 4', () => {
  expect(sum(2, 2)).toBe(4);
});`}
             />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <QuizSection
                chapterId="fe-adv-testing"
                onComplete={(score) => saveQuizResult("fe-adv-testing", score)}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
