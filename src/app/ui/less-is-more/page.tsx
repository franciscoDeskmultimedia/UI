"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import DemoPanel from "@/components/DemoPanel";
import QuizSection from "@/components/QuizSection";
import { motion, AnimatePresence } from "framer-motion";
import { useProgress } from "@/lib/progress";
import { quizData } from "@/lib/quizData";

function ProgressiveDisclosureDemo() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const items = [
    {
      title: "Basic Plan",
      summary: "$9/mo — For individuals",
      details: "Includes 5GB storage, email support, 1 project, basic analytics, and community access. Perfect for freelancers and hobbyists getting started.",
    },
    {
      title: "Pro Plan",
      summary: "$29/mo — For teams",
      details: "Includes 50GB storage, priority support, unlimited projects, advanced analytics, API access, SSO, and team collaboration tools.",
    },
    {
      title: "Enterprise Plan",
      summary: "Custom — For organizations",
      details: "Includes unlimited storage, dedicated support, custom integrations, SLA guarantees, audit logs, SAML, and a dedicated account manager.",
    },
  ];

  return (
    <DemoPanel title="Progressive Disclosure" icon="📂">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>Progressive Disclosure</strong> is the practice of showing only the essential information first, and letting users reveal more details if they need them. This reduces visible clutter and prevents users from feeling overwhelmed.
      </p>
      <p style={{ fontSize: "0.78rem", color: "var(--text-tertiary)", marginBottom: 12 }}>
        &quot;A complex interface can be made simple by disclosing information progressively. This improved the signal-to-noise ratio of the page.&quot;
      </p>
      <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: 24 }}>
        Click any plan below. Notice how much cleaner the page looks when the details are hidden by default, yet easily accessible.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {items.map((item, i) => (
          <motion.div
            key={i}
            layout
            style={{
              background: "var(--bg-tertiary)",
              border: `1px solid ${expanded === i ? "var(--border-active)" : "var(--border-subtle)"}`,
              borderRadius: 12,
              padding: "16px 20px",
              cursor: "pointer",
              transition: "border-color 0.3s",
            }}
            onClick={() => setExpanded(expanded === i ? null : i)}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontWeight: 600, fontSize: "0.95rem" }}>{item.title}</div>
                <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginTop: 4 }}>
                  {item.summary}
                </div>
              </div>
              <motion.span
                animate={{ rotate: expanded === i ? 180 : 0 }}
                style={{ fontSize: "1.2rem", color: "var(--text-tertiary)" }}
              >
                ▾
              </motion.span>
            </div>
            <AnimatePresence>
              {expanded === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: "hidden" }}
                >
                  <div
                    style={{
                      marginTop: 12,
                      paddingTop: 12,
                      borderTop: "1px solid var(--border-subtle)",
                      fontSize: "0.88rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.details}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </DemoPanel>
  );
}

