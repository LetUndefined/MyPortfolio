import { ref, type Ref } from 'vue'
import type { Skills } from '@/models/Interface'
import { Palette, Code, Github, Brain, ChartCandlestick, Coffee } from 'lucide-vue-next'

export const skillsArray: Ref<Skills[]> = ref([
  {
    icon: Code,
    skill: 'Typescript',
    chip: 'Frontend',
    color: '#D6E5FA',
    iconColor: '#3178C6',
  },
  {
    icon: Code,
    skill: 'Javascript',
    chip: 'Frontend',
    color: '#FFF9DB',
    iconColor: '#F7DF1E',
  },
  {
    icon: Code,
    skill: 'VUE.JS',
    chip: 'Frontend',
    color: '#D4F4E7',
    iconColor: '#42B883',
  },
  {
    icon: Palette,
    skill: 'CSS',
    chip: 'Frontend',
    color: '#D4EBFA',
    iconColor: '#1572B6',
  },
  {
    icon: Code,
    skill: 'HTML',
    chip: 'Frontend',
    color: '#FFE5D9',
    iconColor: '#E34F26',
  },
  {
    icon: Github,
    skill: 'Github',
    chip: 'Tools',
    color: '#E8E8E8',
    iconColor: '#181717',
  },
  {
    icon: Brain,
    skill: 'Claude Code',
    chip: 'Tools',
    color: '#fffa76a9',
    iconColor: '#ffd876',
  },
  {
    icon: ChartCandlestick,
    skill: 'Trading',
    chip: 'Hobby',
    color: '#ff8b7698',
    iconColor: '#ff7676ee',
  },
  {
    icon: Code,
    skill: 'React',
    chip: 'Frontend',
    color: '#E7F6F8',
    iconColor: '#61DAFB',
  },
  {
    icon: Palette,
    skill: 'Tailwind CSS',
    chip: 'Frontend',
    color: '#E0F2FE',
    iconColor: '#06B6D4',
  },
  {
    icon: Coffee,
    skill: 'Drinking Coffee',
    chip: 'Essential',
    color: '#F4E4D7',
    iconColor: '#6F4E37',
  },
])
