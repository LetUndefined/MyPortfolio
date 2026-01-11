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
}>()
</script>

<template>
  <v-card class=" mx-4 my-12" max-width="6OO">
    <v-img height="250" :src="props.image" cover>
      <p class="year">{{ props.year }}</p>
      <h4 class="title">{{ props.title }}</h4>
      <p class="subtitle">{{ props.subtitle }}</p>
    </v-img>



    <v-card-text>
      <div class="my-4 text-subtitle-1">
        <div>{{ props.information }}</div>
      </div>
    </v-card-text>

    <div class="px-4 mb-2">
      <div class="language-chip">
        <v-chip v-for="(chip, index) in props.language" :key="index">{{ chip }}</v-chip>
      </div>
    </div>

    <div class="px-4 mb-2 icons">
      <v-chip :href="projectLink" target="_blank" class="project-chip">
        <img :src="link" />
        <p>View Project</p>
      </v-chip>
      <v-chip :href="githubLink" target="_blank" class="github-chip">
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

.v-card:hover{
  box-shadow: 1px 1px 10px black;
}

.v-img{
  transition: 0.3s ease-in-out;

}

.v-card:hover .v-img{
  transform: scale(1.05);
}

.year {
  position: absolute;
  top: 20px;
  left: 26px;
  color: var(--primary-white);
  text-shadow: 1px 2px  black;

}

.title {
  position: absolute;
  top: 160px;
  left: 24px;
  font-size: 26px;
  color: var(--primary-white);
  text-shadow: 1px 2px  black;
}

.subtitle {
  position: absolute;
  top: 200px;
  left: 26px;
  font-size: 12px;
  color: var(--primary-white);
  text-shadow: 1px 2px  black;

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
