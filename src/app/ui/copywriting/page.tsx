"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import DemoPanel from "@/components/DemoPanel";
import QuizSection from "@/components/QuizSection";
import { motion, AnimatePresence } from "framer-motion";
import { useProgress } from "@/lib/progress";
import { quizData } from "@/lib/quizData";

function ConciseDemo() {
  const [concise, setConcise] = useState(false);

  const examples = [
    {
      verbose: "Would you like to save the article? Don't worry, you'll still be able to publish it at a later date. You can always find saved articles in your library.",
      vBtn: "Yes, save the article",
      conciseText: "Save the article to your library to publish later.",
      cBtn: "Save article",
    },
    {
      verbose: "Are you sure you want to permanently delete this item? This action cannot be undone and the item will be removed from your account forever.",
      vBtn: "Yes, I'm sure I want to delete",
      conciseText: "This item will be permanently deleted.",
      cBtn: "Delete item",
    },
    {
      verbose: "In order to continue with the checkout process, you will need to provide your shipping address information so we can deliver your order.",
      vBtn: "Continue to the next step",
      conciseText: "Enter your shipping address to continue.",
      cBtn: "Continue",
    },
  ];

  const [current, setCurrent] = useState(0);
  const ex = examples[current];

  return (
    <DemoPanel title="Be Concise" icon="✂️">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>Omit needless words.</strong> Vigorous writing is concise. A sentence should contain no unnecessary words, for the same reason that a drawing should have no unnecessary lines.
      </p>
      <p style={{ fontSize: "0.78rem", color: "var(--text-tertiary)", marginBottom: 12 }}>
        &quot;If you can say it in 5 words, don&apos;t use 10. Every extra word dilutes your message and increases cognitive load.&quot;
      </p>
      <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: 24 }}>
        Toggle between verbose and concise versions. Notice how the concise version is not just shorter, but stronger and more confident.
      </p>
      <div style={{ display: "flex", gap: 8, marginBottom: 20, justifyContent: "center" }}>
        {examples.map((_, i) => (
          <button
            key={i}
            className={`demo-btn${current === i ? " active" : ""}`}
            onClick={() => setCurrent(i)}
          >
            Example {i + 1}
          </button>
        ))}
      </div>
      <div className="before-after">
        <div className="before-panel" style={{ opacity: !concise ? 1 : 0.4, transition: "opacity 0.3s" }}>
          <div className="panel-label">✗ Verbose</div>
          <div
            style={{
              background: "var(--bg-tertiary)",
              borderRadius: 12,
              padding: 20,
              textAlign: "center",
            }}
          >
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "var(--text-secondary)", marginBottom: 16 }}>
              {ex.verbose}
            </p>
            <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
              <button
                style={{
                  padding: "8px 16px",
                  borderRadius: 8,
                  background: "var(--accent-primary)",
                  color: "white",
                  border: "none",
                  fontSize: "0.82rem",
                  fontFamily: "var(--font-sans)",
                  cursor: "pointer",
                }}
              >
                {ex.vBtn}
              </button>
              <button
                style={{
                  padding: "8px 16px",
                  borderRadius: 8,
                  background: "transparent",
                  color: "var(--text-secondary)",
                  border: "1px solid var(--border-subtle)",
                  fontSize: "0.82rem",
                  fontFamily: "var(--font-sans)",
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
            </div>
            <div style={{ marginTop: 8, fontSize: "0.7rem", color: "var(--text-tertiary)" }}>
              {ex.verbose.split(" ").length} words
            </div>
          </div>
        </div>

        <div className="after-panel" style={{ opacity: concise ? 1 : 0.4, transition: "opacity 0.3s" }}>
          <div className="panel-label">✓ Concise</div>
          <div
            style={{
              background: "var(--bg-tertiary)",
              borderRadius: 12,
              padding: 20,
              textAlign: "center",
            }}
          >
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "var(--text-secondary)", marginBottom: 16 }}>
              {ex.conciseText}
            </p>
            <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
              <button
                style={{
                  padding: "8px 16px",
                  borderRadius: 8,
                  background: "var(--accent-primary)",
                  color: "white",
                  border: "none",
                  fontSize: "0.82rem",
                  fontFamily: "var(--font-sans)",
                  cursor: "pointer",
                }}
              >
                {ex.cBtn}
              </button>
              <button
                style={{
                  padding: "8px 16px",
                  borderRadius: 8,
                  background: "transparent",
                  color: "var(--text-secondary)",
                  border: "1px solid var(--border-subtle)",
                  fontSize: "0.82rem",
                  fontFamily: "var(--font-sans)",
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
            </div>
            <div style={{ marginTop: 8, fontSize: "0.7rem", color: "var(--text-tertiary)" }}>
              {ex.conciseText.split(" ").length} words
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
        <div className="toggle-group">
          <button className={`toggle-option${!concise ? " active" : ""}`} onClick={() => setConcise(false)}>
            Verbose
          </button>
          <button className={`toggle-option${concise ? " active" : ""}`} onClick={() => setConcise(true)}>
            Concise
          </button>
        </div>
      </div>
    </DemoPanel>
  );
}

