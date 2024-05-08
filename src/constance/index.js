import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  expresstrans,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  nextjs,
  express,
  postgress,
  mysql,
  golag,
  angular,
  django,
  carrent,
  jobit,
  tripguide,
  threejs,
  githubtr,
  mysqltra,
  postgresqltra,
  alphachat,
  orders,
  cars,
  web2,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "express.JS",
    icon: expresstrans,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "github",
    icon: githubtr,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "MySQL",
    icon: mysqltra,
  },
  {
    name: "PostgreSQL",
    icon: postgresqltra,
  },
];

const experiences = [
  {
    title: "Typescript",

    icon: typescript,
    iconBg: "#383E56",

    points:
      "Learning TypeScript enables me to write more reliable and scalable JavaScript code with better tooling support and increased readability.",
  },
  {
    title: "NextJs",

    icon: nextjs,
    iconBg: "#FFFFFF",

    points:
      "I'm keen to explore Next.js because of its efficient server-side rendering capabilities and streamlined development experience.",
  },
  {
    title: "Django",

    icon: django,
    iconBg: "#FFFFFF",

    points:
      "I'm interested in diving into Django due to its robust framework for building web applications, offering features like built-in authentication, ORM, and scalability.",
  },
  {
    title: "Angular",

    icon: angular,
    iconBg: "#FFFFFF",

    points:
      "I'm drawn to Angular for its comprehensive framework that provides a structured approach to building dynamic web applications, offering features like two-way data binding, dependency injection, and a powerful CLI for streamlined development.",
  },
  {
    title: "Golang",

    icon: golag,
    iconBg: "#FFFFFF",

    points:
      "I'm attracted to Golang for its simplicity, efficiency, and built-in concurrency support, which make it ideal for developing scalable, high-performance applications, especially in cloud environments.",
  },
];

const projects = [
  {
    name: "Cybereats",
    description:
      "It's a web-based platform enabling users to explore various restaurants, search for their preferred food items, proceed to checkout using cards, and track their order details. Users can also create their own restaurants, add menus, and manage other related tasks.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Stripe",
        color: "orange-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodeJs",
        color: "pink-text-gradient",
      },
    ],
    image: orders,
    image2: web2,
    source_code_link: "https://github.com/ThomasLaspas",
    source_code_link2: "https://orders-application.netlify.app/",
  },
  {
    name: "Alphachat",
    description:
      "Web application that enables users to search for search for others users make them friend and see how many users watched their profile. also can make a post with some text inside an if the user want can upload an image too",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "JWT",
        color: "orange-text-gradient",
      },
      {
        name: "nodeJs",
        color: "pink-text-gradient",
      },
    ],
    image: alphachat,
    image2: web2,
    source_code_link: "https://github.com/ThomasLaspas",
    source_code_link2: "https://blog-app-alpha.netlify.app/",
  },
  {
    name: "Ferrari store routing project",
    description:
      "This is my first React project, a car store where users can browse through various cars, view detailed information about each car, add them to their wishlist, and compare them side by side.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: cars,
    image2: web2,
    source_code_link: "https://github.com/ThomasLaspas",
    source_code_link2: "https://projectrarri.netlify.app/",
  },
];

export { services, technologies, experiences, projects };
