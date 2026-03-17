"use client";

import { useState } from "react";
import { Sandpack } from "@codesandbox/sandpack-react";
import { motion } from "framer-motion";

interface CodeChallengeProps {
  title: string;
  description: string;
  files: Record<string, string>;
  solution?: string; // Optional full solution code for the main file
}

export default function CodeChallenge({ title, description, files, solution }: CodeChallengeProps) {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className="code-challenge" style={{ margin: "48px 0" }}>
      <div 
        className="challenge-header"
        style={{
          background: "linear-gradient(135deg, rgba(92, 240, 208, 0.1) 0%, rgba(92, 168, 252, 0.1) 100%)",
          border: "1px solid rgba(92, 240, 208, 0.2)",
          borderRadius: "12px 12px 0 0",
          padding: "24px",
          borderBottom: "none"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
            <span style={{ fontSize: "1.5rem" }}>🛠️</span>
            <h3 style={{ margin: 0, color: "#5cf0d0", fontSize: "1.2rem" }}>{title}</h3>
        </div>
        <p style={{ margin: 0, color: "var(--text-secondary)", lineHeight: 1.6 }}>{description}</p>
      </div>

      <div 
        className="sandpack-wrapper"
        style={{ 
            borderRadius: "0 0 12px 12px", 
            overflow: "hidden", 
            border: "1px solid rgba(92, 240, 208, 0.2)",
            borderTop: "none"
        }}
      >
        <Sandpack 
            template="react"
            theme="dark"
            files={files}
            options={{
                showNavigator: true,
                showTabs: true,
                editorHeight: 400, // Adjust height as needed
                showLineNumbers: true, 
                wrapContent: true,
            }}
            customSetup={{
                dependencies: {
                   "framer-motion": "latest" 
                }
            }}
        />
      </div>

      {solution && (
        <div style={{ marginTop: 16, textAlign: "right" }}>
            <button 
                onClick={() => setShowSolution(!showSolution)}
                style={{
                    background: "transparent",
                    border: "1px solid var(--border-subtle)",
                    color: "var(--text-secondary)",
                    padding: "8px 16px",
                    borderRadius: 6,
                    cursor: "pointer",
                    fontSize: "0.85rem",
                    transition: "all 0.2s"
                }}
            >
                {showSolution ? "Hide Solution" : "Show Solution 👀"}
            </button>
            
            {showSolution && (
                <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    style={{ marginTop: 12, textAlign: "left", background: "#1e1e1e", padding: 16, borderRadius: 8, border: "1px solid var(--border-subtle)", overflow: "auto" }}
                >
                    <pre style={{ margin: 0, fontFamily: "monospace", fontSize: "0.85rem", color: "#d4d4d4" }}>
                        {solution}
                    </pre>
                </motion.div>
            )}
        </div>
      )}
    </div>
  );
}
