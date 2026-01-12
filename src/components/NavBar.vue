<script setup lang="ts">
import { isScrolled } from '@/composables/NavBarScroll'
import BtnComponent from './BtnComponent.vue'
</script>
<template>
  <nav :class="['nav', { 'navbar-scrolled': isScrolled }]">
    <div class="navbar">
      <h3 class="logo">Sandro</h3>
      <ul class="list">
        <li>
          <a href="#hero-section">Home</a>
        </li>
        <li>
          <a href="#work-section">Work</a>
        </li>
        <li>
          <a href="#skill-section">Skills</a>
        </li>
        <li>
          <a href="#contact-section">Contact</a>
        </li>
      </ul>
      <a href="#contact-section">
        <BtnComponent>
          <span>Get in Touch</span>
        </BtnComponent>
      </a>
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
  padding: 1.2rem 2rem;
  font-weight: 500;
  transition: all 0.3s ease;
  z-index: 9999;
  backdrop-filter: blur(8px);
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
}

.logo {
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 1.5rem;
  font-weight: 600;
}

li {
  list-style: none;
}

li a {
  text-decoration: none;
  font-family: var(--secondary-font);
  color: var(--navbar-color);
  font-size: 0.95rem;
  position: relative;
  transition: color 0.2s ease;
  letter-spacing: 0.3px;
}

li a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -4px;
  left: 0;
  background-color: currentColor;
  transition: width 0.3s ease;
}

li a:hover::after {
  width: 100%;
}

.list {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  flex: 1;
  margin: 0 3rem;
}

.navbar-scrolled {
  background-color: rgba(255, 255, 255, 0.95);
  transition: all 0.3s ease;
  color: black;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
  padding: 0.8rem 2rem;
}

.navbar-scrolled li a {
  color: black;
}

.navbar-scrolled .logo {
  color: black;
}
</style>
