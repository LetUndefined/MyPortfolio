<script setup lang="ts">
import { useDraggableBlocks } from '@/composables/useDraggableBlocks'
import Draggable from 'vuedraggable'

const { nameArray, getRandomColor, onListChange } = useDraggableBlocks()
</script>

<template>
  <draggable
    v-model="nameArray"
    @change="onListChange"
    item-key="id"
    class="draggable-list"
    :animation="200"
  >
    <template #item="{ element, index }">
      <div class="block-container" :style="{ animationDelay: `${index * 0.1}s` }">
        <div
          class="block"
          :style="{ backgroundColor: element.color }"
          @click="getRandomColor(element.id)"
        >
          <span class="letter">{{ element.name }}</span>
        </div>
      </div>
    </template>
  </draggable>
</template>

<style scoped>
:deep(.sortable-ghost) {
  opacity: 0.4;
}

:deep(.sortable-chosen) {
  cursor: grabbing;
}

.block-container {
  display: inline-block;
  margin: 0.5rem;
  animation: spinIn 0.8s ease-out backwards;
}

@keyframes spinIn {
  0% {
    transform: rotateY(360deg) scale(0.5);
    opacity: 0;
  }
  100% {
    transform: rotateY(0deg) scale(1);
    opacity: 1;
  }
}

.block {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  width: 10rem;
  height: 11rem;
  color: white;
}

.block:hover {
  cursor: pointer;
  animation: wiggle 0.3s ease-in-out;
}

@keyframes wiggle {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-10deg);
  }
  50% {
    transform: rotate(10deg);
  }
  75% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.letter {
  font-size: 5rem;
  text-transform: uppercase;
  font-family: 'Titan One';
  text-shadow: 1px 2px black;
}
</style>
