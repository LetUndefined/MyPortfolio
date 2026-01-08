<script setup lang="ts">
import DraggableBlocks from '@/components/DraggableBlocks.vue';
import NavBar from '@/components/NavBar.vue';
import BtnComponent from '@/components/BtnComponent.vue';
import AboutMe from '@/components/AboutMe.vue';
import codeImage from '@/assets/icons/code.svg'
import { onMounted, onUnmounted } from 'vue';
import { handleScroll } from '@/composables/NavBarScroll';




onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <section class="hero-container">
    <NavBar/>
    <div class="hero-content">
      <p class="subtitle">digital creator / developer / designer</p>
      <DraggableBlocks />
      <p class="description">Crafting digital experiences that blend creativity with functionality. Drag the tiles, change colors, and explore.</p>
      <BtnComponent>
        <span>Explore My Work</span>
      </BtnComponent>
    </div>
  </section>
  <section class="about-content">
    <div class="about-text">
      <h2>Creative mind, <br> <span>technical hands</span></h2>
      <p>I'm a digital creator who thrives at the intersection of design and development. With a passion for crafting experiences that are both beautiful and functional, I turn ideas into reality through code and creativity.</p>
    </div>
    <div class="about-component">
      <AboutMe :image-src="codeImage" title="Developer" descr="Building scalable web applications with modern technologies and best practices."/>
      <AboutMe :image-src="codeImage" title="Developer" descr="Building scalable web applications with modern technologies and best practices."/>
      <AboutMe :image-src="codeImage" title="Developer" descr="Building scalable web applications with modern technologies and best practices."/>
    </div>
  </section>
</template>

<style scoped>
  .hero-container{
    background-image: linear-gradient(to top, #070f1e 0%, #1e3b70 50%, #070f1e 100%);
  }

  .hero-content{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
  }

  p{
    color: var(--primary-p-color);
  }

  .subtitle{
    font-family: var(--secondary-font);
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: larger;
    margin: 2rem;
  }

  .description{
    margin: 2rem;
    font-size: 16px;
    font-family: var(--primary-font);
    max-width: 40rem;
    text-align: center;
  }

  .about-content{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
  }

  .about-text{
    max-width: 50rem;
    text-align: center;
    font-family: var(--primary-font);
    margin-bottom: 6rem;
  }

  .about-text h2{
    font-size: 5rem;
    font-weight: 400;
    margin-bottom: 1rem;

  }

  .about-text span{
  background-image:linear-gradient(to bottom right, rgb(225, 0, 255),rgba(146, 132, 226),rgba(0, 217, 255));

    color: transparent;
    background-clip: text;
  }

  .about-text p{
    font-size: 1.25rem;
    font-weight: 300;
    color: black;
  }
  .about-component {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 2rem;
  }



</style>
