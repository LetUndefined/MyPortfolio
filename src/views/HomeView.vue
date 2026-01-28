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
import { apiData, getApi } from '@/composables/NasaApi'


const showProjectDetail = ref(false)
const selectedProject = ref<Work | null>(null)

const openProjectDetail = (work: Work) => {
  selectedProject.value = work
  showProjectDetail.value = true
}

onMounted( async() => {
  window.addEventListener('scroll', handleScroll)
   const data = await getApi()
   if(data) {
    apiData.value = data
   }
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

      <div class="space-people-container">
        <div class="space-badge">LIVE FROM NASA</div>
        <h3 class="space-count">{{ apiData?.number }}</h3>
        <p class="space-text">humans currently floating around Earth</p>
        <p class="space-subtext">(probably having a better day than you)</p>
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
  position: relative;
}

.hero-section::before{
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: red;
  z-index: 0;
  width: 100%;
  height: 100%;
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
    opacity: 0.4  ;
  }
  100% {

opacity: 0;

  }
}

.hero-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  max-width: 1400px;
  padding: 0 2rem;
  z-index: 1;
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

.space-people-container {
  margin-top: 4rem;
  padding: 2.5rem 2rem;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  border-radius: 30px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.1);
}



@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.1); opacity: 0.8; }
}

.space-badge {
  display: inline-block;
  background: linear-gradient(90deg, #ef4444 0%, #dc2626 100%);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.5px;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 15px rgba(239, 68, 68, 0.4);
  animation: blink 2s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

.space-count {
  font-size: 6rem;
  font-weight: 900;
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
  line-height: 1;
  text-shadow: 0 0 30px rgba(96, 165, 250, 0.5);
}

.space-text {
  color: #e5e7eb;
  font-size: 1.5rem;
  margin: 1rem 0 0.5rem 0;
  font-weight: 600;
}

.space-subtext {
  color: #9ca3af;
  font-size: 1rem;
  font-style: italic;
  margin: 0;
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

/* Mobile Responsive Styles */
@media (max-width: 768px) {
  .hero-content {
    padding: 0 1rem;
  }

  .subtitle {
    font-size: 0.85rem;
    letter-spacing: 3px;
    margin: 1.5rem 1rem;
  }

  .description {
    font-size: 14px;
    margin: 1.5rem 1rem;
  }

  .work-section,
  .expertise-section {
    padding: 6rem 1.5rem 3rem 1.5rem;
  }

  .work-container h2,
  .expertise-container h2 {
    font-size: 2.5rem;
  }

  .work-container p,
  .expertise-container p {
    font-size: 16px;
  }

  .expertise-content {
    gap: 1.5rem;
  }

  .space-people-container {
    margin-top: 3rem;
    padding: 2rem 1.5rem;
  }

  .space-count {
    font-size: 4rem;
  }

  .space-text {
    font-size: 1.2rem;
  }

  .space-subtext {
    font-size: 0.9rem;
  }

  .contact-section {
    padding-top: 3rem;
  }
}

@media (max-width: 480px) {
  .subtitle {
    font-size: 0.7rem;
    letter-spacing: 2px;
    margin: 1rem 0.5rem;
  }

  .description {
    font-size: 13px;
    margin: 1rem 0.5rem;
  }

  .work-section,
  .expertise-section {
    padding: 5rem 1rem 2rem 1rem;
  }

  .work-container h2,
  .expertise-container h2 {
    font-size: 2rem;
  }

  .work-container p,
  .expertise-container p {
    font-size: 14px;
  }

  .expertise-content {
    gap: 1rem;
    justify-content: space-around;
  }

  .space-people-container {
    padding: 1.5rem 1rem;
  }

  .space-count {
    font-size: 3rem;
  }

  .space-text {
    font-size: 1rem;
  }

  .space-subtext {
    font-size: 0.85rem;
  }
}
</style>
