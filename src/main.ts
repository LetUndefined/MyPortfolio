import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/main.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import Particles from "@tsparticles/vue3";
import { loadFirePreset } from "@tsparticles/preset-fire"


const app = createApp(App)
const vuetify = createVuetify({
  components,
  directives,
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
