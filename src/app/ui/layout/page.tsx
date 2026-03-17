"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import DemoPanel from "@/components/DemoPanel";
import QuizSection from "@/components/QuizSection";
import { motion } from "framer-motion";
import { useProgress } from "@/lib/progress";
import { quizData } from "@/lib/quizData";

function ProximityDemo() {
  const [grouped, setGrouped] = useState(false);

  return (
    <DemoPanel title="Grouping — Law of Proximity" icon="🧲">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>The Law of Proximity</strong> states that objects that are near, or proximate to each other, tend to be grouped together. You don&apos;t always need lines or boxes to group things — space is often enough.
      </p>
      <p style={{ fontSize: "0.78rem", color: "var(--text-tertiary)", marginBottom: 12 }}>
        &quot;Proximity is the most powerful way to indicate relatedness. Before you add a border or a background colour, try just moving related items closer together.&quot;
      </p>
      <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: 24 }}>
        Toggle grouping. Notice how the &quot;Grouped&quot; version uses whitespace to clearly associate labels with their fields and separate different sections, making the form easier to scan.
      </p>
      <div style={{ display: "flex", justifyContent: "center", padding: "16px 0" }}>
        <div
          style={{
            background: "var(--bg-tertiary)",
            borderRadius: 16,
            padding: 32,
            maxWidth: 360,
            width: "100%",
          }}
        >
          {/* Contact form preview */}
          {[
            { group: "Personal Info", fields: ["Full Name", "Email Address"] },
            { group: "Address", fields: ["Street", "City", "Postcode"] },
            { group: "Preferences", fields: ["Language"] },
          ].map((g, gi) => (
            <div
              key={gi}
              style={{
                marginBottom: grouped ? 28 : 12,
                transition: "margin 0.4s ease",
              }}
            >
              {grouped && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--accent-primary-light)",
                    marginBottom: 10,
                  }}
                >
                  {g.group}
                </motion.div>
              )}
              {g.fields.map((f, fi) => (
                <div
                  key={fi}
                  style={{
                    marginBottom: grouped ? 8 : 12,
                    transition: "margin 0.4s ease",
                  }}
                >
                  <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)", marginBottom: 4 }}>
                    {f}
                  </div>
                  <div
                    style={{
                      height: 36,
                      background: "var(--bg-glass)",
                      borderRadius: 8,
                      border: "1px solid var(--border-subtle)",
                    }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 16 }}>
        <div className="toggle-group">
          <button className={`toggle-option${!grouped ? " active" : ""}`} onClick={() => setGrouped(false)}>
            Ungrouped
          </button>
          <button className={`toggle-option${grouped ? " active" : ""}`} onClick={() => setGrouped(true)}>
            Grouped
          </button>
        </div>
      </div>
    </DemoPanel>
  );
}

function GridDemo() {
  const [columns, setColumns] = useState(12);
  const [showGrid, setShowGrid] = useState(true);

  return (
    <DemoPanel title="12-Column Grid System" icon="📏">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>Grids create rhythm and consistency.</strong> A 12-column grid is the standard for web design because it can be divided into halves (6), thirds (4), quarters (3), and sixths (2).
      </p>
      <p style={{ fontSize: "0.78rem", color: "var(--text-tertiary)", marginBottom: 12 }}>
        &quot;A grid is like a rhythm in music. It defines the structure within which the creativity happens. Without a grid, layouts feel chaotic and random.&quot;
      </p>
      <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: 24 }}>
        Adjust the columns. See how the content snaps to the grid lines. This invisible structure aligns elements across the entire page, creating a subconscious sense of order.
      </p>
      <div style={{ position: "relative" }}>
        {/* Grid overlay */}
        {showGrid && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "grid",
              gridTemplateColumns: `repeat(${columns}, 1fr)`,
              gap: 8,
              pointerEvents: "none",
              zIndex: 1,
            }}
          >
            {Array.from({ length: columns }).map((_, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(124, 92, 252, 0.06)",
                  borderRadius: 4,
                  border: "1px solid rgba(124, 92, 252, 0.1)",
                }}
              />
            ))}
          </div>
        )}
        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "grid",
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gap: 8,
            minHeight: 200,
          }}
        >
          {/* Header: full width */}
          <div
            style={{
              gridColumn: `1 / ${columns + 1}`,
              height: 40,
              background: "rgba(124, 92, 252, 0.15)",
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              paddingLeft: 12,
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "var(--accent-primary-light)",
            }}
          >
            Header — {columns} columns
          </div>
          {/* Sidebar */}
          <div
            style={{
              gridColumn: `1 / ${Math.max(4, Math.round(columns / 3) + 1)}`,
              height: 120,
              background: "rgba(92, 240, 208, 0.1)",
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.72rem",
              color: "var(--accent-tertiary)",
              fontWeight: 600,
            }}
          >
            Sidebar
          </div>
          {/* Content */}
          <div
            style={{
              gridColumn: `${Math.max(4, Math.round(columns / 3) + 1)} / ${columns + 1}`,
              height: 120,
              background: "rgba(252, 92, 140, 0.1)",
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.72rem",
              color: "var(--accent-secondary)",
              fontWeight: 600,
            }}
          >
            Main Content
          </div>
        </div>
      </div>
      <div style={{ display: "flex", gap: 12, marginTop: 20, justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
        <div className="toggle-group">
          {[4, 6, 8, 12].map((c) => (
            <button key={c} className={`toggle-option${columns === c ? " active" : ""}`} onClick={() => setColumns(c)}>
              {c} col
            </button>
          ))}
        </div>
        <button
          className={`demo-btn${showGrid ? " active" : ""}`}
          onClick={() => setShowGrid(!showGrid)}
        >
          {showGrid ? "Hide" : "Show"} Grid
        </button>
      </div>
    </DemoPanel>
  );
}

