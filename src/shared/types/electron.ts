import type { ApiMethod } from './api';

export interface ElectronAPI {
  apiCall: (_method: ApiMethod, _path: string, _body?: unknown) => Promise<unknown>;
}

declare global {
  interface Window {
    electronAPI: ElectronAPI;
  }
}
