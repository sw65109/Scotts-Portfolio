import type { AboutContent } from '@/types/profile';

export const SKILLS = [
  { label: "HTML", icon: "https://cdn.iconscout.com/icon/free/png-512/free-html-2752158-2284975.png?f=webp&w=256" },
  { label: "CSS", icon: "https://cdn.iconscout.com/icon/free/png-512/free-css-131-722685.png?f=webp&w=256" },
  { label: "JavaScript", icon: "https://cdn.iconscout.com/icon/free/png-512/free-javascript-24-1174950.png?f=webp&w=256" },
  { label: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
  { label: "React", icon: "https://cdn.iconscout.com/icon/free/png-512/free-react-3-1175109.png?f=webp&w=256" },
  { label: 'Tailwind CSS', icon: 'https://cdn.iconscout.com/icon/free/png-512/free-tailwind-css-5285308-4406745.png?f=webp&w=256' },
  { label: 'Firebase', icon: 'https://cdn.iconscout.com/icon/free/png-512/free-firebase-3521427-2944871.png?f=webp&w=256' },
  { label: 'Vite', icon: 'https://cdn.simpleicons.org/vite' },
];

export const ABOUT_CONTENT: AboutContent ={
    title: "Here's a bit about me.",
    subtitle: "Junior Frontend Software Engineer",
    body: `I'm a 43 year old Junior Frontend Software Engineer. I'm a hand's-on builder with experience in construction,
    welding, manufacturing, and retail. From boat houses to powder metal presses to motorcycle swap meets, I've learned to troubleshoot,
    adapt, and deliver quality work.

    Now I'm expanding into web development and UX, bringing practical skills into digital spaces. I value honest communication,
    real-world problem solving, and learning by doing.`,
    contactTitle: "Lets have a chat!",
    contactSubtitle: "I'm currently open to new opportunities.",
    skills: SKILLS
};