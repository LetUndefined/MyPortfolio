<script setup lang="ts"></script>

<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<style scoped>
.btn {
  background-color: var(--primary-btn-color);
  border-radius: 30px;
  color: white;
  backdrop-filter: blur(10px);
  border: none;
  box-shadow: 0px 0px 2px white;
  font-size: 16px;
  transition: ease-in-out 0.2s;
  padding: 1rem;
  min-height: 44px;
  min-width: 44px;
}

.btn:hover {
  cursor: pointer;
  transform: scale(1.05);
}

/* Touch-friendly mobile styles */
@media (max-width: 768px) {
  .btn {
    font-size: 15px;
    padding: 0.9rem 1.25rem;
  }
}

@media (max-width: 480px) {
  .btn {
    font-size: 14px;
    padding: 0.85rem 1.1rem;
  }
}

/* Touch device optimization */
@media (hover: none) and (pointer: coarse) {
  .btn {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0.1);
    min-height: 48px;
  }

  .btn:active {
    transform: scale(0.98);
  }
}
</style>
