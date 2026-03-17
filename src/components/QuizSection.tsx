"use client";

import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { quizData, QuizQuestion } from "@/lib/quizData";
import { QuizAnswer } from "@/lib/progress";

interface QuizSectionProps {
  title?: string;
  questions?: QuizQuestion[];
  chapterId?: string; // Used to look up questions if not provided
  chapterSlug?: string;
  onComplete: (answers: QuizAnswer[], score: number, total: number) => void;
  previousBest?: number;
  showChapterLabel?: boolean;
  chapterLabels?: string[];
}

export default function QuizSection({
  title = "Chapter Quiz",
  questions: propQuestions,
  chapterId,
  onComplete,
  previousBest,
  showChapterLabel,
  chapterLabels,
}: QuizSectionProps) {
  // Resolve questions: either from props or from quizData using chapterId
  const questions = useMemo(
    () => propQuestions || (chapterId ? quizData[chapterId] : []),
    [propQuestions, chapterId]
  );
  
  const [started, setStarted] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [finished, setFinished] = useState(false);

  // Safely get current question
  const question = questions?.[currentQ];

  // Hooks
  const handleSelect = useCallback(
    (index: number) => {
      if (showResult || !question) return;
      setSelectedAnswer(index);
      setShowResult(true);

      const correct = index === question.correctIndex;
      setAnswers((prev) => [
        ...prev,
        { questionIndex: currentQ, selectedAnswer: index, correct },
      ]);
    },
    [showResult, question, currentQ]
  );

  const handleNext = useCallback(() => {
    if (!questions) return;
    if (currentQ < questions.length - 1) {
      setCurrentQ((c) => c + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setFinished(true);
      // Account for the last answer if correct
      const lastCorrect = selectedAnswer === question?.correctIndex;
      const totalCorrect = answers.slice(0, -1).filter((a) => a.correct).length + (lastCorrect ? 1 : 0);
      onComplete(answers, totalCorrect, questions.length);
    }
  }, [currentQ, questions, answers, onComplete, selectedAnswer, question]);

  const handleRestart = useCallback(() => {
    setStarted(true);
    setCurrentQ(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setAnswers([]);
    setFinished(false);
  }, []);

  // If no questions found, return null or error (AFTER hooks)
  if (!questions || questions.length === 0) {
    return (
      <div className="p-4 border border-red-500 rounded text-red-500">
        Error: No questions found for this quiz section.
      </div>
    );
  }

  const score = answers.filter((a) => a.correct).length;

  if (!started) {
    return (
      <div className="quiz-start-card">
        <div className="quiz-start-icon">🧠</div>
        <h3>{title}</h3>
        <p>
          Test your understanding with {questions.length} multiple-choice questions.
          {previousBest !== undefined && previousBest > 0 && (
            <span className="quiz-best-score">
              Your best: {previousBest}/{questions.length}
            </span>
          )}
        </p>
        <button className="btn btn-primary quiz-start-btn" onClick={() => setStarted(true)}>
          Start Quiz →
        </button>
      </div>
    );
  }

  if (finished) {
    const percentage = Math.round((score / questions.length) * 100);
    const grade =
      percentage >= 90
        ? { emoji: "🏆", label: "Outstanding!", color: "#5cf0d0" }
        : percentage >= 70
        ? { emoji: "🎉", label: "Great Job!", color: "#7c5cfc" }
        : percentage >= 50
        ? { emoji: "👍", label: "Good Effort!", color: "#fcb85c" }
        : { emoji: "📚", label: "Keep Studying!", color: "#fc5c5c" };

    return (
      <motion.div
        className="quiz-results"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="quiz-results-header">
          <div className="quiz-grade-emoji">{grade.emoji}</div>
          <h3 style={{ color: grade.color }}>{grade.label}</h3>
          <div className="quiz-score-display">
            <span className="quiz-score-num" style={{ color: grade.color }}>
              {score}
            </span>
            <span className="quiz-score-divider">/</span>
            <span className="quiz-score-total">{questions.length}</span>
          </div>
          <div className="quiz-score-percentage">{percentage}% correct</div>
          {previousBest !== undefined && score > previousBest && (
            <div className="quiz-new-best">🎯 New personal best!</div>
          )}
        </div>

        <div className="quiz-review">
          <h4>Review Answers</h4>
          {answers.map((a, i) => (
            <div key={i} className={`quiz-review-item ${a.correct ? "correct" : "incorrect"}`}>
              <div className="quiz-review-status">
                {a.correct ? "✓" : "✗"}
              </div>
              <div className="quiz-review-content">
                <div className="quiz-review-q">
                  {showChapterLabel && chapterLabels?.[i] && (
                    <span className="quiz-chapter-badge">{chapterLabels[i]}</span>
                  )}
                  {questions[i].question}
                </div>
                {!a.correct && (
                  <div className="quiz-review-correct">
                    Correct: {questions[i].options[questions[i].correctIndex]}
                  </div>
                )}
                <div className="quiz-review-explanation">{questions[i].explanation}</div>
              </div>
            </div>
          ))}
        </div>

        <button className="btn btn-primary quiz-retry-btn" onClick={handleRestart}>
          🔄 Try Again
        </button>
      </motion.div>
    );
  }

  return (
    <div className="quiz-container">
      {/* Progress bar */}
      <div className="quiz-progress">
        <div className="quiz-progress-bar">
          <motion.div
            className="quiz-progress-fill"
            animate={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="quiz-progress-text">
          Question {currentQ + 1} of {questions.length}
          {score > 0 && <span className="quiz-running-score"> • {score} correct</span>}
        </div>
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQ}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          className="quiz-question-card"
        >
          {showChapterLabel && chapterLabels?.[currentQ] && (
            <div className="quiz-chapter-badge">{chapterLabels[currentQ]}</div>
          )}
          <h4 className="quiz-question-text">{question.question}</h4>

          <div className="quiz-options">
            {question.options.map((opt, i) => {
              let optionClass = "quiz-option";
              if (showResult) {
                if (i === question.correctIndex) optionClass += " correct";
                else if (i === selectedAnswer && i !== question.correctIndex)
                  optionClass += " incorrect";
                else optionClass += " dimmed";
              } else if (i === selectedAnswer) {
                optionClass += " selected";
              }

              return (
                <motion.button
                  key={i}
                  className={optionClass}
                  onClick={() => handleSelect(i)}
                  whileHover={!showResult ? { scale: 1.01 } : {}}
                  whileTap={!showResult ? { scale: 0.99 } : {}}
                  disabled={showResult}
                >
                  <span className="quiz-option-letter">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="quiz-option-text">{opt}</span>
                  {showResult && i === question.correctIndex && (
                    <span className="quiz-option-check">✓</span>
                  )}
                  {showResult && i === selectedAnswer && i !== question.correctIndex && (
                    <span className="quiz-option-x">✗</span>
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Explanation */}
          <AnimatePresence>
            {showResult && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="quiz-explanation"
              >
                <div
                  className={`quiz-explanation-inner ${
                    selectedAnswer === question.correctIndex ? "correct" : "incorrect"
                  }`}
                >
                  <strong>
                    {selectedAnswer === question.correctIndex ? "✓ Correct!" : "✗ Incorrect"}
                  </strong>
                  <p>{question.explanation}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {showResult && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ display: "flex", justifyContent: "flex-end", marginTop: 16 }}
            >
              <button className="btn btn-primary" onClick={handleNext}>
                {currentQ < questions.length - 1 ? "Next Question →" : "See Results →"}
              </button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
