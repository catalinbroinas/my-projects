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
      "A responsive multi-page website exploring the 2026 FIFA World Cup, featuring participating teams, stadiums, group standings and the knockout stage.",

    technologies: [
      TECHNOLOGIES.HTML,
      TECHNOLOGIES.SCSS,
      TECHNOLOGIES.JAVASCRIPT,
      TECHNOLOGIES.REACT,
      TECHNOLOGIES.MDBOOTSTRAP,
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
      "My personal web development portfolio, showcasing selected projects, technical skills, and professional experience across frontend and backend development.",

    technologies: [
      TECHNOLOGIES.HTML,
      TECHNOLOGIES.SCSS,
      TECHNOLOGIES.JAVASCRIPT,
      TECHNOLOGIES.MDBOOTSTRAP,
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
];
