<template>
  <div id="app">
    <header>
      <h1>🚀 Electron + Hono + Vue</h1>
      <p>Modern desktop app with Vue frontend and Hono backend</p>
    </header>

    <main>
      <section class="api-demo">
        <h2>API Demo</h2>
        <div class="buttons">
          <button @click="fetchHello" :disabled="loading">
            Test Hello API
          </button>
          <button @click="fetchUsers" :disabled="loading">
            Fetch Users
          </button>
        </div>

        <div v-if="loading" class="loading">
          Loading...
        </div>

        <div v-if="apiResponse" class="response">
          <h3>API Response:</h3>
          <pre>{{ JSON.stringify(apiResponse, null, 2) }}</pre>
        </div>

        <div v-if="error" class="error">
          <h3>Error:</h3>
          <p>{{ error }}</p>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const loading = ref(false);
const apiResponse = ref(null);
const error = ref('');

// Declare global electronAPI
declare global {
  interface Window {
    electronAPI: {
      apiCall: (method: string, path: string, body?: any) => Promise<any>;
    };
  }
}

const fetchHello = async () => {
  try {
    loading.value = true;
    error.value = '';
    apiResponse.value = await window.electronAPI.apiCall('GET', '/api/hello');
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Unknown error';
    apiResponse.value = null;
  } finally {
    loading.value = false;
  }
};

const fetchUsers = async () => {
  try {
    loading.value = true;
    error.value = '';
    apiResponse.value = await window.electronAPI.apiCall('GET', '/api/users');
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Unknown error';
    apiResponse.value = null;
  } finally {
    loading.value = false;
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #2c3e50;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

header {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;
  text-align: center;
  color: white;
}

header h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

header p {
  font-size: 1.1rem;
  opacity: 0.9;
}

main {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.api-demo {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.api-demo h2 {
  margin-bottom: 1.5rem;
  color: #2c3e50;
}

.buttons {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

button {
  background: #667eea;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
}

button:hover:not(:disabled) {
  background: #5a67d8;
  transform: translateY(-2px);
}

button:disabled {
  background: #cbd5e0;
  cursor: not-allowed;
  transform: none;
}

.loading {
  text-align: center;
  padding: 1rem;
  color: #667eea;
  font-weight: 500;
}

.response {
  margin-top: 1rem;
}

.response h3 {
  color: #2d3748;
  margin-bottom: 1rem;
}

.response pre {
  background: #f7fafc;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #667eea;
  overflow-x: auto;
  font-size: 0.9rem;
  line-height: 1.5;
}

.error {
  margin-top: 1rem;
  padding: 1rem;
  background: #fed7d7;
  border-radius: 8px;
  border-left: 4px solid #e53e3e;
}

.error h3 {
  color: #c53030;
  margin-bottom: 0.5rem;
}

.error p {
  color: #742a2a;
}
</style>