function WhiteSpaceDemo() {
  const [generous, setGenerous] = useState(false);

  return (
    <DemoPanel title="White Space" icon="📋">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>White space is not empty space; it&apos;s active space.</strong> It guides the eye, improves readability, and creates a feeling of luxury. Dense, cluttered interfaces feel cheap and stressful.
      </p>
      <p style={{ fontSize: "0.78rem", color: "var(--text-tertiary)", marginBottom: 12 }}>
        &quot;If you want to make a UI look more premium, just add more white space. It&apos;s the cheapest way to upgrade a design.&quot;
      </p>
      <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: 24 }}>
        Toggle between Tight and Generous. The generous version isn&apos;t just prettier; it&apos;s easier to process because the content has room to breathe.
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <motion.div
          animate={{ padding: generous ? 40 : 12 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            background: "var(--bg-tertiary)",
            borderRadius: 16,
            maxWidth: 500,
            width: "100%",
            border: "1px solid var(--border-subtle)",
          }}
        >
          <motion.h3
            animate={{ marginBottom: generous ? 16 : 6, fontSize: generous ? "1.3rem" : "1rem" }}
            style={{ fontWeight: 700, color: "var(--text-primary)" }}
          >
            White Space Matters
          </motion.h3>
          <motion.p
            animate={{
              marginBottom: generous ? 24 : 8,
              lineHeight: generous ? 1.8 : 1.4,
              fontSize: generous ? "0.95rem" : "0.82rem",
            }}
            style={{ color: "var(--text-secondary)" }}
          >
            Generous spacing between elements creates a sense of elegance and professionalism. It helps users focus on the content without feeling overwhelmed.
          </motion.p>
          <div style={{ display: "flex", gap: generous ? 12 : 6 }}>
            <div
              style={{
                padding: generous ? "12px 24px" : "6px 12px",
                borderRadius: 8,
                background: "var(--accent-primary)",
                color: "white",
                fontSize: generous ? "0.88rem" : "0.75rem",
                fontWeight: 600,
                transition: "all 0.3s",
              }}
            >
              Continue
            </div>
            <div
              style={{
                padding: generous ? "12px 24px" : "6px 12px",
                borderRadius: 8,
                background: "var(--bg-glass)",
                color: "var(--text-secondary)",
                fontSize: generous ? "0.88rem" : "0.75rem",
                border: "1px solid var(--border-subtle)",
                transition: "all 0.3s",
              }}
            >
              Cancel
            </div>
          </div>
        </motion.div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
        <div className="toggle-group">
          <button className={`toggle-option${!generous ? " active" : ""}`} onClick={() => setGenerous(false)}>
            Tight
          </button>
          <button className={`toggle-option${generous ? " active" : ""}`} onClick={() => setGenerous(true)}>
            Generous
          </button>
        </div>
      </div>
    </DemoPanel>
  );
}

