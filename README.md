# Attentive - AFK Meeting Assistant

Stay in the loop during meetings even when away from your keyboard. Recieve a phone notification for when your name is recognised alongside the context around it. Either provide your own response in the meeting chat, away from your keyboard or use one of the context-based AI-generated responses.

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

## macOS Setup

Audio capture on macOS requires additional setup due to system restrictions:

### Install BlackHole (Audio Router)
```bash
brew install blackhole-2ch
```

Or download directly from: https://github.com/ExistentialAudio/BlackHole/releases

### Configure Audio Routing
1. Open **Audio MIDI Setup** (Applications > Utilities)
2. Create a **Multi-Output Device**
3. Add your speakers + BlackHole to the multi-output device
4. Set Discord (or target app) to output to BlackHole
5. The desktop agent will capture audio from BlackHole

## Key Dependencies

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