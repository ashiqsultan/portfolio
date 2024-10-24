import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiAmazonaws,
  SiGit,
  SiDocker,
  SiTailwindcss,
  SiOpenai,
} from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';
import calculateExperience from '@/lib/calculateYrs';

export const skills = [
  {
    icon: SiReact,
    text: 'React',
  },
  {
    icon: SiAmazonaws,
    text: 'AWS',
  },
  {
    icon: SiDocker,
    text: 'Docker',
  },
  {
    icon: SiNextdotjs,
    text: 'Next',
  },
  {
    icon: SiJavascript,
    text: 'JavaScript',
  },
  {
    icon: SiTypescript,
    text: 'TypeScript',
  },
  {
    icon: SiTailwindcss,
    text: 'Tailwind',
  },
  {
    icon: SiHtml5,
    text: 'HTML',
  },
  {
    icon: SiCss3,
    text: 'CSS',
  },
  {
    icon: SiNodedotjs,
    text: 'Node.js',
  },
  {
    icon: SiExpress,
    text: 'Express.js',
  },
  {
    icon: SiPython,
    text: 'Python',
  },
  {
    icon: BiLogoPostgresql,
    text: 'Postgres',
  },
  {
    icon: SiMongodb,
    text: 'MongoDB',
  },

  {
    icon: SiOpenai,
    text: 'OpenAi',
  },
  {
    icon: SiGit,
    text: 'Git',
  },
];

export interface Project {
  title: string;
  description: string;
  link: string;
  videoId?: string;
}

export const projects: Project[] = [
  {
    title: 'RAG LLM Bot',
    description:
      'This project demonstrates the use of Retrieval-Augmented Generation (RAG) with a large language model (LLM). OpenAI APIs are used for LLM and Embedding while MongoDB for Vector Search',
    link: 'https://github.com/ashiqsultan/llm-bot',
    videoId: 'nSLI-dQPkOQ',
  },
  {
    title: 'WhatsApp AI Bot (Health Lingo) 2024',
    description:
      'Won 1st in an AI Hackathon. Built an AI WhatsApp bot using Twilio API and OpenAI GPT4o which helps communication between doctors and patients',
    link: 'https://github.com/ashiqsultan/twilio-whatsapp-ai-bot',
    videoId: '5pdg0Vm-4X8',
  },
  {
    title: 'Real-time Location tracking with SocketIO and MongoDB',
    description:
      'A local delivery service app with real-time location tracking built using MongoDB Change Streams and Socket IO',
    link: 'https://www.mongodb.com/developer/languages/javascript/real-time-tracking-change-streams-socketio/',
    videoId: 'Ydi60M4MrHc',
  },
];

export interface WorkExperience {
  company: string;
  logo: string;
  position: string;
  description: string;
  years: string;
}

export const workExperiences: WorkExperience[] = [
  {
    company: 'Ganit Inc',
    logo: '/work/freelance.jpg',
    position: 'FullStack Developer',
    description:
      'Built solutions on top of ML models. Worked on GeoJSON with MongoDB and Node.js.',
    years: 'Aug, 2020 - Sept, 2021',
  },
  {
    company: 'EPAM Systems',
    logo: '/work/freelance.jpg',
    position: 'Software Engineer',
    description:
      'Developed on multiple fullstack application, technologies like React, Node.js, MongoDB and Docker. Worked on AWS services like EC2, S3, RDS, and Lambda.',
    years: 'Oct, 2021 - Mar, 2024',
  },
  {
    company: 'AstraZeneca',
    logo: '/work/freelance.jpg',
    position: 'Senior Consultant',
    description:
      'Working on developing fullstack apps on top of Knowledge Graphs using React, Python and Neo4j',
    years: 'Ongoing',
  },
];

export const aboutYou = {
  name: 'Ashiq',
  description: '',
  yearsOfExperience: `${calculateExperience(2017)} yrs`,
  location: 'Chennai, TamilNadu',
  email: 'ashiqsultan@gmail.com',
};

export const logoText = '';

export const websiteMetadata = {
  title: 'Ashiq Sultan | Fullstack Developer',
  description:
    "Hey, Ashiq Sultan here. I'm a Fullstack and AI Developer. Welcome to my portfolio page.",
};

export const marketingHeadlines = {
  mainHeadline: 'Ashiq Sultan',
  subHeadline: 'Full Stack Developer',
};
