import { projectImages } from "./projectImages";

export const projects = [
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
      "A responsive multi-page website exploring the 2026 FIFA World Cup, including participating teams, stadiums, group standings and the knockout stage.",

    technologies: ["SCSS", "MDBootstrap", "JavaScript", "React", "Vite"],

    codeLink: "https://github.com/catalinbroinas/world-cup-2026",
    siteLink: "https://catalinbroinas-world-cup-2026.netlify.app/"
  }
];
