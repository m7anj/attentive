# Attentive - AFK Meeting Assistant

Stay in the loop during meetings even when away from your keyboard.

## Project Structure

```
attentive/
├── desktop-agent/          # Electron.js desktop app
│   ├── src/
│   └── package.json
├── backend/                # Express.js API server
│   ├── src/
│   └── package.json
├── mobile-app/             # React Native mobile app (future)
├── docs/                   # Documentation
└── .env.example           # Environment variables template
```

## Getting Started

1. **Setup Environment Variables**
   ```bash
   cp .env.example .env
   # Edit .env with your API keys
   ```

2. **Install Dependencies** (already done)
   ```bash
   cd desktop-agent && npm install
   cd ../backend && npm install
   ```

3. **Run Development**
   ```bash
   # Terminal 1 - Backend API
   cd backend && npm run dev

   # Terminal 2 - Desktop Agent
   cd desktop-agent && npm run dev
   ```

## Key Dependencies Installed

### Desktop Agent (Electron.js)
- **electron**: Desktop app framework
- **@google-cloud/speech**: Speech-to-text transcription
- **node-record-lpcm16**: Audio recording
- **natural**: NLP for keyword detection
- **firebase-admin**: Push notifications
- **electron-store**: Settings persistence

### Backend API (Express.js)
- **express**: Web framework
- **@google-cloud/speech**: Speech-to-text API
- **firebase-admin**: Push notifications
- **natural & compromise**: Text processing
- **openai**: AI summaries
- **ws**: WebSocket for real-time communication

## API Setup Required

1. **Google Cloud Speech-to-Text**
   - Create project at console.cloud.google.com
   - Enable Speech-to-Text API
   - Create service account & download JSON key

2. **Firebase** (for notifications)
   - Create project at console.firebase.google.com
   - Generate service account key

3. **OpenAI** (for summaries)
   - Get API key from platform.openai.com

## Development Tips

- Start with basic audio capture in desktop-agent
- Build transcription pipeline in backend
- Add keyword detection
- Implement notifications last
- Test with simple audio files first

Good luck learning! The environment is ready for you to start coding.