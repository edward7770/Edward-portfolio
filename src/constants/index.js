import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  intive,
  EIS,
  devurai,
  project1,
  project2,
  project3,
  project4,
  project5
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
    title: "Front-end developer",
    icon: web,
  },
  {
    title: "Back-end developer",
    icon: mobile,
  },
  {
    title: "Website Designer",
    icon: backend,
  },
  {
    title: "Database management",
    icon: creator,
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
    name: "TypeScript",
    icon: typescript,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "SYNOPTEK company",
    icon: devurai,
    iconBg: "#E6DEDD",
    date: "May 2017 - Dec 2018",
    points: [
      "Strong understanding of HTML, CSS, and JavaScript, and have used various frameworks and libraries such as React, Angular, and Vue.js to create responsive and interactive websites",
      "Collaboration with designers and backend developers to integrate front-end components with backend systems, and have also optimized website performance and user experience",
      "Experience in testing and debugging code, as well as staying up-to-date with the latest trends and technologies in frontend development",
      "Strengthening team cooperation skills using github work",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Apptio Denver",
    icon: EIS,
    iconBg: "#E6DEDD",
    date: "Feb 2019 - Mar 2021",
    points: [
      "Precisely translating designs into pixel-perfect, mobile-first, and responsive web applications using HTML5, CSS3, Material UI, and Bootstrap, consistently delivered exceptional visual and user experiences, achieving a remarkable 95% fidelity to the original designs",
      "Improved code quality by 30% by migrating a complex legacy JavaScript codebase to a modern and scalable system using TypeScript, while also implementing automated testing with Jest, Mocha, and Cypress for enhanced reliability and robustness",
      "Collaborated with cross-functional teams to successfully deliver a real estate platform, meeting project goals and client requirements within a tight deadline",
    ],
  },
  {
    title: "Sr. Full Stack Engineer",
    company_name: "Anaplan company",
    icon: intive,
    iconBg: "#E6DEDD",
    date: "April 2021 - Dec 2023",
    points: [
      "Designed and developed front-end and back-end applications including e-commerce platform utilizing React, Node.js, Express.js,and Docker",
      "Contributed to the migration of applications from monolithic to microservice architecture using React,and Angular.js, achieving 50% scalability improvement and enhanced maintainability and performance",
      "Refactored a complex legacy JavaScript codebase to TypeScript, resulting in significant improvements in code maintainability and a 30% reduction in type-related errors",
      "Proficiently engineered server-side logic and RESTful APIs utilizing Node.js, capitalizing on its event-driven architecture and non-blocking I/O model to deliver scalable and high-performance backend services",
      "Developed the interactive and responsive 3D graphics design feature using Three.js,resulting in an 80% increase in user engagement and a highly positive user experience",
      "Conducted comprehensive code reviews, averaging 200 lines of code per review, resulting in a 30% reduction in bugs and overall improvement in code quality",
      "Collaborating with multi-disciplinary teams to deliver exceptional results and communicating effectively with designers, frontend and backend developers, and stakeholders, ensuring alignment and fostering a cohesive working environment"
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Edward proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Edward does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Edward optimized our website, our traffic increased by 40%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/edward7770/Car-Rental",
  },
  {
    name: "Job Portal",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/edward7770/Job-Portal-Platform",
  },
  {
    name: "Filpcart",
    description:
      "Flipkart web application with Admin real time analytics Dashboard & Paytm Payment Gateway using mern-stack with react and nodejs",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/edward7770/filpcart-mern",
  },
  {
    name: "Ecommerce-Headphones",
    description:
      "With Modern design, animations, the ability to add and edit products on the go using a CMS, all advanced cart functionalities, and most importantly the complete integration with Stripe to cover REAL payments.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://github.com/edward7770/Headphones-EShop",
  },
  {
    name: "Analytics Dashboard",
    description:
      "PHP-based analytics dashboard provides analyzing data, enabling decision-making and performance tracking with web-based interface displays metrics and data insights in a visually user-friendly format.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/edward7770/Analytics-dashboard",
  },
  {
    name: "Wcked Shoes",
    description:
      "A fully functional E-Commerce app in React and Flask offers useful features to customers such as product recommendations, creating and reading helpful reviews, managing orders, and much more",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/edward7770/WCKED-Shoes",
  },
];

export { services, technologies, experiences, testimonials, projects };
