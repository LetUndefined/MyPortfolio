<script setup lang="ts">
import github from '@/assets/icons/github.svg';
import link from '@/assets/icons/square-arrow-out-up-right.svg';
import BadgeComponent from './BadgeComponent.vue';

const props = defineProps<{
  image: string;
  title: string;
  subtitle: string;
  year: string;
  language: string[];
  information: string;
  projectLink: string;
  githubLink: string;
  isAIGenerated?: boolean;
  isInDevelopment?: boolean;
}>();

const emit = defineEmits<{
  'view-details': [];
}>();

const viewDetails = () => {
  emit('view-details');
};
</script>

<template>
  <v-card class="project-card" :class="{ 'ai-generated': props.isAIGenerated }">
    <BadgeComponent v-if="props.isInDevelopment" type="dev">Under Development</BadgeComponent>
    <BadgeComponent v-if="props.isAIGenerated" type="ai">Collaboration with AI</BadgeComponent>

    <div @click="viewDetails" class="card-wrapper">
      <v-img
        height="400"
        :src="props.image"
        cover
        gradient="to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.4) 100%"
        class="project-image"
      >
        <div class="card-content">
          <div class="card-badges">
            <v-chip size="small" class="year-chip">{{ props.year }}</v-chip>
            <v-chip
              v-for="(tech, index) in props.language.slice(0, 2)"
              :key="index"
              size="small"
              class="tech-chip"
            >
              {{ tech }}
            </v-chip>
          </div>

          <div class="card-text">
            <h3 class="project-title">{{ props.title }}</h3>
            <p class="project-description">{{ props.subtitle }}</p>
          </div>

          <div class="card-actions">
            <button class="view-btn" @click.stop="viewDetails">View Details</button>
            <div class="action-icons">
              <a v-if="githubLink" :href="githubLink" target="_blank" class="icon-link" @click.stop>
                <img :src="github" alt="GitHub" />
              </a>
              <a
                v-if="projectLink"
                :href="projectLink"
                target="_blank"
                class="icon-link"
                @click.stop
              >
                <img :src="link" alt="Live" />
              </a>
            </div>
          </div>
        </div>
      </v-img>
    </div>
  </v-card>
</template>

<style scoped>
.project-card {
  position: relative;
  border-radius: 30px;
  width: 400px;
  height: 100%;
  overflow: hidden;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  transition: 0.3s ease-in-out;
  margin: 2rem;
}

.project-card:hover {
  box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.15);
  transform: translateY(-4px);
}

.project-card.ai-generated {
  border: 2px solid #9c27b0;
  box-shadow: 0px 4px 20px rgba(156, 39, 176, 0.3);
}

.project-card.ai-generated:hover {
  box-shadow: 0px 8px 30px rgba(156, 39, 176, 0.4);
}

.card-wrapper {
  cursor: pointer;
  height: 100%;
}

.project-image {
  height: 100%;
  position: relative;
}

.card-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
}

.card-badges {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.year-chip,
.tech-chip {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  color: white;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
}

.card-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 1rem;
}

.project-title {
  font-size: 28px;
  font-weight: 700;
  color: white;
  margin: 0 0 8px 0;
  line-height: 1.2;
  text-shadow:
    0px 2px 12px rgba(0, 0, 0, 0.8),
    0px 4px 20px rgba(0, 0, 0, 0.5);
}

.project-description {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.95);
  margin: 0;
  line-height: 1.5;
  text-shadow:
    0px 2px 8px rgba(0, 0, 0, 0.8),
    0px 1px 4px rgba(0, 0, 0, 0.6);
}

.card-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.view-btn {
  flex: 1;
  background: white;
  color: #1a1a1a;
  border: none;
  padding: 14px 24px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
}

.view-btn:hover {
  background: #f5f5f5;
  transform: scale(1.02);
}

.action-icons {
  display: flex;
  gap: 8px;
}

.icon-link {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.icon-link:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
}

.icon-link img {
  width: 20px;
  height: 20px;
  filter: brightness(0) invert(1);
}

@media (max-width: 768px) {
  .project-card {
    width: 100%;
    margin: 1.5rem 0;
  }

  .card-content {
    padding: 20px;
  }

  .project-title {
    font-size: 24px;
  }

  .project-description {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .card-content {
    padding: 16px;
  }

  .project-title {
    font-size: 22px;
  }

  .view-btn {
    padding: 12px 20px;
    font-size: 14px;
  }

  .card-badges {
    gap: 6px;
  }

  .action-icons {
    gap: 6px;
  }

  .icon-link {
    width: 36px;
    height: 36px;
  }
}
</style>
