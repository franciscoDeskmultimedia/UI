"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import DemoPanel from "@/components/DemoPanel";
import QuizSection from "@/components/QuizSection";
import { motion } from "framer-motion";
import { useProgress } from "@/lib/progress";
import { quizData } from "@/lib/quizData";

function ButtonWeightsDemo() {
  const [brand, setBrand] = useState("#7c5cfc");

  const colors = ["#7c5cfc", "#0071e3", "#fc5c8c", "#5cf0d0", "#fcb85c", "#fc5c5c"];

  return (
    <DemoPanel title="3 Button Weights" icon="⚖️">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>One page, one primary action.</strong> Use visual weight to signal importance.
        <strong>Primary:</strong> The main thing you want the user to do.
        <strong>Secondary:</strong> Alternative actions (Cancel, Back).
        <strong>Tertiary:</strong> Subtle actions (View details).
      </p>
      <p style={{ fontSize: "0.78rem", color: "var(--text-tertiary)", marginBottom: 12 }}>
        &quot;If you have two primary buttons, you have zero primary buttons. Visual competition confuses the user.&quot;
      </p>
      <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: 24 }}>
        Change the brand colour below. Notice how the hierarchy remains clear regardless of the specific hue because it relies on contrast and fill.
      </p>
      <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
        <span style={{ fontSize: "0.82rem", color: "var(--text-secondary)", alignSelf: "center", marginRight: 8 }}>Brand:</span>
        {colors.map((c) => (
          <div
            key={c}
            className={`color-swatch${brand === c ? " selected" : ""}`}
            style={{ background: c, width: 32, height: 32, borderRadius: 8 }}
            onClick={() => setBrand(c)}
          />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          gap: 20,
          justifyContent: "center",
          flexWrap: "wrap",
          padding: "20px 0",
        }}
      >
        {/* Primary */}
        <div style={{ textAlign: "center" }}>
          <button
            style={{
              background: brand,
              color: "white",
              border: "none",
              padding: "14px 28px",
              borderRadius: 10,
              fontSize: "0.95rem",
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "var(--font-sans)",
              boxShadow: `0 4px 15px ${brand}44`,
              transition: "all 0.2s",
            }}
          >
            Primary
          </button>
          <div style={{ fontSize: "0.7rem", color: "var(--text-tertiary)", marginTop: 8 }}>
            Most important
          </div>
        </div>

        {/* Secondary */}
        <div style={{ textAlign: "center" }}>
          <button
            style={{
              background: "transparent",
              color: brand,
              border: `2px solid ${brand}`,
              padding: "12px 26px",
              borderRadius: 10,
              fontSize: "0.95rem",
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "var(--font-sans)",
              transition: "all 0.2s",
            }}
          >
            Secondary
          </button>
          <div style={{ fontSize: "0.7rem", color: "var(--text-tertiary)", marginTop: 8 }}>
            Less important
          </div>
        </div>

        {/* Tertiary */}
        <div style={{ textAlign: "center" }}>
          <button
            style={{
              background: "transparent",
              color: brand,
              border: "none",
              padding: "14px 28px",
              borderRadius: 10,
              fontSize: "0.95rem",
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "var(--font-sans)",
              textDecoration: "underline",
              transition: "all 0.2s",
            }}
          >
            Tertiary
          </button>
          <div style={{ fontSize: "0.7rem", color: "var(--text-tertiary)", marginTop: 8 }}>
            Least important
          </div>
        </div>
      </div>
    </DemoPanel>
  );
}

