import connectMongoDB from '@/lib/mongoose';
import Survey from '@/lib/models/survey';
import { SurveyResponse, SurveySubmission, QuestionResponse } from '@/lib/models/survey';

export class SurveyService {
  /**
   * Save a survey response to the database using Mongoose
   */
  static async saveSurveyResponse(
    surveyData: SurveySubmission,
    metadata?: { userAgent?: string; ipAddress?: string }
  ): Promise<string> {
    // Connect to MongoDB
    await connectMongoDB();
    
    // Prepare the survey response document
    const surveyResponse = {
      responses: surveyData.responses,
      metadata: {
        ...surveyData.metadata,
        ...metadata
      },
      pillarScores: this.calculatePillarScores(surveyData.responses),
      totalScore: 0 // Will be calculated after pillarScores
    };

    // Calculate total score
    if (surveyResponse.pillarScores) {
      const scores = Object.values(surveyResponse.pillarScores);
      surveyResponse.totalScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;
    }

    // Save using Mongoose (much simpler!)
    const savedSurvey = new Survey(surveyResponse);
    await savedSurvey.save();
    
    return savedSurvey._id.toString();
  }

  /**
   * Get a survey response by ID
   */
  static async getSurveyResponse(id: string): Promise<SurveyResponse | null> {
    await connectMongoDB();
    const result = await Survey.findById(id).lean();
    return result as unknown as SurveyResponse | null;
  }

  /**
   * Get all survey responses
   */
  static async getAllSurveyResponses(limit = 100, skip = 0): Promise<SurveyResponse[]> {
    await connectMongoDB();
    const results = await Survey
      .find({})
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(skip)
      .lean();
    return results as unknown as SurveyResponse[];
  }

  /**
   * Calculate pillar scores based on responses
   */
  private static calculatePillarScores(responses: Record<string, QuestionResponse>): Record<string, number> {
    const pillarScores: Record<string, number> = {
      'estrategia': 0,
      'procesos': 0,
      'tecnologia': 0,
      'personas': 0
    };

    // Example scoring logic - replace with your actual logic
    Object.entries(responses).forEach(([questionId, response]) => {
      // Determine which pillar this question belongs to
      if (questionId.includes('pilar1') || questionId.includes('estrategia')) {
        pillarScores.estrategia += this.getScoreFromResponse(response);
      } else if (questionId.includes('pilar2') || questionId.includes('procesos')) {
        pillarScores.procesos += this.getScoreFromResponse(response);
      } else if (questionId.includes('pilar3') || questionId.includes('tecnologia')) {
        pillarScores.tecnologia += this.getScoreFromResponse(response);
      } else if (questionId.includes('pilar4') || questionId.includes('personas')) {
        pillarScores.personas += this.getScoreFromResponse(response);
      }
    });

    return pillarScores;
  }

  /**
   * Convert response to numeric score
   */
  private static getScoreFromResponse(response: QuestionResponse): number {
    if (typeof response === 'number') {
      return response;
    }
    if (typeof response === 'string') {
      // Map string responses to scores
      const scoreMap: Record<string, number> = {
        'nunca': 1,
        'ocasionalmente': 2,
        'frecuentemente': 3,
        'siempre': 4,
        'muy_bajo': 1,
        'bajo': 2,
        'medio': 3,
        'alto': 4,
        'muy_alto': 5
      };
      return scoreMap[response.toLowerCase()] || 0;
    }
    if (Array.isArray(response)) {
      return response.length; // Simple scoring for multiple choice
    }
    if (typeof response === 'boolean') {
      return response ? 1 : 0;
    }
    return 0;
  }
} 