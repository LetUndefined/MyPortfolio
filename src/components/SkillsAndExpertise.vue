<script setup lang="ts">
const props = defineProps<{
image: string
skill: string
chip: string
}>()

</script>

<template>
<v-card class="mx-auto">

  <v-card-item>

    <v-card-item class="image-container">

      <v-img :src="props.image"/>
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
  box-shadow: 0px 3px 10px -5px black;
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

:deep(.v-img) {
  max-width: 30px;
  width: 30px;
  height: 30px;
}

</style>
