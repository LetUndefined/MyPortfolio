<script setup lang="ts">
defineProps<{
  type?: 'ai' | 'dev'
}>()
</script>

<template>
  <div class="badge" :class="type ? `${type}-badge` : ''">
    <slot></slot>
  </div>
</template>

<style scoped>
.badge {
  position: absolute;
  top: 15px;
  right: 15px;
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  z-index: 10;
}

.ai-badge {
  background: linear-gradient(135deg, #9c27b0 0%, #7b1fa2 100%);
  box-shadow: 0 2px 8px rgba(156, 39, 176, 0.4);
}

.dev-badge {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  box-shadow: 0 2px 8px rgba(245, 158, 11, 0.4);
}
</style>
