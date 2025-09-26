import { defineConfig } from 'vite';

// https://vitejs.dev/config
export default defineConfig({
  build: {
    commonjsOptions: {
      ignoreDynamicRequires: true,
    },
    rollupOptions: {
      external: [
        '@libsql/client',
        '@libsql/darwin-arm64',
        '@libsql/linux-x64',
        '@libsql/win32-x64',
        '@libsql/linux-arm64',
        '@libsql/win32-arm64'
      ],
    },
  },
  optimizeDeps: {
    exclude: ['@libsql/client'],
  },
});
