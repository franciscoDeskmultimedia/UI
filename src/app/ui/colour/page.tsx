"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import DemoPanel from "@/components/DemoPanel";
import QuizSection from "@/components/QuizSection";
import { motion } from "framer-motion";
import { useProgress } from "@/lib/progress";
import { quizData } from "@/lib/quizData";

/* ============================================
   HELPERS
   ============================================ */
function hsbToHex(h: number, s: number, b: number): string {
  const sN = s / 100;
  const bN = b / 100;
  const k = (n: number) => (n + h / 60) % 6;
  const f = (n: number) => bN * (1 - sN * Math.max(0, Math.min(k(n), 4 - k(n), 1)));
  const r = Math.round(f(5) * 255);
  const g = Math.round(f(3) * 255);
  const blue = Math.round(f(1) * 255);
  return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${blue.toString(16).padStart(2, "0")}`;
}

function luminance(hex: string): number {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const toLinear = (v: number) => (v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));
  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
}

function contrastRatio(hex1: string, hex2: string): number {
  const l1 = luminance(hex1);
  const l2 = luminance(hex2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

/* ============================================
   HSB COLOUR SYSTEM
   ============================================ */
function HSBDemo() {
  const [h, setH] = useState(260);
  const [s, setS] = useState(54);
  const [b, setB] = useState(99);

  const hex = hsbToHex(h, s, b);

  return (
    <DemoPanel title="HSB Colour System" icon="🎨">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>HSB (Hue, Saturation, Brightness)</strong> is the most intuitive way for designers to think about colour. unlike RGB or HEX which are machine codes, HSB aligns with how we perceive colour: <em>&quot;What colour is it? How vibrant is it? How bright is it?&quot;</em>
      </p>
      <p style={{ fontSize: "0.78rem", color: "var(--text-tertiary)", marginBottom: 12 }}>
        &quot;If you want to create a lighter variation of a colour, you can simply increase the brightness or decrease the saturation. This is much harder to do with Hex codes.&quot;
      </p>
      <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: 24 }}>
        Adjust the sliders below. Notice how changing just <strong>Saturation</strong> or <strong>Brightness</strong> creates logical variations of the same Hue. This is the secret to building consistent colour palettes.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "center" }}>
        <div>
          <div className="slider-container" style={{ marginBottom: 20 }}>
            <div className="slider-label">
              <span>Hue</span>
              <span>{h}°</span>
            </div>
            <input
              type="range"
              min={0}
              max={360}
              value={h}
              onChange={(e) => setH(+e.target.value)}
              style={{ background: `linear-gradient(to right, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)` }}
            />
          </div>
          <div className="slider-container" style={{ marginBottom: 20 }}>
            <div className="slider-label">
              <span>Saturation</span>
              <span>{s}%</span>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={s}
              onChange={(e) => setS(+e.target.value)}
            />
          </div>
          <div className="slider-container" style={{ marginBottom: 20 }}>
            <div className="slider-label">
              <span>Brightness</span>
              <span>{b}%</span>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={b}
              onChange={(e) => setB(+e.target.value)}
            />
          </div>
          <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginTop: 8 }}>
            Hex: <strong style={{ color: "var(--text-primary)" }}>{hex.toUpperCase()}</strong>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
          <motion.div
            animate={{ background: hex }}
            transition={{ duration: 0.15 }}
            style={{
              width: 160,
              height: 160,
              borderRadius: 20,
              boxShadow: `0 8px 40px ${hex}66`,
              border: "3px solid rgba(255,255,255,0.1)",
            }}
          />
          <div style={{ display: "flex", gap: 8 }}>
            {[20, 40, 60, 80, 100].map((brightness) => (
              <div
                key={brightness}
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 6,
                  background: hsbToHex(h, s, brightness),
                  border: brightness === b ? "2px solid white" : "1px solid rgba(255,255,255,0.1)",
                  cursor: "pointer",
                }}
                onClick={() => setB(brightness)}
                title={`Brightness: ${brightness}%`}
              />
            ))}
          </div>
        </div>
      </div>
    </DemoPanel>
  );
}

/* ============================================
   5 COLOUR VARIATIONS
   ============================================ */
function ColourVariationsDemo() {
  const [hue, setHue] = useState(260);

  const variations = [
    { name: "Darkest", s: 80, b: 30 },
    { name: "Dark", s: 65, b: 50 },
    { name: "Base", s: 54, b: 75 },
    { name: "Light", s: 35, b: 90 },
    { name: "Lightest", s: 15, b: 97 },
  ];

  return (
    <DemoPanel title="5 Colour Variations" icon="🌈">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>Never rely on a single shade for a brand colour.</strong> You need a system of variations to handle different states (hover, active) and use cases (subtle backgrounds, borders).
      </p>
      <p style={{ fontSize: "0.78rem", color: "var(--text-tertiary)", marginBottom: 12 }}>
        &quot;A good practice is to define at least 5 shades for your primary colour: The base colour, two lighter shades for backgrounds and hover states, and two darker shades for text and active states.&quot;
      </p>
      <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: 24 }}>
        The demo below generates a balanced 5-shade palette from any Hue. Notice how the <strong>Lightest</strong> shade is perfect for backgrounds, while <strong>Darkest</strong> works for text.
      </p>
      <div className="slider-container" style={{ marginBottom: 24 }}>
        <div className="slider-label">
          <span>Hue</span>
          <span>{hue}°</span>
        </div>
        <input
          type="range"
          min={0}
          max={360}
          value={hue}
          onChange={(e) => setHue(+e.target.value)}
          style={{ background: `linear-gradient(to right, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)` }}
        />
      </div>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        {variations.map((v) => {
          const hex = hsbToHex(hue, v.s, v.b);
          const textColor = v.b < 60 ? "white" : "#1a1a28";
          return (
            <div
              key={v.name}
              style={{
                flex: 1,
                minWidth: 80,
                background: hex,
                borderRadius: 12,
                padding: "20px 12px",
                textAlign: "center",
                transition: "background 0.15s",
              }}
            >
              <div style={{ fontSize: "0.72rem", fontWeight: 600, color: textColor, marginBottom: 4 }}>
                {v.name}
              </div>
              <div style={{ fontSize: "0.65rem", color: textColor, opacity: 0.7 }}>
                S:{v.s} B:{v.b}
              </div>
              <div style={{ fontSize: "0.65rem", color: textColor, opacity: 0.7, marginTop: 2 }}>
                {hex.toUpperCase()}
              </div>
            </div>
          );
        })}
      </div>
    </DemoPanel>
  );
}

/* ============================================
   CONTRAST CHECKER
   ============================================ */
function ContrastCheckerDemo() {
  const [bgColor, setBgColor] = useState("#1a1a28");
  const [textColor, setTextColor] = useState("#f0f0f5");

  const ratio = contrastRatio(textColor, bgColor);
  const passAA = ratio >= 4.5;
  const passAAA = ratio >= 7;

  const swapColors = useCallback(() => {
    setBgColor(textColor);
    setTextColor(bgColor);
  }, [bgColor, textColor]);

  return (
    <DemoPanel title="Contrast Ratio Checker" icon="🔍">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>Contrast is the difference in luminance or colour</strong> that makes an object (or its representation in an image or display) distinguishable. In web design, it&apos;s critical for readability.
      </p>
      <p style={{ fontSize: "0.78rem", color: "var(--text-tertiary)", marginBottom: 12 }}>
        &quot;Aim for a contrast ratio of at least 4.5:1 for normal text to meet WCAG AA standards. For larger text (18pt+), 3:1 is sufficient.&quot;
      </p>
      <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: 24 }}>
        Use the tool below to test different foreground/background pairings. <strong>WCAG AA</strong> is the industry standard. <strong>WCAG AAA</strong> (7:1) is distinct even for users with significant visual impairments.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        <div>
          <div style={{ marginBottom: 16 }}>
            <label style={{ fontSize: "0.82rem", color: "var(--text-secondary)", display: "block", marginBottom: 6 }}>
              Background
            </label>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <input
                type="color"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
                style={{ width: 40, height: 40, border: "none", borderRadius: 8, cursor: "pointer", background: "none" }}
              />
              <span style={{ fontSize: "0.82rem", fontFamily: "monospace", color: "var(--text-primary)" }}>
                {bgColor.toUpperCase()}
              </span>
            </div>
          </div>
          <button
            onClick={swapColors}
            style={{
              padding: "6px 14px",
              borderRadius: 8,
              background: "var(--bg-glass)",
              border: "1px solid var(--border-subtle)",
              color: "var(--text-secondary)",
              fontSize: "0.78rem",
              cursor: "pointer",
              fontFamily: "var(--font-sans)",
              marginBottom: 16,
            }}
          >
            ↕ Swap Colours
          </button>
          <div>
            <label style={{ fontSize: "0.82rem", color: "var(--text-secondary)", display: "block", marginBottom: 6 }}>
              Text
            </label>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <input
                type="color"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
                style={{ width: 40, height: 40, border: "none", borderRadius: 8, cursor: "pointer", background: "none" }}
              />
              <span style={{ fontSize: "0.82rem", fontFamily: "monospace", color: "var(--text-primary)" }}>
                {textColor.toUpperCase()}
              </span>
            </div>
          </div>
        </div>
        <div>
          <div
            style={{
              background: bgColor,
              color: textColor,
              borderRadius: 12,
              padding: 24,
              fontSize: "1.1rem",
              lineHeight: 1.6,
              marginBottom: 16,
              minHeight: 120,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              border: "1px solid var(--border-subtle)",
            }}
          >
            The quick brown fox jumps over the lazy dog.
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <div
              style={{
                flex: 1,
                padding: "12px 16px",
                borderRadius: 8,
                background: "var(--bg-tertiary)",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "1.5rem", fontWeight: 800 }}>
                {ratio.toFixed(1)}:1
              </div>
              <div style={{ fontSize: "0.72rem", color: "var(--text-tertiary)" }}>Ratio</div>
            </div>
            <div
              style={{
                flex: 1,
                padding: "12px 16px",
                borderRadius: 8,
                background: passAA ? "rgba(92,240,208,0.1)" : "rgba(252,92,92,0.1)",
                textAlign: "center",
                border: `1px solid ${passAA ? "rgba(92,240,208,0.3)" : "rgba(252,92,92,0.3)"}`,
              }}
            >
              <div style={{ fontSize: "1rem", fontWeight: 700, color: passAA ? "#5cf0d0" : "#fc5c5c" }}>
                {passAA ? "✓ Pass" : "✗ Fail"}
              </div>
              <div style={{ fontSize: "0.72rem", color: "var(--text-tertiary)" }}>WCAG AA</div>
            </div>
            <div
              style={{
                flex: 1,
                padding: "12px 16px",
                borderRadius: 8,
                background: passAAA ? "rgba(92,240,208,0.1)" : "rgba(252,92,92,0.1)",
                textAlign: "center",
                border: `1px solid ${passAAA ? "rgba(92,240,208,0.3)" : "rgba(252,92,92,0.3)"}`,
              }}
            >
              <div style={{ fontSize: "1rem", fontWeight: 700, color: passAAA ? "#5cf0d0" : "#fc5c5c" }}>
                {passAAA ? "✓ Pass" : "✗ Fail"}
              </div>
              <div style={{ fontSize: "0.72rem", color: "var(--text-tertiary)" }}>WCAG AAA</div>
            </div>
          </div>
        </div>
      </div>
    </DemoPanel>
  );
}

/* ============================================
   DARK MODE PALETTE
   ============================================ */
function DarkModeDemo() {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const themes = {
    light: {
      bg: "#ffffff",
      card: "#f5f5f7",
      text: "#1d1d1f",
      textSec: "#6e6e73",
      accent: "#0071e3",
      border: "#d2d2d7",
    },
    dark: {
      bg: "#1d1d1f",
      card: "#2d2d30",
      text: "#f5f5f7",
      textSec: "#a1a1a6",
      accent: "#2997ff",
      border: "#424245",
    },
  };

  const t = themes[mode];

  return (
    <DemoPanel title="Dark Mode Palette" icon="🌙">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>Dark mode is not just a colour inversion.</strong> It requires a distinct palette. Pure black (<code style={{ fontSize: "0.8em" }}>#000000</code>) can cause eye strain and &quot;smearing&quot; on OLED screens; dark greys (<code style={{ fontSize: "0.8em" }}>#121212</code>) are better.
      </p>
      <p style={{ fontSize: "0.78rem", color: "var(--text-tertiary)", marginBottom: 12 }}>
        &quot;In dark mode, distant surfaces are darker, and closer surfaces are lighter. This is the opposite of how shadows work in light mode.&quot;
      </p>
      <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: 24 }}>
        Toggle between modes. Notice how the dark mode uses <strong>desaturated accent colours</strong> (vibrant colours vibrate against dark backgrounds) and <strong>lighter surface layers</strong> to show depth.
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <motion.div
          animate={{ background: t.bg }}
          transition={{ duration: 0.4 }}
          style={{
            borderRadius: 16,
            padding: 24,
            maxWidth: 400,
            width: "100%",
            border: `1px solid ${t.border}`,
          }}
        >
          <motion.div animate={{ color: t.text }} style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: 8 }}>
            Dark Mode Design
          </motion.div>
          <motion.div animate={{ color: t.textSec }} style={{ fontSize: "0.88rem", lineHeight: 1.6, marginBottom: 16 }}>
            Surfaces use lighter shades of grey rather than pure black. Text uses off-white rather than pure white to reduce eye strain.
          </motion.div>
          <motion.div
            animate={{ background: t.card, borderColor: t.border }}
            style={{ borderRadius: 10, padding: 16, border: "1px solid", marginBottom: 12 }}
          >
            <motion.div animate={{ color: t.text }} style={{ fontSize: "0.88rem", fontWeight: 600 }}>
              Nested Card
            </motion.div>
            <motion.div animate={{ color: t.textSec }} style={{ fontSize: "0.78rem", marginTop: 4 }}>
              Cards use subtle background differentiation
            </motion.div>
          </motion.div>
          <motion.button
            animate={{ background: t.accent }}
            style={{
              color: "white",
              border: "none",
              padding: "10px 24px",
              borderRadius: 8,
              fontSize: "0.88rem",
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "var(--font-sans)",
            }}
          >
            Primary Action
          </motion.button>
        </motion.div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
        <div className="toggle-group">
          <button className={`toggle-option${mode === "light" ? " active" : ""}`} onClick={() => setMode("light")}>
            ☀️ Light
          </button>
          <button className={`toggle-option${mode === "dark" ? " active" : ""}`} onClick={() => setMode("dark")}>
            🌙 Dark
          </button>
        </div>
      </div>
    </DemoPanel>
  );
}

/* ============================================
   TRANSPARENT LAYERS
   ============================================ */
function TransparencyDemo() {
  const [opacity, setOpacity] = useState(10);

  return (
    <DemoPanel title="Transparent Layers" icon="🪟">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>Use alpha channels for versatility.</strong> Instead of hard-coding a lighter shade for every hover state (e.g., <code style={{ fontSize: "0.8em" }}>blue-400</code> for hover over <code style={{ fontSize: "0.8em" }}>blue-500</code>), use a transparent white or black overlay.
      </p>
      <p style={{ fontSize: "0.78rem", color: "var(--text-tertiary)", marginBottom: 12 }}>
        &quot;Using opacity allows your UI elements to adapt to different backgrounds automatically. A white overlay at 10% opacity looks good on almost any dark or vibrant colour.&quot;
      </p>
      <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: 24 }}>
        Adjust the opacity below. Notice how the same &quot;white overlay&quot; creates a perfect harmonious lighter shade for <strong>any</strong> base colour. This drastically reduces the number of tokens you need to manage.
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap", padding: "16px 0" }}>
        {["#7c5cfc", "#fc5c8c", "#5cf0d0", "#fcb85c"].map((base) => (
          <div key={base} style={{ textAlign: "center" }}>
            <div
              style={{
                width: 80,
                height: 80,
                borderRadius: 12,
                background: base,
                position: "relative",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `rgba(255,255,255,${opacity / 100})`,
                  transition: "background 0.15s",
                }}
              />
            </div>
            <div style={{ fontSize: "0.65rem", color: "var(--text-tertiary)", marginTop: 6 }}>
              white @ {opacity}%
            </div>
          </div>
        ))}
      </div>
      <div className="slider-container" style={{ maxWidth: 400, margin: "0 auto" }}>
        <div className="slider-label">
          <span>White overlay opacity</span>
          <span>{opacity}%</span>
        </div>
        <input
          type="range"
          min={0}
          max={50}
          value={opacity}
          onChange={(e) => setOpacity(+e.target.value)}
        />
      </div>
      <div
        style={{
          marginTop: 20,
          padding: 16,
          background: "var(--bg-glass)",
          borderRadius: 8,
          fontSize: "0.82rem",
          color: "var(--text-secondary)",
          lineHeight: 1.6,
        }}
      >
        💡 <strong>Tip:</strong> Instead of creating separate hover colours for every element,
        use <code style={{ color: "var(--accent-primary-light)" }}>rgba(255,255,255,0.1)</code> as
        a universal hover overlay. It works on any base colour.
      </div>
    </DemoPanel>
  );
}

const topics = [
  { title: "Ensure Sufficient Contrast", desc: "Meet WCAG 4.5:1 for text, 3:1 for UI components." },
  { title: "Don't Rely on Colour Alone", desc: "Always pair colour with text, icons, or patterns for meaning." },
  { title: "Use System Colours for Status", desc: "Red for errors, yellow for warnings, green for success." },
  { title: "Use Black & White for Timelessness", desc: "A monochrome base with one accent colour is elegant and versatile." },
  { title: "Use 1 Brand Colour", desc: "One strong brand colour applied consistently to interactive elements." },
  { title: "Create 5 Colour Variations", desc: "Darkest → Dark → Base → Light → Lightest for each colour." },
  { title: "Use the HSB System", desc: "HSB is more intuitive than RGB or HEX for creating colour variations." },
  { title: "Create a Dark Palette", desc: "Dark mode uses lighter greys, not pure black. Adjust contrast accordingly." },
  { title: "Use Transparent Colour Layers", desc: "Transparent overlays adapt to any base colour automatically." },
  { title: "Name Your Colours", desc: "Use semantic names (primary-500) not abstract names (blue-3)." },
];

export default function ColourPage() {
  return (
    <>
      <Nav />
      <div className="page-wrapper">
        <div className="container">
          <motion.div className="chapter-hero" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link href="/ui" className="back-link">← Back to Home</Link>
            <div className="chapter-hero-number" style={{ color: "#5cf0d0" }}>Chapter 3</div>
            <h1 className="chapter-hero-title">Colour</h1>
            <p className="chapter-hero-desc">
              Build accessible palettes, master HSB, create dark modes, and use transparent layers for flexible, beautiful interfaces.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <HSBDemo />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <ColourVariationsDemo />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <ContrastCheckerDemo />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <DarkModeDemo />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <TransparencyDemo />
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
          {/* Pro Tips */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="section-header" style={{ marginTop: 64 }}>
              <div className="section-label">Deep Dive</div>
              <h2 className="section-title">Pro Tips & Insights</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
              {[
                { emoji: "🌈", title: "The 60-30-10 Rule", text: "Use 60% neutral/base colour, 30% secondary colour, and 10% accent for natural visual balance." },
                { emoji: "🔍", title: "Test in Greyscale", text: "Convert your design to greyscale to check if hierarchy still works without colour." },
                { emoji: "🌙", title: "Dark Mode Tips", text: "Reduce saturation, avoid pure black, and soften shadows for comfortable dark interfaces." },
                { emoji: "♿", title: "Colour + Shape", text: "Never rely on colour alone. Pair colour with icons, labels, or patterns for accessibility." },
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
            <Link href="/ui/less-is-more" className="btn btn-secondary">← Less Is More</Link>
            <Link href="/ui/layout" className="btn btn-primary">Next: Layout →</Link>
          </div>
        </div>
      </div>
    </>
  );
}

function ChapterQuiz() {
  const { saveQuizResult, getChapterProgress, markChapterVisited } = useProgress();
  const slug = "colour";
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
        <h2 className="section-title">Chapter 3 Quiz</h2>
      </div>
      <QuizSection
        title="Colour Quiz"
        questions={quizData[slug]}
        chapterSlug={slug}
        previousBest={cp.bestScore}
        onComplete={(answers, score, total) => saveQuizResult(slug, answers, score, total)}
      />
    </motion.div>
  );
}
