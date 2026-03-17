"use client";

import { useReducer } from "react";
import Link from "next/link";
import ReactAdvancedNav from "@/components/ReactAdvancedNav";
import DemoPanel from "@/components/DemoPanel";
import CodeChallenge from "@/components/CodeChallenge";
import QuizSection from "@/components/QuizSection";
import { motion } from "framer-motion";
import { useProgress } from "@/lib/progress";
import { quizData } from "@/lib/quizData";

// -------------------------------------------------------------
// DEMO 1: Simple Counter
// -------------------------------------------------------------
type CounterAction = { type: "increment" } | { type: "decrement" } | { type: "reset" };
type CounterState = { count: number };

function counterReducer(state: CounterState, action: CounterAction): CounterState {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

function CounterDemo() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <DemoPanel title="Basic Reducer Pattern" icon="🔢">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>useReducer</strong> is an alternative to useState. It&apos;s great when the next state depends on the previous one in complex ways.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "start", marginTop: 24 }}>
        
        {/* Code Snippet */}
        <div style={{ background: "var(--bg-tertiary)", padding: 20, borderRadius: 12, fontFamily: "monospace", fontSize: "0.82rem", lineHeight: 1.5 }}>
           <div><span style={{ color: "#7c5cfc" }}>function</span> <span style={{ color: "#fcb85c" }}>reducer</span>(state, action) {"{"}</div>
           <div style={{ paddingLeft: 16 }}>
             <span style={{ color: "#7c5cfc" }}>switch</span> (action.type) {"{"}
           </div>
           <div style={{ paddingLeft: 32 }}>
             <span style={{ color: "#7c5cfc" }}>case</span> <span style={{ color: "#5cf0d0" }}>&quot;inc&quot;</span>: <span style={{ color: "#7c5cfc" }}>return</span> count + 1;
           </div>
           <div style={{ paddingLeft: 32 }}>
             <span style={{ color: "#7c5cfc" }}>case</span> <span style={{ color: "#5cf0d0" }}>&quot;dec&quot;</span>: <span style={{ color: "#7c5cfc" }}>return</span> count - 1;
           </div>
           <div style={{ paddingLeft: 16 }}>{"}"}</div>
           <div>{"}"}</div>
           <br/>
           <div style={{ color: "#6b6b85" }}>{`// Using it:`}</div>
           <div>dispatch({`{`} type: <span style={{ color: "#5cf0d0" }}>&quot;inc&quot;</span> {`}`})</div>
        </div>

        {/* Live Demo */}
        <div style={{ textAlign: "center", padding: 24, background: "var(--bg-glass)", borderRadius: 12 }}>
          <div style={{ fontSize: "3.5rem", fontWeight: 800, marginBottom: 24, color: "#fc5c5c", fontVariantNumeric: "tabular-nums" }}>
            {state.count}
          </div>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
             <button 
               onClick={() => dispatch({ type: "decrement" })}
               className="btn-secondary"
               style={{ borderRadius: 8, padding: "10px 20px" }}
             >
               - Decrement
             </button>
             <button 
               onClick={() => dispatch({ type: "increment" })}
               className="btn-primary"
               style={{ borderRadius: 8, padding: "10px 20px", background: "linear-gradient(135deg, #fcb85c 0%, #fc5c5c 100%)" }}
             >
               + Increment
             </button>
             <button 
               onClick={() => dispatch({ type: "reset" })}
               style={{ width: "100%", background: "none", border: "none", color: "var(--text-tertiary)", fontSize: "0.8rem", cursor: "pointer", marginTop: 8 }}
             >
               Reset
             </button>
          </div>
        </div>

      </div>
    </DemoPanel>
  );
}

// -------------------------------------------------------------
// DEMO 2: Complex Form State
// -------------------------------------------------------------
type FormState = {
  username: string;
  email: string;
  loading: boolean;
  error: string | null;
};

type FormAction =
  | { type: "field"; field: string; value: string }
  | { type: "submit" }
  | { type: "success" }
  | { type: "error"; error: string }
  | { type: "reset" };

const initialFormState: FormState = {
    username: "",
    email: "",
    loading: false,
    error: null,
};

function formReducer(state: FormState, action: FormAction): FormState {
    switch (action.type) {
        case "field":
            return { ...state, [action.field]: action.value };
        case "submit":
            return { ...state, loading: true, error: null };
        case "success":
            return { ...state, loading: false, error: null };
        case "error":
            return { ...state, loading: false, error: action.error };
        case "reset":
            return initialFormState;
        default:
            return state;
    }
}

