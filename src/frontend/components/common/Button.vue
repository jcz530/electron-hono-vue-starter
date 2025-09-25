<template>
  <button
    :class="[
      'btn',
      `btn--${variant}`,
      `btn--${size}`,
      { 'btn--disabled': disabled || loading }
    ]"
    :disabled="disabled || loading"
    @click="$emit('click', $event)"
  >
    <span v-if="loading" class="btn__spinner"></span>
    <slot v-else />
  </button>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'medium',
  disabled: false,
  loading: false,
});

defineEmits<{
  click: [event: MouseEvent];
}>();
</script>

<style scoped>
.btn {
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
}

.btn--small {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

.btn--medium {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
}

.btn--large {
  padding: 1rem 2rem;
  font-size: 1.125rem;
}

.btn--primary {
  background: #667eea;
  color: white;
}

.btn--primary:hover:not(.btn--disabled) {
  background: #5a67d8;
  transform: translateY(-2px);
}

.btn--secondary {
  background: #e2e8f0;
  color: #2d3748;
}

.btn--secondary:hover:not(.btn--disabled) {
  background: #cbd5e0;
  transform: translateY(-2px);
}

.btn--danger {
  background: #e53e3e;
  color: white;
}

.btn--danger:hover:not(.btn--disabled) {
  background: #c53030;
  transform: translateY(-2px);
}

.btn--disabled {
  background: #cbd5e0;
  color: #a0aec0;
  cursor: not-allowed;
  transform: none;
}

.btn__spinner {
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>