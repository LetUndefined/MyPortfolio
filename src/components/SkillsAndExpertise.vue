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
  <v-card class="mx-auto" :style="{ '--icon-bg-color': props.color }">
    <v-card-item>
      <v-card-item
        class="image-container"
        :style="{ background: props.color, color: props.iconColor || '#000' }"
      >
        <component :is="props.icon" :size="30" :stroke-width="2" />
      </v-card-item>

      <v-card-title>
        {{ props.skill }}
      </v-card-title>
      <v-chip>
        {{ props.chip }}
      </v-chip>
    </v-card-item>
  </v-card>
</template>

<style scoped>
.v-card {
  position: relative;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 200px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  overflow: hidden;
}

.v-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.05) 100%);
  pointer-events: none;
  z-index: 1;
}

.v-card:hover {
  box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.2);
  transform: translateY(-8px);
}

.v-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 10px;
  background: linear-gradient(90deg, var(--icon-bg-color) 0%, color-mix(in srgb, var(--icon-bg-color) 70%, white) 100%);
  z-index: 1;
  border-radius: 30px;
  transition: height 0.3s ease-in-out;
}

.v-card:hover::before {
  height: 15px;
}

.v-card-item > * {
  gap: 0.75rem;
}

:deep(.v-card-item__content) {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.image-container {
  margin-top: 1rem;
  padding: 0.5rem;
  border-radius: 15px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease-in-out;
}

.v-card:hover .image-container {
  transform: scale(1.15) rotate(5deg);
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.25);
}

/* Mobile Responsive Styles */
@media (max-width: 768px) {
  .v-card {
    width: 280px;
    height: 180px;
  }

  .image-container {
    margin-top: 0.75rem;
  }

  :deep(.v-card-title) {
    font-size: 1rem;
  }

  :deep(.v-chip) {
    font-size: 0.75rem;
  }
}

@media (max-width: 480px) {
  .v-card {
    width: calc(50% - 0.75rem);
    min-width: 150px;
    height: 160px;
  }

  .image-container {
    padding: 0.35rem;
    margin-top: 0.5rem;
  }

  .image-container :deep(svg) {
    width: 24px;
    height: 24px;
  }

  :deep(.v-card-title) {
    font-size: 0.85rem;
  }

  :deep(.v-chip) {
    font-size: 0.65rem;
    padding: 0.2rem 0.4rem;
  }

  :deep(.v-card-item > *) {
    gap: 0.5rem;
  }
}

/* Touch-friendly interactions */
@media (hover: none) and (pointer: coarse) {
  .v-card {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
  }
}
</style>
