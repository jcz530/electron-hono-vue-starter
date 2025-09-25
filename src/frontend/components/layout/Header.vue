<template>
  <header class="header">
    <div class="header__content">
      <h1 class="header__title">{{ title }}</h1>
      <p v-if="subtitle" class="header__subtitle">{{ subtitle }}</p>
    </div>
  </header>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  subtitle?: string;
}

withDefaults(defineProps<Props>(), {
  subtitle: undefined,
});
</script>

<style scoped>
.header {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;
  text-align: center;
  color: white;
}

.header__content {
  max-width: 1200px;
  margin: 0 auto;
}

.header__title {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.header__subtitle {
  font-size: 1.1rem;
  opacity: 0.9;
  margin: 0;
}

@media (max-width: 768px) {
  .header {
    padding: 1.5rem;
  }

  .header__title {
    font-size: 2rem;
  }

  .header__subtitle {
    font-size: 1rem;
  }
}
</style>
