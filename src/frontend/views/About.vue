<script setup lang="ts">
import { ref } from 'vue';
import Button from '../components/ui/button/Button.vue';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

const appInfo = ref({
  name: 'Electron Vue App',
  version: '1.0.0',
  description: 'A modern Electron application built with Vue 3, Hono API, and TypeScript',
  features: [
    'Electron + Vue 3 + TypeScript',
    'Hono API backend',
    'Tailwind CSS styling',
    'shadcn-vue components',
    'Vue Router navigation',
    'Organized architecture',
  ],
});
</script>

<template>
  <div class="about">
    <div class="container">
      <h1 class="title">About {{ appInfo.name }}</h1>

      <Card class="info-card">
        <CardHeader>
          <CardTitle>Application Information</CardTitle>
          <CardDescription>{{ appInfo.description }}</CardDescription>
        </CardHeader>
        <CardContent>
          <div class="info-grid">
            <div class="info-item">
              <strong>Version:</strong>
              <span>{{ appInfo.version }}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card class="features-card">
        <CardHeader>
          <CardTitle>Features</CardTitle>
          <CardDescription>What makes this application special</CardDescription>
        </CardHeader>
        <CardContent>
          <ul class="features-list">
            <li v-for="feature in appInfo.features" :key="feature" class="feature-item">
              {{ feature }}
            </li>
          </ul>
        </CardContent>
      </Card>

      <div class="actions">
        <router-link to="/">
          <Button>← Back to Home</Button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  text-align: center;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.info-card,
.features-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
}

.info-grid {
  display: grid;
  gap: 1rem;
}

.info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid #e2e8f0;
}

.info-item:last-child {
  border-bottom: none;
}

.features-list {
  list-style: none;
  display: grid;
  gap: 0.75rem;
}

.feature-item {
  padding: 0.75rem;
  background: #f8fafc;
  border-radius: 8px;
  border-left: 4px solid #667eea;
  font-weight: 500;
}

.actions {
  display: flex;
  justify-content: center;
}

@media (max-width: 768px) {
  .about {
    padding: 1rem;
  }

  .title {
    font-size: 2rem;
  }
}
</style>
