"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import DemoPanel from "@/components/DemoPanel";
import QuizSection from "@/components/QuizSection";
import { motion } from "framer-motion";
import { useProgress } from "@/lib/progress";
import { quizData } from "@/lib/quizData";

/* ============================================
   CHAPTER 1 — FUNDAMENTALS
   Interactive demos for core UI principles
   ============================================ */

function DesignSystemDemo() {
  const [spacing, setSpacing] = useState(16);
  const [radius, setRadius] = useState(8);
  const [brand, setBrand] = useState("#7c5cfc");

  const colors = ["#7c5cfc", "#fc5c8c", "#5cf0d0", "#5ca8fc", "#fcb85c", "#fc5c5c"];

  return (
    <DemoPanel title="Design System Tokens" icon="🎯">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>A &quot;token&quot; is a named value</strong> — like <code style={{ background: "var(--bg-glass)", padding: "2px 6px", borderRadius: 4, fontSize: "0.82rem" }}>spacing-md: 16px</code> or <code style={{ background: "var(--bg-glass)", padding: "2px 6px", borderRadius: 4, fontSize: "0.82rem" }}>brand-primary: #7c5cfc</code> — that replaces hard-coded values throughout your interface. Instead of writing <code style={{ background: "var(--bg-glass)", padding: "2px 6px", borderRadius: 4, fontSize: "0.82rem" }}>padding: 16px</code> in 200 places, you reference the token. Change the token once, and every component updates.
      </p>
      <p style={{ fontSize: "0.78rem", color: "var(--text-tertiary)", marginBottom: 12 }}>
        &quot;A design system is a collection of reusable modules, accompanied by clear guidelines on how to use them, that can be assembled together to build any number of applications.&quot;
      </p>
      <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: 24 }}>
        Try changing the values below. Notice how <strong>every element updates simultaneously</strong> — this is the power of tokens. In production, these would be CSS custom properties or design tool variables.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        <div>
          <div className="slider-container" style={{ marginBottom: 20 }}>
            <div className="slider-label">
              <span>Spacing</span>
              <span>{spacing}px</span>
            </div>
            <input
              type="range"
              min={4}
              max={48}
              value={spacing}
              onChange={(e) => setSpacing(+e.target.value)}
            />
          </div>
          <div className="slider-container" style={{ marginBottom: 20 }}>
            <div className="slider-label">
              <span>Border Radius</span>
              <span>{radius}px</span>
            </div>
            <input
              type="range"
              min={0}
              max={32}
              value={radius}
              onChange={(e) => setRadius(+e.target.value)}
            />
          </div>
          <div style={{ marginBottom: 8 }}>
            <span style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>Brand Colour</span>
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {colors.map((c) => (
              <div
                key={c}
                className={`color-swatch${brand === c ? " selected" : ""}`}
                style={{ background: c, width: 36, height: 36 }}
                onClick={() => setBrand(c)}
              />
            ))}
          </div>
        </div>
        <div>
          {/* Preview card */}
          <div
            style={{
              background: "var(--bg-tertiary)",
              border: "1px solid var(--border-subtle)",
              borderRadius: radius,
              padding: spacing,
              display: "flex",
              flexDirection: "column",
              gap: spacing,
            }}
          >
            <div
              style={{
                width: "100%",
                height: 40,
                background: `linear-gradient(135deg, ${brand}, ${brand}88)`,
                borderRadius: radius,
              }}
            />
            <div style={{ display: "flex", gap: spacing }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  minWidth: 40,
                  borderRadius: radius,
                  background: `${brand}30`,
                }}
              />
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    height: 10,
                    background: "var(--bg-glass-hover)",
                    borderRadius: radius / 2,
                    marginBottom: spacing / 2,
                    width: "80%",
                  }}
                />
                <div
                  style={{
                    height: 10,
                    background: "var(--bg-glass)",
                    borderRadius: radius / 2,
                    width: "60%",
                  }}
                />
              </div>
            </div>
            <button
              style={{
                background: brand,
                color: "white",
                border: "none",
                padding: `${spacing / 2}px ${spacing}px`,
                borderRadius: radius,
                fontSize: "0.82rem",
                fontWeight: 600,
                cursor: "pointer",
                alignSelf: "flex-start",
              }}
            >
              Primary Action
            </button>
          </div>
        </div>
      </div>
    </DemoPanel>
  );
}

