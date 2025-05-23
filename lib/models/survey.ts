import mongoose from 'mongoose';

// Flexible schema for SurveyJS responses (like you had in React app)
const SurveySchema = new mongoose.Schema({}, { 
  strict: false, // Allow any fields
  timestamps: true // Automatically add createdAt and updatedAt
});

// Prevent re-compilation during development
const Survey = mongoose.models.Survey || mongoose.model('Survey', SurveySchema);

export default Survey;

// Keep the TypeScript interfaces for type safety in the frontend
export type QuestionResponse = string | number | string[] | boolean;

export interface SurveyResponse {
  _id?: string;
  timestamp?: Date;
  responses: {
    [questionId: string]: QuestionResponse;
  };
  metadata?: {
    completionTime?: number;
    userAgent?: string;
    ipAddress?: string;
    host?: string;
    environment?: string;
  };
  pillarScores?: {
    [pillarName: string]: number;
  };
  totalScore?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface SurveySubmission {
  responses: Record<string, QuestionResponse>;
  metadata?: {
    completionTime?: number;
    userAgent?: string;
    ipAddress?: string;
    host?: string;
    environment?: string;
  };
} 