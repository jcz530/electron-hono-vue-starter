<template>
  <div id="app">
    <Header
      title="🚀 Electron + Hono + Vue"
      subtitle="Modern desktop app with organized architecture"
    />
    <main>
      <Home />
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from './components/layout/Header.vue';
import Home from './views/Home.vue';
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

main {
  min-height: calc(100vh - 200px);
}
</style>