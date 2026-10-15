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
      TECHNOLOGIES.JAVASCRIPT,
      TECHNOLOGIES.REACT,
      TECHNOLOGIES.SCSS,
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
      TECHNOLOGIES.JAVASCRIPT,
      TECHNOLOGIES.SCSS,
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
      TECHNOLOGIES.SCSS,
      TECHNOLOGIES.MDBOOTSTRAP,
      TECHNOLOGIES.JAVASCRIPT,
      TECHNOLOGIES.REACT,
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
      TECHNOLOGIES.SCSS,
      TECHNOLOGIES.MDBOOTSTRAP,
      TECHNOLOGIES.JAVASCRIPT,
      TECHNOLOGIES.VITE
    ],

    codeLink: "https://github.com/catalinbroinas/personal-portfolio",
    siteLink: "https://catalinbroinas.netlify.app/"
  },
];
