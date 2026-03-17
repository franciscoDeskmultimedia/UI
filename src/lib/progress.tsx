"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";

export interface QuizAnswer {
  questionIndex: number;
  selectedAnswer: number;
  correct: boolean;
}

export interface ChapterProgress {
  completed: boolean;
  quizAnswers: QuizAnswer[];
  quizScore: number;
  quizTotal: number;
  bestScore: number;
  lastVisited: string;
}

export interface ProgressState {
  chapters: Record<string, ChapterProgress>;
  finalQuiz: {
    completed: boolean;
    score: number;
    total: number;
    bestScore: number;
    answers: QuizAnswer[];
  };
}

const defaultProgress: ProgressState = {
  chapters: {},
  finalQuiz: { completed: false, score: 0, total: 0, bestScore: 0, answers: [] },
};

const STORAGE_KEY = "practical-ui-progress-v2";

interface ProgressContextType {
  progress: ProgressState;
  markChapterVisited: (slug: string) => void;
  saveQuizResult: (slug: string, answers: QuizAnswer[], score: number, total: number) => void;
  saveFinalQuizResult: (answers: QuizAnswer[], score: number, total: number) => void;
  getChapterProgress: (slug: string) => ChapterProgress;
  getTotalProgress: () => { completed: number; total: number; percentage: number };
  resetProgress: () => void;
}

const ProgressContext = createContext<ProgressContextType | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<ProgressState>(defaultProgress);
  const [loaded, setLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setProgress(JSON.parse(stored));
      }
    } catch {
      // ignore
    }
    setLoaded(true);
  }, []);

  // Persist to localStorage on change
  useEffect(() => {
    if (loaded) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
      } catch {
        // ignore
      }
    }
  }, [progress, loaded]);

  const markChapterVisited = useCallback((slug: string) => {
    setProgress((prev) => ({
      ...prev,
      chapters: {
        ...prev.chapters,
        [slug]: {
          ...getDefault(prev.chapters[slug]),
          lastVisited: new Date().toISOString(),
        },
      },
    }));
  }, []);

  const saveQuizResult = useCallback(
    (slug: string, answers: QuizAnswer[], score: number, total: number) => {
      setProgress((prev) => {
        const existing = prev.chapters[slug];
        const bestScore = existing ? Math.max(existing.bestScore, score) : score;
        return {
          ...prev,
          chapters: {
            ...prev.chapters,
            [slug]: {
              completed: true,
              quizAnswers: answers,
              quizScore: score,
              quizTotal: total,
              bestScore,
              lastVisited: new Date().toISOString(),
            },
          },
        };
      });
    },
    []
  );

  const saveFinalQuizResult = useCallback(
    (answers: QuizAnswer[], score: number, total: number) => {
      setProgress((prev) => ({
        ...prev,
        finalQuiz: {
          completed: true,
          score,
          total,
          bestScore: Math.max(prev.finalQuiz.bestScore, score),
          answers,
        },
      }));
    },
    []
  );

  const getChapterProgress = useCallback(
    (slug: string): ChapterProgress => {
      return progress.chapters[slug] || getDefault(undefined);
    },
    [progress]
  );

  const getTotalProgress = useCallback(() => {
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
    const completed = chapterSlugs.filter((s) => progress.chapters[s]?.completed).length;
    return {
      completed,
      total: chapterSlugs.length,
      percentage: Math.round((completed / chapterSlugs.length) * 100),
    };
  }, [progress]);

  const resetProgress = useCallback(() => {
    setProgress(defaultProgress);
  }, []);

  if (!loaded) return null;

  return (
    <ProgressContext.Provider
      value={{
        progress,
        markChapterVisited,
        saveQuizResult,
        saveFinalQuizResult,
        getChapterProgress,
        getTotalProgress,
        resetProgress,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress must be used within ProgressProvider");
  return ctx;
}

function getDefault(existing: ChapterProgress | undefined): ChapterProgress {
  return existing || {
    completed: false,
    quizAnswers: [],
    quizScore: 0,
    quizTotal: 0,
    bestScore: 0,
    lastVisited: "",
  };
}
