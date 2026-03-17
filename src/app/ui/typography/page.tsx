"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import DemoPanel from "@/components/DemoPanel";
import QuizSection from "@/components/QuizSection";
import { motion } from "framer-motion";
import { useProgress } from "@/lib/progress";
import { quizData } from "@/lib/quizData";

function TypeScaleDemo() {
  const [baseSize, setBaseSize] = useState(16);
  const [ratio, setRatio] = useState(1.25);

  const ratios: Record<string, number> = {
    "Minor Third (1.2)": 1.2,
    "Major Third (1.25)": 1.25,
    "Perfect Fourth (1.333)": 1.333,
    "Aug Fourth (1.414)": 1.414,
    "Perfect Fifth (1.5)": 1.5,
  };

  const levels = [
    { label: "Body Small", exp: -1 },
    { label: "Body", exp: 0 },
    { label: "H6", exp: 1 },
    { label: "H5", exp: 2 },
    { label: "H4", exp: 3 },
    { label: "H3", exp: 4 },
    { label: "H2", exp: 5 },
    { label: "H1", exp: 6 },
  ];

  return (
    <DemoPanel title="Type Scale" icon="📐">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>Don&apos;t pick font sizes randomly.</strong> Use a modular scale — a mathematical ratio like 1.25 (Major Third) — to calculate your size hierarchy. This creates predictable, harmonious relationships between headings and body text.
      </p>
      <p style={{ fontSize: "0.78rem", color: "var(--text-tertiary)", marginBottom: 12 }}>
        &quot;Musical scales are based on mathematical relationships between frequencies. Visual scales are based on mathematical relationships between sizes.&quot;
      </p>
      <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: 24 }}>
        Adjust the <strong>Base Size</strong> and <strong>Ratio</strong> below. Notice how a larger ratio (like Perfect Fifth 1.5) creates dramatic contrast suitable for marketing sites, while smaller ratios work better for dashboards.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 32 }}>
        <div>
          <div className="slider-container" style={{ marginBottom: 20 }}>
            <div className="slider-label">
              <span>Base Size</span>
              <span>{baseSize}px</span>
            </div>
            <input type="range" min={12} max={24} value={baseSize} onChange={(e) => setBaseSize(+e.target.value)} />
          </div>
          <div style={{ marginBottom: 8 }}>
            <span style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>Scale Ratio</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {Object.entries(ratios).map(([name, val]) => (
              <button
                key={name}
                className={`demo-btn${ratio === val ? " active" : ""}`}
                onClick={() => setRatio(val)}
                style={{ textAlign: "left" }}
              >
                {name}
              </button>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 4, justifyContent: "center" }}>
          {[...levels].reverse().map((level) => {
            const size = Math.round(baseSize * Math.pow(ratio, level.exp) * 10) / 10;
            return (
              <div key={level.label} style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                <div style={{ width: 80, textAlign: "right", fontSize: "0.7rem", color: "var(--text-tertiary)", flexShrink: 0 }}>
                  {level.label}
                  <br />
                  <span style={{ color: "var(--accent-primary-light)" }}>{size}px</span>
                </div>
                <motion.div
                  animate={{ fontSize: size }}
                  transition={{ duration: 0.3 }}
                  style={{
                    fontWeight: level.exp >= 1 ? 700 : 400,
                    lineHeight: 1.2,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    color: "var(--text-primary)",
                  }}
                >
                  {level.exp >= 4 ? "Headline" : level.exp >= 1 ? "Heading Text" : "Body text sample"}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </DemoPanel>
  );
}

function LineHeightDemo() {
  const [lineHeight, setLineHeight] = useState(1.6);

  return (
    <DemoPanel title="Line Height" icon="↕️">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>Line height controls the &quot;breathability&quot; of text.</strong> For long-form body text, a line-height of <strong>1.5 to 1.6</strong> is ideal for readability. Headings need tighter spacing (1.1 to 1.3) because they are larger.
      </p>
      <p style={{ fontSize: "0.78rem", color: "var(--text-tertiary)", marginBottom: 12 }}>
        &quot;As font size increases, line height should decrease. Large headings look like they are drifting apart if they use the same line height as body text.&quot;
      </p>
      <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: 24 }}>
        Drag the slider below. Notice how tighter leading (1.0-1.2) feels cramped for body text, while generous leading (1.6) invites the eye to keep reading.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        <div>
          <div className="slider-container" style={{ marginBottom: 20 }}>
            <div className="slider-label">
              <span>Line Height</span>
              <span>{lineHeight.toFixed(1)}</span>
            </div>
            <input type="range" min={1} max={2.5} step={0.1} value={lineHeight} onChange={(e) => setLineHeight(+e.target.value)} />
          </div>
          <div
            style={{
              padding: 12,
              borderRadius: 8,
              background: lineHeight >= 1.5 ? "rgba(92,240,208,0.1)" : "rgba(252,92,92,0.1)",
              border: `1px solid ${lineHeight >= 1.5 ? "rgba(92,240,208,0.3)" : "rgba(252,92,92,0.3)"}`,
              fontSize: "0.82rem",
              color: lineHeight >= 1.5 ? "#5cf0d0" : "#fc5c5c",
              transition: "all 0.3s",
            }}
          >
            {lineHeight >= 1.5
              ? "✓ Good readability for body text"
              : "✗ Too tight — may cause reading fatigue"}
          </div>
        </div>
        <div
          style={{
            background: "var(--bg-tertiary)",
            borderRadius: 12,
            padding: 20,
            border: "1px solid var(--border-subtle)",
          }}
        >
          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--text-secondary)",
              lineHeight: lineHeight,
              transition: "line-height 0.2s",
            }}
          >
            Typography is the art and technique of arranging type to make written language legible,
            readable, and appealing when displayed. The arrangement of type involves selecting
            typefaces, point sizes, line lengths, line-spacing, and letter-spacing.
          </p>
        </div>
      </div>
    </DemoPanel>
  );
}

