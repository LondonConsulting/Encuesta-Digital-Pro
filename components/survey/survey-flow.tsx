"use client";

import { useState, useEffect } from "react";
import { SurveyForm } from "./survey-form";
import { SurveyHeader } from "./survey-header";
import { useSurvey } from "@/lib/context/survey-context";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { questionsone } from "@/lib/surveys/questionsOne";
import { questionsPilar1 } from "@/lib/surveys/questionsPilar1";
import { questionsPilar2 } from "@/lib/surveys/questionsPilar2";
import { questionsPilar3 } from "@/lib/surveys/questionsPilar3";
import { questionsPilar4 } from "@/lib/surveys/questionsPilar4";
import { SurveyResults } from "./survey-results";
import { SurveySubmission } from "@/lib/models/survey";

const surveys = [
  questionsone,
  questionsPilar1,
  questionsPilar2,
  questionsPilar3,
  questionsPilar4,
];

export function SurveyFlow() {
  const { step, setStep, userAnswers } = useSurvey();
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [savedSurveyId, setSavedSurveyId] = useState<string | null>(null);

  const currentSurvey = surveys[step - 1];
  const totalSteps = surveys.length;

  // Effect to scroll to top when page or step changes
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100); // Small delay to ensure DOM updates are complete
  }, [currentPageIndex, step]);

  const saveSurveyData = async () => {
    try {
      setIsSaving(true);

      const surveySubmission: SurveySubmission = {
        responses: userAnswers,
        metadata: {
          completionTime: Date.now(), // You can track actual completion time if needed
        },
      };

      const response = await fetch("/api/survey/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(surveySubmission),
      });

      if (!response.ok) {
        throw new Error("Failed to save survey data");
      }

      const result = await response.json();
      setSavedSurveyId(result.id);
      console.log("✅ Survey saved successfully:", result.id);
    } catch (error) {
      console.error("❌ Error saving survey:", error);
      // You might want to show an error message to the user
      // For now, we'll continue with completion even if save fails
    } finally {
      setIsSaving(false);
    }
  };

  const handleNext = async () => {
    if (currentPageIndex < currentSurvey.pages.length - 1) {
      setCurrentPageIndex(currentPageIndex + 1);
    } else {
      // Move to next survey
      if (step < totalSteps) {
        setStep(step + 1);
        setCurrentPageIndex(0);
      } else {
        // Survey completed - save to MongoDB before showing results
        await saveSurveyData();
        setIsCompleted(true);
      }
    }
  };

  const handlePrevious = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(currentPageIndex - 1);
    } else if (step > 1) {
      // Move to previous survey
      setStep(step - 1);
      const prevSurvey = surveys[step - 2];
      setCurrentPageIndex(prevSurvey.pages.length - 1);
    }
  };

  if (isCompleted) {
    return (
      <SurveyResults
        onNewSurvey={() => {
          setIsCompleted(false);
          setStep(1);
          setCurrentPageIndex(0);
          setSavedSurveyId(null);
        }}
        savedSurveyId={savedSurveyId}
      />
    );
  }

  if (isSaving) {
    return (
      <div className="container mx-auto p-4">
        <Card>
          <CardContent className="flex items-center justify-center py-12">
            <div className="text-center space-y-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
              <p className="text-lg">Guardando tu encuesta...</p>
              <p className="text-muted-foreground">
                Por favor espera un momento
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 py-4">
      <SurveyHeader totalSteps={totalSteps} />

      <Card>
        <CardHeader>
          <CardTitle className="text-3xl break-words flex items-start">
            {currentSurvey.title ===
              "Pilar 1 - Estrategia y Definición de Valor" && (
              <i className="icon-estrategia text-primaryalt me-4 text-[58px] relative -top-4"></i>
            )}
            {currentSurvey.title ===
              "Pilar 2 - Tecnología y Automatización" && (
              <i className="icon-tecnologia text-primaryalt me-4 text-[58px] relative -top-4"></i>
            )}
            {currentSurvey.title ===
              "Pilar 3 - Gestión y Analítica de Datos" && (
              <i className="icon-analitica text-primaryalt me-4 text-[58px] relative -top-4"></i>
            )}
            {currentSurvey.title ===
              "Pilar 4 - Gente y Liderazgo para el Cambio" && (
              <i className="icon-gente text-primaryalt me-4 text-[58px] relative -top-4"></i>
            )}
            {currentSurvey.title}
          </CardTitle>
          {"description" in currentSurvey && currentSurvey.description && (
            <p className="text-muted-foreground text-sm md:text-base">
              {currentSurvey.description}
            </p>
          )}
        </CardHeader>
        <CardContent>
          <SurveyForm
            surveyData={currentSurvey}
            onNext={handleNext}
            onPrevious={handlePrevious}
            currentPageIndex={currentPageIndex}
          />
        </CardContent>
      </Card>
    </div>
  );
}
