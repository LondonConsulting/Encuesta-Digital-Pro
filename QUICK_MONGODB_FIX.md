# Quick MongoDB Fix - Using Mongoose (Like Your React App)

## The Solution
I've converted your setup to use Mongoose (like you had in React) instead of the native MongoDB driver. This should eliminate the SSL issues.

## Quick Setup

### 1. Install Mongoose
```bash
npm install mongoose
```

### 2. Create `.env.local` file:
```env
# For local MongoDB (recommended for development)
MONGODB_URI=mongodb://localhost:27017/encuesta

# OR for Atlas (if you prefer cloud)
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/encuesta?retryWrites=true&w=majority
```

### 3. Start Local MongoDB (Docker - easiest)
```bash
docker run --name survey-mongo -p 27017:27017 -d mongo:latest
```

### 4. Restart your app
```bash
npm run dev
```

## What Changed
- ✅ **Using Mongoose** (like your React app)
- ✅ **Flexible schema** `{ strict: false }` - accepts any data structure  
- ✅ **Automatic timestamps** - `createdAt` and `updatedAt` fields
- ✅ **Simplified connection** - no SSL configuration needed
- ✅ **Better error handling** - Mongoose handles connection issues better

## Your Original Schema (Now Implemented)
```javascript
// This is what you had - now implemented in TypeScript
const SurveySchema = new mongoose.Schema({}, { 
  strict: false,    // Allow any fields
  timestamps: true  // Add createdAt/updatedAt
});
```

## Test It
Complete a survey and you should see:
- ✅ "MongoDB connected with Mongoose" in console
- ✅ Green success message with survey ID
- ✅ Data saved to `encuesta` database, `surveys` collection

This should work much better than the native MongoDB driver! 