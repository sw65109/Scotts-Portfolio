import blinkerMockupUrl from '../assets/blinker mockup.png'
import netflixMockupUrl from '../assets/netflix-clone-mockup.png'

import type { Project } from "../types/projects";
export const projects: Project[] = [
  {
    id: 1,
    title: "Personal E-Portfolio Website",
    stack: "HTML, CSS, TypeScript, Vite, React",
    description:
      "A responsive, accessible portfolio site that showcases featured projects,resume, and contact links. Includes interactive features like darkmode, smooth scrolling, and downloadable assets.",
    repo: "https://github.com/sw65109",
    live: "#",
    image: blinkerMockupUrl,
  },
  {
    id: 2,
    title: "Netflix Clone (Inspired by GreatStack)",
    stack: "Vite, React, JavaScript, Firebase, Tailwind CSS",
    description:
      "Adapted from GreatStack's 2024 tutorial. Expanded with modular components, accessibility upgrades, and cert-grade logging. Features FireBase auth, responsive UI, and dynamic content rendering.",
    repo: "https://github.com/sw65109/netflix-clone",
    live: "https://netflix-clone-taupe-two-69.vercel.app",
    image: netflixMockupUrl,
  },
  {
    id: 3,
    title: "UX Experiment",
    stack: "Vue, Tailwind, Netlify",
    description:
      "Rapid prototyping sandbox exploring form validation, deploy pipelines, and user-testing workflows.",
    repo: "https://github.com/sw65109",
    live: "#",
    image: blinkerMockupUrl,
  },
];