type InteractionState = "default" | "hover" | "active" | "focus" | "disabled";

function InteractionStatesDemo() {
  const [state, setState] = useState<InteractionState>("default");

  const stateStyles: Record<InteractionState, React.CSSProperties> = {
    default: {
      background: "var(--accent-primary)",
      transform: "scale(1)",
      boxShadow: "0 2px 8px rgba(124, 92, 252, 0.3)",
      opacity: 1,
    },
    hover: {
      background: "var(--accent-primary-light)",
      transform: "scale(1.02)",
      boxShadow: "0 4px 20px rgba(124, 92, 252, 0.4)",
      opacity: 1,
    },
    active: {
      background: "var(--accent-primary-dark)",
      transform: "scale(0.98)",
      boxShadow: "0 1px 4px rgba(124, 92, 252, 0.3)",
      opacity: 1,
    },
    focus: {
      background: "var(--accent-primary)",
      transform: "scale(1)",
      boxShadow: "0 0 0 3px rgba(124, 92, 252, 0.4)",
      opacity: 1,
    },
    disabled: {
      background: "var(--text-tertiary)",
      transform: "scale(1)",
      boxShadow: "none",
      opacity: 0.5,
    },
  };

  return (
    <DemoPanel
      title="Interaction States"
      icon="👆"
      controls={
        <>
          {(["default", "hover", "active", "focus", "disabled"] as const).map((s) => (
            <button
              key={s}
              className={`demo-btn${state === s ? " active" : ""}`}
              onClick={() => setState(s)}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </>
      }
    >
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>Every interactive element needs 5 distinct visual states.</strong> Without them, users can&apos;t tell if a button is clickable, already clicked, or unavailable. This is critical for both usability and accessibility.
      </p>
      <p style={{ fontSize: "0.78rem", color: "var(--text-tertiary)", marginBottom: 12 }}>
        &quot;Not having interactive states for elements is one of the most common mistakes designers make. At a minimum, every interactive element such as a button should have a default, hover, active/press, focus, and disabled state.&quot;
      </p>
      <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: 24 }}>
        Click each state below to see how the button&apos;s appearance changes. Pay attention to the <strong>scale</strong>, <strong>shadow</strong>, and <strong>colour</strong> differences — these are the visual cues users rely on.
      </p>
      <div style={{ display: "flex", justifyContent: "center", padding: "32px 0" }}>
        <button
          style={{
            ...stateStyles[state],
            color: "white",
            border: "none",
            padding: "14px 36px",
            borderRadius: 12,
            fontSize: "1rem",
            fontWeight: 600,
            cursor: state === "disabled" ? "not-allowed" : "pointer",
            fontFamily: "var(--font-sans)",
            transition: "all 0.3s ease",
          }}
        >
          {state === "disabled" ? "Unavailable" : "Click Me"}
        </button>
      </div>
      <div
        style={{
          padding: 16,
          background: "var(--bg-glass)",
          borderRadius: 8,
          fontSize: "0.82rem",
          color: "var(--text-secondary)",
          lineHeight: 1.6,
        }}
      >
        <strong style={{ color: "var(--text-primary)" }}>
          State: {state.charAt(0).toUpperCase() + state.slice(1)}
        </strong>
        <br />
        {state === "default" && "The resting appearance of the element when no interaction is occurring."}
        {state === "hover" && "Visual feedback when the cursor moves over the element. Subtle scaling and glow invite interaction."}
        {state === "active" && "The pressed/click state. Slight inward scaling gives tactile feedback."}
        {state === "focus" && "Indicates keyboard focus for accessibility. The ring makes it clear which element is selected."}
        {state === "disabled" && "Reduced opacity and de-emphasized color signal that this action is unavailable. Cursor changes to not-allowed."}
      </div>
    </DemoPanel>
  );
}

function AccessibilityDemo() {
  const [contrastMode, setContrastMode] = useState<"poor" | "good">("poor");

  return (
    <DemoPanel title="Accessibility — Contrast" icon="♿">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>WCAG (Web Content Accessibility Guidelines)</strong> defines 3 conformance levels: <strong>A</strong> (minimum), <strong>AA</strong> (recommended — the legal standard in most countries), and <strong>AAA</strong> (enhanced). For text contrast, AA requires at least <strong>4.5:1</strong> for normal text and <strong>3:1</strong> for large text (18px+ bold or 24px+ regular).
      </p>
      <p style={{ fontSize: "0.78rem", color: "var(--text-tertiary)", marginBottom: 12 }}>
        &quot;Good accessibility is great usability. Accessibility doesn&apos;t only benefit people with permanent disabilities — it also helps temporary and situational disabilities.&quot;
      </p>
      <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: 24 }}>
        A person using their phone in bright sunlight, someone with a broken arm, or an elderly person with reduced vision — all benefit from high contrast. Toggle below to experience the difference firsthand.
      </p>
      <div className="before-after">
        <div className="before-panel" style={{ opacity: contrastMode === "poor" ? 1 : 0.5, transition: "opacity 0.3s" }}>
          <div className="panel-label">✗ Poor Contrast</div>
          <div
            style={{
              background: "#2a2a3a",
              padding: 20,
              borderRadius: 8,
              color: "#4a4a5a",
              fontSize: "0.95rem",
              lineHeight: 1.6,
            }}
          >
            This text is barely readable because the contrast ratio is only about 1.5:1. Users with visual impairments would struggle.
          </div>
          <div style={{ marginTop: 12, fontSize: "0.75rem", color: "#fc5c5c" }}>
            Ratio: ~1.5:1 — Fails WCAG AA
          </div>
        </div>
        <div className="after-panel" style={{ opacity: contrastMode === "good" ? 1 : 0.5, transition: "opacity 0.3s" }}>
          <div className="panel-label">✓ Good Contrast</div>
          <div
            style={{
              background: "#2a2a3a",
              padding: 20,
              borderRadius: 8,
              color: "#e0e0f0",
              fontSize: "0.95rem",
              lineHeight: 1.6,
            }}
          >
            This text is easily readable with a high contrast ratio. All users can comfortably read the content.
          </div>
          <div style={{ marginTop: 12, fontSize: "0.75rem", color: "var(--accent-tertiary)" }}>
            Ratio: ~10:1 — Passes WCAG AAA
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
        <div className="toggle-group">
          <button
            className={`toggle-option${contrastMode === "poor" ? " active" : ""}`}
            onClick={() => setContrastMode("poor")}
          >
            Poor Contrast
          </button>
          <button
            className={`toggle-option${contrastMode === "good" ? " active" : ""}`}
            onClick={() => setContrastMode("good")}
          >
            Good Contrast
          </button>
        </div>
      </div>
    </DemoPanel>
  );
}

