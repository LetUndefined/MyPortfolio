import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/main.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { VCard, VCardItem, VCardTitle, VCardText, VImg, VChip, VBtn, VIcon, VDialog } from 'vuetify/components'
import Particles from "@tsparticles/vue3";
import { loadFirePreset } from "@tsparticles/preset-fire"


const app = createApp(App)
const vuetify = createVuetify({
  components: {
    VCard,
    VCardItem,
    VCardTitle,
    VCardText,
    VImg,
    VChip,
    VBtn,
    VIcon,
    VDialog,
  },
})

app.use(router)
app.use(vuetify)
app.use(Particles, {
  init: async engine => {
    // await loadFull(engine); // you can load the full tsParticles library from "tsparticles" if you need it
    await loadFirePreset(engine); // or you can load the slim version from "@tsparticles/slim" if don't need Shapes or Animations
  },
});


app.mount('#app')
