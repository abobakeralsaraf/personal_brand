import dotenv from 'dotenv';

dotenv.config();

interface EnvConfig {
  extractorApiKey: string;
  geminiApiKey: string;
  githubToken: string;
  port: number;
  nodeEnv: 'development' | 'production';
}

function validateEnv(): EnvConfig {
  const required = ['EXTRACTOR_API_KEY', 'GEMINI_API_KEY'];
  const missing = required.filter(key => !process.env[key]);

  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }

  return {
    extractorApiKey: process.env.EXTRACTOR_API_KEY!,
    geminiApiKey: process.env.GEMINI_API_KEY!,
    githubToken: process.env.GITHUB_TOKEN || '',
    port: parseInt(process.env.PORT || '3000', 10),
    nodeEnv: (process.env.NODE_ENV || 'development') as 'development' | 'production',
  };
}

export const env = validateEnv();
export default env;