function ConsistencyDemo() {
  const [consistent, setConsistent] = useState(false);

  return (
    <DemoPanel title="Consistency" icon="🔗">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>There are two types of consistency.</strong> <em>Internal consistency</em> means similar elements within your product look and behave the same way. <em>External consistency</em> means your product follows conventions established by other products your users already know (Jakob&apos;s Law).
      </p>
      <p style={{ fontSize: "0.78rem", color: "var(--text-tertiary)", marginBottom: 12 }}>
        &quot;There is no good reason for buttons in one part of a product to look different from buttons in another part. Consistency reduces cognitive load and speeds up learning.&quot;
      </p>
      <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: 24 }}>
        Toggle below to see the same three action buttons with inconsistent vs consistent styling. Notice how the inconsistent version forces you to re-learn each button individually, while the consistent version lets you <strong>instantly recognise all three as the same type of element</strong>.
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
            padding: 24,
            background: "var(--bg-tertiary)",
            borderRadius: 12,
            maxWidth: 500,
            width: "100%",
          }}
        >
          {[
            { label: "Save", icon: "💾" },
            { label: "Delete", icon: "🗑️" },
            { label: "Share", icon: "📤" },
          ].map((btn, i) => (
            <button
              key={btn.label}
              style={{
                padding: consistent ? "12px 20px" : i === 0 ? "8px 12px" : i === 1 ? "16px 32px" : "10px 20px",
                borderRadius: consistent ? 10 : i === 0 ? 0 : i === 1 ? 20 : 4,
                background: consistent
                  ? "var(--accent-primary)"
                  : i === 0
                  ? "#fc5c5c"
                  : i === 1
                  ? "#5cf0d0"
                  : "#fcb85c",
                color: consistent ? "white" : i === 1 ? "black" : "white",
                border: "none",
                fontSize: consistent ? "0.88rem" : i === 0 ? "0.7rem" : i === 1 ? "1.1rem" : "0.88rem",
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "var(--font-sans)",
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
              }}
            >
              {btn.icon} {btn.label}
            </button>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
        <div className="toggle-group">
          <button
            className={`toggle-option${!consistent ? " active" : ""}`}
            onClick={() => setConsistent(false)}
          >
            Inconsistent
          </button>
          <button
            className={`toggle-option${consistent ? " active" : ""}`}
            onClick={() => setConsistent(true)}
          >
            Consistent
          </button>
        </div>
      </div>
    </DemoPanel>
  );
}

/* ---- NEW: Interaction Cost Demo ---- */
function InteractionCostDemo() {
  const [mode, setMode] = useState<"high" | "low">("high");
  const [qty, setQty] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <DemoPanel title="Interaction Cost — Fitts's Law" icon="🖱️">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>Interaction cost</strong> is the total physical and mental effort to achieve a task.
        Every click, scroll, and mouse movement adds cost. Compare a dropdown approach vs a stepper.
      </p>
      <p style={{ fontSize: "0.78rem", color: "var(--text-tertiary)", marginBottom: 24 }}>
        From the book: &quot;The total interaction cost is 3 clicks, 1 scroll, and a short mouse movement&quot; vs &quot;just 2 clicks and a very small mouse movement.&quot;
      </p>
      <div style={{ display: "flex", justifyContent: "center", padding: "16px 0" }}>
        <div style={{ maxWidth: 360, width: "100%", background: "var(--bg-tertiary)", border: "1px solid var(--border-subtle)", borderRadius: 12, padding: 20 }}>
          <div style={{ fontSize: "0.95rem", fontWeight: 700, marginBottom: 4 }}>White Mug</div>
          <div style={{ fontSize: "0.78rem", color: "var(--text-tertiary)", lineHeight: 1.5, marginBottom: 16 }}>
            This white porcelain mug is the perfect companion for lazy afternoons.
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
            <span style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>$12 USD</span>
            <span style={{ fontSize: "0.72rem", color: "var(--text-tertiary)" }}>• 5.0 ★ (38 reviews)</span>
          </div>
          {mode === "high" ? (
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ position: "relative" }}>
                <div style={{ fontSize: "0.75rem", color: "var(--text-tertiary)", marginBottom: 4 }}>Quantity</div>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  style={{ padding: "8px 32px 8px 12px", border: "1px solid var(--border-subtle)", borderRadius: 8, background: "var(--bg-secondary)", color: "var(--text-primary)", fontSize: "0.82rem", cursor: "pointer", fontFamily: "var(--font-sans)", position: "relative" }}
                >
                  {qty} <span style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", fontSize: "0.6rem" }}>▼</span>
                </button>
                {dropdownOpen && (
                  <div style={{ position: "absolute", top: "100%", left: 0, background: "var(--bg-secondary)", border: "1px solid var(--border-subtle)", borderRadius: 8, padding: 4, zIndex: 10, marginTop: 4, minWidth: 80 }}>
                    {[1, 2, 3, 4, 5].map(n => (
                      <div key={n} onClick={() => { setQty(n); setDropdownOpen(false); }} style={{ padding: "6px 12px", fontSize: "0.78rem", cursor: "pointer", borderRadius: 4, color: "var(--text-secondary)" }}>{n}</div>
                    ))}
                  </div>
                )}
              </div>
              <button style={{ marginLeft: "auto", padding: "10px 20px", borderRadius: 8, background: "var(--accent-primary)", color: "#fff", border: "none", fontWeight: 600, fontSize: "0.82rem", cursor: "pointer", fontFamily: "var(--font-sans)" }}>Add to cart</button>
            </div>
          ) : (
            <div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-tertiary)", marginBottom: 4 }}>Quantity</div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                <button onClick={() => setQty(Math.max(1, qty - 1))} style={{ width: 32, height: 32, borderRadius: 8, border: "1px solid var(--border-subtle)", background: "var(--bg-secondary)", color: "var(--text-primary)", cursor: "pointer", fontSize: "1rem", display: "flex", alignItems: "center", justifyContent: "center" }}>−</button>
                <span style={{ fontSize: "0.95rem", fontWeight: 600, width: 24, textAlign: "center" }}>{qty}</span>
                <button onClick={() => setQty(qty + 1)} style={{ width: 32, height: 32, borderRadius: 8, border: "1px solid var(--border-subtle)", background: "var(--bg-secondary)", color: "var(--text-primary)", cursor: "pointer", fontSize: "1rem", display: "flex", alignItems: "center", justifyContent: "center" }}>+</button>
              </div>
              <button style={{ width: "100%", padding: "10px 20px", borderRadius: 8, background: "var(--accent-primary)", color: "#fff", border: "none", fontWeight: 600, fontSize: "0.82rem", cursor: "pointer", fontFamily: "var(--font-sans)" }}>Add to cart</button>
            </div>
          )}
          <div style={{ marginTop: 12, padding: 10, background: "var(--bg-glass)", borderRadius: 8, fontSize: "0.72rem", color: "var(--text-tertiary)", textAlign: "center" }}>
            {mode === "high"
              ? "Cost: 3 clicks + 1 scroll + long mouse movement"
              : "Cost: 2 clicks + very small mouse movement ✓"}
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 16 }}>
        <div className="toggle-group">
          <button className={`toggle-option${mode === "high" ? " active" : ""}`} onClick={() => { setMode("high"); setDropdownOpen(false); }}>High Cost (Dropdown)</button>
          <button className={`toggle-option${mode === "low" ? " active" : ""}`} onClick={() => setMode("low")}>Low Cost (Stepper) ✓</button>
        </div>
      </div>
    </DemoPanel>
  );
}