function TargetSizeDemo() {
  const [size, setSize] = useState(44);

  return (
    <DemoPanel title="Target Size" icon="🎯">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>Fitts&apos;s Law:</strong> The time to acquire a target is a function of the distance to and size of the target. Bigger targets are faster to hit.
      </p>
      <p style={{ fontSize: "0.78rem", color: "var(--text-tertiary)", marginBottom: 12 }}>
        &quot;Make touch targets at least 44x44 points (iOS) or 48x48dp (Android). Fingers are imprecise pointers compared to mouse cursors.&quot;
      </p>
      <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: 24 }}>
        Drag the slider. Notice how much easier it is to tap the &quot;Save&quot; button when it has generous padding and height.
      </p>
      <div className="slider-container" style={{ maxWidth: 400, marginBottom: 24 }}>
        <div className="slider-label">
          <span>Target Size</span>
          <span>{size}×{size}px</span>
        </div>
        <input type="range" min={24} max={64} value={size} onChange={(e) => setSize(+e.target.value)} />
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
        {["Save", "Edit", "Delete"].map((label) => (
          <motion.button
            key={label}
            animate={{ minHeight: size, minWidth: size, padding: `0 ${Math.max(16, size / 2)}px` }}
            transition={{ duration: 0.2 }}
            style={{
              background: "var(--accent-primary)",
              color: "white",
              border: "none",
              borderRadius: 10,
              fontSize: "0.88rem",
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "var(--font-sans)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {label}
          </motion.button>
        ))}
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: 16,
          fontSize: "0.82rem",
          color: size >= 44 ? "#5cf0d0" : "#fc5c5c",
        }}
      >
        {size >= 44 ? "✓ Meets minimum touch target (44px)" : `✗ Too small (need ${44 - size}px more)`}
      </div>
    </DemoPanel>
  );
}

function DisabledButtonDemo() {
  const [showDisabled, setShowDisabled] = useState(true);

  return (
    <DemoPanel title="Avoiding Disabled Buttons" icon="🚫">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>Disabled buttons are dead ends.</strong> They tell the user &quot;you can&apos;t do this&quot; but don&apos;t explain <em>why</em>. They are often hard to read due to low contrast.
      </p>
      <p style={{ fontSize: "0.78rem", color: "var(--text-tertiary)", marginBottom: 12 }}>
        &quot;Instead of disabling the button, leave it enabled. When clicked, show a helpful error message explaining what is missing.&quot;
      </p>
      <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: 24 }}>
        Compare the experiences. The <strong>Disabled Button</strong> leaves you guessing. The <strong>Better Alternative</strong> guides you to a solution.
      </p>
      <div className="before-after">
        <div className="before-panel" style={{ opacity: showDisabled ? 1 : 0.4 }}>
          <div className="panel-label">✗ Disabled Button</div>
          <div style={{ background: "var(--bg-tertiary)", borderRadius: 12, padding: 20 }}>
            <div style={{ marginBottom: 12 }}>
              <label style={{ fontSize: "0.78rem", color: "var(--text-secondary)", display: "block", marginBottom: 4 }}>Email</label>
              <input
                type="text"
                placeholder="Enter email..."
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
            <button
              disabled
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: 8,
                background: "var(--text-tertiary)",
                color: "rgba(255,255,255,0.3)",
                border: "none",
                fontSize: "0.88rem",
                fontWeight: 600,
                cursor: "not-allowed",
                opacity: 0.5,
                fontFamily: "var(--font-sans)",
              }}
            >
              Submit
            </button>
            <div style={{ fontSize: "0.72rem", color: "var(--text-tertiary)", marginTop: 8, textAlign: "center" }}>
              Why is this disabled? 🤔
            </div>
          </div>
        </div>

        <div className="after-panel" style={{ opacity: !showDisabled ? 1 : 0.4 }}>
          <div className="panel-label">✓ Enabled + Validation</div>
          <div style={{ background: "var(--bg-tertiary)", borderRadius: 12, padding: 20 }}>
            <div style={{ marginBottom: 12 }}>
              <label style={{ fontSize: "0.78rem", color: "var(--text-secondary)", display: "block", marginBottom: 4 }}>Email</label>
              <input
                type="text"
                placeholder="Enter email..."
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: 8,
                  border: "1px solid rgba(252,92,92,0.5)",
                  background: "var(--bg-glass)",
                  color: "var(--text-primary)",
                  fontSize: "0.88rem",
                  fontFamily: "var(--font-sans)",
                  outline: "none",
                }}
              />
              <div style={{ fontSize: "0.75rem", color: "#fc5c5c", marginTop: 4 }}>
                Please enter a valid email address
              </div>
            </div>
            <button
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
            <div style={{ fontSize: "0.72rem", color: "var(--accent-tertiary)", marginTop: 8, textAlign: "center" }}>
              Clear feedback on what to fix ✓
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
        <div className="toggle-group">
          <button className={`toggle-option${showDisabled ? " active" : ""}`} onClick={() => setShowDisabled(true)}>
            Disabled Button
          </button>
          <button className={`toggle-option${!showDisabled ? " active" : ""}`} onClick={() => setShowDisabled(false)}>
            Better Alternative
          </button>
        </div>
      </div>
    </DemoPanel>
  );
}

