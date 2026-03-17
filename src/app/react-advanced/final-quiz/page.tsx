"use client";

import { useState } from "react";
import Link from "next/link";
import ReactAdvancedNav from "@/components/ReactAdvancedNav";
import QuizSection from "@/components/QuizSection";
import { motion } from "framer-motion";
import { useProgress } from "@/lib/progress";
import { getReactAdvancedFinalQuizQuestions } from "@/lib/quizData";

export default function ReactAdvancedFinalQuizPage() {
  const { progress, saveFinalQuizResult } = useProgress();
  const [quizStarted, setQuizStarted] = useState(false);
  const questions = quizStarted ? getReactAdvancedFinalQuizQuestions() : [];

  const handleComplete = (answers: { questionIndex: number; selectedAnswer: number; correct: boolean; }[], score: number, total: number) => {
    // Reusing the same save function for now. 
    // Ideally we'd have a separate key, but this will overwrite the 'finalQuiz' score in context.
    // For this prototype, it's acceptable, but in production we'd want 'reactAdvancedFinalQuiz' key.
    saveFinalQuizResult(answers, score, total);
  };

  return (
    <>
      <ReactAdvancedNav />
      <div className="page-wrapper">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center" }}
          >
             <Link href="/react-advanced" className="back-link">
              ← Back to Course
            </Link>
            <div className="chapter-hero-number" style={{ color: "#fcb85c" }}>Final Challenge</div>
            <h1 className="chapter-hero-title">Advanced React Quiz</h1>
            <p className="chapter-hero-desc">
              Test your mastery of useReducer, Context, Performance, Custom Hooks, and Refs.
            </p>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {!quizStarted ? (
               <div className="quiz-start-card" style={{ maxWidth: 600, margin: "0 auto", textAlign: "center", padding: 48, background: "var(--bg-tertiary)", borderRadius: 24 }}>
                  <div style={{ fontSize: "4rem", marginBottom: 24 }}>🚀</div>
                  <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: 16 }}>Ready to level up?</h2>
                  <p style={{ color: "var(--text-secondary)", marginBottom: 32 }}>
                    This quiz covers advanced patterns and performance optimization techniques.
                  </p>
                  <button 
                    onClick={() => setQuizStarted(true)}
                    className="btn-primary"
                    style={{ fontSize: "1.1rem", padding: "16px 32px", background: "linear-gradient(135deg, #fcb85c 0%, #fc5c5c 100%)" }}
                  >
                    Start Advanced Quiz
                  </button>
               </div>
            ) : (
                <QuizSection
                    title="Advanced React Final Exam"
                    questions={questions}
                    onComplete={handleComplete}
                    previousBest={progress.finalQuiz.bestScore}
                />
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
}
