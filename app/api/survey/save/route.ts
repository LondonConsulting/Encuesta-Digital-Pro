import { NextRequest, NextResponse } from 'next/server';
import { SurveySubmission } from '@/lib/models/survey';
import { SurveyService } from '@/lib/services/survey-service';

export async function POST(request: NextRequest) {
  console.log('📝 Starting survey save process...');
  
  try {
    // Log request details
    console.log('🔍 Request headers:', {
      userAgent: request.headers.get('user-agent'),
      contentType: request.headers.get('content-type'),
      host: request.headers.get('host'),
    });

    const surveyData: SurveySubmission = await request.json();
    console.log('📊 Survey data received:', {
      responseCount: Object.keys(surveyData.responses || {}).length,
      hasMetadata: !!surveyData.metadata,
    });
    
    // Extract metadata from headers with explicit typing
    const metadata: {
      userAgent?: string;
      ipAddress?: string;
      host?: string;
      environment?: string;
    } = {
      userAgent: request.headers.get('user-agent') || undefined,
      ipAddress: request.headers.get('x-forwarded-for') || 
                request.headers.get('x-real-ip') || 
                'unknown',
      host: request.headers.get('host') || undefined,
      environment: process.env.NODE_ENV || undefined,
    };
    
    console.log('🔄 Attempting to save survey data...');
    
    // Save to MongoDB using the service
    const surveyId = await SurveyService.saveSurveyResponse(surveyData, metadata);
    
    console.log('✅ Survey data saved successfully:', {
      surveyId,
      timestamp: new Date().toISOString(),
    });
    
    return NextResponse.json({ 
      message: '✅ Encuesta guardada correctamente',
      id: surveyId
    }, { status: 200 });
    
  } catch (error) {
    // Enhanced error logging
    console.error('❌ Error saving survey:', {
      errorName: error instanceof Error ? error.name : 'Unknown',
      errorMessage: error instanceof Error ? error.message : 'Unknown error',
      errorStack: error instanceof Error ? error.stack : undefined,
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV,
    });

    return NextResponse.json({ 
      message: '❌ Error al guardar encuesta', 
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString(),
    }, { status: 500 });
  }
} 