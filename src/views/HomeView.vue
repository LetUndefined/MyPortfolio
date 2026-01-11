<script setup lang="ts">
import DraggableBlocks from '@/components/DraggableBlocks.vue'
import NavBar from '@/components/NavBar.vue'
import BtnComponent from '@/components/BtnComponent.vue'
import AboutMe from '@/components/AboutMe.vue'
import codeImage from '@/assets/icons/code.svg'
import artist from "@/assets/icons/palette.svg"
import star from "@/assets/icons/sparkles.svg"
import { onMounted, onUnmounted } from 'vue'
import { handleScroll } from '@/composables/NavBarScroll'
import WorkComponent from '@/components/WorkComponent.vue'
import { workArray } from '@/composables/SelectedWork'
import SkillsAndExpertise from '@/components/SkillsAndExpertise.vue'
import { skillsArray } from '@/composables/SkillsAndExpertise'



onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <section class="hero-section">
    <NavBar />
    <div class="hero-content">
      <p class="subtitle">digital creator / developer / designer</p>
      <DraggableBlocks />
      <p class="description">
        Crafting digital experiences that blend creativity with functionality. Drag the tiles,
        change colors, and explore.
      </p>
      <BtnComponent>
        <span>Explore My Work</span>
      </BtnComponent>
    </div>
  </section>
  <section class="about-section">
    <div class="about-text">
      <h2>
        Creative mind, <br />
        <span>technical hands</span>
      </h2>
      <p>
        I'm a digital creator who thrives at the intersection of design and development. With a
        passion for crafting experiences that are both beautiful and functional, I turn ideas into
        reality through code and creativity.
      </p>
    </div>
    <div class="about-component">
      <AboutMe
        :image-src="codeImage"
        title="Developer"
        descr="Building scalable web applications with modern technologies and best practices."
      />
      <AboutMe
        :image-src="artist"
        title="Designer"
        descr="Creating intuitive interfaces that users love with attention to every detail."
      />
      <AboutMe
        :image-src="star"
        title="Creator"
        descr="Experimenting with new ideas and pushing the boundaries of digital experiences."
      />
    </div>
    <div class="quote-container">
      <p class="quote">
        "I believe the best digital products are built with curiosity, creativity, and a relentless
        focus on the user experience."
      </p>
    </div>
  </section>
  <section class="work-section">
    <div class="work-container">
      <h2>Selected <span>Work</span></h2>
      <p>A collection of projects that showcase my approach to design, development, and digital innovation</p>
      <div class="work-content">
        <WorkComponent
          v-for="(work, index) in workArray"
          :key="index"
          :image="work.image"
          :title="work.title"
          :subtitle="work.subtitle"
          :year="work.year"
          :language="work.language"
          :information="work.information"
          :project-link="work.projectLink"
          :github-link="work.githubLink"
        />
      </div>
    </div>
  </section>
  <section class="expertise-section">
    <div class="expertise-container">
      <h2>Skills & <span>Expertise</span></h2>
      <p>A diverse toolkit built through years of learning, experimentation, and real-world projects.</p>
    <div class="expertise-content">
      <SkillsAndExpertise v-for="(skill, index) in skillsArray" :key="index" :icon="skill.icon" :skill="skill.skill" :chip="skill.chip" :color="skill.color" :icon-color="skill.iconColor"/>
    </div>
    </div>

  </section>
</template>

<style scoped>

.hero-section {
  background-image: linear-gradient(to top, #070f1e 0%, #1e3b70 50%, #070f1e 100%);
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  max-width: 1400px;
  padding: 0 2rem;
}

p {
  color: var(--primary-p-color);
}

.subtitle {
  font-family: var(--secondary-font);
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: larger;
  margin: 2rem;
}

.description {
  margin: 2rem;
  font-size: 16px;
  font-family: var(--primary-font);
  max-width: 40rem;
  text-align: center;
}

.about-section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  margin-top: 10rem;
  padding: 0 2rem;
}

.about-section > * {
  max-width: 1400px;
  width: 100%;
}

.about-text {
  max-width: 50rem;
  text-align: center;
  font-family: var(--primary-font);
  margin-bottom: 6rem;
}

.about-text h2 {
  font-size: 5rem;
  font-weight: 400;
  margin-bottom: 1rem;
}

.about-text span {
color: var(--primary-text-color);
}

.about-text p {
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

.quote-container {
  border: 1px solid black;
  border-radius: 20px;
  background: rgb(20, 31, 55);
  padding: 4rem 12rem;
  margin-top: 4rem;
  box-shadow: 0px 4px 10px black;
}

.quote {
  font-size: 18px;
  max-width: 30rem;
  font-family: var(--primary-font);
  text-align: center;
  color: #ffff;
}

.work-section {
  margin-top: 10rem;
  background-color: var(--primary-grayscale-white);
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.work-container {
  max-width: 1400px;
  width: 100%;
}



.work-container h2,
.expertise-container h2 {
  font-size: 4rem;
  margin-bottom: 1rem;
  font-family: var(--primary-font);
}

.work-container h2 span,
.expertise-container h2 span {
  color: var(--primary-text-color);
}

.work-container p,
.expertise-container p {
  font-size: 20px;
  max-width: 600px;
}

.work-content {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1400px;
  flex-wrap: wrap;
}

.expertise-section {
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}

.expertise-container {
  max-width: 1400px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.expertise-content {
margin-top: 2rem;
display: flex;
justify-content: center;
align-items: center ;
flex-wrap: wrap;
gap: 2rem;
}

</style>
