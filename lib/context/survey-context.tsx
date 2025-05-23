"use client";

import { createContext, useContext, useState, ReactNode } from 'react';
import { QuestionResponse } from '@/lib/models/survey';

interface SurveyAnswers {
  [key: string]: QuestionResponse;
}

interface SurveyContextType {
  step: number;
  setStep: (step: number) => void;
  userAnswers: SurveyAnswers;
  setUserAnswers: (answers: SurveyAnswers) => void;
  updateAnswers: (newAnswers: SurveyAnswers) => void;
}

const SurveyContext = createContext<SurveyContextType | undefined>(undefined);

export function SurveyProvider({ children }: { children: ReactNode }) {
  const [step, setStep] = useState(1);
  const [userAnswers, setUserAnswers] = useState<SurveyAnswers>({});

  const updateAnswers = (newAnswers: SurveyAnswers) => {
    setUserAnswers(prev => ({ ...prev, ...newAnswers }));
  };

  return (
    <SurveyContext.Provider value={{
      step,
      setStep,
      userAnswers,
      setUserAnswers,
      updateAnswers
    }}>
      {children}
    </SurveyContext.Provider>
  );
}

export function useSurvey() {
  const context = useContext(SurveyContext);
  if (context === undefined) {
    throw new Error('useSurvey must be used within a SurveyProvider');
  }
  return context;
} 