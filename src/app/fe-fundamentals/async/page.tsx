"use client";

import Link from "next/link";
import FeNav from "@/components/FeNav";
import { motion } from "framer-motion";
import DemoPanel from "@/components/DemoPanel";
import CodeChallenge from "@/components/CodeChallenge";
import QuizSection from "@/components/QuizSection";
import { useProgress } from "@/lib/progress";
import { useState, useEffect } from "react";

function AsyncDemo() {
  const [status, setStatus] = useState("Idle");
  const [data, setData] = useState<string | null>(null);

  const fetchData = () => {
    setStatus("Loading...");
    setData(null);
    
    // Simulate API call
    setTimeout(() => {
        setStatus("Success");
        setData("Data fetched from server!");
    }, 2000);
  };

  return (
    <DemoPanel title="Async / Await Simulation" icon="⏳">
      <div style={{ padding: 20 }}>
        <p style={{ color: "var(--text-secondary)", marginBottom: 16 }}>
          Asynchronous code doesn't block the main thread. We use Promises to handle operations like data fetching.
        </p>

        <button 
            onClick={fetchData}
            className="btn btn-primary"
            disabled={status === "Loading..."}
        >
            {status === "Loading..." ? "Fetching..." : "Fetch Data"}
        </button>

        <div style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 12 }}>
            <div>Status: <span style={{ 
                color: status === "Success" ? "#5cf0d0" : status === "Loading..." ? "#fcb85c" : "#fff" 
            }}>{status}</span></div>
            
            {status === "Loading..." && <div className="spinner"></div>}
        </div>

        {data && (
            <div style={{ marginTop: 16, padding: 12, background: "rgba(92, 240, 208, 0.1)", border: "1px solid #5cf0d0", borderRadius: 8, color: "#5cf0d0" }}>
                {data}
            </div>
        )}
      </div>
    </DemoPanel>
  );
}

function PromiseChainDemo() {
    return (
        <DemoPanel title="Promise Chaining" icon="🔗">
            <div style={{ padding: 20 }}>
                <p style={{ color: "var(--text-secondary)", marginBottom: 16 }}>
                    Before async/await, we chained `.then()` methods. This is still useful for simple chains or handling errors.
                </p>
                <div style={{ background: "#2a2a2a", padding: "16px", borderRadius: "8px", border: "1px dashed #555" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                        <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#fc5c8c", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: "bold" }}>1</div>
                        <span style={{ color: "#eee" }}>fetch('/user')</span>
                    </div>
                    <div style={{ marginLeft: "15px", borderLeft: "2px solid #555", height: "20px" }}></div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                        <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#5cf0d0", display: "flex", alignItems: "center", justifyContent: "center", color: "black", fontWeight: "bold" }}>2</div>
                        <span style={{ color: "#eee" }}>.then(res =&gt; res.json())</span>
                    </div>
                    <div style={{ marginLeft: "15px", borderLeft: "2px solid #555", height: "20px" }}></div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                         <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#5ca8fc", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: "bold" }}>3</div>
                        <span style={{ color: "#eee" }}>.then(data =&gt; console.log(data))</span>
                    </div>
                </div>
            </div>
        </DemoPanel>
    )
}

export default function AsyncPage() {
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
            <div className="chapter-hero-number" style={{ color: "#9b82ff" }}>Module 4</div>
            <h1 className="chapter-hero-title">Async Programming</h1>
            <p className="chapter-hero-desc">
              Promises, Async/Await, and collecting data from APIs.
            </p>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <AsyncDemo />
          </motion.div>

           <div className="content-block">
             <h2>The Event Loop</h2>
             <p>JavaScript is single-threaded. Async functions allow long-running tasks (like network requests) to run in the background without freezing the UI.</p>
             
             <h3 style={{ marginTop: "24px" }}>Fetch API & Async/Await</h3>
             <p>The `fetch` API is the modern way to retrieve data. Using `async/await` makes asynchronous code look synchronous, which is easier to read.</p>
             <pre style={{ background: "#1e1e1e", padding: 16, borderRadius: 8, overflowX: "auto", marginTop: "16px" }}>
{`async function getData() {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) throw new Error('Network response was not ok');
    
    const data = await response.json(); // Wait for JSON parsing
    console.log(data);
  } catch (error) {
    console.error("Error:", error); // Catches network errors AND json parsing errors
  }
}`}
             </pre>
           </div>
           
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
           >
                <PromiseChainDemo />
           </motion.div>

           <div className="content-block">
                <h2>Best Practices</h2>
                <div style={{ background: "rgba(155, 130, 255, 0.1)", borderLeft: "4px solid #9b82ff", padding: "16px", borderRadius: "0 8px 8px 0" }}>
                   <strong>Error Handling:</strong> Always wrap `await` calls in a `try...catch` block. Network requests can fail for many reasons (offline, server error, CORS).
               </div>
               <ul style={{ marginTop: "16px" }}>
                   <li><strong>Parallel Requests:</strong> Use `Promise.all([p1, p2])` if you need data from multiple sources and they don't depend on each other. It's faster than awaiting them one by one.</li>
                   <li><strong>Loading States:</strong> Always show a loading indicator while fetching data to give feedback to the user.</li>
                   <li><strong>Cancellation:</strong> Use `AbortController` to cancel fetch requests if the component unmounts or the user navigates away.</li>
               </ul>
           </div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
             <CodeChallenge 
                title="Challenge: Fetching Data" 
                description="Currently the code does nothing. Complete the 'loadUser' function to fetch user data and log the name. Don't forget to use 'await'."
                files={{
                    "/index.js": `const fakeApi = () => new Promise(resolve => {
  setTimeout(() => resolve({ name: "Alice" }), 1000);
});

async function loadUser() {
  console.log("Loading...");
  
  // TODO: Await fakeApi() and log user.name
  
}

loadUser();`
                }}
                solution={`const fakeApi = () => new Promise(resolve => {
  setTimeout(() => resolve({ name: "Alice" }), 1000);
});

async function loadUser() {
  console.log("Loading...");
  
  const user = await fakeApi();
  console.log("User:", user.name);
}

loadUser();`}
             />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <QuizSection
                chapterId="fe-async"
                onComplete={(score) => saveQuizResult("fe-async", score)}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