function ComplexFormDemo() {
    const [state, dispatch] = useReducer(formReducer, initialFormState);

    const handleSubmit = () => {
        dispatch({ type: "submit" });
        setTimeout(() => {
            if (state.username.length < 3) {
                dispatch({ type: "error", error: "Username too short!" });
            } else {
                dispatch({ type: "success" });
                alert("Success!");
            }
        }, 1500);
    };

    return (
        <DemoPanel title="Complex State Management" icon="📋">
             <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
                <strong>Scenario:</strong> Managing a form with loading states, errors, and multiple fields. 
                Using `useState` for each of these would be messy. `useReducer` keeps logic centralized.
            </p>

            <div style={{ marginTop: 24, maxWidth: 400, margin: "24px auto 0" }}>
                <div className="card" style={{ padding: 24 }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                        <div>
                            <label style={{ display: "block", fontSize: "0.8rem", marginBottom: 6, color: "var(--text-secondary)" }}>Username</label>
                            <input 
                                type="text" 
                                value={state.username}
                                onChange={(e) => dispatch({ type: "field", field: "username", value: e.target.value })}
                                style={{ 
                                    width: "100%", 
                                    padding: "10px 12px", 
                                    background: "var(--bg-tertiary)", 
                                    border: "1px solid var(--border-subtle)", 
                                    borderRadius: 6,
                                    color: "white"
                                }}
                                disabled={state.loading}
                            />
                        </div>
                        <div>
                             <label style={{ display: "block", fontSize: "0.8rem", marginBottom: 6, color: "var(--text-secondary)" }}>Email</label>
                            <input 
                                type="email" 
                                value={state.email}
                                onChange={(e) => dispatch({ type: "field", field: "email", value: e.target.value })}
                                style={{ 
                                    width: "100%", 
                                    padding: "10px 12px", 
                                    background: "var(--bg-tertiary)", 
                                    border: "1px solid var(--border-subtle)", 
                                    borderRadius: 6,
                                     color: "white"
                                }}
                                disabled={state.loading}
                            />
                        </div>

                        {state.error && (
                            <div style={{ fontSize: "0.8rem", color: "#ff5f57", background: "rgba(255, 95, 87, 0.1)", padding: 8, borderRadius: 4 }}>
                                ⚠️ {state.error}
                            </div>
                        )}

                        <button 
                            className="btn-primary" 
                            onClick={handleSubmit}
                            disabled={state.loading}
                            style={{ 
                                marginTop: 8, 
                                background: "linear-gradient(135deg, #fcb85c 0%, #fc5c5c 100%)",
                                opacity: state.loading ? 0.7 : 1,
                                cursor: state.loading ? "wait" : "pointer"
                            }}
                        >
                            {state.loading ? "Saving..." : "Submit Form"}
                        </button>
                        
                         <button 
                            onClick={() => dispatch({ type: "reset" })}
                             style={{ background: "none", border: "none", color: "var(--text-tertiary)", fontSize: "0.8rem", cursor: "pointer" }}
                        >
                           Reset Form
                        </button>
                    </div>
                </div>
            </div>
        </DemoPanel>
    )
}

export default function UseReducerPage() {
  const { getChapterProgress, saveQuizResult } = useProgress();
  const slug = "react-adv-reducer";
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
            <div className="chapter-hero-number" style={{ color: "#fc5c5c" }}>Module 1</div>
            <h1 className="chapter-hero-title">useReducer</h1>
            <p className="chapter-hero-desc">
              When state logic gets complex, `useState` isn&apos;t enough. `useReducer` lets you separate your state logic from your component.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <CounterDemo />
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <ComplexFormDemo />
            
            <div style={{ marginTop: 32, padding: 24, background: "rgba(252, 92, 92, 0.1)", border: "1px solid rgba(252, 92, 92, 0.2)", borderRadius: 12 }}>
                <h3 style={{ fontSize: "1rem", color: "#fc5c5c", margin: "0 0 8px" }}>💡 Pro Tip: Pure Reducers</h3>
                <p style={{ fontSize: "0.9rem", margin: 0, lineHeight: 1.6, color: "var(--text-secondary)" }}>
                    Reducers must be pure functions. This means they should not have side effects (like API calls) and should not mutate state. 
                    Given the same input (state + action), they should always return the same output (new state). 
                    This makes them incredibly easy to unit test!
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
                title="Challenge: Reducer Action" 
                description="The reducer handles 'increment', but 'decrement' is missing. Add the case for 'decrement' so the button works."
                files={{
                    "/App.js": `import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    // TODO: Add 'decrement' case
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div style={{ padding: 20, textAlign: 'center' }}>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </div>
  );
}`
                }}
                solution={`import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div style={{ padding: 20, textAlign: 'center' }}>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </div>
  );
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
              title="Chapter 1 Quiz"
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
            <Link href="/react-advanced" className="btn btn-secondary">
              ← Course Index
            </Link>
            <Link href="/react-advanced/context" className="btn btn-primary" style={{ background: "linear-gradient(135deg, #fcb85c 0%, #fc5c5c 100%)" }}>
              Next: Context API →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
