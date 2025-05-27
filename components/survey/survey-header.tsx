"use client";

import { useId } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useSurvey } from "@/lib/context/survey-context";

interface SurveyHeaderProps {
  totalSteps: number;
}

export function SurveyHeader({ totalSteps }: SurveyHeaderProps) {
  const { step, setStep } = useSurvey();
  const headerId = useId();

  return (
    <Card className="mb-6">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-xl md:text-2xl font-bold break-words">Encuesta de Madurez Digital</h1>
            <p className="text-muted-foreground mt-1" suppressHydrationWarning>
              Paso {step} de {totalSteps}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:space-x-2">
            <Button
              variant="outline"
              onClick={() => setStep(Math.max(1, step - 1))}
              disabled={step === 1}
              className="w-full sm:w-auto"
              suppressHydrationWarning
            >
              Anterior
            </Button>
            
            <div className="flex space-x-1">
              {Array.from({ length: totalSteps }, (_, i) => {
                const stepId = `${headerId}-step-${i + 1}`;
                return (
                <Button
                    key={stepId}
                  variant={step === i + 1 ? "default" : step > i + 1 ? "secondary" : "outline"}
                  size="sm"
                  onClick={() => setStep(i + 1)}
                  className="w-8 h-8 p-0"
                    suppressHydrationWarning
                >
                  {i + 1}
                </Button>
                );
              })}
            </div>
            
            <Button
              variant="outline"
              onClick={() => setStep(Math.min(totalSteps, step + 1))}
              disabled={step === totalSteps}
              className="w-full sm:w-auto"
              suppressHydrationWarning
            >
              Siguiente
            </Button>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="mt-4">
          <div className="bg-secondary h-2 rounded-full overflow-hidden">
            <div 
              className="bg-primary h-full transition-all duration-300 ease-in-out"
              style={{ width: `${(step / totalSteps) * 100}%` }}
              suppressHydrationWarning
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 