"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import DemoPanel from "@/components/DemoPanel";
import QuizSection from "@/components/QuizSection";
import { motion, AnimatePresence } from "framer-motion";
import { useProgress } from "@/lib/progress";
import { quizData } from "@/lib/quizData";

function SingleColumnDemo() {
  const [layout, setLayout] = useState<"multi" | "single">("multi");

  return (
    <DemoPanel title="Single Column Layout" icon="📋">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>Stick to a single column.</strong> Multi-column forms force the user&apos;s eyes to zigzag (Z-pattern), increasing cognitive load. A single column creates a straight path to completion.
      </p>
      <p style={{ fontSize: "0.78rem", color: "var(--text-tertiary)", marginBottom: 12 }}>
        &quot;One of the problems with multi-column forms is that users interpret the fields inconsistently. They don&apos;t know whether to go down or across.&quot;
      </p>
      <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: 24 }}>
        Compare the layouts. The Single Column version feels like a simple checklist. The Multi-Column version feels like a grid of data entry tasks.
      </p>
      <div className="before-after">
        <div className="before-panel" style={{ opacity: layout === "multi" ? 1 : 0.4 }}>
          <div className="panel-label">✗ Multi-Column</div>
          <div style={{ background: "var(--bg-tertiary)", borderRadius: 12, padding: 16 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {[
                "First name *",
                "Last name *",
                "Email *",
                "Phone",
                "Street *",
                "City *",
              ].map((f) => (
                <div key={f}>
                  <label style={{ fontSize: "0.72rem", color: "var(--text-secondary)", marginBottom: 3, display: "block" }}>{f}</label>
                  <div style={{ height: 32, background: "var(--bg-glass)", borderRadius: 6, border: "1px solid var(--border-subtle)" }} />
                </div>
              ))}
            </div>
            <div style={{ fontSize: "0.7rem", color: "var(--text-tertiary)", marginTop: 10, textAlign: "center" }}>
              ↔️ Eyes zig-zag between columns
            </div>
          </div>
        </div>

        <div className="after-panel" style={{ opacity: layout === "single" ? 1 : 0.4 }}>
          <div className="panel-label">✓ Single Column</div>
          <div style={{ background: "var(--bg-tertiary)", borderRadius: 12, padding: 16 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                "First name *",
                "Last name *",
                "Email *",
                "Phone",
                "Street *",
                "City *",
              ].map((f) => (
                <div key={f}>
                  <label style={{ fontSize: "0.72rem", color: "var(--text-secondary)", marginBottom: 3, display: "block" }}>{f}</label>
                  <div style={{ height: 32, background: "var(--bg-glass)", borderRadius: 6, border: "1px solid var(--border-subtle)" }} />
                </div>
              ))}
            </div>
            <div style={{ fontSize: "0.7rem", color: "var(--accent-tertiary)", marginTop: 10, textAlign: "center" }}>
              ↓ Straight downward flow
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
        <div className="toggle-group">
          <button className={`toggle-option${layout === "multi" ? " active" : ""}`} onClick={() => setLayout("multi")}>
            Multi-Column
          </button>
          <button className={`toggle-option${layout === "single" ? " active" : ""}`} onClick={() => setLayout("single")}>
            Single Column
          </button>
        </div>
      </div>
    </DemoPanel>
  );
}