function AlignmentDemo() {
  const [align, setAlign] = useState<"left" | "center" | "right" | "mixed">("mixed");

  return (
    <DemoPanel title="Alignment" icon="↔️">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>The eye loves straight lines.</strong> Mixed alignment (center headers + left text + right buttons) forces the eye to zigzag, increasing cognitive load. Left alignment is usually the safest choice for LTR languages.
      </p>
      <p style={{ fontSize: "0.78rem", color: "var(--text-tertiary)", marginBottom: 12 }}>
        &quot;Every element should be visually connected to something else on the page. Nothing should be placed on the page arbitrarily.&quot;
      </p>
      <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: 24 }}>
        Notice how the <strong>Mixed</strong> version feels messy and hard to scan. The <strong>Left</strong> version creates a strong, clean vertical line that anchors the design.
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            background: "var(--bg-tertiary)",
            borderRadius: 12,
            padding: 24,
            maxWidth: 400,
            width: "100%",
          }}
        >
          <div
            style={{
              textAlign: align === "mixed" ? "center" : align,
              fontWeight: 700,
              fontSize: "1.1rem",
              marginBottom: 12,
              transition: "text-align 0.1s",
            }}
          >
            Product Title
          </div>
          <div
            style={{
              textAlign: align === "mixed" ? "right" : align,
              fontSize: "0.88rem",
              color: "var(--text-secondary)",
              lineHeight: 1.6,
              marginBottom: 16,
              transition: "text-align 0.1s",
            }}
          >
            A short description of the product that explains its key features and benefits.
          </div>
          <div
            style={{
              textAlign: align === "mixed" ? "left" : align,
              fontSize: "1.2rem",
              fontWeight: 800,
              color: "var(--accent-primary-light)",
              marginBottom: 12,
            }}
          >
            $49.99
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: align === "mixed" ? "flex-end" : align === "center" ? "center" : align === "right" ? "flex-end" : "flex-start",
              transition: "justify-content 0.1s",
            }}
          >
            <div
              style={{
                padding: "10px 20px",
                borderRadius: 8,
                background: "var(--accent-primary)",
                color: "white",
                fontSize: "0.88rem",
                fontWeight: 600,
              }}
            >
              Add to Cart
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
        <div className="toggle-group">
          {(["mixed", "left", "center", "right"] as const).map((a) => (
            <button key={a} className={`toggle-option${align === a ? " active" : ""}`} onClick={() => setAlign(a)}>
              {a === "mixed" ? "⚠️ Mixed" : a.charAt(0).toUpperCase() + a.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </DemoPanel>
  );
}

/* ---- NEW: Visual Hierarchy Demo ---- */
function VisualHierarchyDemo() {
  const [hierarchy, setHierarchy] = useState(false);

  return (
    <DemoPanel title="Visual Hierarchy" icon="👑">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>Visual Hierarchy guides the user&apos;s eye.</strong> It tells them what to look at first, second, and third. Use size, weight, colour, and position to create this path.
      </p>
      <p style={{ fontSize: "0.78rem", color: "var(--text-tertiary)", marginBottom: 12 }}>
        &quot;If everything is important, nothing is important. You must make choices about what matters most.&quot;
      </p>
      <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: 24 }}>
        The &quot;Flat Table&quot; treats every piece of data equally. The &quot;Visual Hierarchy&quot; version highlights the <strong>Name</strong>, <strong>Image</strong>, and <strong>Action</strong>, making the card instantly understandable.
      </p>
      <div style={{ display: "flex", justifyContent: "center", padding: "16px 0" }}>
        <div style={{ maxWidth: 340, width: "100%", background: "var(--bg-tertiary)", border: "1px solid var(--border-subtle)", borderRadius: 12, overflow: "hidden" }}>
          <div style={{ width: "100%", height: 100, background: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)" }} />
          <div style={{ padding: hierarchy ? 20 : 16 }}>
            {hierarchy ? (
              <>
                <div style={{ fontWeight: 800, fontSize: "1.1rem", marginBottom: 4 }}>Beach Getaway</div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-tertiary)", marginBottom: 8 }}>Blissful Beach, NSW, Australia</div>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 12, fontSize: "0.75rem" }}>
                  <span style={{ color: "#f5c542" }}>★★★★★</span>
                  <span style={{ color: "var(--text-tertiary)" }}>(23 reviews)</span>
                </div>
                <div style={{ display: "flex", gap: 12, fontSize: "0.72rem", color: "var(--text-tertiary)", marginBottom: 16 }}>
                  <span>🏠 House</span><span>🛏 2 beds</span><span>🚿 1 bath</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--accent-primary-light)" }}>$299 <span style={{ fontSize: "0.72rem", fontWeight: 400, color: "var(--text-tertiary)" }}>/ night</span></span>
                  <button style={{ padding: "10px 20px", borderRadius: 8, background: "var(--accent-primary)", color: "#fff", border: "none", fontWeight: 600, fontSize: "0.82rem", cursor: "pointer", fontFamily: "var(--font-sans)" }}>Book now</button>
                </div>
              </>
            ) : (
              <>
                {[["Name:", "Beach Getaway"], ["Type:", "House"], ["Price:", "$299.00 / night"], ["Location:", "Blissful Beach, NSW"], ["Rating:", "5.0 stars (23 reviews)"], ["Bedrooms:", "2"], ["Bathrooms:", "1"]].map(([k, v], i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", fontSize: "0.78rem", color: "var(--text-secondary)", padding: "6px 0", borderBottom: "1px solid var(--border-subtle)" }}>
                    <span style={{ fontWeight: 600 }}>{k}</span><span>{v}</span>
                  </div>
                ))}
                <button style={{ marginTop: 12, width: "100%", padding: "8px", borderRadius: 6, background: "var(--bg-glass)", color: "var(--text-secondary)", border: "1px solid var(--border-subtle)", fontSize: "0.78rem", cursor: "pointer", fontFamily: "var(--font-sans)" }}>Book now</button>
              </>
            )}
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 16 }}>
        <div className="toggle-group">
          <button className={`toggle-option${!hierarchy ? " active" : ""}`} onClick={() => setHierarchy(false)}>❌ Flat Table</button>
          <button className={`toggle-option${hierarchy ? " active" : ""}`} onClick={() => setHierarchy(true)}>✅ Visual Hierarchy</button>
        </div>
      </div>
    </DemoPanel>
  );
}

