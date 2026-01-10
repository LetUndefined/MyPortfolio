import blue from '@/assets/images/360_F_240635575_EJifwRAbKsVTDnA3QE0bCsWG5TLhUNEZ.jpg'
import type { Work } from '@/models/Interface'
import { ref, type Ref } from 'vue'

const workArray: Ref<Work[]> = ref([
  {
    image: blue,
    title: 'Blackjack',
    subtitle: 'A game of black',
    year: '2025',
    language: ['Javascript', 'HTML', 'CSS'],
    information: 'Lorem ipsum enz',
    projectLink: 'http://www.google.com',
    githubLink: 'http://www.google.com',
  },
  {
    image: blue,
    title: 'Blackjack',
    subtitle: 'A game of black',
    year: '2025',
    language: ['Javascript', 'HTML', 'CSS'],
    information: 'Lorem ipsum enz',
    projectLink: 'http://www.google.com',
    githubLink: 'http://www.google.com',
  },
  {
    image: blue,
    title: 'Blackjack',
    subtitle: 'A game of black',
    year: '2025',
    language: ['Javascript', 'HTML', 'CSS'],
    information: 'Lorem ipsum enz',
    projectLink: 'http://www.google.com',
    githubLink: 'http://www.google.com',
  },
  {
    image: blue,
    title: 'Blackjack',
    subtitle: 'A game of black',
    year: '2025',
    language: ['Javascript', 'HTML', 'CSS'],
    information: 'Lorem ipsum enz',
    projectLink: 'http://www.google.com',
    githubLink: 'http://www.google.com',
  },
  {
    image: blue,
    title: 'Blackjack',
    subtitle: 'A game of black',
    year: '2025',
    language: ['Javascript', 'HTML', 'CSS'],
    information: 'Lorem ipsum enz',
    projectLink: 'http://www.google.com',
    githubLink: 'http://www.google.com',
  },
])

export { workArray }
