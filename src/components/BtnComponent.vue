<script setup lang="ts">


</script>


<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<style scoped>

  .btn {
    padding: 1rem 1.5rem;
    background-color: var(--primary-btn-color);
    border-radius: 30px;
    color: white;
    backdrop-filter: blur(10px);
    border: none;
    box-shadow: 0px 0px 2px white;
    font-size: 16px;
    transition: ease-in-out 0.2s;
  }

  .btn:hover{
    cursor: pointer ;
    transform: scale(1.05);
  }
</style>