function RemoveUnnecessaryDemo() {
  const [minimal, setMinimal] = useState(false);

  return (
    <DemoPanel title="Remove Unnecessary Elements" icon="🗑️">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>Every element must earn its place.</strong> If a border, background, or icon doesn&apos;t help the user understand the content, delete it. This improves the <em>signal-to-noise ratio</em>.
      </p>
      <p style={{ fontSize: "0.78rem", color: "var(--text-tertiary)", marginBottom: 12 }}>
        &quot;Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.&quot; — Antoine de Saint-Exupéry
      </p>
      <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: 24 }}>
        Compare the two cards below. The &quot;Clean&quot; version has the exact same information but uses whitespace instead of lines to separate content.
      </p>
      <div className="before-after">
        <div className={minimal ? "after-panel" : "before-panel"} style={{ transition: "all 0.3s" }}>
          <div className="panel-label">
            {minimal ? "✓ Clean" : "✗ Cluttered"}
          </div>
          <div
            style={{
              background: minimal ? "var(--bg-tertiary)" : "var(--bg-secondary)",
              borderRadius: 12,
              padding: 16,
              border: minimal ? "none" : "2px dashed rgba(255,255,255,0.1)",
            }}
          >
            {/* Profile card */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: "var(--accent-primary)",
                  border: minimal ? "none" : "3px solid gold",
                  boxShadow: minimal ? "none" : "0 0 10px rgba(255,215,0,0.5), inset 0 0 5px rgba(0,0,0,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "1rem",
                }}
              >
                J
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: "0.9rem" }}>Jane Doe</div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--text-tertiary)",
                    textDecoration: minimal ? "none" : "underline",
                    fontStyle: minimal ? "normal" : "italic",
                  }}
                >
                  Product Designer
                </div>
              </div>
              {!minimal && (
                <span style={{ marginLeft: "auto", fontSize: "0.65rem", background: "gold", color: "black", padding: "2px 6px", borderRadius: 4, fontWeight: 700 }}>
                  ⭐ PRO
                </span>
              )}
            </div>
            {/* Stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 8,
              }}
            >
              {[
                { label: "Projects", val: "24" },
                { label: "Following", val: "1.2k" },
                { label: "Rating", val: "4.9" },
              ].map((s) => (
                <div
                  key={s.label}
                  style={{
                    textAlign: "center",
                    padding: 8,
                    borderRadius: 6,
                    background: minimal ? "transparent" : "rgba(124,92,252,0.1)",
                    border: minimal ? "none" : "1px solid rgba(124,92,252,0.2)",
                  }}
                >
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: minimal ? "1rem" : "1.1rem",
                      background: minimal ? "none" : "linear-gradient(135deg, #7c5cfc, #fc5c8c)",
                      WebkitBackgroundClip: minimal ? "unset" : "text",
                      WebkitTextFillColor: minimal ? "var(--text-primary)" : "transparent",
                    }}
                  >
                    {s.val}
                  </div>
                  <div style={{ fontSize: "0.7rem", color: "var(--text-tertiary)", textTransform: minimal ? "none" : "uppercase", letterSpacing: minimal ? 0 : 1 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 16, padding: 16 }}>
          <div style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
            {minimal ? (
              <>
                <strong style={{ color: "var(--accent-tertiary)" }}>Clean version:</strong> The unnecessary decorative borders, gradient text, badges, and background effects have been removed. The information is the same but easier to process.
              </>
            ) : (
              <>
                <strong style={{ color: "#fc5c5c" }}>Cluttered version:</strong> The gold border, PRO badge, gradient text, uppercase labels, dashed borders, and italic text all compete for attention without adding value.
              </>
            )}
          </div>
          <div className="toggle-group" style={{ alignSelf: "flex-start" }}>
            <button
              className={`toggle-option${!minimal ? " active" : ""}`}
              onClick={() => setMinimal(false)}
            >
              Cluttered
            </button>
            <button
              className={`toggle-option${minimal ? " active" : ""}`}
              onClick={() => setMinimal(true)}
            >
              Clean
            </button>
          </div>
        </div>
      </div>
    </DemoPanel>
  );
}

function ReduceChoiceDemo() {
  const [mode, setMode] = useState<"many" | "few">("many");

  const manyOptions = [
    "Free Trial", "Basic Monthly", "Basic Annual", "Standard Monthly",
    "Standard Annual", "Pro Monthly", "Pro Annual", "Enterprise Monthly",
    "Enterprise Annual", "Custom", "Student", "Non-profit",
  ];

  const fewOptions = [
    { name: "Starter", price: "$9/mo", desc: "For individuals" },
    { name: "Pro", price: "$29/mo", desc: "For growing teams", featured: true },
    { name: "Enterprise", price: "Custom", desc: "For organizations" },
  ];

  return (
    <DemoPanel title="Reduce Choice — Hick's Law" icon="🧠">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>Hick&apos;s Law</strong> states that the time it takes to make a decision increases logarithmically with the number and complexity of choices.
      </p>
      <p style={{ fontSize: "0.78rem", color: "var(--text-tertiary)", marginBottom: 12 }}>
        &quot;If you want people to make a decision, don&apos;t give them too many options. Use the 80/20 rule to identify the most common choices and hide or deprioritize the rest.&quot;
      </p>
      <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: 24 }}>
        Toggle between the views. 12 options feel overwhelming (Analysis Paralysis). 3 options feel manageable and actionable.
      </p>
      <div style={{ display: "flex", justifyContent: "center", padding: "16px 0" }}>
        <div style={{ maxWidth: 500, width: "100%" }}>
          <AnimatePresence mode="wait">
            {mode === "many" ? (
              <motion.div
                key="many"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 8,
                }}
              >
                {manyOptions.map((opt) => (
                  <button
                    key={opt}
                    style={{
                      padding: "10px 8px",
                      borderRadius: 8,
                      background: "var(--bg-tertiary)",
                      border: "1px solid var(--border-subtle)",
                      color: "var(--text-secondary)",
                      fontSize: "0.72rem",
                      fontWeight: 500,
                      cursor: "pointer",
                      fontFamily: "var(--font-sans)",
                    }}
                  >
                    {opt}
                  </button>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="few"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                style={{
                  display: "flex",
                  gap: 12,
                }}
              >
                {fewOptions.map((opt) => (
                  <div
                    key={opt.name}
                    style={{
                      flex: 1,
                      padding: 20,
                      borderRadius: 12,
                      background: opt.featured ? "rgba(124,92,252,0.1)" : "var(--bg-tertiary)",
                      border: `1px solid ${opt.featured ? "var(--accent-primary)" : "var(--border-subtle)"}`,
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: 4 }}>
                      {opt.name}
                    </div>
                    <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--accent-primary-light)", marginBottom: 4 }}>
                      {opt.price}
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-tertiary)" }}>
                      {opt.desc}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 16 }}>
        <div className="toggle-group">
          <button className={`toggle-option${mode === "many" ? " active" : ""}`} onClick={() => setMode("many")}>
            12 Options 😵
          </button>
          <button className={`toggle-option${mode === "few" ? " active" : ""}`} onClick={() => setMode("few")}>
            3 Options ✨
          </button>
        </div>
      </div>
    </DemoPanel>
  );
}

function MobileFirstDemo() {
  const [viewport, setViewport] = useState<"mobile" | "tablet" | "desktop">("mobile");

  const widths = { mobile: 320, tablet: 600, desktop: "100%" };

  return (
    <DemoPanel title="Mobile First Design" icon="📱">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>Mobile First</strong> is more than just a coding technique; it&apos;s a prioritization strategy. When you design for a small screen, you are forced to decide what is truly essential.
      </p>
      <p style={{ fontSize: "0.78rem", color: "var(--text-tertiary)", marginBottom: 12 }}>
        &quot;If you design for desktop first, you tend to fill the screen with content. When you shrink it down to mobile, you have a crowded mess. Mobile first solves this.&quot;
      </p>
      <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: 24 }}>
        Resize the container below. Notice how the desktop version (3 columns) is an <em>enhancement</em> of the mobile version (1 column), not the other way around.
      </p>
      <div style={{ display: "flex", justifyContent: "center", padding: "16px 0" }}>
        <motion.div
          animate={{ width: typeof widths[viewport] === "number" ? widths[viewport] : "100%" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            background: "var(--bg-tertiary)",
            border: "1px solid var(--border-subtle)",
            borderRadius: 12,
            padding: 16,
            overflow: "hidden",
            maxWidth: "100%",
          }}
        >
          {/* Mock header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <div style={{ width: 80, height: 20, background: "var(--accent-primary)", borderRadius: 4 }} />
            {viewport === "mobile" ? (
              <div style={{ fontSize: "1.2rem" }}>☰</div>
            ) : (
              <div style={{ display: "flex", gap: 16 }}>
                {["Home", "About", "Contact"].map((l) => (
                  <span key={l} style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>
                    {l}
                  </span>
                ))}
              </div>
            )}
          </div>
          {/* Mock content grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: viewport === "mobile" ? "1fr" : viewport === "tablet" ? "1fr 1fr" : "1fr 1fr 1fr",
              gap: 12,
              transition: "all 0.3s",
            }}
          >
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                style={{
                  background: "var(--bg-glass)",
                  borderRadius: 8,
                  padding: 16,
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <div style={{ width: "100%", height: 60, background: "var(--bg-glass-hover)", borderRadius: 6, marginBottom: 8 }} />
                <div style={{ height: 8, background: "var(--bg-glass-hover)", borderRadius: 4, width: "70%", marginBottom: 6 }} />
                <div style={{ height: 8, background: "var(--bg-glass)", borderRadius: 4, width: "50%" }} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 16 }}>
        <div className="toggle-group">
          {(["mobile", "tablet", "desktop"] as const).map((v) => (
            <button key={v} className={`toggle-option${viewport === v ? " active" : ""}`} onClick={() => setViewport(v)}>
              {v === "mobile" ? "📱 Mobile" : v === "tablet" ? "📱 Tablet" : "🖥️ Desktop"}
            </button>
          ))}
        </div>
      </div>
    </DemoPanel>
  );
}

/* ---- NEW: Style Trends Demo ---- */
function StyleTrendsDemo() {
  const [style, setStyle] = useState<"glass" | "neuo" | "clean">("glass");

  const card = (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
        <div style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--accent-primary)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "0.8rem", fontWeight: 700 }}>JD</div>
        <div>
          <div style={{ fontWeight: 600, fontSize: "0.88rem" }}>Jane Doe</div>
          <div style={{ fontSize: "0.72rem", color: style === "clean" ? "var(--text-tertiary)" : "inherit", opacity: style === "clean" ? 1 : 0.6 }}>UI Designer</div>
        </div>
      </div>
      <div style={{ fontSize: "0.82rem", lineHeight: 1.6, color: style === "clean" ? "var(--text-secondary)" : "inherit", opacity: style === "clean" ? 1 : 0.7, marginBottom: 12 }}>
        3 years of experience crafting intuitive digital experiences for web and mobile platforms.
      </div>
      <button style={{
        padding: "8px 20px", borderRadius: 8, border: "none", fontFamily: "var(--font-sans)", fontSize: "0.82rem", fontWeight: 600, cursor: "pointer",
        background: style === "clean" ? "var(--accent-primary)" : style === "glass" ? "rgba(255,255,255,0.15)" : "var(--bg-tertiary)",
        color: style === "clean" ? "#fff" : "var(--text-secondary)",
        boxShadow: style === "neuo" ? "4px 4px 8px rgba(0,0,0,0.3), -4px -4px 8px rgba(255,255,255,0.05)" : "none",
      }}>View Profile</button>
    </>
  );

  const containerStyle: React.CSSProperties = style === "glass"
    ? { background: "rgba(255,255,255,0.06)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: 24 }
    : style === "neuo"
    ? { background: "var(--bg-secondary)", borderRadius: 16, padding: 24, boxShadow: "8px 8px 16px rgba(0,0,0,0.25), -8px -8px 16px rgba(255,255,255,0.03)", border: "none" }
    : { background: "var(--bg-tertiary)", borderRadius: 12, padding: 24, border: "1px solid var(--border-subtle)" };

  return (
    <DemoPanel title="Style Trends vs. Usability" icon="🎨">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>Trendy styles often hurt usability.</strong> Glassmorphism (blur) and Neumorphism (soft shadows) can look stunning on Dribbble, but they often lack the contrast needed for accessible interfaces.
      </p>
      <p style={{ fontSize: "0.78rem", color: "var(--text-tertiary)", marginBottom: 12 }}>
        &quot;Design trends come and go. Good usability is timeless. Always prioritize clarity and contrast over looking cool.&quot;
      </p>
      <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: 24 }}>
        Compare the three styles. The <strong>Clean</strong> version has the highest contrast and clearly readable hierarchy, making it the most usable choice.
      </p>
      <div style={{ display: "flex", justifyContent: "center", padding: "16px 0" }}>
        <motion.div layout style={{ ...containerStyle, maxWidth: 340, width: "100%" }} transition={{ duration: 0.4 }}>
          {card}
        </motion.div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 16 }}>
        <div className="toggle-group">
          <button className={`toggle-option${style === "glass" ? " active" : ""}`} onClick={() => setStyle("glass")}>Glassmorphic</button>
          <button className={`toggle-option${style === "neuo" ? " active" : ""}`} onClick={() => setStyle("neuo")}>Neumorphic</button>
          <button className={`toggle-option${style === "clean" ? " active" : ""}`} onClick={() => setStyle("clean")}>Clean ✓</button>
        </div>
      </div>
    </DemoPanel>
  );
}

