<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import BtnComponent from '@/components/BtnComponent.vue'
import CodeWindow from '@/components/CodeWindow.vue'
import { onMounted, onUnmounted, ref } from 'vue'
import { handleScroll } from '@/composables/NavBarScroll'
import WorkComponent from '@/components/WorkComponent.vue'
import { workArray } from '@/composables/SelectedWork'
import SkillsAndExpertise from '@/components/SkillsAndExpertise.vue'
import { skillsArray } from '@/composables/SkillsAndExpertise'
import ContactSection from '@/components/ContactSection.vue'
import ProjectDetail from '@/components/ProjectDetail.vue'
import type { Work } from '@/models/Interface'
import { apiData, getApi, isLoading, hasError } from '@/composables/NasaApi'


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
      <div class="hero-left">
        <div class="hero-badge">Frontend Developer</div>
        <h1 class="hero-heading">
          Building modern web experiences
        </h1>
        <p class="hero-text">
          From interactive UIs to clean code, I craft digital products that work beautifully. Based in Belgium, working worldwide.
        </p>
        <div class="hero-cta">
          <a href="#work-section">
            <BtnComponent>
              <span>View Projects</span>
            </BtnComponent>
          </a>
          <a href="#contact-section" class="secondary-cta">
            Get in Touch
          </a>
        </div>
      </div>
      <div class="hero-right">
        <div class="hero-visual">
          <CodeWindow />
        </div>
      </div>
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
          :is-in-development="work.isInDevelopment"
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
        <div v-if="isLoading" class="space-loading">
          <div class="loading-spinner"></div>
          <p class="space-text">Contacting the ISS...</p>
        </div>
        <div v-else-if="hasError" class="space-error">
          <h3 class="space-count">?</h3>
          <p class="space-text">Lost signal from space</p>
          <p class="space-subtext">(Houston, we have a problem)</p>
        </div>
        <div v-else>
          <h3 class="space-count">{{ apiData?.number }}</h3>
          <p class="space-text">humans currently floating around Earth</p>
          <p class="space-subtext">(probably having a better day than you)</p>
        </div>
      </div>
    </div>
  </section >
  <section class="contact-section" id="contact-section">
    <ContactSection />
  </section>
</template>

<style scoped>



.hero-section {
  background: linear-gradient(135deg, rgb(2, 6, 23) 0%, rgb(15, 23, 42) 100%);
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.05) 0%, transparent 50%),
                    radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

.hero-content {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 4rem;
  align-items: center;
  min-height: 100vh;
  max-width: 1400px;
  padding: 0 2rem;
  z-index: 1;
  margin: 0 auto;
}

.hero-left {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.hero-badge {
  display: inline-block;
  width: fit-content;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  color: var(--primary-text-color);
  font-family: var(--secondary-font);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
}

.hero-heading {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.15;
  color: white;
  margin: 0;
  font-family: var(--primary-font);
}

.gradient-text {
  color: var(--primary-text-color);
}

.hero-text {
  font-size: 1.15rem;
  line-height: 1.7;
  color: rgb(148, 163, 184);
  margin: 0;
  font-family: var(--primary-font);
  max-width: 520px;
}

.hero-cta {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  margin-top: 0.5rem;
}

.secondary-cta {
  color: white;
  text-decoration: none;
  font-family: var(--primary-font);
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
}

.secondary-cta::after {
  content: '→';
  margin-left: 0.5rem;
  transition: margin-left 0.3s ease;
}

.secondary-cta:hover {
  color: var(--primary-text-color);
}

.secondary-cta:hover::after {
  margin-left: 0.75rem;
}

.hero-right {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.hero-visual {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

p {
  color: var(--primary-p-color);
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

.expertise-container h2 {
  color: white;
}

.work-container p,
.expertise-container p {
  font-size: 20px;
  max-width: 600px;
}

.expertise-container p {
  color: rgb(148, 163, 184);
}

.work-content {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1400px;
  flex-wrap: wrap;
}

.expertise-section {
  background-color: rgb(2, 6, 23);
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

.space-loading,
.space-error {
  text-align: center;
}

.loading-spinner {
  width: 60px;
  height: 60px;
  margin: 1.5rem auto;
  border: 4px solid rgba(96, 165, 250, 0.2);
  border-top-color: #60a5fa;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.contact-section{
  min-height: 100vh;
  background-color: rgb(2, 6, 23);
}

:deep(.nav-hidden) {
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

/* Mobile Responsive Styles */
@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 3rem;
    padding: 2rem;
  }

  .hero-heading {
    font-size: 2.8rem;
  }

  .hero-text {
    max-width: 100%;
  }

  .hero-right {
    display: none;
  }
}

@media (max-width: 768px) {
  .hero-content {
    padding: 1.5rem;
  }

  .hero-heading {
    font-size: 2.2rem;
  }

  .hero-text {
    font-size: 1rem;
  }

  .hero-cta {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
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

}

@media (max-width: 480px) {
  .hero-content {
    padding: 1rem;
  }

  .hero-badge {
    font-size: 0.75rem;
    padding: 0.4rem 0.8rem;
  }

  .hero-heading {
    font-size: 1.8rem;
  }

  .hero-text {
    font-size: 0.95rem;
  }

  .secondary-cta {
    font-size: 0.9rem;
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

#tsparticles {
  position: fixed;   /* full page */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;       /* behind your hero content */
}
</style>
