import blinkerMockupUrl from '@/assets/blinker mockup.png'
import netflixclone from '@/assets/netflixclone.png'
import spotifyclone from '@/assets/spotify-clone.png'
'

import type { Project } from "@/types/projects";
export const projects: Project[] = [
  {
    id: 1,
    title: "Personal E-Portfolio Website",
    stack: "HTML, CSS, TypeScript, Vite, React",
    description:
      "A responsive, accessible portfolio site that showcases featured projects, resume, and contact links. Includes interactive features like dark mode, smooth scrolling, and downloadable assets.",
    repo: "https://github.com/sw65109/Scotts-Portfolio",
    live: "https://scotts-portfolio-nine.vercel.app/",
    image: blinkerMockupUrl,
  },
  {
    id: 2,
    title: "Netflix Clone (Inspired by GreatStack)",
    stack: "Vite, React, JavaScript, Firebase, Tailwind CSS",
    description:
      "Adapted from GreatStack's 2024 tutorial. Expanded with modular components, accessibility upgrades, and cert-grade logging. Features Firebase auth, responsive UI, and dynamic content rendering.",
    repo: "https://github.com/sw65109/netflixclone.git",
    live: "https://netflixclone-ytgj-mfs034gyx-sw65109s-projects.vercel.app/",
    image: netflixclone,
  },
  {
    id: 3,
    title: "spotify-fullstack (Created following GreatStack tutorial)",
    stack: "Vite, Tailwind, JavaScript",
    description:
      "Adapted from GreatStack's 2024 tutorial. Expanded with user login and admin login.",
    repo: "https://github.com/sw65109/spotify-fullstack.git",
    live: "https://spotify-fullstack-yrff-beygbfk9l-sw65109s-projects.vercel.app/",
    demos: [{ label: "Admin panel", url: "https://spotify-fullstack-delta.vercel.app/" }],
    image: spotifyclone,
  },
];
