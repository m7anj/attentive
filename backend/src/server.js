const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Simple test endpoint
app.get('/', (req, res) => {
  res.json({
    message: '🎧 Attentive Backend API',
    status: 'running',
    timestamp: new Date().toISOString(),
    endpoints: {
      health: 'GET /',
      transcribe: 'POST /transcribe (not implemented yet)',
      notifications: 'POST /notify (not implemented yet)'
    }
  });
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', uptime: process.uptime() });
});

app.listen(PORT, () => {
  console.log(`🚀 Attentive backend running on http://localhost:${PORT}`);
  console.log(`📡 API ready for development`);
});