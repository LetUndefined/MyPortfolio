import { ref } from "vue";

export const isScrolled = ref(false)


export const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
  

}

