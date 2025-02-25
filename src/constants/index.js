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
  helloai,
  carLusion,
  samtik,
  threejs,
  xenure,
  kodesinc,
  softmind,
  switchTech,
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
  {
    title: "WordPress",
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
    title: "React.js Developer",
    company_name: "Xenure.co",
    icon: xenure,
    iconBg: "#E6DEDD",
    date: "April 2021 - May 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Mern Stack Developer",
    company_name: "Softmind Solutions",
    icon: softmind,
    iconBg: "#E6DEDD",
    date: "June 2023 - Jan 2025",
    points: [
      "Developing and maintaining full-stack web applications using MongoDB, Express.js, React.js, and Node.js",
      "Building RESTful APIs and integrating them with frontend applications for seamless user experiences",
      "Implementing authentication and authorization using technologies like JWT, OAuth, or Passport.js.",
      "Ensuring database management and optimization with MongoDB, including indexing and aggregation.",
      "Collaborating with cross-functional teams, including UI/UX designers, product managers, and other developers, to deliver high-quality applications.",
    ],
  },
  {
    title: "Mern Stack Developer",
    company_name: "Kodesinc",
    icon: kodesinc,
    iconBg: "#383E56",
    date: "Feb 2025 ",
    points: [
      "Developing scalable web applications with MERN stack.",
      "Creating and managing backend services using Node.js and Express.",
      "Designing and optimizing MongoDB schemas for performance.",
      "Building dynamic and reusable UI components with React.js.",
      "Integrating third-party APIs and microservices.",
      "Implementing secure authentication and role-based access control.",
      "Optimizing application performance and database queries.",
      "Debugging and resolving issues to ensure smooth functionality.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];
// helloai,carLusion,samtik,

const projects = [
  {
    name: "Switch Tech Supply",
    description:
      "Switch Tech Supply LLC is the global IT hardware reseller and IT product supplier. Having strong connections with renowned IT hardware manufacturers, switch tech supply help thier customers get the best products at incredible prices regardless of their size & nature. Switch Tech Supply work closely with all the valued customers to help them procure the best-in-class IT hardware meeting their needs from well-reputed brands & manufacturers.",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: switchTech,
    // source_code_link: "https://github.com/",
  },
  {
    name: "Hello.ai",
    description:
      "HelloAI revolutionizes resume building with advanced AI technology, transforming your traditional CV into a dynamic, tailored Digital Resume designed to help you land your dream job. By analyzing your experience, skills, and career goals, HelloAI enhances your resume with AI-powered insights, ensuring it aligns perfectly with your desired role. It not only improves your CV but also offers personalized career suggestions, seamless collaboration tools.",
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
        name: "tialwind css",
        color: "pink-text-gradient",
      },
    ],
    image: helloai,
  },
  {
    name: "Car Lusion",
    description:
      "Carluson is an international automotive project operating across Germany, the UK, and Italy, specializing in the buying and selling of cars. With a team of industry experts, Carluson provides a seamless platform for individuals and businesses to purchase high-quality vehicles or sell their cars at competitive prices. Whether you're looking for a new or used car, Carluson ensures a transparent experience with expert guidance at every step",
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
      {
        name: "express",
        color: "blue-text-gradient",
      },
    ],
    image: carLusion,
  },
  {
    name: "Smatik.ch",
    description:
      "Smatik.ch is an international automotive project operating across Germany and Italy, specializing in the buying and selling of cars. With a team of industry experts, Smatik.ch provides a seamless platform for individuals and businesses to purchase high-quality vehicles or sell their cars at competitive prices. Whether you're looking for a new or used car, Carluson ensures a transparent experience with expert guidance at every step",
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
      {
        name: "express",
        color: "blue-text-gradient",
      },
    ],
    image: samtik,
  },
];

export { services, technologies, experiences, testimonials, projects };
