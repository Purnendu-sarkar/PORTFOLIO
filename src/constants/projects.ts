import Wallet from "@/assets/projects/Digital-Wallet.png";
import SwiftRent from "@/assets/projects/SwiftRent.png";
import MediCamp from "@/assets/projects/MediCamp.png";
import Volunteer from "@/assets/projects/VolunteerConnect.png";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string | { src: string };
  technologies: string[];
  codeLink: string;
  liveLink: string;
}


export const ProjectsData: Project[] = [
  {
    id: 1,
    title: "Digital-Wallet",
    description:
      "This is the frontend part of the Digital-Wallet application, a modern platform for managing digital transactions.",
    image: Wallet,

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Redux",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Axios",
      "Node JS",
      "Firebase",
      "MongoDB",
      "Express",
    ],
    codeLink: "https://github.com/Purnendu-sarkar/Digital-Wallet-System-Frontend",
    liveLink: "https://digital-wallet-system-frontend.vercel.app/",
  },
  {
    id: 2,
    title: "SwiftRent",
    description:
      "This is the frontend part of the SwiftRent Car Rental System, a modern platform for renting vehicles.",
    image: SwiftRent,

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Redux",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Axios",
      "Node JS",
      "Firebase",
      "MongoDB",
      "Express",
    ],
    codeLink: "https://github.com/abdullah107189/SwiftRent",
    liveLink: "https://swiftrent-86449.web.app",
  },
  {
    id: 3,
    title: "Medi Camp Pro",
    description:
      "MediCamp is a web-based platform designed to simplify the management of medical camps.",
    image: MediCamp,
    technologies: [
      "React JS",
      "Node.js",
      "Firebase",
      "JWT",
      "MongoDB",
      "Express",
      "Stripe",
      "Axios",
      "Tailwind CSS",
      "React Hook Form",
    ],
    codeLink: "https://github.com/Purnendu-sarkar/medi-camp-pro",
    liveLink: "https://medi-camp-435d0.web.app",
  },
  {
    id: 4,
    title: "Volunteer Connect",
    description:
      "Volunteer Network is a dynamic platform designed for managing and engaging with volunteers.",
    image: Volunteer,
    technologies: [
      "React JS",
      "JavaScript",
      "Firebase",
      "MongoDB",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
    codeLink: "https://github.com/Purnendu-sarkar/volunteer-connect-clint",
    liveLink: "https://volunteer-connect-d5524.web.app",
  },
];
