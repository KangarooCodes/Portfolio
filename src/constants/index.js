import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  docker,
  postgresql,
  fizbo,
  cafe,
  bankly,
  dj,
  sorting,
  coverhunt,
  kelhel,
  microverse,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Development",
    icon: frontend,
  },
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "Database Management",
    icon: ux,
  },
  {
    title: "Software Prototyping",
    icon: prototyping,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Warehouse Manager",
    company_name: "Filtrex Corporation",
    icon: coverhunt,
    iconBg: "#333333",
    date: "2010 - 2018",
  },
  {
    title: "Technical Support and Sales Associate",
    company_name: "M and M Controls",
    icon: microverse,
    iconBg: "#333333",
    date: "2018 - 2023",
  },
  {
    title: "Fullstack Software Engineer",
    company_name: "University of Maryland",
    icon: kelhel,
    iconBg: "#333333",
    date: "Nov 2022 - Sept 2023",
  },
];

const projects = [
  {
    id: "project-1",
    name: "ReactCafe",
    description:
      "React app for a small cafe that offers food and beverages. Users are able to add their own menu items.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: cafe,
    repo: "https://github.com/KangarooCodes/ReactCafe",
    demo: "https://github.com/KangarooCodes/ReactCafe",
  },
  {
    id: "project-2",
    name: "Fizbo",
    description:
      "React app to find local homes for sale. Implimentation of 3rd party AP is used. Account creation and user authorization is utilized.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "postgreSQL",
        color: "purple-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
    ],
    image: fizbo,
    repo: "https://github.com/KangarooCodes/RealEstateApp",
    demo: "https://github.com/KangarooCodes/RealEstateApp",
  },
  {
    id: "project-3",
    name: "Bankly",
    description:
      "I was given a broken Node.js application and needed to use Express.js to complete the app and squash all bugs. Tests and detailed documentation was recorded for stability and readability.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: bankly,
    repo: "https://github.com/KangarooCodes/bankly",
    demo: "https://github.com/KangarooCodes/bankly",
  },
  {
    id: "project-4",
    name: "dj",
    description: `Used Python (Flask, Jinja2 and WTForms) to create an application where users can create their own playlists (stored with SQLAlchemy).`,
    tags: [
      {
        name: "Flask",
        color: "blue-text-gradient",
      },
      {
        name: "SQLAlchemy",
        color: "green-text-gradient",
      },
      {
        name: "WTForms",
        color: "pink-text-gradient",
      },
    ],
    image: dj,
    repo: "https://github.com/KangarooCodes/SongPlaylists",
    demo: "https://github.com/KangarooCodes/SongPlaylists",
  },
  {
    id: "project-5",
    name: "DSA",
    description:
      "Some of my practice on DSA, such as, Bubble Sort, Hash Tables and BigO.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: sorting,
    repo: "https://github.com/KangarooCodes/SortingAlgorithms",
    demo: "https://github.com/KangarooCodes/SortingAlgorithms",
  },
];

export { services, technologies, experiences, projects };
