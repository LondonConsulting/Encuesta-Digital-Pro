import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { readFile } from 'fs/promises';
import path from 'path';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const NIVELES_MADUREZ: Record<number, string> = {
  1: "Básico",
  2: "Inicial",
  3: "Intermedio",
  4: "Avanzado",
  5: "Óptimo"
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
    const empresa = respuestas.Empresa || "la empresa evaluada";
    const contextoCSV = await readCsvContext();

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
Actúa como un consultor experto en transformación digital. Analiza los siguientes resultados de madurez digital de **${empresa}** considerando los siguientes niveles de madurez y sus rangos de calificación:

01. Básico (0.0 - 1.5): Sistemas locales y desconectados. Procesos manuales y fragmentados. Resistencia al cambio. Sistemas locales obsoletos.

02. Inicial (1.51 - 2.5): Inicio de migración y herramientas básicas. Estandarización básica. Capacitación limitada. Operación híbrida (local y nube).

03. Intermedio (2.51 - 3.5): Conectividad y operaciones en cloud. Optimización digital consolidada. Procesos integrados y automatizados. Adopción tecnológica avanzada. IoT y análisis predictivo.

04. Avanzado (3.51 - 4.5): Gestión con cloud computing. Innovación y expansión. Procesos totalmente integrados. Cambio dinámico continuo. Machine learning y gemelos digitales.

05. Óptimo (4.51 - 5.0): Gestión avanzada con cloud computing. Innovación continua. Digitalización total e inteligente. Adaptación constante al cambio. Machine learning y gemelos digitales avanzados.

IMPORTANTE: Para determinar el nivel de madurez, utiliza ESTRICTAMENTE estos rangos de calificación:
- Si la calificación es menor o igual a 1.5, corresponde al Nivel 01. Básico
- Si la calificación es mayor a 1.5 y menor o igual a 2.5, corresponde al Nivel 02. Inicial
- Si la calificación es mayor a 2.5 y menor o igual a 3.5, corresponde al Nivel 03. Intermedio
- Si la calificación es mayor a 3.5 y menor o igual a 4.5, corresponde al Nivel 04. Avanzado
- Si la calificación es mayor a 4.5, corresponde al Nivel 05. Óptimo

A continuación, encontrarás el contexto completo de las preguntas y respuestas que se utilizaron para esta evaluación. Este contexto te ayudará a entender mejor el significado de cada respuesta y proporcionar un análisis más detallado:

${contextoCSV}

Resultados de la evaluación:
${JSON.stringify(resultadosConNivel, null, 2)}

Genera un análisis interpretativo que incluya:

**Nivel de Madurez Digital**
[Basándote ESTRICTAMENTE en los rangos de calificación proporcionados y el contexto de las preguntas, determina el nivel actual de la empresa. IMPORTANTE: Siempre menciona el nivel con su número y la calificación exacta, por ejemplo "Nivel 03. Intermedio (3.2)" o "Nivel 01. Básico (1.3)". Explica por qué se encuentra en ese nivel basándote en las características descritas para cada nivel y el contexto de las preguntas]

**Análisis por Pilar**
[Para cada pilar en orden. IMPORTANTE: Para cada pilar, menciona siempre el nivel con su número y la calificación exacta (ej: "Nivel 01. Básico (1.4)" o "Nivel 04. Avanzado (4.1)"). Asegúrate de que el nivel asignado corresponda EXACTAMENTE con los rangos definidos y explica las características específicas que exhibe la organización según la descripción del nivel y el contexto de las preguntas]
- **1. Estrategia**: [Interpreta el nivel de madurez actual y explica las características que exhibe la organización en este pilar]
- **2. Tecnología**: [Interpreta el nivel de madurez actual y explica las características que exhibe la organización en este pilar]
- **3. Analítica de Datos**: [Interpreta el nivel de madurez actual y explica las características que exhibe la organización en este pilar]
- **4. Gente y Liderazgo**: [Interpreta el nivel de madurez actual y explica las características que exhibe la organización en este pilar]

**Próximos Pasos**
[2-3 recomendaciones específicas para avanzar al siguiente nivel de madurez, enfocándose en las áreas más críticas. Menciona específicamente el nivel actual y el siguiente usando sus números y características específicas. Basa tus recomendaciones en el contexto de las preguntas y respuestas proporcionadas]

Enfócate en interpretar el significado de cada nivel y cómo se manifiesta en la organización. SIEMPRE que menciones un nivel de madurez:
1. Inclúyelo con su número (ej: "Nivel 03. Intermedio")
2. Incluye la calificación exacta entre paréntesis
3. Asegúrate de que el nivel asignado corresponda ESTRICTAMENTE a los rangos definidos
4. Si una calificación es menor a 1.0, SIEMPRE debe ser clasificada como Nivel 01. Básico
5. Relaciona el análisis con las características específicas descritas para cada nivel y el contexto de las preguntas

El análisis debe ser estrictamente sobre la empresa y sus capacidades organizacionales, utilizando el contexto proporcionado para dar un análisis más profundo y relevante.
`.trim();

    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    });

    if (!completion.choices?.[0]?.message?.content) {
      throw new Error("No se recibió una respuesta válida de GPT");
    }

    const analysis = completion.choices[0].message.content;

    return new NextResponse(
      JSON.stringify({
        report: analysis,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
      },
      }
    );
  } catch (error) {
    console.error("❌ Error al generar el reporte con GPT:", error);
    return new NextResponse(
      JSON.stringify({
        error: "Error al generar el reporte con GPT",
        detail: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
      },
      }
    );
  }
}