/* ---- NEW: Containers vs Spacing Demo ---- */
function ContainersVsSpacingDemo() {
  const [mode, setMode] = useState<"containers" | "spacing">("containers");

  const articles = [
    { title: "San Francisco, USA", desc: "Discover the jewel of Northern California.", author: "Jon Tony" },
    { title: "Fujiyoshida, Japan", desc: "Beautiful views of Mt. Fuji.", author: "Tina Wong" },
    { title: "Beijing, China", desc: "Walk the Great Wall and try amazing foods.", author: "Brooklyn Sims" },
  ];

  return (
    <DemoPanel title="Containers vs. Spacing" icon="📦">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>You don&apos;t always need a box.</strong> Beginners often put everything in a bordered box. Pros use alignment and spacing to group items, reserving boxes for when strong separation is truly needed.
      </p>
      <p style={{ fontSize: "0.78rem", color: "var(--text-tertiary)", marginBottom: 12 }}>
        &quot;Too many lines and boxes create visual noise (clutter). Try removing the container and see if the design still holds together.&quot;
      </p>
      <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: 24 }}>
        Compare the views. The <strong>Spacing Only</strong> version is cleaner and lighter, yet the items are still clearly distinct. Boxes are useful, but whitespace is often better.
      </p>
      <div style={{ display: "flex", justifyContent: "center", padding: "16px 0" }}>
        <div style={{ maxWidth: 360, width: "100%" }}>
          {articles.map((a, i) => (
            <div key={i} style={{
              padding: 16,
              marginBottom: mode === "spacing" ? 20 : 12,
              background: mode === "containers" ? "var(--bg-tertiary)" : "transparent",
              border: mode === "containers" ? "1px solid var(--border-subtle)" : "none",
              borderRadius: mode === "containers" ? 12 : 0,
              borderBottom: mode === "spacing" && i < articles.length - 1 ? "none" : "none",
              transition: "all 0.3s",
            }}>
              <div style={{ fontWeight: 700, fontSize: "0.92rem", marginBottom: 4 }}>{a.title}</div>
              <div style={{ fontSize: "0.78rem", color: "var(--text-tertiary)", marginBottom: 8 }}>{a.desc}</div>
              <div style={{ fontSize: "0.72rem", color: "var(--text-tertiary)", opacity: 0.7 }}>by {a.author}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 16 }}>
        <div className="toggle-group">
          <button className={`toggle-option${mode === "containers" ? " active" : ""}`} onClick={() => setMode("containers")}>📦 With Containers</button>
          <button className={`toggle-option${mode === "spacing" ? " active" : ""}`} onClick={() => setMode("spacing")}>✨ Spacing Only</button>
        </div>
      </div>
    </DemoPanel>
  );
}

