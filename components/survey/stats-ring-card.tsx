"use client";

import { Card, CardContent } from "@/components/ui/card";

interface StatsRingCardProps {
  label: string;
  value: number;
}

export function StatsRingCard({ label, value }: StatsRingCardProps) {
  const percentage = (value / 5) * 100;
  const circumference = 2 * Math.PI * 45;
  const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;

  const getColor = (val: number) => {
    if (val >= 4) return "text-green-600";
    if (val >= 3) return "text-yellow-600";
    if (val >= 2) return "text-orange-600";
    return "text-red-600";
  };

  const getRingColor = (val: number) => {
    if (val >= 4) return "stroke-green-600";
    if (val >= 3) return "stroke-yellow-600";
    if (val >= 2) return "stroke-orange-600";
    return "stroke-red-600";
  };

  return (
    <Card className="w-full max-w-[200px]">
      <CardContent className="p-6 flex flex-col items-center">
        <div className="relative w-24 h-24 mb-4">
          <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="currentColor"
              strokeWidth="6"
              fill="transparent"
              className="text-gray-200"
            />
            {/* Progress circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="currentColor"
              strokeWidth="6"
              fill="transparent"
              strokeDasharray={strokeDasharray}
              strokeLinecap="round"
              className={getRingColor(value)}
              style={{
                transition: "stroke-dasharray 0.5s ease-in-out",
              }}
            />
          </svg>
          {/* Center text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={`text-2xl font-bold ${getColor(value)}`}>
              {value.toFixed(1)}
            </span>
          </div>
        </div>
        <h3 className="text-sm font-medium text-center text-gray-700 dark:text-gray-300">
          {label}
        </h3>
        <p className="text-xs text-gray-500 mt-1">
          {percentage.toFixed(0)}%
        </p>
      </CardContent>
    </Card>
  );
} 