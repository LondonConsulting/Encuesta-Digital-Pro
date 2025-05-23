import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { readFile } from 'fs/promises';
import path from 'path';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const NIVELES_MADUREZ: Record<number, string> = {
  1: "Básico",
  2: "Emergente",
  3: "Intermedio",
  4: "Avanzado",
  5: "Innovador"
};

async function readCsvContext() {
  try {
    const csvPath = path.join(process.cwd(), 'lib', 'prompt', 'ContextoGPT.csv');
    const csvContent = await readFile(csvPath, 'utf-8');
    return csvContent;
  } catch (error) {
    console.error('Error reading CSV file:', error);
    return '';
  }
}

function getNivelMadurez(score: number): string {
  const nivel = Math.round(score);
  const nivelAjustado = Math.max(1, Math.min(5, nivel));
  return NIVELES_MADUREZ[nivelAjustado];
}

export async function POST(request: NextRequest) {
  try {
    const respuestas = await request.json();
    const empresa = respuestas.Nombre || "la empresa evaluada";

    // Calcular nivel de madurez para cada categoría
    const resultadosConNivel = Object.entries(respuestas).reduce((acc: Record<string, any>, [key, value]) => {
      if (typeof value === 'number') {
        acc[key] = {
          puntaje: value,
          nivel: getNivelMadurez(value)
        };
      } else {
        acc[key] = value;
      }
      return acc;
    }, {});

    const prompt = `
Actúa como un consultor experto en transformación digital. Analiza los siguientes resultados de madurez digital de **${empresa}** considerando los siguientes niveles de madurez:

01. Básico: Primeras etapas de transformación digital
02. Emergente: Iniciativas digitales en desarrollo
03. Intermedio: Transformación digital en proceso
04. Avanzado: Alta madurez digital
05. Innovador: Líder en transformación digital

Resultados de la evaluación:
${JSON.stringify(resultadosConNivel, null, 2)}

Genera un análisis interpretativo que incluya:

**Nivel de Madurez Digital**
[Interpreta el nivel actual de la empresa basado en los resultados, explicando en qué nivel se encuentra (Básico, Emergente, etc.) y por qué]

**Análisis por Pilar**
[Para cada pilar relevante]
- **[Nombre del Pilar]**: [Interpreta el nivel de madurez actual y explica las características que exhibe la empresa en este pilar según su nivel]

**Próximos Pasos**
[2-3 recomendaciones específicas para avanzar al siguiente nivel de madurez, enfocándose en las áreas más críticas]

Enfócate en interpretar el significado de cada nivel y cómo se manifiesta en la organización, en lugar de solo mencionar números.
`.trim();

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    });

    const analysis = completion.choices[0].message.content;

    return NextResponse.json(
      {
        report: analysis,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Error al generar el reporte con GPT:", error);
    return NextResponse.json(
      {
        error: "Error al generar el reporte con GPT",
        detail: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