function FontWeightDemo() {
  const [showAll, setShowAll] = useState(false);

  const weights = [
    { value: 100, name: "Thin" },
    { value: 200, name: "Extra Light" },
    { value: 300, name: "Light" },
    { value: 400, name: "Regular" },
    { value: 500, name: "Medium" },
    { value: 600, name: "Semi Bold" },
    { value: 700, name: "Bold" },
    { value: 800, name: "Extra Bold" },
    { value: 900, name: "Black" },
  ];

  const recommended = [400, 700];

  return (
    <DemoPanel title="Font Weights" icon="⚖️">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>Limit your weights.</strong> Most well-designed interfaces rely primarily on <strong>Regular (400)</strong> and <strong>Bold (700)</strong>. Using every weight available (100–900) creates visual noise and slows down page loads.
      </p>
      <p style={{ fontSize: "0.78rem", color: "var(--text-tertiary)", marginBottom: 12 }}>
        &quot;Just because a typeface has 18 weights doesn&apos;t mean you must use them all. Simplify your system.&quot;
      </p>
      <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: 24 }}>
        Toggle to see &quot;Recommended&quot; vs &quot;All Weights&quot;. Notice how the simplified palette feels more intentional and cleaner.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {weights.map((w) => {
          const isRecommended = recommended.includes(w.value);
          const dimmed = !showAll && !isRecommended;

          return (
            <motion.div
              key={w.value}
              animate={{ opacity: dimmed ? 0.2 : 1, scale: dimmed ? 0.98 : 1 }}
              transition={{ duration: 0.3 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                padding: "8px 16px",
                borderRadius: 8,
                background: isRecommended && !showAll ? "rgba(124,92,252,0.08)" : "transparent",
                border: isRecommended && !showAll ? "1px solid rgba(124,92,252,0.2)" : "1px solid transparent",
              }}
            >
              <div style={{ width: 40, fontSize: "0.72rem", color: "var(--text-tertiary)", textAlign: "right" }}>
                {w.value}
              </div>
              <div style={{ fontWeight: w.value, fontSize: "1.3rem" }}>
                The quick brown fox
              </div>
              <div style={{ marginLeft: "auto", fontSize: "0.72rem", color: "var(--text-tertiary)" }}>
                {w.name}
              </div>
              {isRecommended && !showAll && (
                <span style={{ fontSize: "0.65rem", background: "var(--accent-primary)", color: "white", padding: "2px 8px", borderRadius: 100, fontWeight: 600 }}>
                  Recommended
                </span>
              )}
            </motion.div>
          );
        })}
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
        <div className="toggle-group">
          <button className={`toggle-option${!showAll ? " active" : ""}`} onClick={() => setShowAll(false)}>
            Recommended Only
          </button>
          <button className={`toggle-option${showAll ? " active" : ""}`} onClick={() => setShowAll(true)}>
            Show All Weights
          </button>
        </div>
      </div>
    </DemoPanel>
  );
}

