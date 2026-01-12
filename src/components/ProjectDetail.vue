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
  <v-dialog :model-value="modelValue" @update:model-value="closeModal" max-width="900">
    <v-card v-if="project" class="project-detail-card">
      <v-img :src="project.image" height="300" cover gradient="to top, rgba(0,0,0,.6), transparent">
        <v-btn icon class="close-btn" @click="closeModal">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <div class="header-content">
          <p class="year">{{ project.year }}</p>
          <h2 class="title">{{ project.title }}</h2>
          <p class="subtitle">{{ project.subtitle }}</p>
        </div>
      </v-img>

      <v-card-text class="project-content">
        <div class="section">
          <h3>About</h3>
          <p class="description">
            {{ project.detailedDescription || project.information }}
          </p>
        </div>

        <div v-if="project.features && project.features.length > 0" class="section">
          <h3>Key Features</h3>
          <ul class="features-list">
            <li v-for="(feature, index) in project.features" :key="index">{{ feature }}</li>
          </ul>
        </div>

        <div v-if="project.challenges" class="section">
          <h3>Challenges & Solutions</h3>
          <p class="description">{{ project.challenges }}</p>
        </div>

        <div v-if="project.technologies && project.technologies.length > 0" class="section">
          <h3>Technologies</h3>
          <div class="technology-chips">
            <v-chip v-for="(tech, index) in project.technologies" :key="index">{{ tech }}</v-chip>
          </div>
        </div>

        <div class="actions">
          <v-chip
            v-if="project.projectLink"
            :href="project.projectLink"
            target="_blank"
            class="project-chip"
          >
            <img :src="link" />
            <p>View Project</p>
          </v-chip>
          <v-chip
            v-if="project.githubLink"
            :href="project.githubLink"
            target="_blank"
            class="github-chip"
          >
            <img :src="github" />
            <p>View Code</p>
          </v-chip>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.project-detail-card {
  border-radius: 30px;
  overflow: hidden;
}

.v-img {
  position: relative;
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  z-index: 2;
}

.close-btn:hover {
  background-color: rgba(0, 0, 0, 0.7);
}

.header-content {
  position: absolute;
  bottom: 20px;
  left: 30px;
}

.year {
  color: var(--primary-white);
  text-shadow: 1px 2px black;
  margin-bottom: 0.5rem;
}

.title {
  font-size: 36px;
  color: var(--primary-white);
  text-shadow: 1px 2px black;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 14px;
  color: var(--primary-white);
  text-shadow: 1px 2px black;
}

.project-content {
  padding: 2rem;
  max-height: 60vh;
  overflow-y: auto;
}

.section {
  margin-bottom: 2rem;
}

.section h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--primary-text-color);
  font-family: var(--primary-font);
}

.description {
  font-size: 16px;
  line-height: 1.6;
  color: var(--primary-p-color);
}

.features-list {
  list-style: none;
  padding: 0;
}

.features-list li {
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
  font-size: 16px;
  color: var(--primary-p-color);
}

.features-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--primary-text-color);
  font-weight: bold;
}

.technology-chips .v-chip {
  margin-right: 10px;
  margin-bottom: 10px;
}

.actions {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.actions .v-chip {
  padding: 1.2rem;
  font-size: 14px;
}

.actions img {
  display: block;
  width: 1rem;
  margin-right: 5px;
}

.project-chip {
  background-color: black;
  color: white;
  transition: 0.1s ease-in-out;
}

.project-chip:hover {
  transform: scale(1.05);
}

.project-chip img {
  filter: invert(1);
}

.github-chip:hover {
  transform: scale(1.05);
}

:deep(.v-overlay__scrim) {
  backdrop-filter: blur(10px);
}
</style>
