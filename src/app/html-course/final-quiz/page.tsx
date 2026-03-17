"use client";

import HtmlNav from "@/components/HtmlNav";
import Link from "next/link";
import { motion } from "framer-motion";
import QuizSection from "@/components/QuizSection";
import { useProgress } from "@/lib/progress";

export default function HtmlFinalQuizPage() {
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
            <div className="chapter-hero-number" style={{ color: "#E34F26" }}>Final Exam</div>
            <h1 className="chapter-hero-title">HTML Mastery Quiz</h1>
            <p className="chapter-hero-desc">
              Test your comprehensive knowledge of HTML5, Semantic Elements, Forms, and Accessibility.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <QuizSection
                chapterId="html-final"
                onComplete={(score) => saveQuizResult("html-final", score)}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