function DestructiveActionDemo() {
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <DemoPanel title="Destructive Actions" icon="💥">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>Add friction to irreversible actions.</strong> Deleting data should never be as easy as creating it. Use color (red) and confirmation dialogs to prevent accidents.
      </p>
      <p style={{ fontSize: "0.78rem", color: "var(--text-tertiary)", marginBottom: 12 }}>
        &quot;Good design speeds users up. Great design slows them down when it matters.&quot;
      </p>
      <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: 24 }}>
        Try to delete the item. The &quot;Delete&quot; button uses a destructive colour pattern, and the confirmation step ensures intent.
      </p>
      <div style={{ display: "flex", justifyContent: "center", padding: "20px 0" }}>
        <div style={{ position: "relative", maxWidth: 400, width: "100%" }}>
          <div
            style={{
              background: "var(--bg-tertiary)",
              borderRadius: 12,
              padding: 20,
              opacity: showConfirm ? 0.3 : 1,
              transition: "opacity 0.3s",
            }}
          >
            <div style={{ fontWeight: 600, marginBottom: 12 }}>My Project</div>
            <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: 16 }}>
              Last edited 2 hours ago • 24 files
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <button
                style={{
                  padding: "8px 16px", borderRadius: 8,
                  background: "var(--accent-primary)", color: "white",
                  border: "none", fontSize: "0.82rem", fontWeight: 600,
                  cursor: "pointer", fontFamily: "var(--font-sans)",
                }}
              >
                Edit
              </button>
              <button
                onClick={() => setShowConfirm(true)}
                style={{
                  padding: "8px 16px", borderRadius: 8,
                  background: "rgba(252,92,92,0.1)", color: "#fc5c5c",
                  border: "1px solid rgba(252,92,92,0.3)", fontSize: "0.82rem",
                  fontWeight: 600, cursor: "pointer", fontFamily: "var(--font-sans)",
                }}
              >
                Delete
              </button>
            </div>
          </div>

          {showConfirm && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  background: "var(--bg-secondary)",
                  border: "1px solid rgba(252,92,92,0.3)",
                  borderRadius: 16,
                  padding: 24,
                  maxWidth: 320,
                  textAlign: "center",
                  boxShadow: "var(--shadow-lg)",
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: 8 }}>🗑️</div>
                <div style={{ fontWeight: 700, marginBottom: 8 }}>Delete project?</div>
                <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: 20, lineHeight: 1.5 }}>
                  This will permanently delete all 24 files. This action cannot be undone.
                </div>
                <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
                  <button
                    onClick={() => setShowConfirm(false)}
                    style={{
                      padding: "10px 20px", borderRadius: 8,
                      background: "var(--bg-glass)", color: "var(--text-secondary)",
                      border: "1px solid var(--border-subtle)", fontSize: "0.82rem",
                      fontWeight: 600, cursor: "pointer", fontFamily: "var(--font-sans)",
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => setShowConfirm(false)}
                    style={{
                      padding: "10px 20px", borderRadius: 8,
                      background: "#fc5c5c", color: "white",
                      border: "none", fontSize: "0.82rem",
                      fontWeight: 600, cursor: "pointer", fontFamily: "var(--font-sans)",
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </DemoPanel>
  );
}

/* ---- NEW: Descriptive Button Labels Demo ---- */
function DescriptiveLabelsDemo() {
  const [descriptive, setDescriptive] = useState(false);

  const scenarios = [
    { generic: "OK", specific: "Save changes", context: "Editing profile" },
    { generic: "Submit", specific: "Send message", context: "Contact form" },
    { generic: "Yes", specific: "Delete project", context: "Confirmation dialog" },
    { generic: "Cancel", specific: "Discard draft", context: "Editor unsaved changes" },
  ];

  return (
    <DemoPanel title="Descriptive Button Labels" icon="🏷️">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>Button text should describe what happens when clicked.</strong> Generic labels like &quot;OK&quot; or &quot;Submit&quot; don&apos;t tell users what they&apos;re agreeing to.
      </p>
      <p style={{ fontSize: "0.78rem", color: "var(--text-tertiary)", marginBottom: 24 }}>
        &quot;Descriptive button text is particularly important for people using screen readers.&quot;
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {scenarios.map((s, i) => (
          <div key={i} style={{ padding: 16, background: "var(--bg-tertiary)", borderRadius: 10, border: "1px solid var(--border-subtle)" }}>
            <div style={{ fontSize: "0.7rem", color: "var(--text-tertiary)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.context}</div>
            <button style={{
              padding: "8px 16px", borderRadius: 8,
              background: descriptive ? "var(--accent-primary)" : "var(--bg-glass)",
              color: descriptive ? "#fff" : "var(--text-secondary)",
              border: descriptive ? "none" : "1px solid var(--border-subtle)",
              fontSize: "0.82rem", fontWeight: 600, cursor: "pointer", fontFamily: "var(--font-sans)",
              transition: "all 0.3s",
            }}>
              {descriptive ? s.specific : s.generic}
            </button>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 16 }}>
        <div className="toggle-group">
          <button className={`toggle-option${!descriptive ? " active" : ""}`} onClick={() => setDescriptive(false)}>❌ Generic Labels</button>
          <button className={`toggle-option${descriptive ? " active" : ""}`} onClick={() => setDescriptive(true)}>✅ Descriptive Labels</button>
        </div>
      </div>
    </DemoPanel>
  );
}

/* ---- NEW: Button Placement Demo ---- */
function ButtonPlacementDemo() {
  const [alignment, setAlignment] = useState<"left" | "right">("right");

  return (
    <DemoPanel title="Button Placement" icon="📍">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>Left-align actions below forms and content.</strong> This follows the natural reading flow. Right-aligned buttons can feel disconnected from the content above.
      </p>
      <p style={{ fontSize: "0.78rem", color: "var(--text-tertiary)", marginBottom: 24 }}>
        From the book: &quot;Place buttons below the form in a location where users would expect them.&quot;
      </p>
      <div style={{ display: "flex", justifyContent: "center", padding: "16px 0" }}>
        <div style={{ maxWidth: 360, width: "100%", background: "var(--bg-tertiary)", border: "1px solid var(--border-subtle)", borderRadius: 12, padding: 24 }}>
          <div style={{ fontSize: "0.92rem", fontWeight: 700, marginBottom: 16 }}>Edit Profile</div>
          {["Full name", "Email address", "Bio"].map((f, i) => (
            <div key={i} style={{ marginBottom: 12 }}>
              <div style={{ fontSize: "0.75rem", color: "var(--text-tertiary)", marginBottom: 4 }}>{f}</div>
              <div style={{ height: 36, borderRadius: 8, border: "1px solid var(--border-subtle)", background: "var(--bg-glass)" }} />
            </div>
          ))}
          <div style={{ display: "flex", gap: 8, justifyContent: alignment === "right" ? "flex-end" : "flex-start", marginTop: 16, transition: "justify-content 0.3s" }}>
            <button style={{ padding: "10px 20px", borderRadius: 8, background: "var(--accent-primary)", color: "#fff", border: "none", fontWeight: 600, fontSize: "0.82rem", cursor: "pointer", fontFamily: "var(--font-sans)" }}>Save profile</button>
            <button style={{ padding: "10px 20px", borderRadius: 8, background: "transparent", color: "var(--text-secondary)", border: "1px solid var(--border-subtle)", fontSize: "0.82rem", cursor: "pointer", fontFamily: "var(--font-sans)" }}>Cancel</button>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 16 }}>
        <div className="toggle-group">
          <button className={`toggle-option${alignment === "right" ? " active" : ""}`} onClick={() => setAlignment("right")}>Right Aligned</button>
          <button className={`toggle-option${alignment === "left" ? " active" : ""}`} onClick={() => setAlignment("left")}>✅ Left Aligned</button>
        </div>
      </div>
    </DemoPanel>
  );
}

const topics = [
  { title: "Define 3 Button Weights", desc: "Primary (filled), Secondary (outlined), Tertiary (text link). This hierarchy is universally understood." },
  { title: "Single Primary Per Section", desc: "Only one primary button per section. Multiple primaries dilute attention and confuse users." },
  { title: "Descriptive Button Text", desc: "'Save project' beats 'OK'. Button labels should describe exactly what happens when clicked." },
  { title: "Avoid Disabled Buttons", desc: "Enabled buttons with inline validation are more helpful. Disabled buttons don't explain why." },
  { title: "44px Minimum Target Size", desc: "Touch targets should be at least 44×44px (WCAG 2.5.5). Small buttons cause frustration on mobile." },
  { title: "Left-Align Buttons", desc: "Place buttons below forms following the natural reading flow. Left-aligned feels more connected." },
  { title: "Friction for Destructive Actions", desc: "Use confirmation dialogs with clear consequences. Accidental data loss destroys trust." },
  { title: "Balance Icon & Text", desc: "When combining icons with text, ensure they're visually balanced in size and have proper spacing." },
  { title: "Loading States", desc: "Show a spinner or loading indicator when a button action takes time. Prevents double-clicks." },
  { title: "Consistent Button Styles", desc: "Same weight = same appearance across the entire product. Don't mix different styles for the same function." },
];

export default function ButtonsPage() {
  return (
    <>
      <Nav />
      <div className="page-wrapper">
        <div className="container">
          <motion.div className="chapter-hero" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link href="/ui" className="back-link">← Back to Home</Link>
            <div className="chapter-hero-number" style={{ color: "#9b82ff" }}>Chapter 7</div>
            <h1 className="chapter-hero-title">Buttons</h1>
            <p className="chapter-hero-desc">
              Design descriptive, accessible buttons with clear visual hierarchy.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <ButtonWeightsDemo />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <TargetSizeDemo />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <DescriptiveLabelsDemo />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <DisabledButtonDemo />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <DestructiveActionDemo />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <ButtonPlacementDemo />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="section-header" style={{ marginTop: 64 }}>
              <div className="section-label">All Topics</div>
              <h2 className="section-title">Key Principles</h2>
            </div>
            <div className="topic-list">
              {topics.map((t, i) => (
                <div key={i} className="topic-item">
                  <div className="topic-num" style={{ background: "linear-gradient(135deg, #9b82ff, #7c5cfc)" }}>{i + 1}</div>
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
                { emoji: "⚖️", title: "Visual Weight System", text: "Primary = filled, Secondary = outlined, Tertiary = text-only. One primary per section." },
                { emoji: "🏷️", title: "Be Specific", text: "'Save changes' beats 'OK'. Descriptive labels improve accessibility and confidence." },
                { emoji: "👆", title: "44px Minimum", text: "Touch targets must be at least 44×44px. Small buttons cause frustration and misclicks." },
                { emoji: "🚫", title: "Skip Disabled States", text: "Enabled buttons with validation feedback are more helpful than mysterious disabled buttons." },
                { emoji: "🛡️", title: "Protect Destructive Actions", text: "Always add friction before irreversible actions. Confirmation dialogs prevent data loss." },
                { emoji: "📍", title: "Logical Placement", text: "Left-align buttons below forms. Place them where users naturally expect them." },
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
            <Link href="/ui/copywriting" className="btn btn-secondary">← Copywriting</Link>
            <Link href="/ui/forms" className="btn btn-primary">Next: Forms →</Link>
          </div>
        </div>
      </div>
    </>
  );
}

function ChapterQuiz() {
  const { saveQuizResult, getChapterProgress, markChapterVisited } = useProgress();
  const slug = "buttons";
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
        <h2 className="section-title">Chapter 7 Quiz</h2>
      </div>
      <QuizSection
        title="Buttons Quiz"
        questions={quizData[slug]}
        chapterSlug={slug}
        previousBest={cp.bestScore}
        onComplete={(answers, score, total) => saveQuizResult(slug, answers, score, total)}
      />
    </motion.div>
  );
}
