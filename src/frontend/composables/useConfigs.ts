interface AppConfig {
  appName: string;
}

export function useConfigs(): AppConfig {
  return {
    appName: import.meta.env.VITE_APP_NAME || 'My App',
  };
}
