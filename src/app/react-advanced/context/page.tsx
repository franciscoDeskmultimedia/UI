"use client";

import { createContext, useContext, useState } from "react";
import Link from "next/link";
import ReactAdvancedNav from "@/components/ReactAdvancedNav";
import DemoPanel from "@/components/DemoPanel";
import CodeChallenge from "@/components/CodeChallenge";
import QuizSection from "@/components/QuizSection";
import { motion } from "framer-motion";
import { useProgress } from "@/lib/progress";
import { quizData } from "@/lib/quizData";

// Context type
type ThemeContextType = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

// Create Context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Provider
function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Consumer Component (Deeply nested)
function ThemedComponent() {
  const context = useContext(ThemeContext);
  
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  const { theme, toggleTheme } = context;

  return (
    <div
      style={{
        padding: 24,
        background: theme === "light" ? "#f0f0f5" : "#1a1a28",
        color: theme === "light" ? "#1a1a28" : "#f0f0f5",
        borderRadius: 12,
        marginBottom: 16,
        border: "1px solid var(--border-subtle)",
        transition: "all 0.3s ease"
      }}
    >
      <h3 style={{ margin: "0 0 8px" }}>Currently in {theme} mode</h3>
      <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>
        This component is reading state directly from Context, skipping props!
      </p>
      <button
        onClick={toggleTheme}
        className="btn-primary"
        style={{
          marginTop: 12,
          background: theme === "light" ? "#1a1a28" : "#f0f0f5",
          color: theme === "light" ? "#f0f0f5" : "#1a1a28",
          border: "none"
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
}

function ContextDemo() {
  return (
    <DemoPanel title="Context API" icon="🌲">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>Prop Drilling sucks.</strong> Context lets you teleport data to any component in the tree, no matter how deep.
      </p>
      
      <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
        
        {/* Code Snippet */}
        <div style={{ background: "var(--bg-tertiary)", padding: 20, borderRadius: 12, fontFamily: "monospace", fontSize: "0.82rem", lineHeight: 1.5 }}>
           <div><span style={{ color: "#7c5cfc" }}>const</span> ThemeCtx = createContext();</div>
           <br/>
           <div><span style={{ color: "#7c5cfc" }}>function</span> <span style={{ color: "#fcb85c" }}>App</span>() {"{"}</div>
           <div style={{ paddingLeft: 16 }}>
             <span style={{ color: "#7c5cfc" }}>return</span> (
           </div>
           <div style={{ paddingLeft: 32 }}>
             <span style={{ color: "#5ca8fc" }}>&lt;ThemeCtx.Provider</span> value={"{theme}"}<span style={{ color: "#5ca8fc" }}>&gt;</span>
           </div>
           <div style={{ paddingLeft: 48 }}>
             <span style={{ color: "#5ca8fc" }}>&lt;DeeplyNested /&gt;</span>
           </div>
           <div style={{ paddingLeft: 32 }}>
             <span style={{ color: "#5ca8fc" }}>&lt;/ThemeCtx.Provider&gt;</span>
           </div>
           <div style={{ paddingLeft: 16 }}>);</div>
           <div>{"}"}</div>
           <br/>
           <div><span style={{ color: "#6b6b85" }}>{`// Inside DeeplyNested:`}</span></div>
           <div><span style={{ color: "#7c5cfc" }}>const</span> theme = useContext(ThemeCtx);</div>
        </div>

        {/* Live Demo */}
        <div>
           <ThemeProvider>
              <div style={{ borderLeft: "2px dashed var(--border-subtle)", paddingLeft: 16, marginLeft: 8 }}>
                <div style={{ fontSize: "0.8rem", color: "var(--text-tertiary)", marginBottom: 8 }}>Parent (Provider)</div>
                 <div style={{ borderLeft: "2px dashed var(--border-subtle)", paddingLeft: 16 }}>
                    <div style={{ fontSize: "0.8rem", color: "var(--text-tertiary)", marginBottom: 8 }}>Intermediate Component (No Props!)</div>
                     <ThemedComponent />
                 </div>
              </div>
           </ThemeProvider>
        </div>
      </div>
    </DemoPanel>
  );
}


export default function ContextPage() {
  const { getChapterProgress, saveQuizResult } = useProgress();
  const slug = "react-adv-context";
  const progress = getChapterProgress(slug);

  return (
    <>
      <ReactAdvancedNav />
      <div className="page-wrapper">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center" }}
          >
             <Link href="/react-advanced" className="back-link">
              ← Back to Overview
            </Link>
            <div className="chapter-hero-number" style={{ color: "#fcb85c" }}>Module 2</div>
            <h1 className="chapter-hero-title">Context API</h1>
            <p className="chapter-hero-desc">
              Share data like themes, authentication, or language preferences globally without passing props through every level.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <ContextDemo />

             <div style={{ marginTop: 32, padding: 24, background: "rgba(252, 184, 92, 0.1)", border: "1px solid rgba(252, 184, 92, 0.2)", borderRadius: 12 }}>
                <h3 style={{ fontSize: "1rem", color: "#fcb85c", margin: "0 0 8px" }}>💡 Pro Tip: Optimize Context</h3>
                <p style={{ fontSize: "0.9rem", margin: 0, lineHeight: 1.6, color: "var(--text-secondary)" }}>
                    When context value updates, ALL consumers re-render. To avoid performance issues in large apps:
                    <br/>1. Keep context state small and focused.
                    <br/>2. Split State and Dispatch into separate contexts so components that only dispatch don&apos;t re-render on state changes.
                </p>
            </div>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
             <CodeChallenge 
                title="Challenge: Consuming Context" 
                description="The UserProvider is set up, but the UserProfile component needs to consume the context to display the username."
                files={{
                    "/App.js": `import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export default function App() {
  const [user] = useState({ name: 'Alice' });
  return (
    <UserContext.Provider value={user}>
      <UserProfile />
    </UserContext.Provider>
  );
}

function UserProfile() {
  // TODO: Get user from UserContext
  const user = { name: 'Guest' }; // Fix this line
  return <h1>Hello, {user.name}</h1>;
}`
                }}
                solution={`import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export default function App() {
  const [user] = useState({ name: 'Alice' });
  return (
    <UserContext.Provider value={user}>
      <UserProfile />
    </UserContext.Provider>
  );
}

function UserProfile() {
  const user = useContext(UserContext); // Consuming context
  return <h1>Hello, {user.name}</h1>;
}`}
             />
          </motion.div>

           {/* QUIZ SECTION */}
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <QuizSection
              title="Chapter 2 Quiz"
              questions={quizData[slug]}
              onComplete={(answers, score, total) => saveQuizResult(slug, answers, score, total)}
              previousBest={progress.bestScore} 
            />
          </motion.div>


           <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "64px 0 48px",
              borderTop: "1px solid var(--border-subtle)",
              marginTop: 64,
            }}
          >
            <Link href="/react-advanced/use-reducer" className="btn btn-secondary">
              ← useReducer
            </Link>
            <Link href="/react-advanced/performance" className="btn btn-primary" style={{ background: "linear-gradient(135deg, #fcb85c 0%, #fc5c5c 100%)" }}>
              Next: Performance →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
