<script setup lang="ts">
import BtnComponent from './BtnComponent.vue';

</script>
<template>
  <nav class="nav">
    <div class="navbar">
      <h3>Sandro</h3>
      <ul class="list">
        <li>Home</li>
        <li>Projects</li>
        <li>Skills</li>
        <li>Contact</li>
      </ul>
      <BtnComponent>
        <span>Let's Talk</span>
      </BtnComponent>
    </div>
  </nav>
</template>


<style scoped>
.nav{
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  color: var(--navbar-color);
  padding: 1.5rem;
  font-family: var(--secondary-font);
  font-weight: 600;
}

.navbar{
  display: flex;
  margin: 0rem 14rem;
  justify-content: space-between;
  align-items: center;
}

.navbar h3{
  text-transform: uppercase;
}

li{
list-style: none;
}



.list{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;


}



</style>