/* ---- NEW: Cognitive Load Demo ---- */
function CognitiveLoadDemo() {
  const [view, setView] = useState<"complex" | "simple">("complex");
  const [step, setStep] = useState(1);

  return (
    <DemoPanel title="Minimise Cognitive Load" icon="🧠">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>Cognitive load</strong> is the brain power required to use an interface. Break large, complex tasks into smaller, simpler steps so users aren&apos;t overwhelmed.
      </p>
      <p style={{ fontSize: "0.78rem", color: "var(--text-tertiary)", marginBottom: 24 }}>
        &quot;People can get overwhelmed by large, complex problems. Breaking them into smaller, simpler ones makes them easier to solve.&quot;
      </p>
      <div style={{ display: "flex", justifyContent: "center", padding: "16px 0" }}>
        <div style={{ maxWidth: 400, width: "100%", background: "var(--bg-tertiary)", border: "1px solid var(--border-subtle)", borderRadius: 12, padding: 24 }}>
          {view === "complex" ? (
            <>
              <div style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: 16 }}>Survey — All Questions</div>
              {["How often do you use our app?", "Which features are most useful?", "Would you recommend us?", "What could be improved?"].map((q, i) => (
                <div key={i} style={{ marginBottom: 14 }}>
                  <div style={{ fontSize: "0.78rem", fontWeight: 600, marginBottom: 6 }}>{q} *</div>
                  {i === 0 && ["Daily", "Weekly", "Monthly"].map(o => (
                    <label key={o} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.75rem", color: "var(--text-tertiary)", marginBottom: 4 }}>
                      <input type="radio" name={`q${i}`} style={{ accentColor: "var(--accent-primary)" }} /> {o}
                    </label>
                  ))}
                  {i === 1 && ["Monitoring", "Reports", "Dashboard", "Builder", "Email"].map(o => (
                    <label key={o} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.75rem", color: "var(--text-tertiary)", marginBottom: 4 }}>
                      <input type="checkbox" style={{ accentColor: "var(--accent-primary)" }} /> {o}
                    </label>
                  ))}
                  {i === 2 && ["Yes", "No", "Maybe"].map(o => (
                    <label key={o} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.75rem", color: "var(--text-tertiary)", marginBottom: 4 }}>
                      <input type="radio" name={`q${i}`} style={{ accentColor: "var(--accent-primary)" }} /> {o}
                    </label>
                  ))}
                  {i === 3 && <textarea rows={2} placeholder="Your feedback..." style={{ width: "100%", borderRadius: 8, border: "1px solid var(--border-subtle)", background: "var(--bg-secondary)", color: "var(--text-primary)", padding: 8, fontSize: "0.75rem", fontFamily: "var(--font-sans)", resize: "none" }} />}
                </div>
              ))}
              <button style={{ padding: "8px 16px", borderRadius: 8, background: "var(--accent-primary)", color: "#fff", border: "none", fontWeight: 600, fontSize: "0.78rem", cursor: "pointer", fontFamily: "var(--font-sans)" }}>Submit survey</button>
            </>
          ) : (
            <>
              {/* Step indicator */}
              <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 20 }}>
                {[1, 2, 3, 4].map(s => (
                  <div key={s} style={{ flex: 1, height: 4, borderRadius: 2, background: s <= step ? "var(--accent-primary)" : "var(--bg-glass-hover)" }} />
                ))}
              </div>
              <div style={{ fontSize: "0.72rem", color: "var(--text-tertiary)", marginBottom: 12 }}>Step {step} of 4</div>
              {step === 1 && (
                <>
                  <div style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: 12 }}>How often do you use our app?</div>
                  {["Daily", "Weekly", "Monthly"].map(o => (
                    <label key={o} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: 10, padding: "10px 14px", background: "var(--bg-glass)", borderRadius: 8, cursor: "pointer" }}>
                      <input type="radio" name="step1" style={{ accentColor: "var(--accent-primary)" }} /> {o}
                    </label>
                  ))}
                </>
              )}
              {step === 2 && (
                <>
                  <div style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: 12 }}>Which features are useful?</div>
                  {["Monitoring", "Reports", "Dashboard"].map(o => (
                    <label key={o} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: 10, padding: "10px 14px", background: "var(--bg-glass)", borderRadius: 8, cursor: "pointer" }}>
                      <input type="checkbox" style={{ accentColor: "var(--accent-primary)" }} /> {o}
                    </label>
                  ))}
                </>
              )}
              {step === 3 && (
                <>
                  <div style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: 12 }}>Would you recommend us?</div>
                  {["Yes", "No", "Maybe"].map(o => (
                    <label key={o} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: 10, padding: "10px 14px", background: "var(--bg-glass)", borderRadius: 8, cursor: "pointer" }}>
                      <input type="radio" name="step3" style={{ accentColor: "var(--accent-primary)" }} /> {o}
                    </label>
                  ))}
                </>
              )}
              {step === 4 && (
                <>
                  <div style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: 12 }}>What could be improved?</div>
                  <textarea rows={3} placeholder="Your feedback..." style={{ width: "100%", borderRadius: 8, border: "1px solid var(--border-subtle)", background: "var(--bg-secondary)", color: "var(--text-primary)", padding: 12, fontSize: "0.82rem", fontFamily: "var(--font-sans)", resize: "none" }} />
                </>
              )}
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 16 }}>
                <button onClick={() => setStep(Math.max(1, step - 1))} style={{ padding: "8px 16px", borderRadius: 8, border: "1px solid var(--border-subtle)", background: "transparent", color: "var(--text-secondary)", fontSize: "0.78rem", cursor: "pointer", fontFamily: "var(--font-sans)", opacity: step === 1 ? 0.3 : 1 }}>Back</button>
                <button onClick={() => setStep(Math.min(4, step + 1))} style={{ padding: "8px 16px", borderRadius: 8, background: "var(--accent-primary)", color: "#fff", border: "none", fontWeight: 600, fontSize: "0.78rem", cursor: "pointer", fontFamily: "var(--font-sans)" }}>{step === 4 ? "Submit" : "Continue"}</button>
              </div>
            </>
          )}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 16 }}>
        <div className="toggle-group">
          <button className={`toggle-option${view === "complex" ? " active" : ""}`} onClick={() => setView("complex")}>❌ All at Once</button>
          <button className={`toggle-option${view === "simple" ? " active" : ""}`} onClick={() => { setView("simple"); setStep(1); }}>✅ Step by Step</button>
        </div>
      </div>
    </DemoPanel>
  );
}

