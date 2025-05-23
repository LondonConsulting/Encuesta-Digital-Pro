# MongoDB Setup Guide

This guide explains how to set up MongoDB for the survey application.

## Prerequisites

You need to install the MongoDB dependencies:

```bash
npm install mongodb
```

## Environment Variables

Create a `.env.local` file in your project root with the following:

```env
# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/survey_maturity
```

### MongoDB Options

#### Option 1: Local MongoDB
1. Install MongoDB locally: https://docs.mongodb.com/manual/installation/
2. Start MongoDB service
3. Use: `MONGODB_URI=mongodb://localhost:27017/survey_maturity`

#### Option 2: MongoDB Atlas (Cloud)
1. Create account at https://www.mongodb.com/atlas
2. Create a cluster
3. Get connection string from Atlas dashboard
4. Use: `MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/survey_maturity?retryWrites=true&w=majority`

#### Option 3: Docker MongoDB
```bash
docker run --name survey-mongo -p 27017:27017 -d mongo:latest
```
Then use: `MONGODB_URI=mongodb://localhost:27017/survey_maturity`

## Database Structure

The application creates the following collection:

- **survey_responses**: Stores all survey submissions with timestamps, responses, metadata, and calculated scores.

### Document Schema

```typescript
{
  _id: ObjectId,
  timestamp: Date,
  responses: {
    [questionId: string]: string | number | string[] | boolean
  },
  metadata: {
    completionTime?: number,
    userAgent?: string,
    ipAddress?: string
  },
  pillarScores: {
    [pillarName: string]: number
  },
  totalScore: number
}
```

## API Endpoints

- `POST /api/survey/save` - Save survey response
- (Future) `GET /api/survey/responses` - Get all responses
- (Future) `GET /api/survey/responses/[id]` - Get specific response

## Customizing Scoring Logic

The scoring logic is implemented in `lib/services/survey-service.ts`. You can modify the `calculatePillarScores` and `getScoreFromResponse` methods to match your survey's scoring requirements.

## Testing the Connection

Once you've set up your MongoDB URI, the application will automatically connect when you submit a survey. Check the console logs for connection status. 