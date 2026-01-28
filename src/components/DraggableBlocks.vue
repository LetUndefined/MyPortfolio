<script setup lang="ts">
import { useDraggableBlocks } from '@/composables/useDraggableBlocks'
import Draggable from 'vuedraggable'
import { ref, onMounted } from 'vue'

const { nameArray, getRandomColor, onListChange } = useDraggableBlocks()
const hasAnimated = ref(false)

onMounted(() => {
  setTimeout(() => {
    hasAnimated.value = true
  }, 1000)
})
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
      <div
        class="block-container"
        :class="{ 'no-animation': hasAnimated }"
        :style="{ animationDelay: `${index * 0.1}s` }"
      >
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
  opacity: 0.3;
  transform: scale(0.95);
}

:deep(.sortable-chosen) {
  cursor: grabbing;
  transform: scale(1.02);
}

.block-container {
  display: inline-block;
  margin: 0.5rem;
  animation: spinIn 0.4s ease-out backwards;
}

.block-container.no-animation {
  animation: none;
}

@keyframes spinIn {
  0% {
    transform: rotate(360deg) scale(0.5);
    opacity: 0;
  }
  100% {
    transform: rotate(0deg) scale(1);
    opacity: 1;
  }
}

.block {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 30px;
  width: 10rem;
  height: 11rem;
  color: white;
  box-shadow: 0px 1px 10px -5px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-in-out;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
}

.block::before {
  content: '';
  position: absolute;
  inset: 0;
  padding: 2px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05));
  pointer-events: none;
  opacity: 0;
  transform: translate(-100);
  animation: pulsating 5s infinite;
  background-image: linear-gradient(to bottom right, #ed1616 0%, #2d57a6 50%, #102243 100%);
}

@keyframes pulsating{
   0% {
opacity: 0;

  }


  50% {
    opacity: 1  ;
  }
  100% {

opacity: 0;

  }
}


.block:hover {
  cursor: pointer;
  transform: scale(1.05) translateY(-5px);
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.4);
}

.block:active {
  transform: scale(0.98);
}

.letter {
  font-size: 5rem;
  text-transform: uppercase;
  font-family: 'Titan One';
  text-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1;
}

.draggable-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

@media (max-width: 768px) {
  .block-container {
    margin: 0.25rem;
  }

  .block {
    width: 5rem;
    height: 5.5rem;
    border-radius: 18px;
  }

  .letter {
    font-size: 2.5rem;
  }
}

@media (max-width: 480px) {
  .block-container {
    margin: 0.2rem;
  }

  .block {
    width: 3.5rem;
    height: 4.5rem;
    border-radius: 15px;
  }

  .letter {
    font-size: 1.8rem;
  }
}

@media (max-width: 375px) {
  .block-container {
    margin: 0.15rem;
  }

  .block {
    width: 3rem;
    height: 3.8rem;
    border-radius: 12px;
  }

  .letter {
    font-size: 1.5rem;
  }
}
</style>
