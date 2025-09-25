import { contextBridge, ipcRenderer } from 'electron';
import type { ApiMethod } from './shared/types/api';

// Expose API methods to renderer process
contextBridge.exposeInMainWorld('electronAPI', {
  // API call method
  apiCall: (method: ApiMethod, path: string, body?: any) =>
    ipcRenderer.invoke('api-call', { method, path, body }),
});
