"use client";

import HtmlNav from "@/components/HtmlNav";
import Link from "next/link";
import { motion } from "framer-motion";
import DemoPanel from "@/components/DemoPanel";
import CodeChallenge from "@/components/CodeChallenge";
import QuizSection from "@/components/QuizSection";
import { useProgress } from "@/lib/progress";

function MediaDemo() {
  return (
    <DemoPanel title="Multimedia Types" icon="🎞️">
      <div style={{ padding: 20 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div>
                <strong style={{ display: "block", marginBottom: 8, color: "var(--text-secondary)" }}>Image</strong>
                <div style={{ padding: 20, background: "#333", borderRadius: 8, textAlign: "center", minHeight: 120, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    🖼️ &lt;img&gt;
                </div>
            </div>
            <div>
                <strong style={{ display: "block", marginBottom: 8, color: "var(--text-secondary)" }}>Iframe (Embed)</strong>
                <div style={{ padding: 20, background: "#222", border: "2px solid #555", borderRadius: 8, textAlign: "center", minHeight: 120, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    🌍 &lt;iframe&gt;
                </div>
            </div>
            <div>
                <strong style={{ display: "block", marginBottom: 8, color: "var(--text-secondary)" }}>Video</strong>
                <div style={{ padding: 20, background: "#000", borderRadius: 8, textAlign: "center", minHeight: 120, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    ▶️ &lt;video&gt;
                </div>
            </div>
             <div>
                <strong style={{ display: "block", marginBottom: 8, color: "var(--text-secondary)" }}>Audio</strong>
                <div style={{ padding: 20, background: "#444", borderRadius: 8, textAlign: "center", minHeight: 120, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    🔊 &lt;audio&gt;
                </div>
            </div>
        </div>
      </div>
    </DemoPanel>
  );
}

export default function HtmlMediaPage() {
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
            <h1 className="chapter-hero-title">Media & Images</h1>
            <p className="chapter-hero-desc">
              Embedding rich content: Images, Videos, Audio, and Iframes (YouTube maps, etc).
            </p>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <MediaDemo />
          </motion.div>

           <div className="content-block">
             <h2>The Image Tag</h2>
             <pre>&lt;img src="pic.jpg" alt="Description" width="500" height="300"&gt;</pre>
             <ul style={{ marginTop: 16 }}>
                 <li><strong>src:</strong> Path to the image (relative or absolute URL).</li>
                 <li><strong>alt:</strong> Essential for accessibility (and if image fails to load).</li>
                 <li><strong>width/height:</strong> Helps prevent layout shifts (CLS) by reserving space.</li>
             </ul>

             <h3>Video & Audio</h3>
             <pre>&lt;video controls poster="thumbnail.jpg"&gt;
  &lt;source src="movie.mp4" type="video/mp4"&gt;
  Your browser does not support the video tag.
&lt;/video&gt;</pre>
             <p>Native HTML5 video supports MP4, WebM, and Ogg. The <code>controls</code> attribute adds play/pause buttons.</p>

             <h3>Iframes</h3>
             <p>Used to embed another document within the current one (e.g., YouTube video, Google Maps).</p>
             <pre>&lt;iframe src="https://www.youtube.com/embed/xyz" title="Video"&gt;&lt;/iframe&gt;</pre>
           </div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
             <CodeChallenge 
                title="Challenge: Embed Image" 
                description="Add an image with src='logo.png', alt='Company Logo', and a width of 100."
                files={{
                    "/index.html": `<!-- TODO: Add img tag -->`
                }}
                solution={`<img src="logo.png" alt="Company Logo" width="100">`}
             />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <QuizSection
                chapterId="html-media"
                onComplete={(score) => saveQuizResult("html-media", score)}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
