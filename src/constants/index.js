import {
  mobile,
  backend,
  creator,
  web,
  CodeChef,
  javascript,
  firebase,
  github,
  Cp,
  html,
  css,
  gfg,
  reactjs,
  java,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  snake,
  water,
  face,
  threejs,
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
    title: "Competitive Programming",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Code Review and Optimization",
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
    name: "C++",
    icon: Cp,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Java",
    icon: java,
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
    name: "Firebase",
    icon: firebase,
  },
];

const experiences = [
  {
    title: "GFG - Coding Profile",
    company_name: "GeeksforGeeks",
    icon: gfg,
    iconBg: "#f1f3f4",
    date: "Jan 2022 - Present",
    points: [
      "GFG username - vishutyagi7",
      "GFG Global Rank - 201",
      "GFG rating   - 3473",
      "Number of problems solved - 1129",
      "Current POTD Streak - 176",
      "Proficiency in C++ programming language.",
      "Expert in a comprehensive range of data structures and algorithms.",
    ],
  },
  {
    title: "CodeChef - Coding Profile",
    company_name: "CodeChef",
    icon: CodeChef,
    iconBg: "#fbfbfb",
    date: "May 2022 - Present",
    points: [
      "CodeChef username - vishu_tyagi",
      "CodeChef Stars - 4 Star Coder",
      "CodeChef rating   - 1931",
      "CodeChef Global Rank - 2514",
      "CodeChef Country Rank - 1768",
      "Contest participation - 5",
      "Secured Global Rank 35 in February Cook-Off 2023 Division 4 (Rated).",
      "Secured Global Rank 150 in Starters 80 Division 2 (Rated).",
      "Proficiency in C++ programming language.",
    ],
  },
  {
    title: "Open Source Contribution",
    company_name: "Github",
    icon: github,
    iconBg: "#383E56",
    date: "Nov 2021 - Present",
    points: [
      "Contributed 1200+ solutions to DSA problems in the DSA-Practice-GFG repository.",
      "Contributed code for three JavaScript games in the 'JavaScript Game's' repository, enriching the collection of interactive entertainment.",
      "Enhanced project accessibility by contributing diverse pre-built login pages to provide a versatile collection of ready-to-use solutions for seamless integration into your projects.",
      "Contributed a free Face Recognition API for easy and secure login and signup features.",
      "Total Commits - 2144"
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Impressed with the seamless solutions delivered! The team's expertise in software development is unmatched.",
    name: "Aisha Gupta",
    designation: "Senior Software Engineer",
    company: "Tech Innovators Pvt. Ltd",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Exceptional work! The team's dedication to quality and innovation is evident in every project.",
    name: "Raj Sharma",
    designation: "Product Manager",
    company: "Global Solutions Inc",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Highly recommend their services! The team's commitment to delivering results and exceeding expectations is truly commendable",
    name: "Priya Verma",
    designation: "Marketing Director",
    company: "Digital Dynamics Solutions",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Snake Game",
    description:
      "Enjoy the classic Snake Game brought to life with HTML, CSS, and JavaScript. Navigate the snake, grab treats, and avoid collisions. Check out the code and play the demo for some nostalgic fun!.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: snake,
    source_code_link: "https://github.com/jkvishu/JavaScript-Games/tree/main/Snake-Game",
  },
  {
    name: "WaterPoll-Website",
    description:
      "React.js website offering real-time water index and quality insights for your region. Find local RO services recommendations effortlessly. Simple, informative, and efficient.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: water,
    source_code_link: "https://github.com/jkvishu/WaterPoll-Website",
  },
  {
    name: "Face-Recognition-Model",
    description:
      "Experience cutting-edge Face Recognition with this UI-powered model. Developed with Mongoose, Express.js, and Face-api.js, using CSS, JavaScript, and EJS for a comprehensive and user-friendly solution.",
    tags: [
      {
        name: "Face-api.js",
        color: "blue-text-gradient",
      },
      {
        name: "Mongoose",
        color: "green-text-gradient",
      },
      {
        name: "EJS",
        color: "pink-text-gradient",
      },
    ],
    image: face,
    source_code_link: "https://github.com/jkvishu/Face-Recognition-Model",
  },
];

export { services, technologies, experiences, testimonials, projects };
