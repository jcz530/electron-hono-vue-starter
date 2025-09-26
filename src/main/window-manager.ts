import { BrowserWindow } from 'electron';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { APP_CONFIG } from '../shared/constants';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const createWindow = (): BrowserWindow => {
  const mainWindow = new BrowserWindow({
    width: APP_CONFIG.WINDOW_SIZE.width,
    height: APP_CONFIG.WINDOW_SIZE.height,
    minWidth: APP_CONFIG.WINDOW_SIZE.minWidth,
    minHeight: APP_CONFIG.WINDOW_SIZE.minHeight,
    webPreferences: {
      preload: path.join(__dirname, '../preload/preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
    titleBarStyle: 'default',
    show: false, // Don't show until ready-to-show
  });

  // Show window when ready to prevent visual flash
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  // Load the appropriate content
  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:5173');
  } else {
    mainWindow.loadFile(path.join(__dirname, '../renderer/index.html'));
  }

  // Open DevTools in development
  if (process.env.NODE_ENV === 'development') {
    mainWindow.webContents.openDevTools();
  }

  return mainWindow;
};
