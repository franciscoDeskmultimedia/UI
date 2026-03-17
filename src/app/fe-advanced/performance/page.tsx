"use client";

import Link from "next/link";
import FeAdvancedNav from "@/components/FeAdvancedNav";
import { motion } from "framer-motion";
import DemoPanel from "@/components/DemoPanel";
import CodeChallenge from "@/components/CodeChallenge";
import QuizSection from "@/components/QuizSection";
import { useProgress } from "@/lib/progress";

function PerformanceDemo() {
  return (
    <DemoPanel title="Cumulative Layout Shift (CLS)" icon="📉">
      <div style={{ padding: 20 }}>
        <p style={{ color: "var(--text-secondary)", marginBottom: 24 }}>
          Layout shifts happen when visible elements change position. This is jarring for users. Always reserve space for images and ads!
        </p>
        
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {/* Bad Example */}
            <div style={{ border: "1px solid var(--border-subtle)", padding: 16, borderRadius: 8 }}>
                <h4 style={{ color: "#fc5c5c", marginBottom: 8 }}>Bad: No Space Reserved</h4>
                <div style={{ fontSize: "0.8rem", color: "var(--text-tertiary)", marginBottom: 8 }}>Text content loads first...</div>
                <div style={{ height: 100, background: "#fc5c5c20", display: "flex", alignItems: "center", justifyContent: "center", color: "#fc5c5c" }}>
                    Image Loads Later 
                    <br/>(Pushes content down)
                </div>
            </div>

             {/* Good Example */}
             <div style={{ border: "1px solid var(--border-subtle)", padding: 16, borderRadius: 8 }}>
                <h4 style={{ color: "#5cf0d0", marginBottom: 8 }}>Good: Aspect Ratio Box</h4>
                <div style={{ fontSize: "0.8rem", color: "var(--text-tertiary)", marginBottom: 8 }}>Text content stays stable.</div>
                <div style={{ aspectRatio: "16/9", background: "var(--bg-tertiary)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px dashed var(--border-subtle)" }}>
                    Image Placeholder
                </div>
            </div>
        </div>
      </div>
    </DemoPanel>
  );
}

function ResourceHintDemo() {
    return (
        <DemoPanel title="Resource Hints" icon="🚀">
            <div style={{ padding: 20 }}>
                <p style={{ color: "var(--text-secondary)", marginBottom: 16 }}>
                    Resource hints help the browser prioritize critical assets.
                </p>
                <div style={{ display: "grid", gap: "10px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", background: "#222", padding: "12px", borderRadius: "6px" }}>
                        <div style={{ background: "#fc5c8c", color: "white", padding: "4px 8px", borderRadius: "4px", fontSize: "0.7rem", fontWeight: "bold" }}>preload</div>
                         <div style={{ fontSize: "0.9rem", color: "#ddd" }}>High priority. Fetch ASAP (fonts, hero image).</div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", background: "#222", padding: "12px", borderRadius: "6px" }}>
                        <div style={{ background: "#5cf0d0", color: "black", padding: "4px 8px", borderRadius: "4px", fontSize: "0.7rem", fontWeight: "bold" }}>prefetch</div>
                         <div style={{ fontSize: "0.9rem", color: "#ddd" }}>Low priority. Fetch for <i>next</i> navigation.</div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", background: "#222", padding: "12px", borderRadius: "6px" }}>
                        <div style={{ background: "#5ca8fc", color: "white", padding: "4px 8px", borderRadius: "4px", fontSize: "0.7rem", fontWeight: "bold" }}>preconnect</div>
                         <div style={{ fontSize: "0.9rem", color: "#ddd" }}>Warm up connection to 3rd party origin (CDN).</div>
                    </div>
                </div>
            </div>
        </DemoPanel>
    )
}

export default function PerformancePage() {
  const { saveQuizResult } = useProgress();

  return (
    <>
      <FeAdvancedNav />
      <div className="page-wrapper">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
             <Link href="/fe-advanced" className="back-link">
              ← Back to Course
            </Link>
            <div className="chapter-hero-number" style={{ color: "#5ca8fc" }}>Module 1</div>
            <h1 className="chapter-hero-title">Web Performance</h1>
            <p className="chapter-hero-desc">
              Optimizing for Core Web Vitals to ensure a fast, stable, and responsive user experience.
            </p>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <PerformanceDemo />
          </motion.div>

           <div className="content-block">
             <h2>Core Web Vitals</h2>
             <p>Google's signals for a good user experience. These affect your search ranking (SEO).</p>
             <ul style={{ lineHeight: "1.6", marginTop: "16px" }}>
                 <li>
                    <strong>LCP (Largest Contentful Paint):</strong> Measures loading performance. The main content should load within 2.5 seconds.
                    <br/><em style={{ color: "#888" }}>Fix: Optimize images, server response time, and render-blocking resources.</em>
                 </li>
                 <li>
                    <strong>INP (Interaction to Next Paint):</strong> Measures responsiveness. Interactions (clicks, taps) should respond within 200ms.
                    <br/><em style={{ color: "#888" }}>Fix: Reduce long JavaScript tasks, break up work.</em>
                 </li>
                 <li>
                    <strong>CLS (Cumulative Layout Shift):</strong> Measures visual stability. Elements shouldn't jump around. Target: &lt; 0.1.
                    <br/><em style={{ color: "#888" }}>Fix: Set width/height on images, reserve space for ads/embeds.</em>
                 </li>
             </ul>
             
             <h3 style={{ marginTop: "24px" }}>Modern Formats & Lazy Loading</h3>
             <p>Always use modern image formats like <strong>WebP</strong> or <strong>AVIF</strong> which offer better compression than JPEG/PNG. Use <strong>native lazy loading</strong> (`loading=&quot;lazy&quot;`) for images below the fold.</p>
           </div>
           
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
           >
                <ResourceHintDemo />
           </motion.div>

           <div className="content-block">
                <h2>Best Practices</h2>
                <div style={{ background: "rgba(92, 168, 252, 0.1)", borderLeft: "4px solid #5ca8fc", padding: "16px", borderRadius: "0 8px 8px 0" }}>
                   <strong>Bundle Analysis:</strong> Use tools like `webpack-bundle-analyzer` to find large dependencies.
               </div>
               <ul style={{ marginTop: "16px" }}>
                   <li><strong>Code Splitting:</strong> Don't ship one massive JS file. Split code by route so users only download what they need for the current page. Next.js does this automatically.</li>
                   <li><strong>Font Optimization:</strong> Self-host fonts or use `next/font` to prevent layout shifts (FOUT/FOIT) and reduce connection overhead.</li>
                   <li><strong>Third-Party Scripts:</strong> Defer non-critical analytics or chat widgets. They often block the main thread.</li>
               </ul>
           </div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
             <CodeChallenge 
                title="Challenge: Lazy Loading Images" 
                description="Images below the fold should be lazy loaded to improve initial load time. Add the `loading='lazy'` attribute to the second image."
                files={{
                    "/index.html": `<!-- Hero Image (Eager) -->
<img src="hero.jpg" alt="Hero" />

<!-- Footer Image (Lazy) -->
<!-- TODO: Make this lazy load -->
<img src="footer.jpg" alt="Footer" />`
                }}
                solution={`<!-- Hero Image (Eager) -->
<img src="hero.jpg" alt="Hero" />

<!-- Footer Image (Lazy) -->
<img src="footer.jpg" alt="Footer" loading="lazy" />`}
             />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <QuizSection
                chapterId="fe-adv-perf"
                onComplete={(score) => saveQuizResult("fe-adv-perf", score)}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