function SentenceCaseDemo() {
  const [sentenceCase, setSentenceCase] = useState(false);

  const menuItems = [
    "Account Settings",
    "Change Password",
    "Notification Preferences",
    "Privacy And Security",
    "Help And Support",
  ];

  return (
    <DemoPanel title="Sentence Case vs Title Case" icon="Aa">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>Sentence case is easier to read.</strong> Title Case forces the eye to pause at every capital letter. Sentence case flows naturally, like a conversation.
      </p>
      <p style={{ fontSize: "0.78rem", color: "var(--text-tertiary)", marginBottom: 12 }}>
        &quot;Title Case Is Harder To Read Because Validating The Capital Letters Slows You Down. Sentence case is friendly and approachable.&quot;
      </p>
      <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: 24 }}>
        Toggle below. Most modern design systems (Google Material, Apple Human Interface, Gov.uk) now recommend sentence case for almost everything.
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            background: "var(--bg-tertiary)",
            borderRadius: 12,
            padding: 4,
            maxWidth: 280,
            width: "100%",
          }}
        >
          {menuItems.map((item, i) => {
            const lower = item.charAt(0) + item.slice(1).toLowerCase();
            return (
              <div
                key={i}
                style={{
                  padding: "12px 16px",
                  borderRadius: 8,
                  fontSize: "0.88rem",
                  color: i === 0 ? "var(--accent-primary-light)" : "var(--text-secondary)",
                  background: i === 0 ? "rgba(124,92,252,0.1)" : "transparent",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {sentenceCase ? lower : item}
              </div>
            );
          })}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
        <div className="toggle-group">
          <button className={`toggle-option${!sentenceCase ? " active" : ""}`} onClick={() => setSentenceCase(false)}>
            Title Case
          </button>
          <button className={`toggle-option${sentenceCase ? " active" : ""}`} onClick={() => setSentenceCase(true)}>
            Sentence case
          </button>
        </div>
      </div>
    </DemoPanel>
  );
}

