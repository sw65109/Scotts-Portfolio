import portfolio from '@/assets/portfolio.png'
import netflixclone from '@/assets/netflixclone.png'
import spotifyclone from '@/assets/spotifyclone.png'


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
    image: portfolio,
  },
  {
    id: 2,
    title: "Netflix Clone (Inspired and created by Ali Codes)",
    stack: "Next.js, React, TypeScript, Firebase, Tailwind CSS",
    description:
      "Adapted from Ali Code's 2022 tutorial and expanded with modular components, accessibility upgrades, and cert‑grade logging. Updated the project to the latest Next.js/React ecosystem, integrated Stripe in test‑mode (sandbox) for subscription handling, and migrated global state from Recoil to Zustand for improved compatibility and maintainability. Features Firebase auth, responsive UI, and dynamic content rendering.",
    repo: "https://github.com/sw65109/netflixclone.git",
    live: "https://netflixclone-ytgj-mfs034gyx-sw65109s-projects.vercel.app/",
    image: netflixclone,
  },
  {
    id: 3,
    title: "spotify-fullstack (Inspired and created following GreatStack tutorial)",
    stack: "Vite, Tailwind, JavaScript, MongoDB, Node.js, Express",
    description:
      "A full‑stack Spotify‑style application with a dedicated backend API, user and admin dashboards, secure authentication, and media upload support. Includes full CRUD for songs, users, and admins, along with role‑based access control and tools to restrict or disable user accounts.",
    repo: "https://github.com/sw65109/spotify-fullstack.git",
    live: "https://spotify-fullstack-yrff-beygbfk9l-sw65109s-projects.vercel.app/",
    demos: [{ label: "Admin panel", url: "https://spotify-fullstack-delta.vercel.app/" }],
    image: spotifyclone,
  },
];
