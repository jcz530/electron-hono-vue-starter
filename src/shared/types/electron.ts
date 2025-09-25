import type { ApiMethod } from './api';

export interface ElectronAPI {
  apiCall: (method: ApiMethod, path: string, body?: any) => Promise<any>;
}

declare global {
  interface Window {
    electronAPI: ElectronAPI;
  }
}