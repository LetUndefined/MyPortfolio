<script setup lang="ts">

const props = defineProps<{
  imageSrc: string
  title: string
  descr: string
}>()

</script>


<template>
  <div class="container">
    <div class="content">
      <img :src="props.imageSrc" >
      <h3> {{  props.title }}</h3>
      <p>{{ props.descr }}</p>
    </div>
  </div>
</template>


<style scoped >

.container{
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border: 1px solid rgb(205, 204, 207, 0.4);
  flex-direction: column;
  box-shadow: 0px 10px 10px -10px  black;
  border-radius: 20px;
  padding: 3.5rem 2.5rem;
  transition: 0.3s ease-in-out;
  position: relative;
  overflow: hidden;
}

.container::before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom right, rgba(197, 8, 255, 0.1),rgba(146, 132, 226, 0.1),rgba(0, 217, 255,0.1));
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  z-index: -1;
  border-radius: 20px;
}

.container:hover{
  transform: translateY(-10px);
}

.container:hover::before{
  opacity: 1;
}

.content{
  display: flex;
  justify-content: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 1.5rem;
  font-family: var(--primary-font);
}



.content img{
  border-radius: 10px;
  padding: 1rem;
  background: linear-gradient(to bottom right, rgba(197, 8, 255, 0.5),rgba(146, 132, 226, 0.5),rgba(0, 217, 255,0.5));
  color: white;
  backdrop-filter: blur(100px);
  box-shadow: 0px 2px 10px -5px  black;
}

.content h3{
  font-size: 1.5rem;
  font-weight: 500;
}

 .content p {
    max-width: 20rem;
    font-weight: 300;
  }

</style>