const topics = [
  { title: "Minimise Usability Risks", desc: "Consider people with poor eyesight, low computer literacy, reduced dexterity and cognitive ability. Meet WCAG 2.1 level AA." },
  { title: "Have a Logical Reason", desc: "Every design detail should have a purpose. 'That looks nice' is not logical feedback. Articulate the rationale behind each decision." },
  { title: "Minimise Interaction Cost", desc: "Keep related actions close (Fitts's Law), reduce distractions, and minimise choices. Every click, scroll, and keystroke adds cost." },
  { title: "Minimise Cognitive Load", desc: "Break information into groups, use familiar patterns, maintain consistency, and create a clear visual hierarchy." },
  { title: "Create a Design System", desc: "Define predefined tokens for colour, typography, spacing, shadows, and border-radius. Create reusable modules and usage guidelines." },
  { title: "Ensure Accessibility", desc: "Good accessibility = great usability. It benefits everyone, including those with temporary and situational disabilities." },
  { title: "Assistive Technology", desc: "Screen readers and screen magnifiers are the most common assistive technologies. Design with them in mind." },
  { title: "Use Common Patterns", desc: "Jakob's Law: people expect your product to work like others they know. Use familiar accordion, form, and nav patterns." },
  { title: "Use the 80/20 Rule", desc: "~80% of users use 20% of features. Optimise for the most common tasks, not edge cases." },
  { title: "Keep Costs in Mind", desc: "Use existing design systems, outsource illustrations, stick with familiar patterns, and talk to developers early." },
  { title: "Be Consistent", desc: "Similar elements should look and work similarly — within your product and compared with other established products." },
  { title: "Indicate Interaction States", desc: "5 states: default, hover, active/press, focus, and disabled. Each must have a clearly different appearance." },
];

