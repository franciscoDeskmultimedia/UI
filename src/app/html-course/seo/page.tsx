"use client";

import HtmlNav from "@/components/HtmlNav";
import Link from "next/link";
import { motion } from "framer-motion";
import DemoPanel from "@/components/DemoPanel";
import CodeChallenge from "@/components/CodeChallenge";
import QuizSection from "@/components/QuizSection";
import { useProgress } from "@/lib/progress";

function MetaDemo() {
  return (
    <DemoPanel title="Social Media Preview (Open Graph)" icon="🖼️">
      <div style={{ padding: 20 }}>
        <p style={{ color: "var(--text-secondary)", marginBottom: 16 }}>
          When you share a link on Twitter or LinkedIn, they look for specific meta tags to generate a card.
        </p>
        
        <div style={{ background: "#f0f2f5", borderRadius: 8, overflow: "hidden", maxWidth: 400, margin: "0 auto", border: "1px solid #ddd" }}>
            <div style={{ height: 200, background: "#ddd", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3rem" }}>
                🖼️
            </div>
            <div style={{ padding: 12, background: "white" }}>
                <div style={{ fontSize: "0.8rem", color: "#65676b", textTransform: "uppercase" }}>MY-WEBSITE.COM</div>
                <div style={{ fontWeight: "bold", color: "#050505", margin: "4px 0" }}>Learn HTML & CSS</div>
                <div style={{ fontSize: "0.9rem", color: "#65676b" }}>Master web development with our interactive course.</div>
            </div>
        </div>

        <div style={{ marginTop: 24, padding: 16, background: "#1e1e1e", borderRadius: 8, fontFamily: "monospace", fontSize: "0.8rem", color: "#9cdcfe" }}>
            &lt;meta property="og:title" content="Learn HTML & CSS" /&gt;<br/>
            &lt;meta property="og:description" content="Master web development..." /&gt;<br/>
            &lt;meta property="og:image" content="https://..." /&gt;
        </div>
      </div>
    </DemoPanel>
  );
}

export default function SeoPage() {
  const { saveQuizResult } = useProgress();

  return (
    <>
      <HtmlNav />
      <div className="page-wrapper">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
             <Link href="/html-course" className="back-link">
              ← Back to Course
            </Link>
            <div className="chapter-hero-number" style={{ color: "#E34F26" }}>Module 3</div>
            <h1 className="chapter-hero-title">SEO Basics</h1>
            <p className="chapter-hero-desc">
              Search Engine Optimization starts with HTML. Keywords, hierarchy, and metadata.
            </p>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <MetaDemo />
          </motion.div>

           <div className="content-block">
             <h2>Structured Content</h2>
             <p>Search engines (crawlers) scan your HTML to understand what your page is about. They look at:</p>
             <ul style={{ marginTop: 16 }}>
                 <li>
                    <strong>&lt;title&gt;:</strong> The most important tag. Displayed in search results and browser tabs.
                 </li>
                 <li>
                     <strong>&lt;h1&gt;:</strong> The main heading of the page. Should contain your primary keyword. Ideally only one per page.
                 </li>
                 <li>
                     <strong>&lt;meta name="description"&gt;:</strong> The snippet shown under the title in search results. Crucial for Click-Through Rate (CTR).
                 </li>
             </ul>
             
             <h3>Twitter Cards & Open Graph</h3>
             <p>As shown in the demo, platforms like Facebook, LinkedIn, and Discord use Open Graph (<code>og:</code>) tags to display rich previews. Twitter has its own set (<code>twitter:card</code>), but often falls back to Open Graph.</p>
           </div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
             <CodeChallenge 
                title="Challenge: Add Meta Tags" 
                description="The page is missing crucial meta tags. Add a title, description, and an OG image."
                files={{
                    "/index.html": `<!DOCTYPE html>
<html>
<head>
  <!-- TODO: Add <title>, meta description, and og:image -->
  
</head>
<body>
  <h1>My Store</h1>
</body>
</html>`
                }}
                solution={`<!DOCTYPE html>
<html>
<head>
  <title>My Awesome Store</title>
  <meta name="description" content="Best widgets in town.">
  <meta property="og:image" content="https://example.com/store.jpg">
</head>
<body>
  <h1>My Store</h1>
</body>
</html>`}
             />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <QuizSection
                chapterId="html-seo"
                onComplete={(score) => saveQuizResult("html-seo", score)}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
