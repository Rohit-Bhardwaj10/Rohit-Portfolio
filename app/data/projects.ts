export interface Project {
  title: string;
  description: string;
  tags: string[];
  year: string;
  link: string;
  github: string;
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    title: "Flashmon",
    description: "A lightweight CLI tool for auto-reloading Node.js applications on file changes, similar to Nodemon but with improved performance and cleaner logging.",
    tags: ["TypeScript", "Node.js", "Commander.js", "Chokidar"],
    year: "2024",
    link: "#",
    github: "https://github.com/Rohit-Bhardwaj10/flashmon",
    featured: true
  },
  {
    title: "DePIN Uptime Monitor",
    description: "A monitoring and rewards system for decentralized validators. Tracks uptime, logs performance, and automates payouts via on-chain execution.",
    tags: ["Next.js", "PostgreSQL", "Solana", "Docker"],
    year: "2025",
    link: "#",
    github: "https://github.com/Rohit-Bhardwaj10/stay-up",
    featured: true
  },
  {
    title: "Events Flow",
    description: "A full-stack event management platform for creating, listing, and registering for events with integrated online payments via Razorpay.",
    tags: ["TypeScript", "Next.js", "Razorpay"],
    year: "2025",
    link: "#",
    github: "https://github.com/Rohit-Bhardwaj10/EventFlow",
    featured: true
  },
  {
    title: "DHiree",
    description: "Decentralized freelance platform connecting developers with companies. Ensures transparent job postings and secure payments via Ethereum smart contracts.",
    tags: ["React", "Solidity", "Hardhat", "IPFS"],
    year: "2025",
    link: "#",
    github: "https://github.com/Rohit-Bhardwaj10/D-Hiree",
    featured: true
  },
  {
    title: "Coming Soon 1",
    description: "Placeholder for your upcoming project. It will be displayed cleanly in the archive.",
    tags: ["React", "TypeScript", "Tailwind"],
    year: "2025",
    link: "#",
    github: "#",
    featured: false
  },
  {
    title: "Coming Soon 2",
    description: "Another placeholder for your side project or open-source contribution.",
    tags: ["Node.js", "Express", "MongoDB"],
    year: "2025",
    link: "#",
    github: "#",
    featured: false
  }
];
