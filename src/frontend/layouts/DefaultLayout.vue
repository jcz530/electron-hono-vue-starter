<script setup lang="ts">
import Header from '../components/layout/Header.vue';
</script>

<template>
  <div class="layout">
    <Header
      title="🚀 Electron + Hono + Vue"
      subtitle="Modern desktop app with organized architecture"
    />
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.layout {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #2c3e50;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.main-content {
  min-height: calc(100vh - 200px);
  padding-top: 6rem;
}
</style>
