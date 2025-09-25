import { ipcMain } from 'electron';
import type { ApiMethod } from '../../shared/types/api';
import { APP_CONFIG } from '../../shared/constants';

export const setupAPIBridge = (): void => {
  ipcMain.handle('api-call', async (_, { method, path, body }: {
    method: ApiMethod;
    path: string;
    body?: any;
  }) => {
    try {
      const url = `${APP_CONFIG.API_BASE_URL}${path}`;

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: body ? JSON.stringify(body) : undefined,
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API Bridge Error:', error);
      throw error;
    }
  });
};