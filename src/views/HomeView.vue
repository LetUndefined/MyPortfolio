<script setup lang="ts">
import DraggableBlocks from '@/components/DraggableBlocks.vue'
import NavBar from '@/components/NavBar.vue'
import BtnComponent from '@/components/BtnComponent.vue'
import { onMounted, onUnmounted, ref } from 'vue'
import { handleScroll } from '@/composables/NavBarScroll'
import WorkComponent from '@/components/WorkComponent.vue'
import { workArray } from '@/composables/SelectedWork'
import SkillsAndExpertise from '@/components/SkillsAndExpertise.vue'
import { skillsArray } from '@/composables/SkillsAndExpertise'
import ContactSection from '@/components/ContactSection.vue'
import ProjectDetail from '@/components/ProjectDetail.vue'
import type { Work } from '@/models/Interface'

const showProjectDetail = ref(false)
const selectedProject = ref<Work | null>(null)

const openProjectDetail = (work: Work) => {
  selectedProject.value = work
  showProjectDetail.value = true
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <section class="hero-section">
    <NavBar :class="{ 'nav-hidden': showProjectDetail }" />
    <div class="hero-content" id="hero-section">
      <p class="subtitle">digital creator / developer / designer</p>
      <DraggableBlocks />
      <p class="description">
        Crafting digital experiences that blend creativity with functionality. Drag the tiles,
        change colors, and explore.
      </p>
      <a href="#work-section">
        <BtnComponent>
          <span>Explore My Work</span>
        </BtnComponent>
      </a>
    </div>
  </section>
  <section class="work-section" id="work-section">
    <div class="work-container">
      <h2>Selected <span>Work</span></h2>
      <p>
        A collection of projects that showcase my approach to design, development, and digital
        innovation
      </p>
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
          :is-a-i-generated="work.isAIGenerated"
          @view-details="openProjectDetail(work)"
        />
      </div>
    </div>
  </section>
  <ProjectDetail v-model="showProjectDetail" :project="selectedProject" />
  <section class="expertise-section" id="skill-section">
    <div class="expertise-container">
      <h2>Skills & <span>Expertise</span></h2>
      <p>
        A diverse toolkit built through years of learning, experimentation, and real-world projects.
      </p>
      <div class="expertise-content">
        <SkillsAndExpertise
          v-for="(skill, index) in skillsArray"
          :key="index"
          :icon="skill.icon"
          :skill="skill.skill"
          :chip="skill.chip"
          :color="skill.color"
          :icon-color="skill.iconColor"
        />
      </div>
    </div>
  </section >
  <section class="contact-section" id="contact-section">
    <ContactSection />
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

.work-section {

  background-color: var(--primary-grayscale-white);
  padding: 10rem 2rem 4rem 2rem;
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
  padding: 10rem 2rem 4rem 2rem;
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
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
}

.expertise-container p {
  text-align: center;
}

.contact-section{
  min-height: 100vh;
  padding-top: 4rem;
}

:deep(.nav-hidden) {
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}
</style>
