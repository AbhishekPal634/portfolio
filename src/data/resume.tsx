import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Abhishek Pal",
  initials: "AP",
  url: "https://abhishekpal.me",
  location: "Nashik, India",
  locationLink: "https://www.google.com/maps/place/Nashik",
  description:
    "I enjoy building tools that simplify complexity, from the developer's terminal to the user's screen.",
  summary:
    "I love building things that actually solve problems. I've worked on a bunch of projects like [AI-driven app builders](https://locode.tech) and [full-stack web apps](#projects), plus got some solid experience through [internships](#work) and personal projects. I'm always down to work on stuff that makes a real impact and love learning new things along the way.",

  avatarUrl: "/me.png",
  skills: [
    "C++",
    "Java",
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "AngularJS",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
    "Bootstrap",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "abhishekpal1413@gmail.com",
    tel: "+91 9405720697",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/abhishekpal634",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/abhishekpal63", // assumption; update if different
        icon: Icons.linkedin,
        navbar: true,
      },
      LeetCode: {
        name: "LeetCode",
        url: "https://leetcode.com/u/abhishekpal1413", // assumption based on username
        icon: Icons.leetcode,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/iwritebugs",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:abhishekpal1413@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Hindustan Aeronautics Limited (HAL)",
      href: "https://hal-india.co.in/",
      // badges: ["Onsite"],
      location: "Nashik, India",
      title: "Software Engineering Intern",
      logoUrl: "/HAL.png",
      start: "June 2025",
      end: "July 2025",
      description:
        "Worked with the IFS ERP system (Oracle 10g) to support internal enterprise workflows. Contributed to ASP.NET internal web pages used across HAL's LAN. Authored & optimized SQL queries/procedures. Built the React frontend for an internal RAG-based HR chatbot deployed for employee use.",
    },
  ],
  education: [
    {
      school: "NMIMS University",
      href: "https://engineering.nmims.edu/",
      degree: "B.Tech Computer Science",
      logoUrl: "/NMIMS.png",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "LoCode.tech - AI App Builder",
      href: "https://locode.tech",
      dates: "2025",
      active: true,
      description:
        "AI-powered builder that converts natural language prompts into full Next.js apps. Uses Inngest + OpenAI to orchestrate an agent that writes, updates, and previews code inside E2B sandboxes with project history and live preview.",
      technologies: [
        "Next.js",
        "Inngest",
        "tRPC",
        "Prisma",
        "Neon",
        "Docker",
        "E2B",
        "TailwindCSS",
        "OpenAI API",
      ],
      links: [
        {
          type: "Website",
          href: "https://locode.tech",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/abhishekpal634/locode",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/locode.png",
      video: "",
    },
    {
      title: "StorySip - Book Review Platform",
      href: "https://storysip-nine.vercel.app", // assumed deployed URL; change if different
      dates: "2025",
      active: true,
      description:
        "Full-stack MERN app for exploring books, reading & writing reviews, and managing reading preferences. Includes auth, RBAC admin panel, search/filter, and responsive UI.",
      technologies: [
        "React",
        "TailwindCSS",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
      ],
      links: [
        {
          type: "Website",
          href: "https://storysip-nine.vercel.app", // assumed
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/AbhishekPal634/storysip",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/storysip.png",
      video: "",
    },
    {
      title: "Mess Menu",
      href: "https://nmims-mess-menu.vercel.app",
      dates: "2024 - 2025",
      active: true,
      description:
        "Role-based mess management system with real-time CRUD, date-based invalidation, and client-side caching. Serves 150k+ monthly visits.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://nmims-mess-menu.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/abhishekpal634/mess-menu",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/messmenu.png",
      video: "",
    },
    {
      title: "ResumeAI - AI Resume Builder",
      href: "",
      dates: "2025",
      active: true,
      description:
        "AI-assisted resume builder with chat-based creation, cover letters, match scoring, PDF export, and Gemini-powered suggestions.",
      technologies: [
        "React",
        "TailwindCSS",
        "Node.js",
        "Express",
        "MongoDB",
        "Gemini API",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://resumeai.vercel.app",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/abhishekpal634/resumeai",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/resumeai.png",
      video: "",
    },
  ],
  hackathons: [],
} as const;
