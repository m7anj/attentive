# Attentive - AFK Meeting Assistant

#### Stay in the loop during meetings even when away from your keyboard.

Often, when you aren't at your computer during a meeting, and someone says your name or asks you something... how awkward. However, the *Attentive* switch, when turned on, records your system audio until someone says your name and captures the context around it. The application then gives your phone a notification and either will provide your own response in the meeting chat or use one of the context-based AI-generated responses, all from your phone until you come back to your computer.

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
