export type Skill = {
  name: string;
  lang: string[];
  frameworks: string[];
};

export type Education = {
  title: string;
  period: string;
};

export type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
};

export type SocialLink = {
  platform: "email" | "linkedin" | "github";
  username: string;
  url: string;
};

export type ProjectType = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
};

export interface PortfolioConfig {
  name: string;
  title: string;
  avatar: string;
  about: string;
  domains: string;
  description: string;
  theme: {
    primary: string;
    secondary: string;
    background: string;
  };
  education: Education[];
  experience: Experience[];
  skills: Skill[];
  socialLinks: SocialLink[];
  projects: ProjectType[];
}

const portfolioConfig: PortfolioConfig = {
  name: "Syed Hussain",
  title: "Software Engineer | AI Enthusiast | Product Owner",
  avatar:
    "https://res.cloudinary.com/dvajcjf2h/image/upload/v1748427402/WhatsApp_Image_2025-05-28_at_12.07.41_1_pnjsu6.webp",
  about: "11+ years in tech - 5+ years in software dev",
  description:
    "I am fullstack developer building scalable solutions & I enjoy automating tasks that will help me be more productive. I am also a big fan of AI & I enjoy building AI solutions.",
  domains:
    "I have worked in domains like eSignatures, Ad Tech, Automotive, FinTech",
  theme: {
    primary: "#7B61FF",
    secondary: "#FF61DC",
    background: "#2A1B6A",
  },
  education: [
    {
      title: "Bachelor of Computer Science",
      period: "2008 - 2012",
    },
    {
      title: "Kick starter coding bootcamp",
      period: "2019",
    },
  ],
  experience: [
    {
      title: "Software Developer Full-Stack",
      company: "Docusign",
      location: "Paris, France",
      period: "2019 - 2025",
    },
    {
      title: "SDET, SQL Dev, Dev Support",
      company: "Wideorbit",
      location: "San Francisco, USA",
      period: "2015 - 2019",
    },
    {
      title: "QA Engineer & Automations",
      company: "HP (Hewlett Packard Enterprise)",
      location: "Detroit, USA",
      period: "2012 - 2015",
    },
    {
      title: "QA Assurance - Internship",
      company: "General Motors",
      location: "Detroit, USA",
      period: "2012 - 2012",
    },
  ],
  skills: [
    {
      name: "Frontend Development",
      lang: ["JavaScript", "TypeScript"],
      frameworks: ["React", "Next.js"],
    },
    {
      name: "Backend Development",
      lang: ["Python", "JavaScript"],
      frameworks: ["Django", "Node"],
    },
    {
      name: "DataBase",
      lang: ["SQL", "TSQL", "KQL"],
      frameworks: ["NoSQL", "SQL"],
    },
    {
      name: "UI/UX",
      lang: ["code", "no-code"],
      frameworks: ["Tailwind CSS", "Shadcn UI", "Miro", "Figma"],
    },
    {
      name: "AI Integrations",
      lang: ["Python"],
      frameworks: ["OpenAI", "LangChain", "RAG", "LLMs"],
    },
    {
      name: "CI/CD",
      lang: ["PowerShell", "Bash"],
      frameworks: ["GitHub", "Jenkins", "Docker", "AWS", "Azure"],
    },
  ],
  socialLinks: [
    {
      platform: "email",
      username: "syekhussain1@outlook.com",
      url: "mailto:syedkhussain1@outlook.com",
    },
    {
      platform: "github",
      username: "syedkhussain1",
      url: "https://github.com/syedkhussain1",
    },
    {
      platform: "linkedin",
      username: "devsh01",
      url: "https://www.linkedin.com/in/devsh01/",
    },
  ],
  projects: [
    {
      title: "CrackIt AI",
      description:
        "A helpful job tracking application where you can track application status & integration with openai that can prep you for the interview.",
      image:
        "https://res.cloudinary.com/dvajcjf2h/image/upload/v1748467700/crackit_ai_lkwsmi.webp",
      tags: [
        "React",
        "Nextjs",
        "Shadcn-ui",
        "Clerk",
        "Prisma",
        "Render",
        "Tailwind CSS",
        "TypeScript",
      ],
      link: "https://crackit-ai-khaki.vercel.app/",
    },
    {
      title: "SpotMeBro",
      description:
        "A Voice AI assistant to get personalized diet and workout plans, designed just for you.",
      image:
        "https://res.cloudinary.com/dvajcjf2h/image/upload/v1750858230/spotMeBro.png",
      tags: [
        "React",
        "Nextjs",
        "OpenAI",
        "VAPI",
        "GEMINI",
        "Shadcn-ui",
        "Clerk",
        "Tailwind CSS",
        "TypeScript",
      ],
      link: "https://spot-me-bro-nine.vercel.app/",
    },
    {
      title: "PolyDoc.io",
      description:
        "Upload PDF in any language, instantly preview it, and then chat with it in your preferred language using AI.",
      image:
        "https://res.cloudinary.com/dvajcjf2h/image/upload/v1748467546/polydoc_chinese_srprgo.webp",
      tags: [
        "React",
        "Nextjs",
        "Shadcn-ui",
        "Clerk",
        "Tailwind CSS",
        "TypeScript",
      ],
      link: "https://polydoc-nextjs.vercel.app/",
    },
    {
      title: "Postify",
      description:
        "Generate your new post for X, TikTok, Instagram, or LinkedIn using the same prompt with Postify AI. Posting made easy.",
      image:
        "https://res.cloudinary.com/dvajcjf2h/image/upload/v1750859051/postify.png",
      tags: [
        "React",
        "Nextjs",
        "ChatGPT",
        "OpenAI",
        "Tailwind CSS",
        "TypeScript",
      ],
      link: "https://postify-nextjs.vercel.app/",
    },
    {
      title: "Tweetify",
      description: "Generate your new post & image using Tweetify AI.",
      image:
        "https://res.cloudinary.com/dvajcjf2h/image/upload/v1750859051/tweetify.png",
      tags: [
        "React",
        "Nextjs",
        "ChatGPT",
        "OpenAI",
        "Tailwind CSS",
        "TypeScript",
      ],
      link: "https://tweetify-nextjs.vercel.app/",
    },
  ],
};

export default portfolioConfig;
