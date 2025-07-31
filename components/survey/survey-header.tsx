"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useSurvey } from "@/lib/context/survey-context";

interface SurveyHeaderProps {
  totalSteps: number;
}

export function SurveyHeader({ totalSteps }: SurveyHeaderProps) {
  const { step } = useSurvey();

  return (
    <Card className="mb-6">
      <CardContent>
        {/* Progress bar */}
        <div className="mt-4">
          <div className="bg-gray-50 dark:bg-black h-2 rounded-full overflow-hidden">
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
