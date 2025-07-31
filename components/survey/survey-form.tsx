"use client";

import { useState, useId } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useSurvey } from "@/lib/context/survey-context";

interface SurveyQuestion {
  type: string;
  name: string;
  title: string;
  isRequired?: boolean;
  choices?: Array<{ value: number | string; text: string }>;
}

interface SurveyPanel {
  type: string;
  name: string;
  title: string;
  elements: SurveyQuestion[];
}

interface SurveyPage {
  name: string;
  title?: string;
  elements: (SurveyQuestion | SurveyPanel)[];
}

interface SurveyFormProps {
  surveyData: {
    title: string;
    description?: string;
    pages: SurveyPage[];
  };
  onNext: () => void;
  onPrevious: () => void;
  currentPageIndex: number;
}

export function SurveyForm({
  surveyData,
  onNext,
  onPrevious,
  currentPageIndex,
}: SurveyFormProps) {
  const { userAnswers, updateAnswers } = useSurvey();
  const [localAnswers, setLocalAnswers] = useState<
    Record<string, string | number>
  >({});
  const formId = useId();

  const currentPage = surveyData.pages[currentPageIndex];

  const handleInputChange = (name: string, value: string | number) => {
    setLocalAnswers((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    updateAnswers(localAnswers);
    onNext();
  };

  const renderQuestion = (question: SurveyQuestion) => {
    const currentValue =
      localAnswers[question.name] || userAnswers[question.name] || "";
    const questionId = `${formId}-${question.name}`;

    switch (question.type) {
      case "text":
        return (
          <div key={questionId} className="space-y-2">
            <Label className="text-base font-semibold" htmlFor={questionId}>
              {question.title}
            </Label>
            <Input
              id={questionId}
              value={currentValue as string}
              onChange={(e) => handleInputChange(question.name, e.target.value)}
              required={question.isRequired}
              suppressHydrationWarning
            />
          </div>
        );

      case "textarea":
        return (
          <div key={questionId} className="space-y-2">
            <Label htmlFor={questionId}>{question.title}</Label>
            <Textarea
              id={questionId}
              value={currentValue as string}
              onChange={(e) => handleInputChange(question.name, e.target.value)}
              required={question.isRequired}
              suppressHydrationWarning
            />
          </div>
        );

      case "radiogroup":
        return (
          <div key={questionId} className="space-y-4">
            <Label className="text-base font-semibold">{question.title}</Label>
            <RadioGroup
              value={currentValue.toString()}
              onValueChange={(value) =>
                handleInputChange(question.name, parseInt(value) || value)
              }
              suppressHydrationWarning
            >
              {question.choices?.map((choice) => {
                const choiceId = `${questionId}-${choice.value}`;
                return (
                  <div key={choiceId} className="flex items-start space-x-2">
                    <RadioGroupItem
                      value={choice.value.toString()}
                      id={choiceId}
                      suppressHydrationWarning
                    />
                    <Label
                      htmlFor={choiceId}
                      className="leading-relaxed cursor-pointer"
                    >
                      {choice.text}
                    </Label>
                  </div>
                );
              })}
            </RadioGroup>
          </div>
        );

      default:
        return null;
    }
  };

  const renderElement = (element: SurveyQuestion | SurveyPanel) => {
    const elementId = `${formId}-${element.name}`;

    if (element.type === "panel") {
      const panel = element as SurveyPanel;
      return (
        <Card key={elementId} className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl bg-[#e9f8f1] dark:bg-primaryalt/50 p-5 rounded-xl">
              {panel.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 py-10">
            {panel.elements.map(renderQuestion)}
          </CardContent>
        </Card>
      );
    } else {
      return (
        <Card key={elementId} className="mb-6">
          <CardContent className="pt-6">
            {renderQuestion(element as SurveyQuestion)}
          </CardContent>
        </Card>
      );
    }
  };

  if (!currentPage) {
    return <div>Page not found</div>;
  }

  return (
    <div className="mx-auto">
      <div className="mb-6">
        {currentPage.title && (
          <h2 className="text-xl font-medium mb-4 ps-16">
            {currentPage.title}
          </h2>
        )}
      </div>

      <div className="space-y-6">{currentPage.elements.map(renderElement)}</div>

      <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-2 mt-8">
        <Button
          variant="outline"
          onClick={onPrevious}
          disabled={currentPageIndex === 0}
          className="w-full sm:w-auto"
          suppressHydrationWarning
        >
          Anterior
        </Button>

        <Button
          onClick={handleNext}
          className="w-full sm:w-auto"
          suppressHydrationWarning
        >
          {currentPageIndex === surveyData.pages.length - 1 &&
          surveyData.title.includes("Pilar 4")
            ? "FINALIZAR"
            : "CONTINUAR"}
        </Button>
      </div>
    </div>
  );
}