function ErrorMessagesDemo() {
  const [good, setGood] = useState(false);

  return (
    <DemoPanel title="Error Messages" icon="⚠️">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>Don&apos;t blame the user.</strong> A good error message explains <strong>what happened</strong>, <strong>why it happened</strong>, and <strong>how to fix it</strong>.
      </p>
      <p style={{ fontSize: "0.78rem", color: "var(--text-tertiary)", marginBottom: 12 }}>
        &quot;Avoid generic messages like &apos;An error occurred&apos;. Be specific. Instead of &apos;Invalid input&apos;, say &apos;The expiry date must be in the future&apos;.&quot;
      </p>
      <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: 24 }}>
        Compare the Vague vs Helpful errors. Helpful errors turn a frustrating dead-end into a solvable problem.
      </p>
      <div className="before-after">
        <div className="before-panel" style={{ opacity: !good ? 1 : 0.4 }}>
          <div className="panel-label">✗ Vague Errors</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              "Error: Invalid input",
              "Something went wrong",
              "Error 422",
              "Please try again",
            ].map((msg, i) => (
              <div
                key={i}
                style={{
                  padding: "10px 14px",
                  borderRadius: 8,
                  background: "rgba(252,92,92,0.1)",
                  border: "1px solid rgba(252,92,92,0.2)",
                  fontSize: "0.82rem",
                  color: "#fc5c5c",
                }}
              >
                {msg}
              </div>
            ))}
          </div>
        </div>

        <div className="after-panel" style={{ opacity: good ? 1 : 0.4 }}>
          <div className="panel-label">✓ Helpful Errors</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              "Email must include an @ symbol",
              "Unable to connect. Check your internet and retry.",
              "Password must be at least 8 characters",
              "This email is already registered. Try logging in.",
            ].map((msg, i) => (
              <div
                key={i}
                style={{
                  padding: "10px 14px",
                  borderRadius: 8,
                  background: "rgba(92,240,208,0.05)",
                  border: "1px solid rgba(92,240,208,0.2)",
                  fontSize: "0.82rem",
                  color: "var(--text-secondary)",
                }}
              >
                {msg}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
        <div className="toggle-group">
          <button className={`toggle-option${!good ? " active" : ""}`} onClick={() => setGood(false)}>
            Vague
          </button>
          <button className={`toggle-option${good ? " active" : ""}`} onClick={() => setGood(true)}>
            Helpful
          </button>
        </div>
      </div>
    </DemoPanel>
  );
}

function FrontLoadDemo() {
  const [frontLoaded, setFrontLoaded] = useState(false);

  const items = [
    {
      before: "In order to manage your billing information, go to Settings",
      after: "Billing: Manage in Settings",
    },
    {
      before: "If you want to learn more about our pricing plans, click here",
      after: "Pricing plans — learn more",
    },
    {
      before: "We are currently experiencing issues with our payment system",
      after: "Payment system: temporarily unavailable",
    },
  ];

  return (
    <DemoPanel title="Front-Load Text" icon="🔝">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>Put the most important words first.</strong> Users often scan only the first 2 words of a line (F-shaped Pattern). If the key info is at the end, they might miss it.
      </p>
      <p style={{ fontSize: "0.78rem", color: "var(--text-tertiary)", marginBottom: 12 }}>
        &quot;Front-loading allows users to stop reading as soon as they find what they constitute looking for.&quot;
      </p>
      <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: 24 }}>
        Notice how the &quot;Front-Loaded&quot; version puts the topic (Billing, Pricing, Payment) right at the start, making the list instantly scannable.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {items.map((item, i) => (
          <AnimatePresence mode="wait" key={i}>
            <motion.div
              key={frontLoaded ? "after" : "before"}
              initial={{ opacity: 0, x: frontLoaded ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: frontLoaded ? -20 : 20 }}
              style={{
                padding: "14px 18px",
                borderRadius: 10,
                background: "var(--bg-tertiary)",
                border: "1px solid var(--border-subtle)",
                fontSize: "0.88rem",
                color: "var(--text-secondary)",
                lineHeight: 1.5,
              }}
            >
              <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>
                {(frontLoaded ? item.after : item.before).split(" ").slice(0, 3).join(" ")}
              </span>{" "}
              {(frontLoaded ? item.after : item.before).split(" ").slice(3).join(" ")}
            </motion.div>
          </AnimatePresence>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
        <div className="toggle-group">
          <button className={`toggle-option${!frontLoaded ? " active" : ""}`} onClick={() => setFrontLoaded(false)}>
            Buried Info
          </button>
          <button className={`toggle-option${frontLoaded ? " active" : ""}`} onClick={() => setFrontLoaded(true)}>
            Front-Loaded
          </button>
        </div>
      </div>
    </DemoPanel>
  );
}

/* ---- NEW: Active Voice Demo ---- */
function ActiveVoiceDemo() {
  const [active, setActive] = useState(false);

  const pairs = [
    { passive: "The form was submitted by you.", active: "You submitted the form." },
    { passive: "Your order has been received by our team.", active: "We received your order." },
    { passive: "The password was changed successfully.", active: "You changed your password." },
    { passive: "An error was encountered during processing.", active: "We hit a problem processing your request." },
  ];

  return (
    <DemoPanel title="Use Active Voice" icon="💬">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>Active voice is clearer and more direct.</strong> It creates a subject-verb-object structure that is easier to process. Passive voice often sounds evasive or bureaucratic.
      </p>
      <p style={{ fontSize: "0.78rem", color: "var(--text-tertiary)", marginBottom: 12 }}>
        &quot;Passive: &apos;Mistakes were made.&apos; (By whom?) Active: &apos;We made a mistake.&apos; (Ownership).&quot;
      </p>
      <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: 24 }}>
        Toggle the examples. Active voice feels more human and takes ownership of the action.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {pairs.map((p, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div style={{ padding: "12px 16px", borderRadius: 8, background: active ? "rgba(252,92,92,0.05)" : "var(--bg-tertiary)", border: `1px solid ${active ? "rgba(252,92,92,0.15)" : "var(--border-subtle)"}`, fontSize: "0.82rem", color: active ? "var(--text-tertiary)" : "var(--text-secondary)", transition: "all 0.3s", textDecoration: active ? "line-through" : "none" }}>
              {p.passive}
            </div>
            <div style={{ padding: "12px 16px", borderRadius: 8, background: active ? "rgba(92,240,208,0.06)" : "var(--bg-tertiary)", border: `1px solid ${active ? "rgba(92,240,208,0.2)" : "var(--border-subtle)"}`, fontSize: "0.82rem", color: "var(--text-secondary)", transition: "all 0.3s", fontWeight: active ? 500 : 400 }}>
              {p.active}
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 16 }}>
        <div className="toggle-group">
          <button className={`toggle-option${!active ? " active" : ""}`} onClick={() => setActive(false)}>Both Equal</button>
          <button className={`toggle-option${active ? " active" : ""}`} onClick={() => setActive(true)}>✅ Prefer Active</button>
        </div>
      </div>
    </DemoPanel>
  );
}