/* ---- NEW: Minimalism vs Simplicity Demo ---- */
function MinimalismVsSimplicityDemo() {
  const [view, setView] = useState<"minimal" | "simple">("minimal");

  return (
    <DemoPanel title="Minimal ≠ Simple" icon="⚖️">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>Minimal isn&apos;t always simple.</strong> A &quot;minimal&quot; UI might remove so much (labels, borders, cues) that it becomes <em>harder</em> to use. A &quot;simple&quot; UI is easy to understand, even if it has more elements.
      </p>
      <p style={{ fontSize: "0.78rem", color: "var(--text-tertiary)", marginBottom: 12 }}>
        &quot;Simplicity represents a lack of complexity. Minimalism represents a lack of elements. They are not the same thing.&quot;
      </p>
      <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: 24 }}>
        The &quot;Too Minimal&quot; example below is hard to use because it relies on mystery meat navigation (unlabeled icons). The &quot;Simple&quot; version uses standard labels and clear actions.
      </p>
      <div style={{ display: "flex", justifyContent: "center", padding: "16px 0" }}>
        <motion.div layout style={{ maxWidth: 340, width: "100%", background: view === "minimal" ? "#1a1a2e" : "var(--bg-tertiary)", borderRadius: 12, overflow: "hidden", border: "1px solid var(--border-subtle)" }} transition={{ duration: 0.4 }}>
          {/* Fake photo */}
          <div style={{ width: "100%", height: 140, background: "linear-gradient(135deg, #2d1b69 0%, #11998e 50%, #38ef7d 100%)", position: "relative" }}>
            {view === "simple" && <div style={{ position: "absolute", top: 12, right: 12, display: "flex", gap: 8 }}>
              <button style={{ background: "rgba(0,0,0,0.5)", border: "none", color: "#fff", borderRadius: 8, padding: "6px 12px", fontSize: "0.72rem", cursor: "pointer", fontFamily: "var(--font-sans)" }}>↗ Share</button>
              <button style={{ background: "rgba(0,0,0,0.5)", border: "none", color: "#fff", borderRadius: 8, padding: "6px 12px", fontSize: "0.72rem", cursor: "pointer", fontFamily: "var(--font-sans)" }}>♡ Save</button>
            </div>}
            {view === "minimal" && <div style={{ position: "absolute", top: 12, right: 12 }}>
              <button style={{ background: "none", border: "none", color: "rgba(255,255,255,0.4)", fontSize: "1.2rem", cursor: "pointer" }}>⋯</button>
            </div>}
          </div>
          {/* Filter bar */}
          <div style={{ display: "flex", gap: view === "simple" ? 0 : 16, padding: view === "simple" ? "0" : "12px 16px", justifyContent: "center" }}>
            {view === "minimal" ? (
              /* Unlabeled minimal icons */
              <>
                {["◐", "◑", "◓", "◒", "◔"].map((icon, i) => (
                  <button key={i} style={{ background: "none", border: "none", color: i === 0 ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.15)", fontSize: "1rem", cursor: "pointer", padding: 4 }}>{icon}</button>
                ))}
              </>
            ) : (
              /* Labeled filters */
              <>
                {["Natural", "Warm", "Cool", "B&W"].map((name, i) => (
                  <button key={i} style={{
                    flex: 1, background: i === 0 ? "rgba(124,92,252,0.15)" : "transparent", border: "none", borderBottom: i === 0 ? "2px solid var(--accent-primary)" : "2px solid transparent",
                    color: i === 0 ? "var(--accent-primary-light)" : "var(--text-tertiary)", fontSize: "0.75rem", fontWeight: i === 0 ? 600 : 400, cursor: "pointer", padding: "10px 8px", fontFamily: "var(--font-sans)",
                  }}>{name}</button>
                ))}
              </>
            )}
          </div>
          {/* Sliders */}
          <div style={{ padding: "12px 16px" }}>
            {(view === "simple" ? ["Exposure", "Contrast", "Saturation"] : ["", "", ""]).map((label, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                {view === "simple" && <span style={{ fontSize: "0.72rem", color: "var(--text-tertiary)", width: 70 }}>{label}</span>}
                <div style={{ flex: 1, height: 4, background: "rgba(255,255,255,0.1)", borderRadius: 2, position: "relative" }}>
                  <div style={{ position: "absolute", left: `${40 + i * 15}%`, top: -4, width: 12, height: 12, borderRadius: "50%", background: view === "simple" ? "var(--accent-primary)" : "rgba(255,255,255,0.2)", border: view === "simple" ? "2px solid var(--accent-primary-light)" : "none" }} />
                </div>
              </div>
            ))}
          </div>
          {/* Bottom bar */}
          <div style={{ padding: "8px 16px 16px", display: "flex", justifyContent: view === "simple" ? "flex-end" : "center", gap: 8 }}>
            {view === "simple" ? (
              <>
                <button style={{ padding: "8px 16px", borderRadius: 8, border: "1px solid var(--border-subtle)", background: "transparent", color: "var(--text-secondary)", fontSize: "0.78rem", cursor: "pointer", fontFamily: "var(--font-sans)" }}>Cancel</button>
                <button style={{ padding: "8px 16px", borderRadius: 8, border: "none", background: "var(--accent-primary)", color: "#fff", fontSize: "0.78rem", fontWeight: 600, cursor: "pointer", fontFamily: "var(--font-sans)" }}>Save Edit</button>
              </>
            ) : (
              <>
                {["◁", "✕", "✓"].map((icon, i) => (
                  <button key={i} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.2)", fontSize: "1rem", cursor: "pointer", padding: "4px 12px" }}>{icon}</button>
                ))}
              </>
            )}
          </div>
        </motion.div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 16 }}>
        <div className="toggle-group">
          <button className={`toggle-option${view === "minimal" ? " active" : ""}`} onClick={() => setView("minimal")}>❌ Too Minimal</button>
          <button className={`toggle-option${view === "simple" ? " active" : ""}`} onClick={() => setView("simple")}>✅ Simple & Clear</button>
        </div>
      </div>
    </DemoPanel>
  );
}

