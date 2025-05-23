"use client";

import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export interface RadarChartData {
  category: string;
  value: number;
}

interface SurveyRadarChartProps {
  data: RadarChartData[];
  title: string;
  description?: string;
}

export function SurveyRadarChart({ 
  data, 
  title, 
  description
}: SurveyRadarChartProps) {
  const chartConfig = {
    value: {
      label: "Puntaje",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig;

  // Ensure data values are capped at 5
  const normalizedData = data.map(item => ({
    ...item,
    value: Math.min(item.value, 5)
  }));

  // Custom render function for axis labels to handle text wrapping
  const renderAxisTick = (props: any) => {
    const { x, y, payload } = props;
    const words = payload.value.split(' ');
    const lineHeight = 10;
    const totalHeight = (words.length - 1) * lineHeight;

    return (
      <g transform={`translate(${x},${y})`}>
        {words.map((word: string, index: number) => (
          <text
            key={index}
            x={0}
            y={index * lineHeight}
            textAnchor="middle"
            className="text-[12px] fill-current"
            dy={index === 0 ? -(totalHeight / 2) : 0}
          >
            {word}
          </text>
        ))}
      </g>
    );
  };

  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{title}</CardTitle>
        {description && (
          <CardDescription className="text-center">
            {description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="pb-4">
        <div className="w-full h-[280px] flex items-center justify-center">
          <div className="w-full max-w-[400px] h-full">
            <ChartContainer
              config={chartConfig}
              className="w-full h-full"
            >
              <RadarChart 
                data={normalizedData} 
                outerRadius="100%" 
                margin={{ top: 40, right: 20, bottom: 20, left: 20 }}
              >
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="line" />}
                />
                <PolarAngleAxis 
                  dataKey="category" 
                  tick={renderAxisTick}
                  tickLine={false}
                  axisLine={false}
                  radius={10}
                />
                <PolarGrid 
                  radialLines={true}
                  gridType="polygon"
                />
                <PolarRadiusAxis
                  angle={90}
                  domain={[0, 5]}
                  tick={false}
                />
                <Radar
                  dataKey="value"
                  fill="var(--color-value)"
                  fillOpacity={0.3}
                  stroke="var(--color-value)"
                  strokeWidth={2}
                  dot={{ fill: "var(--color-value)", strokeWidth: 2, r: 5 }}
                />
              </RadarChart>
            </ChartContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 