export default function FundamentalsPage() {
  return (
    <>
      <Nav />
      <div className="page-wrapper">
        <div className="container">
          <motion.div
            className="chapter-hero"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/ui" className="back-link">
              ← Back to Home
            </Link>
            <div className="chapter-hero-number">Chapter 1</div>
            <h1 className="chapter-hero-title">Fundamentals</h1>
            <p className="chapter-hero-desc">
              The core principles that underpin every great user interface — from
              usability and accessibility to design systems and consistency.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <DesignSystemDemo />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <InteractionStatesDemo />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <AccessibilityDemo />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
          <InteractionCostDemo />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <CognitiveLoadDemo />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ConsistencyDemo />
          </motion.div>

          {/* Key Topics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="section-header" style={{ marginTop: 64 }}>
              <div className="section-label">All Topics</div>
              <h2 className="section-title">Key Principles</h2>
            </div>
            <div className="topic-list">
              {topics.map((t, i) => (
                <div key={i} className="topic-item">
                  <div className="topic-num">{i + 1}</div>
                  <div className="topic-info">
                    <h4>{t.title}</h4>
                    <p>{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Pro Tips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="section-header" style={{ marginTop: 64 }}>
              <div className="section-label">Deep Dive</div>
              <h2 className="section-title">Pro Tips & Insights</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
              {[
                { emoji: "\ud83c\udfaf", title: "The 80/20 Rule", text: "Focus on the 20% of features used by 80% of users. Don't try to please everyone \u2014 prioritise the most common use cases." },
                { emoji: "\ud83e\udde9", title: "Gestalt Principles", text: "Our brains group visual elements by proximity, similarity, and continuity. Use these principles to create clear visual relationships." },
                { emoji: "\u26a1", title: "Feedback Loops", text: "Every action should have a visible reaction. Users need confirmation that their actions registered \u2014 immediately." },
                { emoji: "\ud83d\udd04", title: "Iterative Design", text: "Start simple, test with users, and improve iteratively. The best interfaces are refined over many cycles, not perfected on the first attempt." },
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

          {/* Nav to next */}
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
            <Link href="/ui" className="btn btn-secondary">
              ← Home
            </Link>
            <Link href="/ui/less-is-more" className="btn btn-primary">
              Next: Less Is More →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

function ChapterQuiz() {
  const { saveQuizResult, getChapterProgress, markChapterVisited } = useProgress();
  const slug = "fundamentals";
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
        <h2 className="section-title">Chapter 1 Quiz</h2>
      </div>
      <QuizSection
        title="Fundamentals Quiz"
        questions={quizData[slug]}
        chapterSlug={slug}
        previousBest={cp.bestScore}
        onComplete={(answers, score, total) => saveQuizResult(slug, answers, score, total)}
      />
    </motion.div>
  );
}
