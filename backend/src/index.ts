/**
 * You Are Hero - LinkedIn to Website Generator
 * Backend Server Entry Point
 */

import express from 'express';
import cors from 'cors';
import { env } from './env';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'You Are Hero Backend Running' });
});

app.get('/', (req, res) => {
  res.json({
    name: 'You Are Hero Backend',
    version: '1.0.0',
    description: 'Convert LinkedIn profiles to professional websites',
    endpoints: {
      health: '/health',
      extract: '/api/profile/extract',
      generate: '/api/website/generate'
    }
  });
});

const PORT = env.port;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
  console.log(`Environment: ${env.nodeEnv}`);
});

export default app;
