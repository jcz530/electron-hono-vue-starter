import type { ApiMethod } from './api';

export interface ElectronAPI {
  apiCall: (method: ApiMethod, path: string, body?: unknown) => Promise<unknown>;
}

declare global {
  interface Window {
    electronAPI: ElectronAPI;
  }
}
