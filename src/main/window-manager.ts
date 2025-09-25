import { BrowserWindow } from 'electron';
import path from 'node:path';
import { APP_CONFIG } from '../shared/constants';

export const createWindow = (): BrowserWindow => {
  const mainWindow = new BrowserWindow({
    width: APP_CONFIG.WINDOW_SIZE.width,
    height: APP_CONFIG.WINDOW_SIZE.height,
    minWidth: APP_CONFIG.WINDOW_SIZE.minWidth,
    minHeight: APP_CONFIG.WINDOW_SIZE.minHeight,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
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
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
  }

  // Open DevTools in development
  if (process.env.NODE_ENV === 'development') {
    mainWindow.webContents.openDevTools();
  }

  return mainWindow;
};