function LineLengthDemo() {
  const [maxWidth, setMaxWidth] = useState(600);

  const charCount = Math.round(maxWidth / 8.5); // rough estimate

  return (
    <DemoPanel title="Line Length (Measure)" icon="📏">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>The golden rule of readability:</strong> Aim for <strong>45–75 characters per line</strong>. Lines that are too long tire the eye as it tracks back to the next line. Lines that are too short break the reading rhythm.
      </p>
      <p style={{ fontSize: "0.78rem", color: "var(--text-tertiary)", marginBottom: 12 }}>
        &quot;If you can&apos;t control the width of the container (e.g., fluid layouts), use `max-width` on your text block to ensure it never exceeds ~75 characters.&quot;
      </p>
      <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: 24 }}>
        Drag the slider to find the &quot;ideal&quot; range (green border). Notice how much more comfortable it is to read when the measure is constrained.
      </p>
      <div className="slider-container" style={{ marginBottom: 20, maxWidth: 400 }}>
        <div className="slider-label">
          <span>Max Width</span>
          <span>{maxWidth}px (~{charCount} chars)</span>
        </div>
        <input type="range" min={200} max={900} value={maxWidth} onChange={(e) => setMaxWidth(+e.target.value)} />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <motion.div
          animate={{ maxWidth }}
          transition={{ duration: 0.3 }}
          style={{
            background: "var(--bg-tertiary)",
            borderRadius: 12,
            padding: 24,
            border: `1px solid ${charCount >= 45 && charCount <= 75 ? "rgba(92,240,208,0.3)" : "rgba(252,92,92,0.3)"}`,
            transition: "border-color 0.3s",
            width: "100%",
          }}
        >
          <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "var(--text-secondary)" }}>
            Typography is the art and technique of arranging type to make written language
            legible, readable, and appealing when displayed. The arrangement of type involves
            selecting typefaces, point sizes, line lengths, line-spacing, and letter-spacing,
            and adjusting the space between pairs of letters.
          </p>
        </motion.div>
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: 12,
          fontSize: "0.82rem",
          color: charCount >= 45 && charCount <= 75 ? "#5cf0d0" : "#fc5c5c",
        }}
      >
        {charCount < 45 ? "✗ Too narrow — eyes need to jump lines too frequently" : charCount > 75 ? "✗ Too wide — hard to track back to the start of the next line" : "✓ Ideal line length range"}
      </div>
    </DemoPanel>
  );
}