/* ---- NEW: Visible Actions Demo ---- */
function VisibleActionsDemo() {
  const [mode, setMode] = useState<"hidden" | "visible">("hidden");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <DemoPanel title="Make Important Content Visible" icon="👁️">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>Out of sight, out of mind.</strong> If you hide main navigation behind a hamburger menu on desktop, engagement drops. Users rarely look for things they can&apos;t see.
      </p>
      <p style={{ fontSize: "0.78rem", color: "var(--text-tertiary)", marginBottom: 12 }}>
        &quot;Obvious always wins. If something is important, put it on the screen. Don&apos;t hide it behind a click.&quot;
      </p>
      <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: 24 }}>
        Toggle between Hidden and Visible. The Visible version makes it instantly clear what this site offers, reducing the cognitive effort needed to find information.
      </p>
      <div style={{ display: "flex", justifyContent: "center", padding: "16px 0" }}>
        <div style={{ maxWidth: 500, width: "100%", background: "var(--bg-tertiary)", border: "1px solid var(--border-subtle)", borderRadius: 12, overflow: "hidden" }}>
          {/* Navbar */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 20px", borderBottom: "1px solid var(--border-subtle)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 24, height: 24, background: "var(--accent-primary)", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.65rem", color: "#fff", fontWeight: 700 }}>D</div>
              <span style={{ fontWeight: 600, fontSize: "0.85rem" }}>DesignHub</span>
            </div>
            {mode === "hidden" ? (
              <div style={{ position: "relative" }}>
                <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", color: "var(--text-secondary)", fontSize: "1.3rem", cursor: "pointer", padding: "4px 8px" }}>☰</button>
                <AnimatePresence>
                  {menuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                      style={{ position: "absolute", right: 0, top: "100%", background: "var(--bg-secondary)", border: "1px solid var(--border-subtle)", borderRadius: 8, padding: 8, minWidth: 140, zIndex: 10 }}
                    >
                      {["Portfolio", "About", "Blog", "Contact"].map((l) => (
                        <div key={l} style={{ padding: "8px 12px", fontSize: "0.78rem", color: "var(--text-secondary)", borderRadius: 6, cursor: "pointer" }}>{l}</div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div style={{ display: "flex", gap: 20 }}>
                {["Portfolio", "About", "Blog", "Contact"].map((l) => (
                  <span key={l} style={{ fontSize: "0.78rem", color: "var(--text-secondary)", cursor: "pointer" }}>{l}</span>
                ))}
              </div>
            )}
          </div>
          {/* Page content */}
          <div style={{ padding: 20, textAlign: "center" }}>
            <div style={{ fontSize: "0.95rem", fontWeight: 600, marginBottom: 8 }}>Welcome to DesignHub</div>
            <div style={{ fontSize: "0.78rem", color: "var(--text-tertiary)", lineHeight: 1.6 }}>
              {mode === "hidden"
                ? "Can you find the navigation? The hamburger menu hides all links. Users need to guess that ☰ contains navigation."
                : "All navigation links are visible. Users can instantly see what's available and navigate with one click."}
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 16 }}>
        <div className="toggle-group">
          <button className={`toggle-option${mode === "hidden" ? " active" : ""}`} onClick={() => { setMode("hidden"); setMenuOpen(false); }}>☰ Hidden Nav</button>
          <button className={`toggle-option${mode === "visible" ? " active" : ""}`} onClick={() => { setMode("visible"); setMenuOpen(false); }}>👁️ Visible Nav</button>
        </div>
      </div>
    </DemoPanel>
  );
}

const topics = [
  { title: "Remove Unnecessary Information", desc: "Every element you add competes with existing elements. Remove repeated elements and unneeded words to simplify without losing information." },
  { title: "Remove Unnecessary Styles", desc: "Avoid decorative colours, borders, and animations that don't convey information. Unnecessary styles increase cognitive load." },
  { title: "Style Trends Fade", desc: "Trendy effects like glassmorphism and neumorphism can create contrast and hierarchy issues. Stick with minimal styles for longevity." },
  { title: "Not All Links Need Underlines", desc: "Navigation menus, cards, and tabs already look interactive. Removing conventional link treatment simplifies the UI." },
  { title: "Use Progressive Disclosure", desc: "Show only essential information first. Let users reveal more details on demand to reduce cognitive load." },
  { title: "Minimal ≠ Simple", desc: "Removing or hiding too much can harm usability. Ensure important actions are labelled, visible, and have sufficient contrast." },
  { title: "Make Important Content Visible", desc: "People don't use what they can't see. If there's space, keep important actions visible. Only hide when space-constrained." },
  { title: "Design for Smallest Screen First", desc: "Start mobile to force prioritization. Restricted space ensures you focus on essentials before scaling up." },
  { title: "Reduce Choice — Hick's Law", desc: "Decision time increases with the number and complexity of choices. Remove choices, group them, break them up, or recommend popular ones." },
  { title: "Recommend Choices", desc: "Search suggestions, popular picks, and recommended options help people make decisions faster." },
];

export default function LessIsMorePage() {
  return (
    <>
      <Nav />
      <div className="page-wrapper">
        <div className="container">
          <motion.div className="chapter-hero" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link href="/ui" className="back-link">← Back to Home</Link>
            <div className="chapter-hero-number" style={{ color: "#fc5c8c" }}>Chapter 2</div>
            <h1 className="chapter-hero-title">Less Is More</h1>
            <p className="chapter-hero-desc">
              Practical techniques to simplify interfaces by removing unnecessary details.
              Every element competes for attention — only keep what earns its place.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <ProgressiveDisclosureDemo />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <RemoveUnnecessaryDemo />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <StyleTrendsDemo />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <MinimalismVsSimplicityDemo />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <VisibleActionsDemo />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <ReduceChoiceDemo />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <MobileFirstDemo />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="section-header" style={{ marginTop: 64 }}>
              <div className="section-label">All Topics</div>
              <h2 className="section-title">Key Principles</h2>
            </div>
            <div className="topic-list">
              {topics.map((t, i) => (
                <div key={i} className="topic-item">
                  <div className="topic-num" style={{ background: "linear-gradient(135deg, #fc5c8c, #fc8c5c)" }}>{i + 1}</div>
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
                { emoji: "🧹", title: "Remove, Don\u2019t Add", text: "Every element competes with existing ones. Unnecessary information is a distraction that increases cognitive load." },
                { emoji: "🎨", title: "Style Trends Fade", text: "The more trendy effects you use, the worse your interface will age. Stick with minimal styles that highlight quality content." },
                { emoji: "📱", title: "Mobile First", text: "Restricted space forces you to prioritise essentials. Start small, then progressively enhance for larger screens." },
                { emoji: "⚖️", title: "Simple, Not Stripped", text: "Minimal doesn't mean simple. Make sure you're not removing critical labels, states, or actions just to look aesthetic." },
                { emoji: "👁️", title: "Keep It Visible", text: "People don't use what they can't see. If there's space, keep important actions visible and discoverable." },
                { emoji: "🧠", title: "Reduce Choice", text: "Present fewer options more simply: remove, group, break into steps, or recommend. Faster decisions = happier users." },
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
            <Link href="/ui/fundamentals" className="btn btn-secondary">← Fundamentals</Link>
            <Link href="/ui/colour" className="btn btn-primary">Next: Colour →</Link>
          </div>
        </div>
      </div>
    </>
  );
}

function ChapterQuiz() {
  const { saveQuizResult, getChapterProgress, markChapterVisited } = useProgress();
  const slug = "less-is-more";
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
        <h2 className="section-title">Chapter 2 Quiz</h2>
      </div>
      <QuizSection
        title="Less Is More Quiz"
        questions={quizData[slug]}
        chapterSlug={slug}
        previousBest={cp.bestScore}
        onComplete={(answers, score, total) => saveQuizResult(slug, answers, score, total)}
      />
    </motion.div>
  );
}
