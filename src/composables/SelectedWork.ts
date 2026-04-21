import type { Work } from '@/models/Interface';
import { ref, type Ref } from 'vue';
import blackjack from '@/assets/images/blackjack.png';
import pokedex from '@/assets/images/pokedex.png';
import simon from '@/assets/images/simonsays.png';
import cryptoTracker from '@/assets/images/cryptotracker.png';
import trading from '@/assets/images/trading.png';
import pinescript from '@/assets/images/pinescript.png';
import signal from '@/assets/images/signal.png';
import bookJournal from '@/assets/images/book-journal.png';
import chillit from '@/assets/images/chillit.png';
import nasa from '@/assets/images/nasa.png';
import costly from '@/assets/images/costly.svg';

const workArray: Ref<Work[]> = ref([
  {
    image: costly,
    title: 'Costly',
    subtitle: 'See what things really cost in work hours',
    year: '2026',
    language: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    information:
      'Calculate how many hours you need to work to afford something. Mobile-only web app built with React, TypeScript, and Supabase.',
    projectLink: 'https://costly-swart.vercel.app/#/',
    githubLink: 'https://github.com/LetUndefined/Costly',
    detailedDescription:
      'A mobile-only web application that converts prices into work hours based on your hourly wage. Enter a price and instantly see how many hours of your life you need to work to afford it. Built with React, TypeScript, and Supabase for a seamless mobile user experience with real-time data synchronization.',
    features: [
      'Convert prices to work hours based on your wage',
      'Real-time data synchronization with Supabase',
      'Save and track items with their work hour cost',
      'User authentication and data persistence',
      'Clean, intuitive mobile interface',
      'Mobile-optimized design',
    ],
    challenges:
      'Building an app that changes how people think about purchases required careful UX design. Implementing real-time synchronization with Supabase while maintaining a smooth user experience. Designing an intuitive mobile-first interface that makes the work hour calculation feel immediate and impactful.',
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Supabase',
      'Vite',
      'PostgreSQL',
      'Mobile-First Design',
    ],
  },
  {
    image: nasa,
    title: 'NASA Dashboard',
    subtitle: 'Chrome Extension for ISS Telemetry',
    year: '2026',
    language: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    information:
      "Chrome extension showing who's in space right now and live ISS tank levels. My first React project.",
    projectLink: '',
    githubLink: 'https://github.com/LetUndefined/Nasa-extension',
    detailedDescription:
      "A Chrome extension that shows how many people are currently in space, their names, and real-time ISS telemetry like water and urine tank levels. Built with React 19, TypeScript, and Tailwind CSS v4 while learning both frameworks for the first time. Pulls data from NASA's public APIs - no keys needed. Just a fun way to keep tabs on the ISS.",
    features: [
      'Live crew manifest showing humans currently in orbit',
      'Real-time ISS system status (Urine and Water tank levels)',
      "Direct connection to NASA's Lightstreamer telemetry feed",
      'Compact 380×500px dark-themed popup dashboard',
      'Glowing crew count with scrollable astronaut list',
      'Live progress bars for life support tank levels',
      'No API key required - all public data sources',
      'Built with React 19 and TypeScript',
      'Styled with Tailwind CSS v4',
      'Real-time data updates',
    ],
    challenges:
      "Integrating with NASA's Lightstreamer telemetry feed required understanding real-time streaming protocols and handling WebSocket connections. Building a Chrome extension with React and Vite required specific configuration for the manifest and build process. Managing real-time data updates efficiently while keeping the popup responsive was crucial. Designing a compact, information-dense interface that displays live telemetry data in an intuitive way within the 380×500px constraint. Handling connection errors and reconnection logic for the live data stream. This was my first time working with React and Tailwind CSS, requiring learning new frameworks while implementing real-time features.",
    technologies: [
      'React 19',
      'TypeScript',
      'Tailwind CSS v4',
      'Vite',
      'Chrome Extension API',
      'Lightstreamer',
      'Open Notify API',
      'WebSockets',
      'Real-time Data Streaming',
    ],
  },
  {
    image: chillit,
    title: 'Chill.it',
    subtitle: 'Discover and save chill spots near you',
    year: '2026',
    language: ['Vue', 'TypeScript', 'Supabase', 'Leaflet', 'Vuetify'],
    information: 'Find and save quiet spots to chill around you. Map-based app with routing.',
    projectLink: 'https://letundefined.github.io/Chill.it/',
    githubLink: 'https://github.com/LetUndefined/Chill.it',
    detailedDescription:
      'App for finding peaceful spots near you. See them on a map, save your favorites, add new ones, and get directions. Built with Vue 3, TypeScript, and Supabase with Leaflet for the maps.',
    features: [
      'Interactive map with Leaflet integration',
      'Real-time geolocation tracking',
      'Save and discover chill spots near you',
      'Add new locations with custom markers',
      'Turn-by-turn navigation with routing',
      'User authentication and personalized lists',
      'Location-based search and filtering',
      'Supabase backend for real-time data',
      'Mobile-optimized UI with Vuetify',
      'Share your favorite chill spots',
    ],
    challenges:
      "Integrating Leaflet maps with Vue 3's reactivity system required careful state management. Implementing accurate geolocation tracking and real-time position updates while maintaining performance was challenging. Building the routing functionality with leaflet-routing-machine and ensuring smooth navigation UX on mobile devices. Managing complex map interactions, custom markers, and location data synchronization with Supabase. Creating an intuitive interface for discovering, saving, and contributing locations while handling permissions and authentication flows.",
    technologies: [
      'Vue 3',
      'TypeScript',
      'Vite',
      'Supabase',
      'Leaflet',
      'Geolocation API',
      'Vuetify',
      'Pinia',
      'Leaflet Routing Machine',
      'PostgreSQL',
    ],
    isInDevelopment: false,
  },
  {
    image: bookJournal,
    title: 'Book Journal',
    subtitle: 'Track and manage your reading journey',
    year: '2026',
    language: ['Vue', 'TypeScript', 'Supabase', 'Vite'],
    information:
      'A modern reading journal application to track books, progress, and reading goals. First time working with Supabase for backend and authentication. Currently in development.',
    projectLink: 'https://letundefined.github.io/book-journal/',
    githubLink: 'https://github.com/LetUndefined/book-journal',
    detailedDescription:
      'An intuitive book journal application designed to help readers track their reading progress, manage their book collections, and set reading goals. Built with Vue 3 and TypeScript, this project marks my first experience with Supabase as a backend solution, implementing real-time database functionality and user authentication.',
    features: [
      'User authentication with Supabase Auth',
      'Real-time database synchronization',
      'Track currently reading books',
      'Manage reading lists',
      'Set and monitor reading goals',
      'Book progress tracking',
      'Modern, clean UI design',
      'Cloud-based data persistence',
    ],
    challenges:
      'Learning Supabase for the first time presented interesting challenges around authentication flow, real-time subscriptions, and database schema design. Building an intuitive interface for managing book data while ensuring smooth state management and data persistence. Integrating backend services seamlessly with the frontend experience.',
    technologies: [
      'Vue 3',
      'TypeScript',
      'Vite',
      'Supabase',
      'PostgreSQL',
      'Real-time Database',
      'Authentication',
    ],
    isInDevelopment: false,
  },
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
      'Custom TradingView indicator that monitors multiple timeframes and alerts me to high-probability trade setups. Fully AI-generated and rigorously tested. **Private repository**',
    projectLink: '',
    githubLink: '',
    detailedDescription:
      "As a trader who loves the markets but doesn't have time to watch charts all day, I created this semi-automated trading system using AI as my coding partner. I provided the trading logic and requirements, while AI handled the PineScript implementation. Together we solved complex problems: designing robust backtesting systems to validate strategies across months of historical data, handling timezone conversions for accurate session-based calculations, building a sophisticated alerting system that filters noise and only notifies on high-probability setups, and creating clear visual breakdowns with color-coded EMAs, dynamic dashboards, and intuitive trade markers. The indicator analyzes 1-hour bias, 30-minute torsion, 5-minute alignment, and 1-minute entry triggers across multiple timeframes simultaneously, validating all criteria before alerting me when everything aligns perfectly. Due to the proprietary nature of the trading strategy, the code is not publicly available.",
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
    technologies: [
      'PineScript',
      'TradingView',
      'Multi-timeframe Analysis',
      'AI Code Generation',
      'Algorithmic Trading',
    ],
    isAIGenerated: true,
  },
  {
    image: signal,
    title: 'MT5 Telegram Alert EA',
    subtitle: 'Automated trade execution with Telegram alerts',
    year: '2025',
    language: ['MQL5', 'Telegram API', 'MT5'],
    information:
      'MT5 Expert Advisor that monitors my custom indicator and sends interactive Telegram alerts with one-click trade execution. Created with AI assistance. **Private repository**',
    projectLink: '',
    githubLink: '',
    detailedDescription:
      'A sophisticated MT5 Expert Advisor (EA) that bridges my PineScript indicator signals with real-time Telegram notifications and automated trade execution. The EA continuously monitors the custom indicator, detects both warning and confirmed signals, and sends interactive Telegram messages with buttons for ATR percentage selection (70%, 80%, 90%, 100%) and risk percentage options. Once selections are made, it automatically calculates position sizes, places the trade with proper stop loss and take profit levels, and handles the entire execution process. Built with AI assistance to solve complex challenges like multi-step button interactions, accurate position sizing with tick value calculations, preventing duplicate signals, and managing trade state across multiple timeframes. Due to the proprietary nature of the trading strategy, the code is not publicly available.',
    features: [
      'Real-time indicator monitoring and signal detection',
      'Interactive Telegram buttons for ATR and risk selection',
      'Automated position sizing based on account risk percentage',
      'One-click trade execution from Telegram',
      'Multi-timeframe signal validation (warnings vs confirmed)',
      'Signal expiry management (10-minute timeout)',
      'Duplicate position prevention',
      'Support for both Discord and Telegram alerts',
    ],
    challenges:
      'Working with AI to build this required solving several complex problems: 1) Button interactions - Implementing a two-step selection process (ATR → Risk) using Telegram inline keyboards and callback queries. 2) Position sizing - Correctly calculating lot sizes using tick values, contract sizes, and account risk percentages for accurate dollar-based risk management. 3) State management - Tracking pending trades, preventing duplicate signals, and handling signal expiry across multiple symbols. 4) Signal filtering - Ignoring stale signals from before EA startup and only processing new signals. 5) Trade execution - Handling different order filling modes (IOC, FOK, RETURN) and broker-specific requirements. The EA polls Telegram API for button clicks and executes trades seamlessly without manual intervention.',
    technologies: [
      'MQL5',
      'MetaTrader 5',
      'Telegram Bot API',
      'Expert Advisors',
      'Algorithmic Trading',
    ],
    isAIGenerated: true,
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
    image: pokedex,
    title: 'Pokedex',
    subtitle: 'Mobile-first Pokemon Encyclopedia',
    year: '2026',
    language: ['Vue', 'Javascript', 'CSS', 'TypeScript'],
    information:
      'A mobile-only Vue.js application that fetches and displays Pokemon data from the PokeAPI.',
    projectLink: 'https://letundefined.github.io/API-Pokedex/',
    githubLink: 'https://github.com/LetUndefined/API-Pokedex',
    detailedDescription:
      'An interactive Pokedex application built with Vue.js specifically designed for mobile devices. This project demonstrates API integration, component architecture, and state management while providing an engaging mobile-first user experience for Pokemon enthusiasts.',
    features: [
      'Search and filter Pokemon',
      'Real-time API data fetching',
      'Detailed Pokemon information display',
      'Mobile-optimized interface',
      'Modern Vue.js architecture',
      'Type-safe development with TypeScript',
    ],
    challenges:
      'Working with external APIs and managing asynchronous data was a key learning experience. Designing a mobile-only interface required careful consideration of touch interactions, screen sizes, and performance optimization. Handling API responses, implementing efficient data fetching strategies, and creating a smooth user experience while data loads required careful planning and implementation.',
    technologies: [
      'Vue 3',
      'JavaScript',
      'CSS',
      'TypeScript',
      'PokeAPI',
      'Vite',
      'Mobile-First Design',
    ],
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
    features: ['Classic Blackjack gameplay', 'Betting system', 'Dealer logic', 'Score tracking'],
    challenges:
      'As my first major project, learning to structure code properly and implement game logic was challenging. Managing the game state, implementing the dealer and ensuring fair gameplay required careful planning and debugging.',
    technologies: ['JavaScript', 'HTML5', 'CSS'],
  },
]);

export { workArray };