/* ---- NEW: Typeface Pairing Demo ---- */
function TypefacePairingDemo() {
  const [paired, setPaired] = useState(false);

  return (
    <DemoPanel title="Typeface Pairing" icon="🔤">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>One serif + one sans-serif.</strong> Tthat&apos;s the classic pairing. Use a geometric or humanist sans-serif for body text (readability), and a characterful serif for headings (personality).
      </p>
      <p style={{ fontSize: "0.78rem", color: "var(--text-tertiary)", marginBottom: 12 }}>
        &quot;You rarely need more than two typefaces. Ideally, use one typeface family with multiple weights. If you must pair, choose typefaces with contrasting structures.&quot;
      </p>
      <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: 24 }}>
        Toggle the pairing. Notice how adding a serif for the headline instantly gives the design a more editorial, sophisticated feel compared to the mono-typeface version.
      </p>
      <div style={{ display: "flex", justifyContent: "center", padding: "16px 0" }}>
        <div style={{ maxWidth: 400, width: "100%", background: "var(--bg-tertiary)", border: "1px solid var(--border-subtle)", borderRadius: 12, padding: 28 }}>
          <div style={{ fontFamily: paired ? "Georgia, 'Times New Roman', serif" : "var(--font-sans)", fontSize: "1.5rem", fontWeight: 700, marginBottom: 8, lineHeight: 1.2 }}>
            The Art of Typography
          </div>
          <div style={{ fontFamily: paired ? "Georgia, 'Times New Roman', serif" : "var(--font-sans)", fontSize: "0.95rem", color: "var(--text-tertiary)", marginBottom: 16, fontStyle: paired ? "italic" : "normal" }}>
            Crafting readable, beautiful text
          </div>
          <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
            Typography is not just about choosing a font. It&apos;s about creating hierarchy, guiding the reader&apos;s eye, and setting the tone. The right pairing can transform a plain interface into something memorable.
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 16 }}>
        <div className="toggle-group">
          <button className={`toggle-option${!paired ? " active" : ""}`} onClick={() => setPaired(false)}>Single Typeface</button>
          <button className={`toggle-option${paired ? " active" : ""}`} onClick={() => setPaired(true)}>Serif + Sans Pair</button>
        </div>
      </div>
    </DemoPanel>
  );
}

/* ---- NEW: Text Colour Hierarchy Demo ---- */
function TextColourDemo() {
  const [hierarchy, setHierarchy] = useState(true);

  return (
    <DemoPanel title="Text Colour Hierarchy" icon="🎨">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>Text hierarchy isn&apos;t just about size — it&apos;s about colour too.</strong> Define at least 3 distinct text colours: <strong>Primary</strong> (high contrast for headings), <strong>Secondary</strong> (for body text), and <strong>Tertiary</strong> (for metadata/hints).
      </p>
      <p style={{ fontSize: "0.78rem", color: "var(--text-tertiary)", marginBottom: 12 }}>
        &quot;Pure black on pure white is often too harsh. Soften your primary text colour to a very dark grey to reduce eye strain.&quot;
      </p>
      <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: 24 }}>
        Toggle hierarchy. Without colour differentiation, everything fights for attention. With it, the eye naturally flows from the product name to the price, then the description.
      </p>
      <div style={{ display: "flex", justifyContent: "center", padding: "16px 0" }}>
        <div style={{ maxWidth: 340, width: "100%", background: "var(--bg-tertiary)", border: "1px solid var(--border-subtle)", borderRadius: 12, padding: 24 }}>
          <div style={{ color: hierarchy ? "var(--text-primary)" : "var(--text-secondary)", fontWeight: hierarchy ? 700 : 400, fontSize: hierarchy ? "1.1rem" : "0.88rem", marginBottom: 8 }}>
            Wireless Headphones
          </div>
          <div style={{ color: hierarchy ? "var(--text-secondary)" : "var(--text-secondary)", fontWeight: 400, fontSize: "0.85rem", lineHeight: 1.6, marginBottom: 12 }}>
            Premium noise-cancelling headphones with 30-hour battery life and studio-quality sound.
          </div>
          <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
            <span style={{ color: hierarchy ? "var(--accent-primary-light)" : "var(--text-secondary)", fontWeight: hierarchy ? 700 : 400, fontSize: hierarchy ? "1.1rem" : "0.88rem" }}>$349</span>
            <span style={{ color: hierarchy ? "var(--text-tertiary)" : "var(--text-secondary)", fontSize: hierarchy ? "0.75rem" : "0.88rem", alignSelf: "center" }}>★ 4.8 (2,450 reviews)</span>
          </div>
          <div style={{ display: "flex", gap: 6, fontSize: "0.72rem", color: hierarchy ? "var(--text-tertiary)" : "var(--text-secondary)" }}>
            <span>Free shipping</span> · <span>2 colours</span> · <span>In stock</span>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 16 }}>
        <div className="toggle-group">
          <button className={`toggle-option${!hierarchy ? " active" : ""}`} onClick={() => setHierarchy(false)}>❌ Same Colour</button>
          <button className={`toggle-option${hierarchy ? " active" : ""}`} onClick={() => setHierarchy(true)}>✅ Colour Hierarchy</button>
        </div>
      </div>
    </DemoPanel>
  );
}

