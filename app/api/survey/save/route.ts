import { NextRequest, NextResponse } from 'next/server';
import { SurveySubmission } from '@/lib/models/survey';
import { SurveyService } from '@/lib/services/survey-service';

export async function POST(request: NextRequest) {
  try {
    const surveyData: SurveySubmission = await request.json();
    
    // Extract metadata from headers
    const metadata = {
      userAgent: request.headers.get('user-agent') || undefined,
      ipAddress: request.headers.get('x-forwarded-for') || 
                request.headers.get('x-real-ip') || 
                'unknown'
    };
    
    // Save to MongoDB using the service
    const surveyId = await SurveyService.saveSurveyResponse(surveyData, metadata);
    
    console.log('✅ Survey data saved to MongoDB:', surveyId);
    
    return NextResponse.json({ 
      message: '✅ Encuesta guardada correctamente',
      id: surveyId
    }, { status: 200 });
    
  } catch (error) {
    console.error('❌ Error al guardar encuesta:', error);
    return NextResponse.json({ 
      message: '❌ Error al guardar encuesta', 
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
} 