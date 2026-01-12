import type { Work } from '@/models/Interface'
import { ref, type Ref } from 'vue'
import blackjack from '@/assets/images/blackjack.png'
import portfolio from '@/assets/images/portfolio.png'
import simon from '@/assets/images/simonsays.png'
import cryptoTracker from '@/assets/images/cryptotracker.png'
import trading from '@/assets/images/trading.png'
import pinescript from '@/assets/images/pinescript.png'
import signal from '@/assets/images/signal.png'

const workArray: Ref<Work[]> = ref([
  {
    image: trading,
    title: 'Automated Trading',
    subtitle: 'Created profitable automated trading strategies',
    year: '2025',
    language: ['MQL5', 'AI', 'Claude Code'],
    information:
      'By combining AI with data analysis, I created and optimized profitable trading strategies refined for real-world market conditions. **Private repository**',
    projectLink: '',
    githubLink: '',
    detailedDescription:
      'This project represents the combination of AI and financial markets. Using advanced AI models and comprehensive data analysis, I developed automated trading strategies that have proven profitable in live market conditions. Due to the proprietary nature of the trading strategies, the code and live project are not publicly available.',
    features: [
      'Real-time market data analysis',
      'Risk management systems',
      'Backtesting capabilities',
      'Performance tracking and optimization',
    ],
    challenges:
      'The main challenge was balancing profitability with risk management while adapting to constantly changing market conditions. Implementing robust error handling and ensuring the system could operate reliably 24/7 required careful planning and testing.',
    technologies: ['MQL5', 'AI', 'Data Analysis', 'Claude Code'],
    isAIGenerated: true,
  },
  {
    image: pinescript,
    title: 'PineScript Trading Indicator',
    subtitle: 'Semi-automated multi-timeframe trading system',
    year: '2025',
    language: ['PineScript', 'TradingView', 'AI'],
    information:
      'Custom TradingView indicator that monitors multiple timeframes and alerts me to high-probability trade setups. Fully AI-generated and rigorously tested.',
    projectLink: '',
    githubLink: '',
    detailedDescription:
      'As a trader who loves the markets but doesn\'t have time to watch charts all day, I created this semi-automated trading system using AI as my coding partner. I provided the trading logic and requirements, while AI handled the PineScript implementation. Together we solved complex problems: designing robust backtesting systems to validate strategies across months of historical data, handling timezone conversions for accurate session-based calculations, building a sophisticated alerting system that filters noise and only notifies on high-probability setups, and creating clear visual breakdowns with color-coded EMAs, dynamic dashboards, and intuitive trade markers. The indicator analyzes 1-hour bias, 30-minute torsion, 5-minute alignment, and 1-minute entry triggers across multiple timeframes simultaneously, validating all criteria before alerting me when everything aligns perfectly.',
    features: [
      'Multi-timeframe analysis (1H bias, 30m torsion, 5m read, 1m entry)',
      'Automated EMA cross detection with bias validation',
      'VWAP and daily open level tracking',
      'ADX momentum filtering',
      'Real-time win rate calculations (7d, 30d, all-time)',
      'Smart alerts for high-probability setups',
      'Visual trade tracking with entry/stop loss levels',
      'Comprehensive dashboard with all layer states',
    ],
    challenges:
      'Working with AI to build this required clear communication of trading concepts and iterative refinement. Key problems we solved together: 1) Backtesting - AI helped implement historical validation across thousands of trades to prove strategy viability. 2) Timezone handling - Converting market sessions and times correctly for accurate VWAP and daily open calculations. 3) Alert filtering - Building logic to prevent alert spam by only triggering on confirmed, high-confidence setups. 4) Visual clarity - AI created a color-coded system with gradient fills, glowing EMAs, and an intuitive dashboard that displays all timeframe states at a glance. 5) Real-time calculations - Implementing live win rate tracking and performance metrics. The collaboration was iterative: I provided trading knowledge and feedback, AI handled the technical implementation and debugging.',
    technologies: ['PineScript', 'TradingView', 'Multi-timeframe Analysis', 'AI Code Generation', 'Algorithmic Trading'],
    isAIGenerated: true,
  },
  {
    image: signal,
    title: 'Trading Signal Bot',
    subtitle: 'Telegram bot for TradingView signals',
    year: '2025',
    language: ['Python', 'FastAPI', 'Telegram API'],
    information:
      'Automated Telegram bot that receives TradingView webhook signals and forwards them with interactive trade management options. Created with AI assistance.',
    projectLink: '',
    githubLink: '',
    detailedDescription:
      'A sophisticated Telegram bot that bridges TradingView alerts with traders via Telegram. The bot receives webhook signals from TradingView, processes them, and presents interactive buttons for traders to select stop loss, profit targets, and contract sizes. Built with Python and FastAPI, it features real-time position calculation for futures contracts (NQ, ES, GC, SI) and provides a seamless user experience through Telegram\'s inline keyboards.',
    features: [
      'Real-time TradingView webhook integration',
      'Interactive 3-step selection process (SL → TP → Contracts)',
      'Automatic position sizing calculations',
      'Support for multiple futures instruments',
      'Test mode for paper trading',
      'VPS deployment with PM2/systemd',
    ],
    challenges:
      'The main challenges included handling asynchronous webhook requests from TradingView while maintaining Telegram bot responsiveness, implementing accurate position size calculations for different futures instruments, and designing an intuitive multi-step selection flow. Managing state for multiple concurrent trade signals and ensuring the bot remained stable on a VPS required careful error handling and testing.',
    technologies: ['Python', 'FastAPI', 'Telegram Bot API', 'Webhooks', 'Async/Await', 'VPS Deployment'],
    isAIGenerated: true,
  },
  {
    image: blackjack,
    title: 'Blackjack',
    subtitle: 'Functioning Blackjack game',
    year: '2024',
    language: ['Javascript', 'HTML', 'CSS'],
    information:
      'My first solo project building a functional Blackjack game using vanilla JavaScript.',
    projectLink: 'https://letundefined.github.io/Blackjack/',
    githubLink: 'https://github.com/LetUndefined/Blackjack',
    detailedDescription:
      'A fully functional Blackjack game that simulates the classic casino experience. This was my first solo project, marking the beginning of my journey as a developer. Built entirely with vanilla JavaScript.',
    features: [
      'Classic Blackjack gameplay',
      'Betting system',
      'Dealer logic',
      'Score tracking',
    ],
    challenges:
      'As my first major project, learning to structure code properly and implement game logic was challenging. Managing the game state, implementing the dealer and ensuring fair gameplay required careful planning and debugging.',
    technologies: ['JavaScript', 'HTML5', 'CSS'],
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
    detailedDescription:
      'My first portfolio website, representing the beginning of my web development journey. Built with vanilla technologies, this project taught me the fundamentals of web design and development. It showcases my early projects and serves as a milestone of where I started.',
    features: [
      'Clean, modern design',
      'Project showcase section',
      'About me section',
      'Contact form',
      'Smooth scrolling navigation',
      'Mobile responsive layout',
    ],
    challenges:
      'Learning CSS layout techniques and making the site responsive across different devices was a significant challenge. Understanding SCSS and organizing styles efficiently required a lot of research and iteration.',
    technologies: ['JavaScript', 'HTML5', 'SCSS', 'Responsive Design'],
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
    detailedDescription:
      'An interactive memory game that challenges players to repeat increasingly complex sequences. This project demonstrates my ability to create engaging user experiences while managing complex game states and user interactions.',
    features: [
      'Progressive difficulty levels',
      'Sound effects and visual feedback',
      'High score tracking',
      'Smooth animations',
      'Responsive touch/click controls',
      'Game over and restart functionality',
    ],
    challenges:
      'Implementing the pattern recognition logic and ensuring smooth animations synchronized with sound effects was challenging. Managing timing and user input validation required careful attention to detail.',
    technologies: ['JavaScript', 'HTML5', 'CSS3'],
  },
  {
    image: cryptoTracker,
    title: 'Crypto Tracker',
    subtitle: 'Track the crypto market',
    year: '2025',
    language: ['Vue', 'HTML', 'CSS', 'Typescript'],
    information:
      'Small project to track the price of cryptocurrencies using APIs. First collaboration with AI',
    projectLink: 'https://letundefined.github.io/CryptoTracker/',
    githubLink: 'https://github.com/LetUndefined/CryptoTracker',
    detailedDescription:
      'A real-time cryptocurrency tracking application that displays live market data. This project marked my transition to modern frameworks and my first collaboration with AI for development. It demonstrates my ability to work with external APIs and manage asynchronous data.',
    features: [
      'Real-time price updates',
      'Multiple cryptocurrency support',
      'Price change indicators',
      'Search functionality',
      'API integration',
    ],
    challenges:
      'Managing API calls, handling loading states, and ensuring data updates smoothly were key challenges. This was also my first time collaborating with AI for development.',
    technologies: ['Vue 3', 'TypeScript', 'REST APIs', 'CSS3', 'Composition API'],
    isAIGenerated: true,
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
