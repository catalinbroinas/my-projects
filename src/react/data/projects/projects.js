import { projectImages } from "./projectImages";

export const projects = [
  // World Cup 2026
  {
    id: "world-cup-2026",
    name: "World Cup 2026",
    imageUrl: projectImages.worldCup2026,

    period: {
      start: 2026,
      end: 2026
    },

    status: "completed",

    description:
      "A responsive multi-page website exploring the 2026 FIFA World Cup, featuring participating teams, stadiums, group standings and the knockout stage.",

    technologies: ["SCSS", "MDBootstrap", "JavaScript", "React", "Vite"],

    codeLink: "https://github.com/catalinbroinas/world-cup-2026",
    siteLink: "https://catalinbroinas-world-cup-2026.netlify.app/"
  },

  // Essentia UI
  {
    id: "essentia-ui",
    name: "Essentia UI",
    imageUrl: projectImages.essentiaUi,

    period: {
      start: 2025,
      end: 2025
    },

    status: "completed",

    description:
      "A modern, elegant landing page template for a perfume brand, with a focus on accessibility, clean design, and user experience.",

    technologies: ["SCSS", "MDBootstrap", "JavaScript", "Vite"],

    codeLink: "https://github.com/catalinbroinas/essentia-ui",
    siteLink: "https://essentia-ui.netlify.app/"
  },

  // Pure Natural
  {
    id: "pure-natural",
    name: "Pure Natural",
    imageUrl: projectImages.pureNatural,

    period: {
      start: 2025,
      end: null
    },

    status: "in-progress",

    description:
      "A presentation website for a real-world natural products brand, designed to showcase its products and brand identity.",

    technologies: ["SCSS", "MDBootstrap", "JavaScript", "React", "Vite"],

    codeLink: "https://github.com/catalinbroinas/pure-natural",
    siteLink: "https://pure-natural-online.netlify.app/"
  },

  // Personal Portfolio
  {
    id: "personal-portfolio",
    name: "Personal Portfolio",
    imageUrl: projectImages.personalPortfolio,

    period: {
      start: 2024,
      end: null
    },

    status: "in-progress",

    description:
      "My personal web development portfolio, showcasing selected projects, technical skills, and professional experience across frontend and backend development.",

    technologies: ["SCSS", "MDBootstrap", "JavaScript", "Vite"],

    codeLink: "https://github.com/catalinbroinas/personal-portfolio",
    siteLink: "https://catalinbroinas.netlify.app/"
  },
];
