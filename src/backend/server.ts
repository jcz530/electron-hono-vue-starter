import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import api from './routes';
import { corsMiddleware } from './middleware/cors';
import { APP_CONFIG } from '../shared/constants';
import { runMigrations } from '../shared/database/migrate';

export const createServer = () => {
  const app = new Hono();

  // Middleware
  app.use('*', corsMiddleware());

  // Request logging
  app.use('*', async (c, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`${c.req.method} ${c.req.url} - ${c.res.status} (${ms}ms)`);
  });

  // API routes
  app.route('/api', api);

  return app;
};

export const startServer = async () => {
  console.log('🔧 Running database migrations...');
  await runMigrations();

  const app = createServer();

  const server = serve({
    fetch: app.fetch,
    port: APP_CONFIG.API_PORT,
  });

  console.log(`🔥 Hono API server running on ${APP_CONFIG.API_BASE_URL}`);

  return server;
};
