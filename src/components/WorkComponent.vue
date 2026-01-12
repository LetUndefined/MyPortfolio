<script setup lang="ts">
import github from '@/assets/icons/github.svg'
import link from '@/assets/icons/square-arrow-out-up-right.svg'

const props = defineProps<{
  image: string
  title: string
  subtitle: string
  year: string
  language: string[]
  information: string
  projectLink: string
  githubLink: string
  isAIGenerated?: boolean
}>()

const emit = defineEmits<{
  'view-details': []
}>()

const viewDetails = () => {
  emit('view-details')
}
</script>

<template>
  <v-card class="mx-4 my-12" max-width="6OO" :class="{ 'ai-generated': props.isAIGenerated }">
    <div v-if="props.isAIGenerated" class="ai-badge">Collaboration with AI</div>
    <div @click="viewDetails" class="card-clickable">
      <v-img height="250" :src="props.image" cover gradient="to top, rgba(0,0,0, 0.9), transparent">
        <p class="year">{{ props.year }}</p>
        <h4 class="title">{{ props.title }}</h4>
        <p class="subtitle">{{ props.subtitle }}</p>
      </v-img>

      <v-card-text>
        <div class="my-4 text-subtitle-1">
          <div v-html="props.information.replace('**Private repository**', '<strong>Private repository</strong>')"></div>
        </div>
      </v-card-text>

      <div class="px-4 mb-2">
        <div class="language-chip">
          <v-chip v-for="(chip, index) in props.language" :key="index">{{ chip }}</v-chip>
        </div>
      </div>
    </div>

    <div class="px-4 mb-2 icons">
      <v-chip
        v-if="projectLink"
        :href="projectLink"
        target="_blank"
        class="project-chip"
        @click.stop
      >
        <img :src="link" />
        <p>View Project</p>
      </v-chip>
      <v-chip v-if="githubLink" :href="githubLink" target="_blank" class="github-chip" @click.stop>
        <img :src="github" />
        <p>Code</p>
      </v-chip>
    </div>
  </v-card>
</template>

<style scoped>
.v-card {
  position: relative;
  border-radius: 30px;
  width: 400px;
  min-height: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 1px 10px -5px black;
  transition: 0.3s ease-in-out;
}

.v-card:hover {
  box-shadow: 1px 1px 10px black;
}

.v-card.ai-generated {
  border: 2px solid #9c27b0;
  box-shadow: 0px 2px 15px -3px rgba(156, 39, 176, 0.3);
}

.v-card.ai-generated:hover {
  box-shadow: 0px 4px 20px rgba(156, 39, 176, 0.5);
}

.ai-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  background: linear-gradient(135deg, #9c27b0 0%, #7b1fa2 100%);
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  z-index: 10;
  box-shadow: 0 2px 8px rgba(156, 39, 176, 0.4);
}

.card-clickable {
  cursor: pointer;
}

.v-img {
  position: relative;
  transition: 0.3s ease-in-out;
}

.v-card:hover .v-img {
  transform: scale(1.05);
}

.year {
  position: absolute;
  top: 20px;
  left: 26px;
  color: var(--primary-white);
  text-shadow: 1px 2px black;
}

.title {
  position: absolute;
  top: 160px;
  left: 24px;
  font-size: 26px;
  color: var(--primary-white);
}

.subtitle {
  position: absolute;
  top: 200px;
  left: 26px;
  font-size: 12px;
  color: var(--primary-white);
}

.v-card-text {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0rem;
  padding: 1rem;
  min-height: 100px;
  max-height: 100px;
  overflow: hidden;
}

.language-chip .v-chip {
  margin-right: 10px;
}

.language-chip :deep(.v-chip__content) {
  font-size: 12px;
}

.icons {
  min-height: 60px;
}

.icons .v-chip {
  margin: 10px 10px 10px 0;
  padding: 1rem;
}

.icons img {
  display: block;
  width: 1rem;
  margin-right: 3px;
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
</style>
