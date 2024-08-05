const contacts = [
  {
    title: "Email",
    link: "mailto:marion.corvez@gmail.com",
    description: "Send me an email, open webmail",
  },
  {
    title: "GitHub",
    link: "https://github.com/MarionCorvez",
    description: "Visit my GitHub account, new window",
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/marioncorvez/",
    description: "Visit my LinkedIn page, new window",
  },
];

const works = [
  {
    id: "e3ab19975640",
    title: "724 Events",
    description:
      "The events agency 724 events wishes to publish the new version of its showcase website. The mission consists of finalising the development of the application by testing all the functionalities and fixing the numerous bugs from previous version.",
    image: "/works/724-events.webp",
    tags: ["sass", "javascript", "react", "jest"],
    code: "https://github.com/MarionCorvez/724-events",
    demo: "https://724-events-theta.vercel.app/",
  },
  {
    id: "d38a3b8e67c6",
    title: "Argent Bank",
    description:
      "Argent Bank is a new online bank built with Node.js and MongoDB. The need is to create the front-end of the application with a focus on authentication management and routes protection, and to write API documentation for transactions.",
    image: "/works/argent-bank.webp",
    tags: ["sass", "javascript", "react", "redux"],
    code: "https://github.com/MarionCorvez/argent-bank",
  },
  {
    id: "e14d1943f464",
    title: "Kasa",
    description:
      "Kasa, a peer-to-peer apartment rental company, wants to create a complete web application with React. Each page must contain a slider and information about the accommodation such as location, host name and picture, rating, amenities, etc.",
    image: "/works/kasa.webp",
    tags: ["sass", "javascript", "react"],
    code: "https://github.com/MarionCorvez/kasa",
    demo: "https://kasa-eosin.vercel.app/",
  },
  {
    id: "5b619fe57baa",
    title: "Sophie Bluel",
    description:
      "Built with Node.js, this project consists in creating the portfolio of Sophie Bluel, an interior designer, and presenting her projects filtered by categories. With an admin access, the architect must be able to add, modify or delete her work.",
    image: "/works/sophie-bluel.webp",
    tags: ["sass", "javascript"],
    code: "https://github.com/MarionCorvez/sophie-bluel",
  },
];

const skills = [
  "HTML5",
  "CSS Modules",
  "Sass",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Vite",
  "Next.js",
  "WordPress",
  "Squarespace",
  "Figma",
  "Adobe XD",
  "Notion",
  "Slack",
  "Git",
  "GitHub",
  "Swagger",
];

const experience = {
  studies: [
    "2024 (WIP): RNCP level 5 in Front-end Development",
    "2007: Master in Medias & Communication",
    "2006: Master in Literature",
  ],
  positions: [
    "2022 - now: Design & Development of web applications",
    "2017 - 2021: New Media Teacher",
    "2007 - 2016: Digital Product Manager",
  ],
  clients:
    "Arianespace, Danone, Dassault Systèmes, La Mutualité Française, Le Conservateur, Le Monde, LVMH, PSA Group, Splendia, SFR, SNCF, Ubisoft, Viparis",
};

module.exports = {
  contacts,
  works,
  skills,
  experience,
};
