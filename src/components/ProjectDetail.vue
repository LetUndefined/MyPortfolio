<script setup lang="ts">
import type { Work } from '@/models/Interface'
import github from '@/assets/icons/github.svg'
import link from '@/assets/icons/square-arrow-out-up-right.svg'

defineProps<{
  project: Work | null
  modelValue: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const closeModal = () => {
  emit('update:modelValue', false)
}
</script>

<template>
  <v-dialog :model-value="modelValue" @update:model-value="closeModal" max-width="1000" class="project-modal">
    <v-card v-if="project" class="modal-card">
      <button class="close-button" @click="closeModal">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      <div class="modal-hero">
        <v-img
          :src="project.image"
          height="350"
          cover
          gradient="to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.4) 100%"
        />
        <div class="hero-overlay">
          <div class="hero-badges">
            <span class="year-badge">{{ project.year }}</span>
          </div>
          <h2 class="modal-title">{{ project.title }}</h2>
          <p class="modal-subtitle">{{ project.subtitle }}</p>
        </div>
      </div>

      <div class="modal-body">
        <div class="content-section">
          <p class="project-about">{{ project.detailedDescription || project.information }}</p>
        </div>

        <div v-if="project.features && project.features.length > 0" class="content-section">
          <h3 class="section-title">Features</h3>
          <div class="features-grid">
            <div v-for="(feature, index) in project.features" :key="index" class="feature-item">
              <span class="feature-dot"></span>
              <span>{{ feature }}</span>
            </div>
          </div>
        </div>

        <div v-if="project.challenges" class="content-section">
          <h3 class="section-title">Challenges</h3>
          <p class="challenge-text">{{ project.challenges }}</p>
        </div>

        <div v-if="project.technologies && project.technologies.length > 0" class="content-section">
          <h3 class="section-title">Tech Stack</h3>
          <div class="tech-grid">
            <span v-for="(tech, index) in project.technologies" :key="index" class="tech-item">
              {{ tech }}
            </span>
          </div>
        </div>

        <div class="modal-actions">
          <a
            v-if="project.projectLink"
            :href="project.projectLink"
            target="_blank"
            class="action-button primary"
          >
            <img :src="link" />
            <span>Live Demo</span>
          </a>
          <a
            v-if="project.githubLink"
            :href="project.githubLink"
            target="_blank"
            class="action-button secondary"
          >
            <img :src="github" />
            <span>View Code</span>
          </a>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<style scoped>
:deep(.v-overlay__scrim) {
  backdrop-filter: blur(8px);
  background-color: rgba(0, 0, 0, 0.6) !important;
}

.modal-card {
  border-radius: 24px;
  overflow: hidden;
  position: relative;
}

.close-button {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.close-button:hover {
  background: rgba(0, 0, 0, 0.8);
  transform: scale(1.1);
}

.modal-hero {
  position: relative;
  height: 350px;
}

.hero-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 32px 40px;
  background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%);
}

.hero-badges {
  margin-bottom: 16px;
}

.year-badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
}

.modal-title {
  font-size: 38px;
  font-weight: 700;
  color: white;
  margin: 0 0 8px 0;
  line-height: 1.2;
  text-shadow: 0px 2px 12px rgba(0, 0, 0, 0.8);
}

.modal-subtitle {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.6);
}

.modal-body {
  padding: 40px;
  max-height: 60vh;
  overflow-y: auto;
}

.content-section {
  margin-bottom: 32px;
}

.content-section:last-child {
  margin-bottom: 0;
}

.project-about {
  font-size: 17px;
  line-height: 1.7;
  color: #444;
}

.section-title {
  font-size: 20px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 16px 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 12px;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 15px;
  line-height: 1.6;
  color: #555;
}

.feature-dot {
  width: 6px;
  height: 6px;
  background: var(--primary-text-color);
  border-radius: 50%;
  margin-top: 8px;
  flex-shrink: 0;
}

.challenge-text {
  font-size: 15px;
  line-height: 1.7;
  color: #555;
}

.tech-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-item {
  background: #f5f5f5;
  color: #444;
  padding: 8px 14px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
}

.modal-actions {
  display: flex;
  gap: 12px;
  margin-top: 40px;
  padding-top: 32px;
  border-top: 1px solid #f0f0f0;
}

.action-button {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  border-radius: 50px;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
}

.action-button img {
  width: 18px;
  height: 18px;
}

.action-button.primary {
  background: #1a1a1a;
  color: white;
}

.action-button.primary:hover {
  background: #000;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.action-button.primary img {
  filter: brightness(0) invert(1);
}

.action-button.secondary {
  background: white;
  color: #1a1a1a;
  border: 2px solid #e5e5e5;
}

.action-button.secondary:hover {
  border-color: #1a1a1a;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .modal-hero {
    height: 280px;
  }

  .hero-overlay {
    padding: 24px;
  }

  .modal-title {
    font-size: 28px;
  }

  .modal-subtitle {
    font-size: 14px;
  }

  .modal-body {
    padding: 24px;
    max-height: 50vh;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .modal-actions {
    flex-direction: column;
  }

  .action-button {
    justify-content: center;
  }
}
</style>