/* ---- NEW: Numbers Over Words Demo ---- */
function NumbersDemo() {
  const [useNumerals, setUseNumerals] = useState(false);

  return (
    <DemoPanel title="Use Numerals, Not Words" icon="🔢">
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 8 }}>
        <strong>Numerals are distinct visual anchors.</strong> In a wall of text, numbers stand out effectively because they are shaped differently than letters.
      </p>
      <p style={{ fontSize: "0.78rem", color: "var(--text-tertiary)", marginBottom: 12 }}>
        &quot;Users scan for specific data. &apos;23&apos; pops out. &apos;Twenty-three&apos; gets lost. Use numerals for any number &gt; 2.&quot;
      </p>
      <div style={{ display: "flex", justifyContent: "center", padding: "16px 0" }}>
        <div style={{ maxWidth: 360, width: "100%", background: "var(--bg-tertiary)", border: "1px solid var(--border-subtle)", borderRadius: 12, padding: 20 }}>
          <div style={{ fontWeight: 700, fontSize: "0.92rem", marginBottom: 16 }}>Plan Features</div>
          {[
            { word: "Up to five users", num: "Up to 5 users" },
            { word: "Twenty gigabytes of storage", num: "20 GB of storage" },
            { word: "Fourteen-day free trial", num: "14-day free trial" },
            { word: "Ninety-nine point nine percent uptime", num: "99.9% uptime" },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 0", borderBottom: i < 3 ? "1px solid var(--border-subtle)" : "none" }}>
              <span style={{ color: "var(--accent-primary-light)", fontSize: "0.82rem" }}>✓</span>
              <span style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>{useNumerals ? item.num : item.word}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 16 }}>
        <div className="toggle-group">
          <button className={`toggle-option${!useNumerals ? " active" : ""}`} onClick={() => setUseNumerals(false)}>❌ Words</button>
          <button className={`toggle-option${useNumerals ? " active" : ""}`} onClick={() => setUseNumerals(true)}>✅ Numerals</button>
        </div>
      </div>
    </DemoPanel>
  );
}

