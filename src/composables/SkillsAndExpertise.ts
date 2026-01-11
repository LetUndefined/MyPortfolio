import { ref, type Ref } from "vue";
import type { Skills } from "@/models/Interface";
import artist from "@/assets/icons/palette.svg"
import codeImage from '@/assets/icons/code.svg'
import github from '@/assets/icons/github.svg'




export const skillsArray: Ref<Skills[]> = ref([
  {
  image: codeImage,
  skill: 'Typescript',
  chip: "Frontend",
  },{
    image: codeImage,
    skill: "Javascript",
    chip: 'Frontend'
  },{
    image: artist,
    skill: 'CSS',
    chip: 'Frontend'
  } , {
    image: codeImage,
    skill: 'VUE.JS',
    chip: 'Frontend'
  }, {
    image: github,
    skill: 'Github',
    chip: 'Tools'
  }

])
