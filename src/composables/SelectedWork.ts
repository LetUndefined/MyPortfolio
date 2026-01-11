
import type { Work } from '@/models/Interface'
import { ref, type Ref } from 'vue'
// import blackjack from '@/assets/images/blackjack.png'
// import portfolio from '@/assets/images/portfolio.png'
// import simon from '@/assets/images/simonsays.png'
// import cryptoTracker from '@/assets/images/cryptotracker.png'
import blue from '@/assets/images/blue.jpg'
import purple from '@/assets/images/purple.jpg'
import orange from '@/assets/images/orange.jpg'
import red from '@/assets/images/red.jpg'
import grey from '@/assets/images/grey.jpg'

const workArray: Ref<Work[]> = ref([
  {
    image: purple,
    title: 'Blackjack',
    subtitle: 'Functioning Blackjack game',
    year: '2025',
    language: ['Javascript', 'HTML', 'CSS'],
    information: 'My first solo project building a functional Blackjack game using vanilla JavaScript.',
    projectLink: 'https://letundefined.github.io/Blackjack/',
    githubLink: 'https://github.com/LetUndefined/Blackjack',
  },
  {
    image: orange,
    title: 'Portfolio',
    subtitle: 'First Portfolio',
    year: '2025',
    language: ['Javascript', 'HTML', 'SCSS'],
    information: 'This marked the beginning of my journey, my first ever portfolio.',
    projectLink: 'https://letundefined.github.io/Portfolio/',
    githubLink: 'https://github.com/LetUndefined/Portfolio',
  },
  {
    image: red,
    title: 'SimonSays',
    subtitle: 'A game of SimonSays',
    year: '2025',
    language: ['Javascript', 'HTML', 'CSS'],
    information: 'Created a Simon Says game, showcasing programming and game design skills.',
    projectLink: 'https://letundefined.github.io/SimonSays-Game/',
    githubLink: 'https://github.com/LetUndefined/SimonSays-Game',
  },
  {
    image: grey,
    title: 'Crypto Tracker',
    subtitle: 'Track the crypto market',
    year: '2025',
    language: ['Vue', 'HTML', 'CSS', 'Typescript'],
    information: 'Small project to track the price of cryptocurrencies using APIs. First collaboration with AI',
    projectLink: 'http://www.google.com',
    githubLink: 'https://github.com/LetUndefined/CryptoTracker',
  },
  {
    image: blue,
    title: 'Coming soon',
    subtitle: 'More projects coming soon',
    year: '2026',
    language: ['Vue', 'HTML', 'CSS', 'Typescript'],
    information: 'More projects are underway!',
    projectLink: 'https://github.com/LetUndefined',
    githubLink: 'https://github.com/LetUndefined',
  },
])

export { workArray }
