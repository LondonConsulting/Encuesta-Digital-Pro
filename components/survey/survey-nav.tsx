"use client";

import { useId } from "react";
import { NavIcon } from "@/components/ui/nav-icon";
import { useSurvey } from "@/lib/context/survey-context";

interface SurveyNavProps {
  totalSteps: number;
}

const stepData = [
  {
    icon: "",
    title: "Inicio",
    description: "",
  },
  {
    icon: "estrategia",
    title: "Estrategia",
    description: "Estrategia y Definición de Valor",
  },
  {
    icon: "tecnologia",
    title: "Tecnología",
    description: "Breve descripción",
  },
  {
    icon: "analitica",
    title: "Analítica de Datos",
    description: "Breve descripción",
  },
  {
    icon: "gente",
    title: " Gente y Liderazgo",
    description: "Breve descripción",
  },
];

export function SurveyNav({ totalSteps }: SurveyNavProps) {
  const { step, setStep } = useSurvey();
  const headerId = useId();

  return (
    <nav className="flex flex-col gap-[34px]">
      {Array.from({ length: totalSteps }, (_, i) => {
        const stepId = `${headerId}-step-${i + 1}`;
        const data = stepData[i] || {
          icon: "default-icon",
          title: `Paso ${i + 1}`,
          description: "Descripción no disponible",
        };

        const isActive = step === i + 1;
        const isLast = i === totalSteps - 1;

        if (i === 0) {
          return (
            <div
              key={stepId}
              className="font-semibold text-secondary dark:text-white flex-1 cursor-pointer"
              onClick={() => setStep(i + 1)}
              suppressHydrationWarning
            >
              {data.title}
            </div>
          );
        }

        return (
          <div
            className={`flex flex-wrap relative cursor-pointer ${
              !isLast
                ? "after:w-[2px] after:h-[26px] after:bg-nav-divide after:absolute after:top-[52px] after:left-[23px] after:rounded-full"
                : ""
            } ${!isActive ? "opacity-60" : ""}`}
            key={stepId}
            onClick={() => setStep(i + 1)}
            suppressHydrationWarning
          >
            <NavIcon
              variant={
                step === i + 1
                  ? "default"
                  : step > i + 1
                  ? "complete"
                  : "pending"
              }
            >
              <i className={`icon-${data.icon} text-2xl`}></i>
            </NavIcon>
            <div>
              <div className="font-semibold text-secondary dark:text-white flex-1">
                {data.title}
              </div>
              <div className="text-muted dark:text-white text-sm">
                {data.description}
              </div>
            </div>
          </div>
        );
      })}
    </nav>
  );
}
