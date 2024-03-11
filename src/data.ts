import amanshop from "@/assets/projects/amanshop.png";
import kbnet from "@/assets/projects/kbnet.png";
import chatIo from "@/assets/projects/chat-io.png";
import confia from "@/assets/projects/confia.png";
import myPortfolio from "@/assets/projects/my-portfolio.png";

import linkedin from "@/assets/socials/linkedin.svg";
import github from "@/assets/socials/github.svg";
import twitter from "@/assets/socials/twitter.svg";

import code213Logo from "@/assets/logos/code213-logo.svg";
import djezzyLogo from "@/assets/logos/djezzy-logo.svg";
import kbnetLogo from "@/assets/logos/kbnet-logo.svg";

import incubeme from "@/assets/community/community1.jpg";
import ctf from "@/assets/community/community2.jpg";
import innobyte from "@/assets/community/community3.jpg";

export const projects = [
  {
    title: "Chat.io",
    link: "https://github.com/Younesfdj/Chat.io",
    thumbnail: chatIo,
  },
  {
    title: "Hotel Management Frontend",
    link: "https://github.com/Younesfdj/confia-intern",
    thumbnail: confia,
  },

  {
    title: "Ecommerce Website",
    link: "https://amanshopdz2.vercel.app",
    thumbnail: amanshop,
  },
  {
    title: "Kbnet Landing Page",
    link: "https://kbnet-website.vercel.app",
    thumbnail: kbnet,
  },
  {
    title: "My Portfolio",
    link: "https://github.com/Younesfdj/Portfolio",
    thumbnail: myPortfolio,
  },
];

export const navitems = [
  {
    link: "https://www.linkedin.com",
    icon: linkedin,
    alt: "linkedin",
  },
  {
    link: "https://www.github.com",
    icon: github,
    alt: "github",
  },
  {
    link: "https://www.twitter.com",
    icon: twitter,
    alt: "twitter",
  },
];

export const workData = [
  {
    logo: code213Logo,
    link: "https://www.code213.tech",
    post: "Full Stack Web Instructor",
    company: "Code 213",
    responsabilites: [
      "Teach students the MERN stack, including MongoDB, Express.js, React, and Node.js. Provide guidance and support to students, helping them navigate challenges and grasp concepts effectively.",
      "Collaborate with colleagues to continuously enhance the curriculum and teaching methodologies.",
    ],
  },
  {
    logo: kbnetLogo,
    link: "https://kbnet-dz.com",
    post: "Full Stack Web Developer",
    company: "Kbnet",
    responsabilites: [
      "Developing and maintaining responsive web applications using React/Next.js, implementing server-side logic and APIs using Express.js to handle data processing and retrieval. Integrating and managing content using Sanity CMS, ensuring a smooth content management workflow",
      "Staying up-to-date with the latest web development trends, tools, and techniques to continuously improve skills and deliver high-quality solutions.",
    ],
  },
  {
    logo: djezzyLogo,
    link: "https://www.djezzy.dz",
    post: "Data Analyst Intern",
    company: "Djezzy",
    responsabilites: [
      "Studied the concepts and principles of data warehousing, including data storage, extraction, transformation, and loading (ETL) processes, explored the fundamentals of business intelligence and its role in decision-making and data visualization.",
      "Prepared documentation and reports summarizing key learnings and insights from the internship experience.",
    ],
  },
];

export const technologies = [
  "React, Next.js",
  "HTML, JS, TS",
  "CSS (Tailwind, Bootstrap)",
  "SQL, MongoDB",
  "Node, Express",
  "Mongoose, Prisma",
  "Docker",
  "GoLang (Learning)",
];

export const communityData = [
  {
    title: "Incubme Hackathon",
    date: "6th Nov, 2023",
    description:
      "Lets see your ideas is the first hackathon dedicated for blind people.",
    img: incubeme,
  },
  {
    title: "InnoByte Hackathon",
    date: "16th Dec, 2023",
    description:
      "Participated in the InnoByte Hackathon organized by ByteCraft club",
    img: innobyte,
  },
  {
    title: "Shellmates miniCTF",
    date: "2nd Dec, 2023",
    description: "Being part of Shellmates's internal CTF competition.",
    img: ctf,
  },
];
export const feedbacks = [
  {
    feedback:
      "I highly recommend Younes for their excellent work during our contract. I have full confidence in his abilities.",
    name: "Akram Kerrouche",
    post: "CEO @KBnet",
  },
  {
    feedback: "radjel",
    name: "abdelhak toutana",
    post: "wlid 16",
  },
  {
    feedback: "lorem ipsum",
    name: "Edgar Allan Poe",
    post: "Writer, Poet, Critic",
  },
];
