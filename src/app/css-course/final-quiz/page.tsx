"use client";

import CssNav from "@/components/CssNav";
import Link from "next/link";
import { motion } from "framer-motion";
import QuizSection from "@/components/QuizSection";
import { useProgress } from "@/lib/progress";

export default function CssFinalQuizPage() {
  const { saveQuizResult } = useProgress();

  return (
    <>
      <CssNav />
      <div className="page-wrapper">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
             <Link href="/css-course" className="back-link">
              ← Back to Course
            </Link>
            <div className="chapter-hero-number" style={{ color: "#1572B6" }}>Final Exam</div>
            <h1 className="chapter-hero-title">CSS Mastery Quiz</h1>
            <p className="chapter-hero-desc">
              Test your knowledge of Flexbox, Grid, Box Model, and Responsive Design.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <QuizSection
                chapterId="css-final"
                onComplete={(answers, score, total) => saveQuizResult("css-final", answers, score, total)}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
