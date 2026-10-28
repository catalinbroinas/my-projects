import { projectImages } from "./projectImages";

import {
  PROJECT_STATUS,
  PROJECT_TYPE,
  PROJECT_CATEGORY,
  PROJECT_ARCHITECTURE
} from "../../constants/projects";
import { TECHNOLOGIES } from "../../constants/technologies";

export const projects = [
  // World Cup 2026
  {
    id: "world-cup-2026",
    name: "World Cup 2026",
    imageUrl: projectImages.worldCup2026,

    period: {
      start: "2026-05-23",
      end: "2026-10-02"
    },

    status: PROJECT_STATUS.COMPLETED,
    type: PROJECT_TYPE.PERSONAL,
    category: PROJECT_CATEGORY.TEMPLATE,
    architecture: PROJECT_ARCHITECTURE.MPA,

    description:
      "A responsive multi-page website featuring the 2026 FIFA World Cup teams, stadiums, group standings, and knockout stage.",

    technologies: [
      TECHNOLOGIES.HTML,
      TECHNOLOGIES.SCSS,
      TECHNOLOGIES.JAVASCRIPT,
      TECHNOLOGIES.REACT,
      TECHNOLOGIES.MDBOOTSTRAP,
      TECHNOLOGIES.FONTAWESOME,
      TECHNOLOGIES.VITE
    ],

    codeLink: "https://github.com/catalinbroinas/world-cup-2026",
    siteLink: "https://catalinbroinas-world-cup-2026.netlify.app/"
  },

  // Essentia UI
  {
    id: "essentia-ui",
    name: "Essentia UI",
    imageUrl: projectImages.essentiaUi,

    period: {
      start: "2025-12-03",
      end: "2025-12-20"
    },

    status: PROJECT_STATUS.COMPLETED,
    type: PROJECT_TYPE.PERSONAL,
    category: PROJECT_CATEGORY.TEMPLATE,
    architecture: PROJECT_ARCHITECTURE.SPA,

    description:
      "A modern, elegant landing page template for a perfume brand, with a focus on accessibility, clean design, and user experience.",

    technologies: [
      TECHNOLOGIES.HTML,
      TECHNOLOGIES.SCSS,
      TECHNOLOGIES.JAVASCRIPT,
      TECHNOLOGIES.MDBOOTSTRAP,
      TECHNOLOGIES.FONTAWESOME,
      TECHNOLOGIES.VITE
    ],

    codeLink: "https://github.com/catalinbroinas/essentia-ui",
    siteLink: "https://essentia-ui.netlify.app/"
  },

  // Pure Natural
  {
    id: "pure-natural",
    name: "Pure Natural",
    imageUrl: projectImages.pureNatural,

    period: {
      start: "2025-03-26",
      end: null
    },

    status: PROJECT_STATUS.ACTIVE,
    type: PROJECT_TYPE.CLIENT,
    category: PROJECT_CATEGORY.WEBSITE,
    architecture: PROJECT_ARCHITECTURE.SPA,

    description:
      "A presentation website for a real-world natural products brand, designed to showcase its products and brand identity.",

    technologies: [
      TECHNOLOGIES.HTML,
      TECHNOLOGIES.SCSS,
      TECHNOLOGIES.JAVASCRIPT,
      TECHNOLOGIES.REACT,
      TECHNOLOGIES.MDBOOTSTRAP,
      TECHNOLOGIES.FONTAWESOME,
      TECHNOLOGIES.VITE
    ],

    codeLink: "https://github.com/catalinbroinas/pure-natural",
    siteLink: "https://pure-natural-online.netlify.app/"
  },

  // Personal Portfolio
  {
    id: "personal-portfolio",
    name: "Personal Portfolio",
    imageUrl: projectImages.personalPortfolio,

    period: {
      start: "2024-10-10",
      end: null
    },

    status: PROJECT_STATUS.ACTIVE,
    type: PROJECT_TYPE.PERSONAL,
    category: PROJECT_CATEGORY.WEBSITE,
    architecture: PROJECT_ARCHITECTURE.SPA,

    description:
      "My personal web development portfolio showcasing selected projects, technical skills, and professional experience.",

    technologies: [
      TECHNOLOGIES.HTML,
      TECHNOLOGIES.SCSS,
      TECHNOLOGIES.JAVASCRIPT,
      TECHNOLOGIES.MDBOOTSTRAP,
      TECHNOLOGIES.FONTAWESOME,
      TECHNOLOGIES.VITE
    ],

    codeLink: "https://github.com/catalinbroinas/personal-portfolio",
    siteLink: "https://catalinbroinas.netlify.app/"
  },

  // Memory Card
  {
    id: "memory-card",
    name: "Memory Card",
    imageUrl: projectImages.memoryCard,

    period: {
      start: "2026-04-29",
      end: "2026-10-03"
    },

    status: PROJECT_STATUS.COMPLETED,
    type: PROJECT_TYPE.LEARNING,
    category: PROJECT_CATEGORY.GAME,
    architecture: PROJECT_ARCHITECTURE.SPA,

    description:
      "A React memory card game where you test your memory by selecting each card only once, built as part of The Odin Project.",

    technologies: [
      TECHNOLOGIES.SCSS,
      TECHNOLOGIES.JAVASCRIPT,
      TECHNOLOGIES.REACT,
      TECHNOLOGIES.FONTAWESOME,
      TECHNOLOGIES.VITE
    ],

    codeLink: "https://github.com/catalinbroinas/memory-card",
    siteLink: "https://catalinbroinas-memory-card.netlify.app/"
  },

  // Quiz Game
  {
    id: "quiz-game",
    name: "Quiz Game",
    imageUrl: projectImages.quizGame,

    period: {
      start: "2026-03-04",
      end: "2026-04-06"
    },

    status: PROJECT_STATUS.COMPLETED,
    type: PROJECT_TYPE.LEARNING,
    category: PROJECT_CATEGORY.GAME,
    architecture: PROJECT_ARCHITECTURE.SPA,

    description:
      "An interactive quiz game where you choose the category, difficulty, and number of questions.",

    technologies: [
      TECHNOLOGIES.SCSS,
      TECHNOLOGIES.JAVASCRIPT,
      TECHNOLOGIES.REACT,
      TECHNOLOGIES.VITE
    ],

    codeLink: "https://github.com/catalinbroinas/quiz-game",
    siteLink: "https://catalin-quiz-game.netlify.app/"
  },

  // Guess the Number
  {
    id: "guess-the-number",
    name: "Guess the Number",
    imageUrl: projectImages.guessTheNumber,

    period: {
      start: "2026-02-10",
      end: "2026-04-06"
    },

    status: PROJECT_STATUS.COMPLETED,
    type: PROJECT_TYPE.LEARNING,
    category: PROJECT_CATEGORY.GAME,
    architecture: PROJECT_ARCHITECTURE.SPA,

    description:
      "A number guessing game with single-player and two-player modes and customizable game settings.",

    technologies: [
      TECHNOLOGIES.SCSS,
      TECHNOLOGIES.JAVASCRIPT,
      TECHNOLOGIES.REACT,
      TECHNOLOGIES.VITE
    ],

    codeLink: "https://github.com/catalinbroinas/guess-the-number",
    siteLink: "https://catalin-guess-the-number.netlify.app/"
  },

  // A New Chapter
  {
    id: "a-new-chapter",
    name: "A New Chapter",
    imageUrl: projectImages.aNewChapter,

    period: {
      start: "2026-08-24",
      end: "2026-09-09"
    },

    status: PROJECT_STATUS.COMPLETED,
    type: PROJECT_TYPE.PERSONAL,
    category: PROJECT_CATEGORY.WEBSITE,
    architecture: PROJECT_ARCHITECTURE.STATIC,

    description:
      "A personal vision for the life I want to build, shaped by my values, aspirations, experiences, and lessons learned.",

    technologies: [
      TECHNOLOGIES.HTML,
      TECHNOLOGIES.SCSS,
      TECHNOLOGIES.MDBOOTSTRAP,
      TECHNOLOGIES.FONTAWESOME
    ],

    codeLink: "https://github.com/catalinbroinas/a-new-chapter",
    siteLink: "https://catalinbroinas-a-new-chapter.netlify.app/"
  },

  // Chapter 30
  {
    id: "chapter-30",
    name: "Chapter 30",
    imageUrl: projectImages.chapter30,

    period: {
      start: "2026-08-17",
      end: "2026-09-11"
    },

    status: PROJECT_STATUS.COMPLETED,
    type: PROJECT_TYPE.PERSONAL,
    category: PROJECT_CATEGORY.WEBSITE,
    architecture: PROJECT_ARCHITECTURE.STATIC,

    description:
      "A personal reflection on turning 30, the goals I want to pursue, and the person I want to become.",

    technologies: [
      TECHNOLOGIES.HTML,
      TECHNOLOGIES.SCSS,
      TECHNOLOGIES.MDBOOTSTRAP
    ],

    codeLink: "https://github.com/catalinbroinas/chapter-30",
    siteLink: "https://catalinbroinas-chapter-30.netlify.app/"
  },

  // My Journey in Web Development
  {
    id: "journey-of-a-web-developer",
    name: "My Journey in Web Development",
    imageUrl: projectImages.myJourney,

    period: {
      start: "2024-08-10",
      end: null
    },

    status: PROJECT_STATUS.ACTIVE,
    type: PROJECT_TYPE.PERSONAL,
    category: PROJECT_CATEGORY.WEBSITE,
    architecture: PROJECT_ARCHITECTURE.SPA,

    description:
      "A personal log documenting my web development journey, weekly progress, learning activities, and projects since August 2023.",

    technologies: [
      TECHNOLOGIES.HTML,
      TECHNOLOGIES.SCSS,
      TECHNOLOGIES.JAVASCRIPT,
      TECHNOLOGIES.MDBOOTSTRAP,
      TECHNOLOGIES.JSON
    ],

    codeLink: "https://github.com/catalinbroinas/journey-of-a-web-developer",
    siteLink: "https://catalinbroinas.github.io/journey-of-a-web-developer/"
  },

  // English League Two Grounds
  {
    id: "english-league-two-grounds",
    name: "English League Two Grounds",
    imageUrl: projectImages.englishLeagueTwoGrounds,

    period: {
      start: "2025-05-24",
      end: "2025-08-23"
    },

    status: PROJECT_STATUS.COMPLETED,
    type: PROJECT_TYPE.PERSONAL,
    category: PROJECT_CATEGORY.WEBSITE,
    architecture: PROJECT_ARCHITECTURE.SPA,

    description:
      "A React application featuring all English League Two stadiums, with details about each ground.",

    technologies: [
      TECHNOLOGIES.SCSS,
      TECHNOLOGIES.JAVASCRIPT,
      TECHNOLOGIES.REACT,
      TECHNOLOGIES.MDBOOTSTRAP,
      TECHNOLOGIES.VITE
    ],

    codeLink: "https://github.com/catalinbroinas/league-two-grounds",
    siteLink: "https://catalinbroinas.github.io/league-two-grounds/"
  },

  // CV Generator
  {
    id: "cv-generator",
    name: "CV Generator",
    imageUrl: projectImages.cvGenerator,

    period: {
      start: "2025-04-15",
      end: "2025-05-09"
    },

    status: PROJECT_STATUS.COMPLETED,
    type: PROJECT_TYPE.LEARNING,
    category: PROJECT_CATEGORY.TOOL,
    architecture: PROJECT_ARCHITECTURE.SPA,

    description:
      "A React application for creating and editing a CV using user-provided information.",

    technologies: [
      TECHNOLOGIES.SCSS,
      TECHNOLOGIES.JAVASCRIPT,
      TECHNOLOGIES.REACT,
      TECHNOLOGIES.FONTAWESOME,
      TECHNOLOGIES.VITE
    ],

    codeLink: "https://github.com/catalinbroinas/cv-application",
    siteLink: "https://cv-catalinbroinas.netlify.app/"
  },

  // Football Players
  {
    id: "football-players",
    name: "Football Players",
    imageUrl: projectImages.footballPlayers,

    period: {
      start: "2025-10-21",
      end: "2025-11-18"
    },

    status: PROJECT_STATUS.COMPLETED,
    type: PROJECT_TYPE.LEARNING,
    category: PROJECT_CATEGORY.TOOL,
    architecture: PROJECT_ARCHITECTURE.SPA,

    description:
      "A React application for browsing football players, with filtering, sorting, and name-based search.",

    technologies: [
      TECHNOLOGIES.SCSS,
      TECHNOLOGIES.JAVASCRIPT,
      TECHNOLOGIES.REACT,
      TECHNOLOGIES.FONTAWESOME,
      TECHNOLOGIES.VITE
    ],

    codeLink: "https://github.com/catalinbroinas/football-players",
    siteLink: "https://catalinbroinas.github.io/football-players/"
  },

  // Card Players
  {
    id: "card-players",
    name: "Card Players",
    imageUrl: projectImages.cardPlayers,

    period: {
      start: "2025-11-20",
      end: "2025-12-01"
    },

    status: PROJECT_STATUS.COMPLETED,
    type: PROJECT_TYPE.LEARNING,
    category: PROJECT_CATEGORY.TOOL,
    architecture: PROJECT_ARCHITECTURE.SPA,

    description:
      "A React application for browsing card player data, with customizable display options, sorting, and name-based search.",

    technologies: [
      TECHNOLOGIES.SCSS,
      TECHNOLOGIES.JAVASCRIPT,
      TECHNOLOGIES.REACT,
      TECHNOLOGIES.FONTAWESOME,
      TECHNOLOGIES.VITE
    ],

    codeLink: "https://github.com/catalinbroinas/card-players",
    siteLink: "https://catalinbroinas.github.io/card-players/"
  },

  // Homepage
  {
    id: "homepage",
    name: "Homepage",
    imageUrl: projectImages.homepage,

    period: {
      start: "2025-03-17",
      end: "2025-03-22"
    },

    status: PROJECT_STATUS.COMPLETED,
    type: PROJECT_TYPE.LEARNING,
    category: PROJECT_CATEGORY.WEBSITE,
    architecture: PROJECT_ARCHITECTURE.STATIC,

    description:
      "A personal homepage featuring an introduction, contact information, and six projects completed as part of The Odin Project curriculum.",

    technologies: [
      TECHNOLOGIES.HTML,
      TECHNOLOGIES.CSS,
      TECHNOLOGIES.WEBPACK,
      TECHNOLOGIES.FONTAWESOME
    ],

    codeLink: "https://github.com/catalinbroinas/homepage",
    siteLink: "https://catalinbroinas.github.io/homepage/"
  },

  // E Pace
  {
    id: "e-pace",
    name: "E Pace",
    imageUrl: projectImages.ePace,

    period: {
      start: "2025-01-24",
      end: "2025-02-26"
    },

    status: PROJECT_STATUS.COMPLETED,
    type: PROJECT_TYPE.PERSONAL,
    category: PROJECT_CATEGORY.TEMPLATE,
    architecture: PROJECT_ARCHITECTURE.STATIC,

    description:
      "A modern, structured website presenting E Pace’s social and political program for Romania, adapted from an existing website with an improved user experience.",

    technologies: [
      TECHNOLOGIES.HTML,
      TECHNOLOGIES.SCSS,
      TECHNOLOGIES.JAVASCRIPT,
      TECHNOLOGIES.MDBOOTSTRAP,
      TECHNOLOGIES.VITE
    ],

    codeLink: "https://github.com/catalinbroinas/e-pace",
    siteLink: "https://catalinbroinas.github.io/e-pace/"
  },

  // DA Tech Solutions
  {
    id: "da-tech-solutions",
    name: "DA Tech Solutions",
    imageUrl: projectImages.daTechSolutions,

    period: {
      start: "2025-03-01",
      end: null
    },

    status: PROJECT_STATUS.IN_PROGRESS,
    type: PROJECT_TYPE.PERSONAL,
    category: PROJECT_CATEGORY.TEMPLATE,
    architecture: PROJECT_ARCHITECTURE.STATIC,

    description:
      "A responsive website template for a technology services company, designed for a professional online presence.",

    technologies: [
      TECHNOLOGIES.HTML,
      TECHNOLOGIES.SCSS,
      TECHNOLOGIES.JAVASCRIPT,
      TECHNOLOGIES.MDBOOTSTRAP,
      TECHNOLOGIES.VITE
    ],

    codeLink: "https://github.com/catalinbroinas/da-tech-solutions",
    siteLink: null
  },

  // EURO 2024
  {
    id: "euro-2024",
    name: "EURO 2024",
    imageUrl: projectImages.euro2024,

    period: {
      start: "2024-06-25",
      end: "2024-10-28"
    },

    status: PROJECT_STATUS.COMPLETED,
    type: PROJECT_TYPE.PERSONAL,
    category: PROJECT_CATEGORY.TEMPLATE,
    architecture: PROJECT_ARCHITECTURE.STATIC,

    description:
      "A static website that dynamically loads and displays EURO 2024 data from JSON files, using JavaScript asynchronous functions to process and render the content.",

    technologies: [
      TECHNOLOGIES.HTML,
      TECHNOLOGIES.SCSS,
      TECHNOLOGIES.JAVASCRIPT,
      TECHNOLOGIES.MDBOOTSTRAP
    ],

    codeLink: "https://github.com/catalinbroinas/euro-2024",
    siteLink: "https://catalinbroinas.github.io/euro-2024/index.html"
  },

  // battleship
  {
    id: "battleship",
    name: "Battleship",
    imageUrl: projectImages.battleship,

    period: {
      start: "2024-11-05",
      end: "2024-12-05"
    },

    status: PROJECT_STATUS.COMPLETED,
    type: PROJECT_TYPE.LEARNING,
    category: PROJECT_CATEGORY.GAME,
    architecture: PROJECT_ARCHITECTURE.STATIC,

    description:
      "A JavaScript app featuring unit testing with Jest, built to simulate the classic Battleship game.",

    technologies: [
      TECHNOLOGIES.HTML,
      TECHNOLOGIES.CSS,
      TECHNOLOGIES.JAVASCRIPT,
      TECHNOLOGIES.JEST,
      TECHNOLOGIES.FONTAWESOME,
      TECHNOLOGIES.WEBPACK
    ],

    codeLink: "https://github.com/catalinbroinas/battleship",
    siteLink: "https://catalinbroinas.github.io/battleship/"
  },

  // Tic Tac Toe
  {
    id: "tic-tac-toe",
    name: "Tic Tac Toe",
    imageUrl: projectImages.ticTacToe,

    period: {
      start: "2024-02-23",
      end: "2024-01-29"
    },

    status: PROJECT_STATUS.COMPLETED,
    type: PROJECT_TYPE.LEARNING,
    category: PROJECT_CATEGORY.GAME,
    architecture: PROJECT_ARCHITECTURE.STATIC,

    description:
      "A two-player Tic Tac Toe game with player names, win detection, and replay options.",

    technologies: [
      TECHNOLOGIES.HTML,
      TECHNOLOGIES.CSS,
      TECHNOLOGIES.JAVASCRIPT
    ],

    codeLink: "https://github.com/catalinbroinas/tic-tac-toe",
    siteLink: "https://catalinbroinas.github.io/tic-tac-toe/"
  },

  // Random Numbers
  {
    id: "random-numbers",
    name: "Random Numbers",
    imageUrl: projectImages.randomNumbers,

    period: {
      start: "2023-12-19",
      end: "2024-01-19"
    },

    status: PROJECT_STATUS.COMPLETED,
    type: PROJECT_TYPE.LEARNING,
    category: PROJECT_CATEGORY.GAME,
    architecture: PROJECT_ARCHITECTURE.STATIC,

    description:
      "A customizable random number generator with a modern user interface.",

    technologies: [
      TECHNOLOGIES.HTML,
      TECHNOLOGIES.CSS,
      TECHNOLOGIES.JAVASCRIPT,
      TECHNOLOGIES.MATERIALDESIGNICONS
    ],

    codeLink: "https://github.com/catalinbroinas/random-numbers",
    siteLink: "https://catalinbroinas.github.io/random-numbers/"
  },
];
