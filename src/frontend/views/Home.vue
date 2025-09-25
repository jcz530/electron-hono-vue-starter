<template>
  <div class="home">
    <section class="api-demo">
      <h2>API Demo</h2>
      <div class="buttons">
        <Button
          :loading="loading"
          @click="fetchHello"
        >
          Test Hello API
        </Button>
        <Button
          :loading="loading"
          @click="fetchUsers"
          variant="secondary"
        >
          Fetch Users
        </Button>
        <Button
          :loading="loading"
          @click="fetchHealth"
          size="small"
        >
          Health Check
        </Button>
      </div>

      <div v-if="error" class="error">
        <h3>Error:</h3>
        <p>{{ error }}</p>
        <Button size="small" @click="clearError">Clear</Button>
      </div>

      <div v-if="apiResponse" class="response">
        <h3>API Response:</h3>
        <pre>{{ JSON.stringify(apiResponse, null, 2) }}</pre>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from '../components/common/Button.vue';
import { useApi } from '../composables/useApi';
import { API_ROUTES } from '../../shared/constants';
import type { HelloResponse, User } from '../../shared/types/api';

const { loading, error, apiCall, clearError } = useApi();
const apiResponse = ref<any>(null);

const fetchHello = async () => {
  const response = await apiCall<HelloResponse>('GET', API_ROUTES.HELLO);
  apiResponse.value = response;
};

const fetchUsers = async () => {
  const response = await apiCall<User[]>('GET', API_ROUTES.USERS);
  apiResponse.value = response;
};

const fetchHealth = async () => {
  const response = await apiCall('GET', '/api/health');
  apiResponse.value = response;
};
</script>

<style scoped>
.home {
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
  flex-wrap: wrap;
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
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .home {
    padding: 1rem;
  }

  .api-demo {
    padding: 1rem;
  }

  .buttons {
    flex-direction: column;
  }
}
</style>