function LabelPlacementDemo() {
  const [placement, setPlacement] = useState<"top" | "left">("left");

  return (
    <DemoPanel title="Label Placement" icon="🏷️">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>Top-aligned labels are safest.</strong> They work best for mobile (narrow screens) and are fastest to scan because users look <em>down</em> from label to input, not <em>across</em>.
      </p>
      <p style={{ fontSize: "0.78rem", color: "var(--text-tertiary)", marginBottom: 12 }}>
        &quot;If you want users to fill out a form as quickly as possible, put labels above the inputs. If you want them to read carefully (e.g., complex data), left-aligned labels can slow them down beneficially.&quot;
      </p>
      <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: 24 }}>
        Toggle placement. Notice how Top Labels create a compact unit with their input, while Left Labels create a visual gap that the eye must bridge.
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            background: "var(--bg-tertiary)",
            borderRadius: 12,
            padding: 20,
            maxWidth: 400,
            width: "100%",
          }}
        >
          {["Full name", "Email", "Password"].map((field) => (
            <div
              key={field}
              style={{
                display: placement === "left" ? "flex" : "block",
                alignItems: placement === "left" ? "center" : undefined,
                gap: placement === "left" ? 16 : 0,
                marginBottom: 14,
              }}
            >
              <label
                style={{
                  fontSize: "0.82rem",
                  color: "var(--text-secondary)",
                  display: "block",
                  marginBottom: placement === "top" ? 4 : 0,
                  width: placement === "left" ? 80 : "auto",
                  textAlign: placement === "left" ? "right" : "left",
                  flexShrink: 0,
                }}
              >
                {field}
              </label>
              <input
                type="text"
                placeholder={`Enter ${field.toLowerCase()}...`}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: 8,
                  border: "1px solid var(--border-subtle)",
                  background: "var(--bg-glass)",
                  color: "var(--text-primary)",
                  fontSize: "0.88rem",
                  fontFamily: "var(--font-sans)",
                  outline: "none",
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
        <div className="toggle-group">
          <button className={`toggle-option${placement === "left" ? " active" : ""}`} onClick={() => setPlacement("left")}>
            ← Left Labels
          </button>
          <button className={`toggle-option${placement === "top" ? " active" : ""}`} onClick={() => setPlacement("top")}>
            ↑ Top Labels
          </button>
        </div>
      </div>
    </DemoPanel>
  );
}

function RadioVsDropdownDemo() {
  const [mode, setMode] = useState<"dropdown" | "radio">("dropdown");
  const [selectedRadio, setSelectedRadio] = useState("monthly");

  return (
    <DemoPanel title="Radio Buttons vs Dropdowns" icon="🔘">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>Don&apos;t hide your options.</strong> If you have 5 or fewer options, use radio buttons to show them all at once. Dropdowns hide information and require 2 clicks to make a choice.
      </p>
      <p style={{ fontSize: "0.78rem", color: "var(--text-tertiary)", marginBottom: 12 }}>
        &quot;Interaction cost is the sum of mental and physical effort. A dropdown has a higher interaction cost than a set of exposed radio buttons.&quot;
      </p>
      <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: 24 }}>
        Compare the two inputs. Interacting with the Radio Buttons is instantaneous. The Dropdown feels like &quot;work&quot; because you have to open it to see what&apos;s inside.
      </p>
      <div className="before-after">
        <div className="before-panel" style={{ opacity: mode === "dropdown" ? 1 : 0.4 }}>
          <div className="panel-label">Dropdown (hidden options)</div>
          <div style={{ background: "var(--bg-tertiary)", borderRadius: 12, padding: 20 }}>
            <label style={{ fontSize: "0.82rem", color: "var(--text-secondary)", display: "block", marginBottom: 6 }}>
              Billing frequency
            </label>
            <select
              style={{
                width: "100%",
                padding: "10px 12px",
                borderRadius: 8,
                border: "1px solid var(--border-subtle)",
                background: "var(--bg-glass)",
                color: "var(--text-primary)",
                fontSize: "0.88rem",
                fontFamily: "var(--font-sans)",
                outline: "none",
                appearance: "auto",
              }}
            >
              <option>Monthly</option>
              <option>Quarterly</option>
              <option>Annually</option>
            </select>
            <div style={{ fontSize: "0.7rem", color: "var(--text-tertiary)", marginTop: 8 }}>
              Users must click to see options
            </div>
          </div>
        </div>

        <div className="after-panel" style={{ opacity: mode === "radio" ? 1 : 0.4 }}>
          <div className="panel-label">Radio Buttons (visible options)</div>
          <div style={{ background: "var(--bg-tertiary)", borderRadius: 12, padding: 20 }}>
            <label style={{ fontSize: "0.82rem", color: "var(--text-secondary)", display: "block", marginBottom: 10 }}>
              Billing frequency
            </label>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {["monthly", "quarterly", "annually"].map((opt) => (
                <label
                  key={opt}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "10px 14px",
                    borderRadius: 8,
                    border: `1px solid ${selectedRadio === opt ? "var(--accent-primary)" : "var(--border-subtle)"}`,
                    background: selectedRadio === opt ? "rgba(124,92,252,0.08)" : "transparent",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                  onClick={() => setSelectedRadio(opt)}
                >
                  <div
                    style={{
                      width: 18,
                      height: 18,
                      borderRadius: "50%",
                      border: `2px solid ${selectedRadio === opt ? "var(--accent-primary)" : "var(--border-subtle)"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.2s",
                    }}
                  >
                    {selectedRadio === opt && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          background: "var(--accent-primary)",
                        }}
                      />
                    )}
                  </div>
                  <span style={{ fontSize: "0.88rem", textTransform: "capitalize" }}>{opt}</span>
                </label>
              ))}
            </div>
            <div style={{ fontSize: "0.7rem", color: "var(--accent-tertiary)", marginTop: 8 }}>
              All options visible at a glance ✓
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
        <div className="toggle-group">
          <button className={`toggle-option${mode === "dropdown" ? " active" : ""}`} onClick={() => setMode("dropdown")}>
            Dropdown
          </button>
          <button className={`toggle-option${mode === "radio" ? " active" : ""}`} onClick={() => setMode("radio")}>
            Radio Buttons
          </button>
        </div>
      </div>
    </DemoPanel>
  );
}

function ValidationDemo() {
  const [strategy, setStrategy] = useState<"none" | "inline" | "top">("none");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const emailValid = email.includes("@") && email.includes(".");
  const passwordValid = password.length >= 8;

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <DemoPanel title="Form Validation" icon="✅">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>Provide immediate feedback.</strong> Inline validation tells users if they&apos;re right or wrong <em>as they type</em> or when they leave a field. Waiting until the submit button is clicked is frustrating.
      </p>
      <p style={{ fontSize: "0.78rem", color: "var(--text-tertiary)", marginBottom: 12 }}>
        &quot;The best time to tell a user about an error is right after they make it. The feedback loop should be as tight as possible.&quot;
      </p>
      <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: 24 }}>
        Try the strategies. <strong>None</strong> leaves you guessing. <strong>Top</strong> forces you to hunt for the error. <strong>Inline</strong> guides you to the solution immediately.
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            background: "var(--bg-tertiary)",
            borderRadius: 12,
            padding: 24,
            maxWidth: 380,
            width: "100%",
          }}
        >
          {/* Error summary at top */}
          <AnimatePresence>
            {strategy === "top" && submitted && (!emailValid || !passwordValid) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                style={{
                  background: "rgba(252,92,92,0.1)",
                  border: "1px solid rgba(252,92,92,0.3)",
                  borderRadius: 8,
                  padding: 12,
                  marginBottom: 16,
                  fontSize: "0.82rem",
                  color: "#fc5c5c",
                }}
              >
                <strong>Please fix the following:</strong>
                <ul style={{ margin: "6px 0 0 16px", lineHeight: 1.6 }}>
                  {!emailValid && <li>Enter a valid email address</li>}
                  {!passwordValid && <li>Password must be at least 8 characters</li>}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Email */}
          <div style={{ marginBottom: 14 }}>
            <label style={{ fontSize: "0.82rem", color: "var(--text-secondary)", display: "block", marginBottom: 4 }}>
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setSubmitted(false); }}
              placeholder="you@example.com"
              style={{
                width: "100%",
                padding: "10px 12px",
                borderRadius: 8,
                border: `1px solid ${
                  strategy === "inline" && email.length > 0
                    ? emailValid
                      ? "rgba(92,240,208,0.5)"
                      : "rgba(252,92,92,0.5)"
                    : "var(--border-subtle)"
                }`,
                background: "var(--bg-glass)",
                color: "var(--text-primary)",
                fontSize: "0.88rem",
                fontFamily: "var(--font-sans)",
                outline: "none",
                transition: "border-color 0.2s",
              }}
            />
            {strategy === "inline" && email.length > 0 && !emailValid && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ fontSize: "0.75rem", color: "#fc5c5c", marginTop: 4 }}
              >
                Enter a valid email address
              </motion.div>
            )}
            {strategy === "inline" && emailValid && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ fontSize: "0.75rem", color: "#5cf0d0", marginTop: 4 }}
              >
                ✓ Valid email
              </motion.div>
            )}
          </div>

          {/* Password */}
          <div style={{ marginBottom: 16 }}>
            <label style={{ fontSize: "0.82rem", color: "var(--text-secondary)", display: "block", marginBottom: 4 }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setSubmitted(false); }}
              placeholder="Min 8 characters"
              style={{
                width: "100%",
                padding: "10px 12px",
                borderRadius: 8,
                border: `1px solid ${
                  strategy === "inline" && password.length > 0
                    ? passwordValid
                      ? "rgba(92,240,208,0.5)"
                      : "rgba(252,92,92,0.5)"
                    : "var(--border-subtle)"
                }`,
                background: "var(--bg-glass)",
                color: "var(--text-primary)",
                fontSize: "0.88rem",
                fontFamily: "var(--font-sans)",
                outline: "none",
                transition: "border-color 0.2s",
              }}
            />
            {strategy === "inline" && password.length > 0 && !passwordValid && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ fontSize: "0.75rem", color: "#fc5c5c", marginTop: 4 }}
              >
                {8 - password.length} more characters needed
              </motion.div>
            )}
            {strategy === "inline" && passwordValid && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ fontSize: "0.75rem", color: "#5cf0d0", marginTop: 4 }}
              >
                ✓ Strong enough
              </motion.div>
            )}
          </div>

          <button
            onClick={handleSubmit}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: 8,
              background: "var(--accent-primary)",
              color: "white",
              border: "none",
              fontSize: "0.88rem",
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "var(--font-sans)",
            }}
          >
            Submit
          </button>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
        <div className="toggle-group">
          <button className={`toggle-option${strategy === "none" ? " active" : ""}`} onClick={() => { setStrategy("none"); setSubmitted(false); }}>
            No Validation
          </button>
          <button className={`toggle-option${strategy === "inline" ? " active" : ""}`} onClick={() => { setStrategy("inline"); setSubmitted(false); }}>
            Inline
          </button>
          <button className={`toggle-option${strategy === "top" ? " active" : ""}`} onClick={() => { setStrategy("top"); setSubmitted(false); }}>
            Summary (top)
          </button>
        </div>
      </div>
    </DemoPanel>
  );
}

/* ---- NEW: Field Width Matching Demo ---- */
function FieldWidthDemo() {
  const [matched, setMatched] = useState(false);

  return (
    <DemoPanel title="Match Field Width to Input" icon="📐">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>Field width should hint at the expected input length.</strong> A postal code field shouldn&apos;t be as wide as an address field. Width is a visual cue.
      </p>
      <p style={{ fontSize: "0.78rem", color: "var(--text-tertiary)", marginBottom: 24 }}>
        From the book: &quot;Match field width to the anticipated size of input.&quot;
      </p>
      <div style={{ display: "flex", justifyContent: "center", padding: "16px 0" }}>
        <div style={{ maxWidth: 400, width: "100%", background: "var(--bg-tertiary)", border: "1px solid var(--border-subtle)", borderRadius: 12, padding: 24 }}>
          {[
            { label: "Street address", full: "100%", matched: "100%" },
            { label: "City", full: "100%", matched: "65%" },
            { label: "State", full: "100%", matched: "35%" },
            { label: "Postal code", full: "100%", matched: "30%" },
            { label: "Phone number", full: "100%", matched: "50%" },
          ].map((field, i) => (
            <div key={i} style={{ marginBottom: 12 }}>
              <div style={{ fontSize: "0.75rem", color: "var(--text-tertiary)", marginBottom: 4 }}>{field.label}</div>
              <div style={{
                height: 36, borderRadius: 8,
                border: "1px solid var(--border-subtle)", background: "var(--bg-glass)",
                width: matched ? field.matched : field.full,
                transition: "width 0.4s ease",
              }} />
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 16 }}>
        <div className="toggle-group">
          <button className={`toggle-option${!matched ? " active" : ""}`} onClick={() => setMatched(false)}>❌ Same Width</button>
          <button className={`toggle-option${matched ? " active" : ""}`} onClick={() => setMatched(true)}>✅ Matched Width</button>
        </div>
      </div>
    </DemoPanel>
  );
}

/* ---- NEW: Optional Field Marking Demo ---- */
function OptionalFieldsDemo() {
  const [markOptional, setMarkOptional] = useState(false);

  return (
    <DemoPanel title="Mark Optional, Not Required" icon="🏷️">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>Mark only optional fields.</strong> If most fields are required, mark the few that are optional instead. It&apos;s cleaner and less noisy than asterisks everywhere.
      </p>
      <p style={{ fontSize: "0.78rem", color: "var(--text-tertiary)", marginBottom: 24 }}>
        &quot;Mark optional fields instead of marking required ones, as most fields in a form are typically required.&quot;
      </p>
      <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
        {/* Mark Required approach */}
        <div style={{ flex: 1, minWidth: 200, maxWidth: 260, background: "var(--bg-tertiary)", borderRadius: 12, padding: 16, border: `1px solid ${!markOptional ? "var(--accent-primary)" : "var(--border-subtle)"}`, opacity: markOptional ? 0.5 : 1, transition: "all 0.3s" }}>
          <div style={{ fontSize: "0.7rem", fontWeight: 600, color: "var(--text-tertiary)", marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.05em" }}>Mark Required Approach</div>
          {[
            { label: "Full name", req: true },
            { label: "Email", req: true },
            { label: "Company", req: false },
            { label: "Phone", req: true },
            { label: "Message", req: true },
          ].map((f, i) => (
            <div key={i} style={{ marginBottom: 8 }}>
              <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)", marginBottom: 3 }}>
                {f.label} {f.req && <span style={{ color: "#fc5c5c" }}>*</span>}
              </div>
              <div style={{ height: 30, borderRadius: 6, border: "1px solid var(--border-subtle)", background: "var(--bg-glass)" }} />
            </div>
          ))}
          <div style={{ fontSize: "0.68rem", color: "#fc5c5c", marginTop: 8 }}>* Required — 4 noisy asterisks</div>
        </div>

        {/* Mark Optional approach */}
        <div style={{ flex: 1, minWidth: 200, maxWidth: 260, background: "var(--bg-tertiary)", borderRadius: 12, padding: 16, border: `1px solid ${markOptional ? "var(--accent-primary)" : "var(--border-subtle)"}`, opacity: !markOptional ? 0.5 : 1, transition: "all 0.3s" }}>
          <div style={{ fontSize: "0.7rem", fontWeight: 600, color: "var(--text-tertiary)", marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.05em" }}>Mark Optional Approach</div>
          {[
            { label: "Full name", opt: false },
            { label: "Email", opt: false },
            { label: "Company", opt: true },
            { label: "Phone", opt: false },
            { label: "Message", opt: false },
          ].map((f, i) => (
            <div key={i} style={{ marginBottom: 8 }}>
              <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)", marginBottom: 3 }}>
                {f.label} {f.opt && <span style={{ color: "var(--text-tertiary)", fontStyle: "italic" }}>(optional)</span>}
              </div>
              <div style={{ height: 30, borderRadius: 6, border: "1px solid var(--border-subtle)", background: "var(--bg-glass)" }} />
            </div>
          ))}
          <div style={{ fontSize: "0.68rem", color: "var(--accent-tertiary)", marginTop: 8 }}>Only 1 optional label — much cleaner ✓</div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 16 }}>
        <div className="toggle-group">
          <button className={`toggle-option${!markOptional ? " active" : ""}`} onClick={() => setMarkOptional(false)}>Required Asterisks</button>
          <button className={`toggle-option${markOptional ? " active" : ""}`} onClick={() => setMarkOptional(true)}>✅ Mark Optional</button>
        </div>
      </div>
    </DemoPanel>
  );
}

const topics = [
  { title: "Single Column Layout", desc: "Stack fields vertically. A clear downward path is faster than zig-zagging between columns." },
  { title: "Labels Above Inputs", desc: "Top-aligned labels are fastest to scan and complete. Never use placeholder text as labels." },
  { title: "Minimise Form Fields", desc: "Every extra field increases abandonment. Remove optional fields or move them to a separate section." },
  { title: "Mark Optional Fields", desc: "Mark only the optional fields. Most fields are required, so marking them all is noisy." },
  { title: "Match Width to Input", desc: "A postal code field shouldn't be as wide as an address field. Width is a visual cue." },
  { title: "Conventional Input Styles", desc: "Use familiar bordered rectangle inputs. Creative input styles confuse users." },
  { title: "Hints Above Fields", desc: "Display formatting hints above the input field, not below. Users need to see them before typing." },
  { title: "No Placeholder as Label", desc: "Placeholders disappear on focus. Always use visible labels alongside placeholder examples." },
  { title: "Radio Over Dropdown", desc: "For fewer than ~7 options, radio buttons show all choices at once and reduce clicks." },
  { title: "Inline Validation", desc: "Validate as users type. Immediate contextual feedback is better than a big error list after submission." },
  { title: "Progressive Disclosure", desc: "Only show fields relevant to the current step. Break long forms into logical sections." },
];

export default function FormsPage() {
  return (
    <>
      <Nav />
      <div className="page-wrapper">
        <div className="container">
          <motion.div className="chapter-hero" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link href="/ui" className="back-link">← Back to Home</Link>
            <div className="chapter-hero-number" style={{ color: "#5cf0d0" }}>Chapter 8</div>
            <h1 className="chapter-hero-title">Forms</h1>
            <p className="chapter-hero-desc">
              Design forms that are fast to complete, accessible, and forgiving.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <SingleColumnDemo />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <LabelPlacementDemo />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <RadioVsDropdownDemo />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <ValidationDemo />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <FieldWidthDemo />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <OptionalFieldsDemo />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="section-header" style={{ marginTop: 64 }}>
              <div className="section-label">All Topics</div>
              <h2 className="section-title">Key Principles</h2>
            </div>
            <div className="topic-list">
              {topics.map((t, i) => (
                <div key={i} className="topic-item">
                  <div className="topic-num" style={{ background: "linear-gradient(135deg, #5cf0d0, #5ca8fc)" }}>{i + 1}</div>
                  <div className="topic-info">
                    <h4>{t.title}</h4>
                    <p>{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Chapter Summary */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="section-header" style={{ marginTop: 64 }}>
              <div className="section-label">Chapter Summary</div>
              <h2 className="section-title">Key Takeaways</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
              {[
                { emoji: "⬇️", title: "One Column, Always", text: "Single-column forms have a clear visual path. Multi-column forms cause zig-zagging." },
                { emoji: "🏷️", title: "Labels Above Inputs", text: "Top-aligned labels are fastest. Never use placeholder text as a label — it disappears on focus." },
                { emoji: "✅", title: "Validate Inline", text: "Show feedback next to the field as users type. Don't save all errors for after submission." },
                { emoji: "🔘", title: "Radios Over Dropdowns", text: "For fewer than 7 options, radio buttons show all choices at once. Dropdowns hide and add clicks." },
                { emoji: "📐", title: "Width as a Cue", text: "Match field width to expected input length. It helps users understand what's expected." },
                { emoji: "🏷️", title: "Mark Optional Only", text: "Marking optional fields is cleaner than asterisking every required field." },
              ].map((tip, i) => (
                <div key={i} style={{ padding: 24, background: "var(--bg-glass)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)" }}>
                  <div style={{ fontSize: "1.5rem", marginBottom: 8 }}>{tip.emoji}</div>
                  <h4 style={{ fontSize: "0.95rem", fontWeight: 600, marginBottom: 8 }}>{tip.title}</h4>
                  <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>{tip.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quiz Section */}
          <ChapterQuiz />



          <div style={{ display: "flex", justifyContent: "space-between", padding: "64px 0 48px", borderTop: "1px solid var(--border-subtle)", marginTop: 64 }}>
            <Link href="/ui/buttons" className="btn btn-secondary">← Buttons</Link>
            <Link href="/ui" className="btn btn-primary">Back to Home →</Link>
          </div>
        </div>
      </div>
    </>
  );
}

function ChapterQuiz() {
  const { saveQuizResult, getChapterProgress, markChapterVisited } = useProgress();
  const slug = "forms";
  const cp = getChapterProgress(slug);

  useEffect(() => { markChapterVisited(slug); }, [markChapterVisited]);

  return (
    <motion.div
      className="quiz-section"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="section-header">
        <div className="section-label">Test Your Knowledge</div>
        <h2 className="section-title">Chapter 8 Quiz</h2>
      </div>
      <QuizSection
        title="Forms Quiz"
        questions={quizData[slug]}
        chapterSlug={slug}
        previousBest={cp.bestScore}
        onComplete={(answers, score, total) => saveQuizResult(slug, answers, score, total)}
      />
    </motion.div>
  );
}
