import { Hono } from 'hono';
import users from './users';
import type { ApiHandler } from '../types/api';
import type { HelloResponse } from '../../shared/types/api';

const api = new Hono();

const hello: ApiHandler<HelloResponse> = c => {
  return c.json({
    message: 'Hello from Hono! 🔥',
  });
};

// Health check endpoint
const health: ApiHandler = c => {
  return c.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
};

api.get('/hello', hello);
api.get('/health', health);
api.route('/users', users);

export default api;
