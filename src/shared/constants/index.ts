export const APP_CONFIG = {
  API_PORT: 3001,
  API_BASE_URL: 'http://localhost:3001',
  WINDOW_SIZE: {
    width: 1200,
    height: 800,
    minWidth: 800,
    minHeight: 600,
  },
} as const;

export const API_ROUTES = {
  HELLO: '/api/hello',
  USERS: '/api/users',
} as const;
