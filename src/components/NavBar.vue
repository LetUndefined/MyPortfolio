<script setup lang="ts">
import { ref } from 'vue'
import { isScrolled } from '@/composables/NavBarScroll'
import BtnComponent from './BtnComponent.vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>
<template>
  <nav :class="['nav', { 'navbar-scrolled': isScrolled }]">
    <div class="navbar">
      <h3 class="logo">Sandro</h3>

      <!-- Hamburger Menu Button -->
      <button
        class="hamburger"
        :class="{ active: isMobileMenuOpen }"
        @click="toggleMobileMenu"
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <!-- Desktop Navigation -->
      <ul class="list desktop-nav">
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

      <a href="#contact-section" class="desktop-cta">
        <BtnComponent>
          <span>Get in Touch</span>
        </BtnComponent>
      </a>
    </div>

    <!-- Mobile Navigation Menu -->
    <div class="mobile-menu" :class="{ open: isMobileMenuOpen }">
      <ul class="mobile-list">
        <li>
          <a href="#hero-section" @click="closeMobileMenu">Home</a>
        </li>
        <li>
          <a href="#work-section" @click="closeMobileMenu">Work</a>
        </li>
        <li>
          <a href="#skill-section" @click="closeMobileMenu">Skills</a>
        </li>
        <li>
          <a href="#contact-section" @click="closeMobileMenu">Contact</a>
        </li>
        <li>
          <a href="#contact-section" @click="closeMobileMenu">
            <BtnComponent>
              <span>Get in Touch</span>
            </BtnComponent>
          </a>
        </li>
      </ul>
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
  z-index: 10001;
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

/* Hamburger Menu Button */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  z-index: 10001;
  transition: all 0.3s ease;
}

.hamburger span {
  display: block;
  width: 28px;
  height: 3px;
  background-color: var(--navbar-color);
  border-radius: 3px;
  transition: all 0.3s ease;
}

.navbar-scrolled .hamburger span {
  background-color: black;
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(8px, 8px);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(8px, -8px);
}

/* Mobile Menu */
.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(14, 22, 42, 0.98);
  backdrop-filter: blur(20px);
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  z-index: 10000;
  display: none;
}

.mobile-menu.open {
  transform: translateX(0);
}

.mobile-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  height: 100%;
  padding: 2rem;
}

.mobile-list li {
  width: 100%;
  text-align: center;
}

.mobile-list li a {
  display: block;
  font-size: 1.5rem;
  padding: 1rem;
  color: var(--navbar-color);
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-list li a::after {
  display: none;
}

/* Mobile Responsive Styles */
@media (max-width: 768px) {
  .nav {
    padding: 1rem 1.5rem;
  }

  .hamburger {
    display: flex;
  }

  .desktop-nav,
  .desktop-cta {
    display: none;
  }

  .mobile-menu {
    display: block;
  }

  .logo {
    font-size: 1.25rem;
  }
}

@media (max-width: 480px) {
  .nav {
    padding: 0.8rem 1rem;
  }

  .logo {
    font-size: 1.1rem;
  }

  .mobile-list li a {
    font-size: 1.25rem;
  }
}
</style>