const topics = [
  { title: "Group Related Elements", desc: "Use containers, proximity, similarity, and continuity. Combine them for stronger groupings." },
  { title: "Containers (Common Region)", desc: "Items within the same boundary are perceived as a group. Use borders, shadows, and backgrounds." },
  { title: "Proximity (Closeness)", desc: "Elements near each other are perceived as related. More space between them means less related." },
  { title: "Similarity (Look Alike)", desc: "Elements that look similar are grouped together. But make functionally different elements look different." },
  { title: "Continuity (Alignment)", desc: "Elements in a continuous line are seen as related. Disrupt continuity to highlight or separate." },
  { title: "Create Visual Hierarchy", desc: "Use size, colour, contrast, spacing, position, and depth to present information by importance." },
  { title: "The Squint Test", desc: "Squint at your design — the hierarchy should still be clear." },
  { title: "Predefined Spacing Scale", desc: "Use a set like 4, 8, 12, 16, 24, 32, 48, 64px for rhythm and consistency." },
  { title: "White Space Is Premium", desc: "Generous white space improves readability, draws attention to important content, and looks professional." },
  { title: "12-Column Grid", desc: "Align layouts to a 12-column grid for visual order. Not all columns need to be used." },
  { title: "Left Align for LTR", desc: "Left-align body text for LTR languages. Avoid justify for body text — it creates uneven spacing." },
  { title: "Avoid Multiple Alignments", desc: "Stick to one alignment per section. Mixed alignment looks messy and increases cognitive load." },
];

export default function LayoutPage() {
  return (
    <>
      <Nav />
      <div className="page-wrapper">
        <div className="container">
          <motion.div className="chapter-hero" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link href="/ui" className="back-link">← Back to Home</Link>
            <div className="chapter-hero-number" style={{ color: "#5ca8fc" }}>Chapter 4</div>
            <h1 className="chapter-hero-title">Layout & Spacing</h1>
            <p className="chapter-hero-desc">
              Master proximity, grids, white space, and alignment to create clear visual hierarchy and polished layouts.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <ProximityDemo />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <ContainersVsSpacingDemo />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <VisualHierarchyDemo />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <GridDemo />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <WhiteSpaceDemo />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <AlignmentDemo />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="section-header" style={{ marginTop: 64 }}>
              <div className="section-label">All Topics</div>
              <h2 className="section-title">Key Principles</h2>
            </div>
            <div className="topic-list">
              {topics.map((t, i) => (
                <div key={i} className="topic-item">
                  <div className="topic-num" style={{ background: "linear-gradient(135deg, #5ca8fc, #5cf0d0)" }}>{i + 1}</div>
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
                { emoji: "🧲", title: "Group with Gestalt", text: "Containers, proximity, similarity, and continuity — four powerful methods to group related elements." },
                { emoji: "👑", title: "Visual Hierarchy", text: "Size, colour, contrast, spacing, position, and depth. Make important things stand out." },
                { emoji: "📏", title: "Spacing Scale", text: "Use a consistent spacing scale for rhythm and consistency across your entire interface." },
                { emoji: "📦", title: "Less Containers", text: "Don't wrap everything in boxes. Spacing and alignment can often replace containers for a cleaner result." },
                { emoji: "🧊", title: "White Space", text: "Generous spacing creates elegance and professionalism. When in doubt, add more white space." },
                { emoji: "↔️", title: "Consistent Alignment", text: "Pick one alignment direction and stick to it. Left-align body text for LTR languages." },
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
            <Link href="/ui/colour" className="btn btn-secondary">← Colour</Link>
            <Link href="/ui/typography" className="btn btn-primary">Next: Typography →</Link>
          </div>
        </div>
      </div>
    </>
  );
}

function ChapterQuiz() {
  const { saveQuizResult, getChapterProgress, markChapterVisited } = useProgress();
  const slug = "layout";
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
        <h2 className="section-title">Chapter 4 Quiz</h2>
      </div>
      <QuizSection
        title="Layout & Spacing Quiz"
        questions={quizData[slug]}
        chapterSlug={slug}
        previousBest={cp.bestScore}
        onComplete={(answers, score, total) => saveQuizResult(slug, answers, score, total)}
      />
    </motion.div>
  );
}
