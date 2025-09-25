import { contextBridge, ipcRenderer } from 'electron';

// Expose API methods to renderer process
contextBridge.exposeInMainWorld('electronAPI', {
  // API call method
  apiCall: (method: string, path: string, body?: any) =>
    ipcRenderer.invoke('api-call', { method, path, body }),
});
