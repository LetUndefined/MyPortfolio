<script setup lang="ts">
import type { Component } from 'vue'

const props = defineProps<{
  icon: Component
  skill: string
  chip: string
  color: string
  iconColor?: string
}>()
</script>

<template>
  <div class="skill-card">
    <div class="skill-icon" :style="{ background: props.color, color: props.iconColor || '#000' }">
      <component :is="props.icon" :size="32" :stroke-width="2" />
    </div>
    <div class="skill-info">
      <h3 class="skill-name">{{ props.skill }}</h3>
      <span class="skill-category">{{ props.chip }}</span>
    </div>
  </div>
</template>

<style scoped>
.skill-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  min-width: 200px;
}

.skill-card:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.skill-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 12px;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.skill-card:hover .skill-icon {
  transform: scale(1.1);
}

.skill-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.skill-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  margin: 0;
  font-family: var(--primary-font);
}

.skill-category {
  font-size: 0.85rem;
  color: rgb(148, 163, 184);
  font-family: var(--secondary-font);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

@media (max-width: 768px) {
  .skill-card {
    padding: 1rem 1.25rem;
    min-width: 180px;
  }

  .skill-icon {
    width: 48px;
    height: 48px;
  }

  .skill-icon :deep(svg) {
    width: 28px;
    height: 28px;
  }

  .skill-name {
    font-size: 1rem;
  }

  .skill-category {
    font-size: 0.75rem;
  }
}

@media (max-width: 480px) {
  .skill-card {
    padding: 0.875rem 1rem;
    gap: 0.75rem;
    min-width: 160px;
  }

  .skill-icon {
    width: 44px;
    height: 44px;
  }

  .skill-icon :deep(svg) {
    width: 24px;
    height: 24px;
  }

  .skill-name {
    font-size: 0.95rem;
  }

  .skill-category {
    font-size: 0.7rem;
  }
}

@media (hover: none) and (pointer: coarse) {
  .skill-card {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
  }
}
</style>