const topics = [
  { title: "Be Concise", desc: "Remove unnecessary words. Short, clear copy is more effective than verbose explanations." },
  { title: "Use Sentence Case", desc: "Sentence case is more natural, easier to scan, and friendlier than Title Case." },
  { title: "Use Plain Language", desc: "Avoid jargon, acronyms, and complex vocabulary. Write for a general audience." },
  { title: "Front-Load Text", desc: "Put the most important information first. Users scan the first few words of each line." },
  { title: "Use Active Voice", desc: "Active voice is more direct and easier to understand than passive voice." },
  { title: "Use Numerals", desc: "Numerals are easier to scan than spelled-out numbers. '5 users' not 'five users'." },
  { title: "Inverted Pyramid", desc: "Start with the conclusion, then add supporting detail. Most important information first." },
  { title: "Consistent Vocabulary", desc: "Same concept = same word everywhere. Don't alternate between 'Delete' and 'Remove'." },
  { title: "Descriptive Headings", desc: "Break up content with headings that summarize what follows. They help users scan." },
  { title: "Clear Error Messages", desc: "Explain what went wrong AND how to fix it. Include specific guidance, not generic errors." },
  { title: "Limit UPPERCASE", desc: "Uppercase text is harder to read and feels like shouting. Use sparingly for labels." },
];

export default function CopywritingPage() {
  return (
    <>
      <Nav />
      <div className="page-wrapper">
        <div className="container">
          <motion.div className="chapter-hero" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link href="/ui" className="back-link">← Back to Home</Link>
            <div className="chapter-hero-number" style={{ color: "#fc5c5c" }}>Chapter 6</div>
            <h1 className="chapter-hero-title">Copywriting</h1>
            <p className="chapter-hero-desc">
              Write concise, clear interface text that guides users effectively.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <ConciseDemo />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <SentenceCaseDemo />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <ActiveVoiceDemo />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <ErrorMessagesDemo />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <FrontLoadDemo />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <NumbersDemo />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="section-header" style={{ marginTop: 64 }}>
              <div className="section-label">All Topics</div>
              <h2 className="section-title">Key Principles</h2>
            </div>
            <div className="topic-list">
              {topics.map((t, i) => (
                <div key={i} className="topic-item">
                  <div className="topic-num" style={{ background: "linear-gradient(135deg, #fc5c5c, #fc5c8c)" }}>{i + 1}</div>
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
                { emoji: "✂️", title: "Cut, Then Cut Again", text: "Write your text, then cut it in half. Then cut it again. The shortest copy that communicates wins." },
                { emoji: "💬", title: "Active Over Passive", text: "Active voice is direct and personal. 'You submitted the form' beats 'The form was submitted'." },
                { emoji: "🏷️", title: "Consistent Vocabulary", text: "Same concept = same word. If you call it 'Delete' in one place, use 'Delete' everywhere." },
                { emoji: "⚡", title: "Front-Load Info", text: "Put key information at the start of headings and sentences. Users scan the first few words." },
                { emoji: "🔢", title: "Numerals Win", text: "Users spot '3' faster than 'three'. Use numerals for better scannability." },
                { emoji: "⚠️", title: "Helpful Errors", text: "Tell users what went wrong AND how to fix it. 'Email must include @' beats 'Invalid input'." },
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
            <Link href="/ui/typography" className="btn btn-secondary">← Typography</Link>
            <Link href="/ui/buttons" className="btn btn-primary">Next: Buttons →</Link>
          </div>
        </div>
      </div>
    </>
  );
}

function ChapterQuiz() {
  const { saveQuizResult, getChapterProgress, markChapterVisited } = useProgress();
  const slug = "copywriting";
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
        <h2 className="section-title">Chapter 6 Quiz</h2>
      </div>
      <QuizSection
        title="Copywriting Quiz"
        questions={quizData[slug]}
        chapterSlug={slug}
        previousBest={cp.bestScore}
        onComplete={(answers, score, total) => saveQuizResult(slug, answers, score, total)}
      />
    </motion.div>
  );
}
