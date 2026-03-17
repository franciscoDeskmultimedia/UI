"use client";

import JsNav from "@/components/JsNav";
import Link from "next/link";
import { motion } from "framer-motion";
import DemoPanel from "@/components/DemoPanel";
import CodeChallenge from "@/components/CodeChallenge";
import QuizSection from "@/components/QuizSection";
import { useProgress } from "@/lib/progress";
import { useState } from "react";

function EventsDemo() {
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <DemoPanel title="Interactive Events" icon="🖱️">
      <div style={{ padding: 20, display: "flex", gap: 20 }}>
        <button 
           onClick={() => setClicked(!clicked)}
           className="btn"
           style={{ background: clicked ? "#fc5c8c" : "#333", color: "white", padding: "10px 20px" }}
        >
            {clicked ? "Clicked!" : "Click Me"}
        </button>

        <div 
           onMouseEnter={() => setHovered(true)}
           onMouseLeave={() => setHovered(false)}
           style={{ 
               width: 100, 
               height: 40, 
               background: hovered ? "#5cf0d0" : "#222", 
               color: hovered ? "black" : "white",
               display: "flex", 
               alignItems: "center", 
               justifyContent: "center",
               borderRadius: 4,
               cursor: "pointer",
               transition: "all 0.2s"
           }}
        >
            {hovered ? "Hovered!" : "Hover Me"}
        </div>
      </div>
    </DemoPanel>
  );
}

export default function JsEventsPage() {
  const { saveQuizResult } = useProgress();

  return (
    <>
      <JsNav />
      <div className="page-wrapper">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
             <Link href="/js-course" className="back-link">
              ← Back to Course
            </Link>
            <div className="chapter-hero-number" style={{ color: "#F7DF1E" }}>Module 5</div>
            <h1 className="chapter-hero-title">Events</h1>
            <p className="chapter-hero-desc">
              Handling user input. onClick, onChange, onMouseOver.
            </p>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <EventsDemo />
          </motion.div>

           <div className="content-block">
             <h2>Common HTML Events</h2>
             <p>Events happen to HTML elements. JavaScript can "react" to these events using <strong>Event Listeners</strong>.</p>
             <ul style={{ marginTop: 16 }}>
                 <li><code>onclick</code>: User clicks an element.</li>
                 <li><code>onchange</code>: User changes the value of an input.</li>
                 <li><code>onmouseover</code>: User moves the mouse over an element.</li>
                 <li><code>onkeydown</code>: User pushes a keyboard key.</li>
                 <li><code>onsubmit</code>: User submits a form.</li>
             </ul>

             <h3>Adding Listeners (Best Practice)</h3>
             <p>Avoid inline HTML attributes (<code>onclick="..."</code>). Use `addEventListener` instead:</p>
             <pre>
const btn = document.querySelector("#myBtn");

btn.addEventListener("click", function() &#123;
  alert("Button clicked!");
&#125;);
             </pre>
           </div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
             <CodeChallenge 
                title="Challenge: Click Handler" 
                description="Add an event listener to the button with id 'submit' that logs 'Submitted' when clicked."
                files={{
                    "/app.js": `const btn = document.querySelector("#submit");
// TODO: add click listener
`,
                    "/index.html": `<button id="submit">Submit</button>`
                }}
                solution={`const btn = document.querySelector("#submit");
btn.addEventListener("click", () => {
  console.log("Submitted");
});`}
             />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <QuizSection
                chapterId="js-events"
                onComplete={(score) => saveQuizResult("js-events", score)}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
