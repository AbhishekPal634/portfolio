import user_image from "./user-image.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import right_arrow_white from "./right-arrow-white.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";

export const assets = {
  user_image,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  right_arrow_white,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
};

export const workData = [
  {
    title: "Mess Menu",
    description: "NMIMS Mess Menu Web App",
    bgImage: "/messmenu.png",
    githubUrl: "https://github.com/AbhishekPal634/mess-menu",
    liveUrl: "https://nmims-mess-menu.vercel.app",
  },
  {
    title: "ResumeAI",
    description: "AI Resume Builder Chatbot",
    bgImage: "/resumeai.png",
    githubUrl: "https://github.com/AbhishekPal634/resumeai",
    liveUrl: null,
  },
  {
    title: "Socion",
    description: "Social Media Analytics Chatbot",
    bgImage: "/socion.png",
    githubUrl: "https://github.com/AbhishekPal634/socion",
    liveUrl: "https://socion-client.vercel.app",
  },
];

export const infoList = [
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Experience",
    description:
      "2+ years building full-stack applications & Technical Intern at HAL, Nashik",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "Final year CS student at SVKM's NMIMS MPSTME",
  },
];

export const skillsData = [
  {
    category: "Languages",
    skills: ["C++", "Java", "Python", "HTML", "CSS", "JavaScript", "Dart"],
  },
  {
    category: "Libraries/Frameworks",
    skills: [
      "React",
      "AngularJS",
      "Node.js",
      "Express.js",
      "Bootstrap",
      "Tailwind CSS",
      "Flutter",
    ],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    category: "Tools/Platforms",
    skills: ["Git", "GitHub", "Figma", "Postman"],
  },
];

export const competitiveProgrammingData = [
  {
    platform: "CodeChef",
    rating: "3-Star",
    username: "abhishekpa63",
    profileUrl: "https://www.codechef.com/users/abhishekpa63",
    description: "Highest Rating: 1643",
    logo: "/codechef-logo.svg",
  },
  {
    platform: "Codeforces",
    rating: "Newbie",
    username: "AbhiRockz",
    profileUrl: "https://codeforces.com/profile/abhirockz",
    description: "Highest Rating: 1115",
    logo: "/codeforces-logo.svg",
  },
  {
    platform: "LeetCode",
    rating: null,
    username: "abhishekpal1413",
    profileUrl: "https://leetcode.com/u/abhishekpal1413",
    description: "100+ problems solved",
    logo: "/leetcode-logo.svg",
  },
];
