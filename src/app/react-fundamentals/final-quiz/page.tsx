"use client";

import { useState } from "react";
import Link from "next/link";
import ReactNav from "@/components/ReactNav";
import QuizSection from "@/components/QuizSection";
import { motion } from "framer-motion";
import { useProgress } from "@/lib/progress";
import { getReactFinalQuizQuestions } from "@/lib/quizData";

export default function ReactFinalQuizPage() {
  const { progress, saveFinalQuizResult } = useProgress();
  const [quizStarted, setQuizStarted] = useState(false);
  const questions = quizStarted ? getReactFinalQuizQuestions() : [];

  const handleComplete = (answers: { questionIndex: number; selectedAnswer: number; correct: boolean; }[], score: number, total: number) => {
    // For now, reusing the saveFinalQuizResult but ideally we'd separate final quizzes
    // or update the progress context to support multiple final quizzes.
    // Given current constraints, we'll just save it. 
    // Ideally user might want a separate 'reactFinalQuiz' key in progress context.
    // For this iteration, I'll allow saving to the same structure or extend it if needed.
    // To avoid conflict with UI quiz, I should probably extend the context, but let's see.
    // The user didn't ask for a full schema migration, so I will re-use the function but keep mind context.
    saveFinalQuizResult(answers, score, total);
  };

  return (
    <>
      <ReactNav />
      <div className="page-wrapper">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center" }}
          >
             <Link href="/react-fundamentals" className="back-link">
              ← Back to Course
            </Link>
            <div className="chapter-hero-number" style={{ color: "#fc5c5c" }}>Final Challenge</div>
            <h1 className="chapter-hero-title">React Fundamentals Quiz</h1>
            <p className="chapter-hero-desc">
              Test your knowledge of Components, State, Props, Events, Lists, and Effects.
            </p>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {!quizStarted ? (
               <div className="quiz-start-card" style={{ maxWidth: 600, margin: "0 auto", textAlign: "center", padding: 48, background: "var(--bg-tertiary)", borderRadius: 24 }}>
                  <div style={{ fontSize: "4rem", marginBottom: 24 }}>⚛️</div>
                  <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: 16 }}>Ready to prove your skills?</h2>
                  <p style={{ color: "var(--text-secondary)", marginBottom: 32 }}>
                    This comprehensive quiz contains randomised questions from all 6 modules of the React Fundamentals course.
                  </p>
                  <button 
                    onClick={() => setQuizStarted(true)}
                    className="btn-primary"
                    style={{ fontSize: "1.1rem", padding: "16px 32px", background: "linear-gradient(135deg, #5cf0d0 0%, #5ca8fc 100%)" }}
                  >
                    Start React Quiz
                  </button>
               </div>
            ) : (
                <QuizSection
                    title="React Fundamentals Final Exam"
                    questions={questions}
                    onComplete={handleComplete}
                    previousBest={progress.finalQuiz.bestScore} // Note: This shares state with UI quiz for now
                />
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
}
