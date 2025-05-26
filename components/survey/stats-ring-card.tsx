"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatsRingCardProps {
  label: string;
  value: number;
  size?: "default" | "large";
}

export function StatsRingCard({ label, value, size = "default" }: StatsRingCardProps) {
  const percentage = (value / 5) * 100;
  const isLarge = size === "large";
  
  // Dimensions based on size
  const radius = isLarge ? 60 : 45;
  const strokeWidth = isLarge ? 8 : 6;
  const viewBoxSize = isLarge ? 140 : 100;
  const center = isLarge ? 70 : 50;
  
  const circumference = 2 * Math.PI * radius;
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
    <Card className={cn(
      "w-full",
      isLarge ? "max-w-[300px]" : "max-w-[200px]"
    )}>
      <CardContent className={cn(
        "flex flex-col items-center",
        isLarge ? "p-8" : "p-6"
      )}>
        <div className={cn(
          "relative mb-4",
          isLarge ? "w-40 h-40 mb-6" : "w-24 h-24"
        )}>
          <svg 
            className={cn(
              "transform -rotate-90",
              isLarge ? "w-40 h-40" : "w-24 h-24"
            )} 
            viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
          >
            {/* Background circle */}
            <circle
              cx={center}
              cy={center}
              r={radius}
              stroke="currentColor"
              strokeWidth={strokeWidth}
              fill="transparent"
              className="text-gray-200"
            />
            {/* Progress circle */}
            <circle
              cx={center}
              cy={center}
              r={radius}
              stroke="currentColor"
              strokeWidth={strokeWidth}
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
            <span className={cn(
              "font-bold",
              isLarge ? "text-4xl" : "text-2xl",
              getColor(value)
            )}>
              {value.toFixed(1)}
            </span>
          </div>
        </div>
        <h3 className={cn(
          "font-medium text-center text-gray-700 dark:text-gray-300",
          isLarge ? "text-lg" : "text-sm"
        )}>
          {label}
        </h3>
        <p className={cn(
          "text-gray-500",
          isLarge ? "text-sm mt-2" : "text-xs mt-1"
        )}>
          {percentage.toFixed(0)}%
        </p>
      </CardContent>
    </Card>
  );
} 