const topics = [
  { title: "Use a Sans Serif Default", desc: "A simple sans serif like Inter or Roboto works for most interfaces. They're highly readable at small sizes." },
  { title: "One Typeface Is Often Enough", desc: "For most products, a single sans-serif typeface with Regular and Bold weights is sufficient." },
  { title: "Pair with Serif for Contrast", desc: "Adding a contrasting serif for headings can add personality. Ensure it pairs well with your body typeface." },
  { title: "Regular & Bold Only", desc: "Two weights is usually all you need. More weights increase complexity without adding value." },
  { title: "Use a Type Scale", desc: "Set font sizes using a mathematical ratio (e.g., Major Third 1.25) for harmonious size relationships." },
  { title: "At Least 1.5 Line Height", desc: "Long body text needs generous line height. Decrease line height as font size increases." },
  { title: "45–75 Characters per Line", desc: "The ideal measure. Too wide: hard to track back. Too narrow: eyes jump too frequently." },
  { title: "Left Align Text", desc: "Left-aligned text is easiest to read for LTR languages. Avoid justify for body text." },
  { title: "Tighter Spacing for Large Text", desc: "Large headings benefit from slightly tighter letter spacing. Small text needs a little more." },
  { title: "3 Text Colour Variations", desc: "Use strong, default, and weak text colours to create visual hierarchy within text content." },
  { title: "Avoid Pure Black & Light Grey", desc: "Use off-black (#1d1d1f) and medium-grey (#6e6e73) for warmth and readability." },
];

export default function TypographyPage() {
  return (
    <>
      <Nav />
      <div className="page-wrapper">
        <div className="container">
          <motion.div className="chapter-hero" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link href="/ui" className="back-link">← Back to Home</Link>
            <div className="chapter-hero-number" style={{ color: "#fcb85c" }}>Chapter 5</div>
            <h1 className="chapter-hero-title">Typography</h1>
            <p className="chapter-hero-desc">
              Choose typefaces, set scales, control line height, and ensure readability at every size.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <TypeScaleDemo />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <TypefacePairingDemo />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <LineHeightDemo />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <FontWeightDemo />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <LineLengthDemo />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <TextColourDemo />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="section-header" style={{ marginTop: 64 }}>
              <div className="section-label">All Topics</div>
              <h2 className="section-title">Key Principles</h2>
            </div>
            <div className="topic-list">
              {topics.map((t, i) => (
                <div key={i} className="topic-item">
                  <div className="topic-num" style={{ background: "linear-gradient(135deg, #fcb85c, #fc5c8c)" }}>{i + 1}</div>
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
                { emoji: "🔤", title: "Keep It Simple", text: "One or two typefaces, two weights. Complexity in typography creates visual noise." },
                { emoji: "📐", title: "Use a Scale", text: "Mathematical type scales ensure harmonious relationships between font sizes across the interface." },
                { emoji: "📏", title: "Measure Matters", text: "45-75 characters per line. Use max-width to constrain text columns for comfortable reading." },
                { emoji: "↕️", title: "Line Height Scales", text: "At least 1.5 for body text. Decrease as font size increases. Large headings need tight leading." },
                { emoji: "🎨", title: "Colour Creates Hierarchy", text: "Strong, default, and weak text colours guide the reader's attention through the content." },
                { emoji: "🔍", title: "Optical Adjustments", text: "Tighter letter-spacing for large text, more spacing for small. Adjust optically, not mathematically." },
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
            <Link href="/ui/layout" className="btn btn-secondary">← Layout</Link>
            <Link href="/ui/copywriting" className="btn btn-primary">Next: Copywriting →</Link>
          </div>
        </div>
      </div>
    </>
  );
}

function ChapterQuiz() {
  const { saveQuizResult, getChapterProgress, markChapterVisited } = useProgress();
  const slug = "typography";
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
        <h2 className="section-title">Chapter 5 Quiz</h2>
      </div>
      <QuizSection
        title="Typography Quiz"
        questions={quizData[slug]}
        chapterSlug={slug}
        previousBest={cp.bestScore}
        onComplete={(answers, score, total) => saveQuizResult(slug, answers, score, total)}
      />
    </motion.div>
  );
}
