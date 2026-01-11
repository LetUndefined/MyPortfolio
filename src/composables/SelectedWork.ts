
import type { Work } from '@/models/Interface'
import { ref, type Ref } from 'vue'
import blackjack from '@/assets/images/blackjack.png'
import portfolio from '@/assets/images/portfolio.png'
import simon from '@/assets/images/simonsays.png'
import cryptoTracker from '@/assets/images/cryptotracker.png'
import trading from "@/assets/images/trading.png"


const workArray: Ref<Work[]> = ref([
  {
    image: trading,
    title: 'Automated Trading',
    subtitle: "Created profitable automated trading strategies",
    year: '2025',
    language: ['MQL5', 'AI', "Claude Code"],
    information: 'By combining AI with data analysis, I created and optimized profitable trading strategies refined for real-world market conditions',
    projectLink: '',
    githubLink: ''
  },
  {
    image: blackjack,
    title: 'Blackjack',
    subtitle: 'Functioning Blackjack game',
    year: '2024',
    language: ['Javascript', 'HTML', 'CSS'],
    information: 'My first solo project building a functional Blackjack game using vanilla JavaScript.',
    projectLink: 'https://letundefined.github.io/Blackjack/',
    githubLink: 'https://github.com/LetUndefined/Blackjack',
  },
  {
    image: portfolio,
    title: 'Portfolio',
    subtitle: 'First Portfolio',
    year: '2024',
    language: ['Javascript', 'HTML', 'SCSS'],
    information: 'This marked the beginning of my journey, my first ever portfolio.',
    projectLink: 'https://letundefined.github.io/Portfolio/',
    githubLink: 'https://github.com/LetUndefined/Portfolio',
  },
  {
    image: simon,
    title: 'SimonSays',
    subtitle: 'A game of SimonSays',
    year: '2025',
    language: ['Javascript', 'HTML', 'CSS'],
    information: 'Created a Simon Says game, showcasing programming and game design skills.',
    projectLink: 'https://letundefined.github.io/SimonSays-Game/',
    githubLink: 'https://github.com/LetUndefined/SimonSays-Game',
  },
  {
    image: cryptoTracker,
    title: 'Crypto Tracker',
    subtitle: 'Track the crypto market',
    year: '2025',
    language: ['Vue', 'HTML', 'CSS', 'Typescript'],
    information: 'Small project to track the price of cryptocurrencies using APIs. First collaboration with AI',
    projectLink: 'https://letundefined.github.io/CryptoTracker/',
    githubLink: 'https://github.com/LetUndefined/CryptoTracker',
  },
  {
    image: 'blue',
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
