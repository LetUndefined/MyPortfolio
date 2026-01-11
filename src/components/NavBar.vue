<script setup lang="ts">
import { isScrolled } from '@/composables/NavBarScroll'
import BtnComponent from './BtnComponent.vue'



</script>
<template>
  <nav :class="['nav', { 'navbar-scrolled': isScrolled }]">
    <div class="navbar">
      <h3>Sandro</h3>
      <ul class="list">
        <li>Home</li>
        <li>Projects</li>
        <li>Skills</li>
        <li>Contact</li>
      </ul>
      <BtnComponent>
        <span>Let's Talk</span>
      </BtnComponent>
    </div>
  </nav>
</template>

<style scoped>
.nav {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  color: var(--navbar-color);
  padding: 1.5rem;
  font-weight: 600;
  transition: 0.3s ease-in-out;
}

.navbar {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.navbar h3 {
  text-transform: uppercase;
}

li {
  list-style: none;
  font-family: var(--secondary-font);

}

.list {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.navbar-scrolled {
  background-color: var(--primary-white);
  transition: 0.3s ease-in-out;
  color: black;
  z-index: 9999;
  box-shadow: 1px 1px 10px black;
}
</style>
