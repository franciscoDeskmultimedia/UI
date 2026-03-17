"use client";

import { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import QuizSection from "@/components/QuizSection";
import { motion } from "framer-motion";
import { useProgress } from "@/lib/progress";
import { getFinalQuizQuestions, QuizQuestion } from "@/lib/quizData";

const chapterSlugs = [
  "fundamentals",
  "less-is-more",
  "colour",
  "layout",
  "typography",
  "copywriting",
  "buttons",
  "forms",
];

const chapterNames: Record<string, string> = {
  fundamentals: "Ch 1: Fundamentals",
  "less-is-more": "Ch 2: Less Is More",
  colour: "Ch 3: Colour",
  layout: "Ch 4: Layout",
  typography: "Ch 5: Typography",
  copywriting: "Ch 6: Copywriting",
  buttons: "Ch 7: Buttons",
  forms: "Ch 8: Forms",
};

export default function FinalQuizPage() {
  const { progress, saveFinalQuizResult, getChapterProgress } = useProgress();
  const [quizStarted, setQuizStarted] = useState(false);

  const completedChapters = chapterSlugs.filter(
    (s) => getChapterProgress(s).completed
  );
  const allCompleted = completedChapters.length === chapterSlugs.length;

  const questions = useMemo(() => {
    if (quizStarted) return getFinalQuizQuestions();
    return [];
  }, [quizStarted]);

  const chapterLabels = useMemo(() => {
    return questions.map(
      (q) => (q as QuizQuestion & { chapter: string }).chapter
    );
  }, [questions]);

  const handleComplete = useCallback(
    (answers: Parameters<typeof saveFinalQuizResult>[0], score: number, total: number) => {
      saveFinalQuizResult(answers, score, total);
    },
    [saveFinalQuizResult]
  );

  return (
    <>
      <Nav />
      <div className="page-wrapper">
        <div className="container">
          <motion.div
            className="chapter-hero"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/ui" className="back-link">
              ← Back to Home
            </Link>
            <div
              className="chapter-hero-number"
              style={{ color: "var(--accent-warning)" }}
            >
              Final Challenge
            </div>
            <h1 className="chapter-hero-title">
              🏆 Comprehensive Quiz
            </h1>
            <p className="chapter-hero-desc">
              Test your mastery of all 8 chapters with 16 randomised questions
              — 2 from each chapter. Can you score a perfect mark?
            </p>
          </motion.div>

          {/* Chapter completion status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ marginBottom: 48 }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gap: 12,
              }}
            >
              {chapterSlugs.map((slug) => {
                const cp = getChapterProgress(slug);
                const completed = cp.completed;
                return (
                  <div
                    key={slug}
                    className={`final-quiz-req ${completed ? "completed" : "pending"}`}
                  >
                    <span>{completed ? "✓" : "○"}</span>
                    <span>{chapterNames[slug]}</span>
                    {completed && (
                      <span
                        style={{
                          marginLeft: "auto",
                          fontSize: "0.72rem",
                          fontWeight: 700,
                        }}
                      >
                        {cp.bestScore}/{cp.quizTotal}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            {!allCompleted && (
              <div
                style={{
                  textAlign: "center",
                  marginTop: 24,
                  padding: 20,
                  background: "rgba(252, 184, 92, 0.08)",
                  border: "1px solid rgba(252, 184, 92, 0.2)",
                  borderRadius: "var(--radius-md)",
                  color: "var(--accent-warning)",
                  fontSize: "0.88rem",
                }}
              >
                💡 Complete all chapter quizzes first for the best experience!
                You can still take the final quiz now.
              </div>
            )}

            {progress.finalQuiz.completed && (
              <div
                style={{
                  textAlign: "center",
                  marginTop: 16,
                  padding: 16,
                  background: "rgba(92, 240, 208, 0.06)",
                  border: "1px solid rgba(92, 240, 208, 0.2)",
                  borderRadius: "var(--radius-md)",
                  color: "var(--accent-tertiary)",
                  fontSize: "0.88rem",
                }}
              >
                🎯 Your best score:{" "}
                <strong>
                  {progress.finalQuiz.bestScore}/{progress.finalQuiz.total}
                </strong>{" "}
                ({Math.round(
                  (progress.finalQuiz.bestScore / progress.finalQuiz.total) *
                    100
                )}
                %)
              </div>
            )}
          </motion.div>

          {/* Quiz */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {!quizStarted ? (
              <div className="quiz-start-card">
                <div className="quiz-start-icon">🏆</div>
                <h3>Final Comprehensive Quiz</h3>
                <p>
                  16 questions covering all 8 chapters, randomised each time.
                  {progress.finalQuiz.completed && (
                    <span className="quiz-best-score">
                      Your best: {progress.finalQuiz.bestScore}/
                      {progress.finalQuiz.total}
                    </span>
                  )}
                </p>
                <button
                  className="btn btn-primary quiz-start-btn"
                  onClick={() => setQuizStarted(true)}
                >
                  Start Final Quiz →
                </button>
              </div>
            ) : (
              <QuizSection
                title="Final Quiz"
                questions={questions}
                onComplete={handleComplete}
                previousBest={progress.finalQuiz.bestScore}
                showChapterLabel={true}
                chapterLabels={chapterLabels}
              />
            )}
          </motion.div>

          {/* Nav */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "64px 0 48px",
              borderTop: "1px solid var(--border-subtle)",
              marginTop: 64,
            }}
          >
            <Link href="/ui" className="btn btn-secondary">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
