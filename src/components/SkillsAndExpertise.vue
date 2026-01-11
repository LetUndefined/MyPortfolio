<script setup lang="ts">
import type { Component } from 'vue'

const props = defineProps<{
icon: Component
skill: string
chip: string
color: string
iconColor?: string
}>()

</script>

<template>
<v-card class="mx-auto">

  <v-card-item>

    <v-card-item class="image-container" :style="{background: props.color, color: props.iconColor || '#000'}">

      <component :is="props.icon" :size="30" :stroke-width="2"/>
    </v-card-item>

    <v-card-title>
      {{ props.skill }}
    </v-card-title>
    <v-chip>
      {{ props.chip }}
    </v-chip>

  </v-card-item>

</v-card>
</template>


<style scoped>

.v-card {
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 200px;

}

.v-card-item > *{
  gap: 0.75rem;
}

:deep(.v-card-item__content) {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}


.image-container{
  margin-top: 1rem;
  padding: 0.5rem;
  border-radius: 10px;
  box-shadow: 0px 0px 3px -1px black;

}


</style>
