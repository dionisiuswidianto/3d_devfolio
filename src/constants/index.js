import {
  koperasimobile,
  inventoryweb,
  salontablet,
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  figma,
  umn,
  jala,
  freelance,
  pasas,
  nodejs,
  threejs,
  sql,
  php,
  andreas,
  heri,
  iqi,
} from '../assets';

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experiences",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "UI / UX Designer",
    icon: backend,
  },
  {
    title: "Quality Assurance Tester",
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Bachelor of Information System",
    company_name: "Multimedia Nusantara University",
    icon: umn,
    iconBg: "#E6DEDD",
    date: "August 2018 - June 2023",
    points: [
      "Bachelor of Information Systems specializing in ERP using SAP from Multimedia Nusantara University 2023.",
      "Head of the campus volleyball student activity unit from 2019 until 2021.",
      "Coordinator of the annual campus event (Multimedia Nusantara Festival) in 2020.",
      "Master of ceremony for the campus admission event in 2019.",
      "Participated in mentoring activities, character building, and career preparation training.",
      "Attended various campus seminar events throughout the years.",
    ],
  },
  {
    title: "Certified International Specialist in Data Visualization (Foundation Stage)",
    company_name: "PASAS Institue",
    icon: pasas,
    iconBg: "#E6DEDD",
    date: "February 2021",
    points: [
      "Certified International Specialist in Data Visualization (Foundation Stage).",
      "Recognition of achievement in education and professional development as established by PASAS INSTITUTE, Singapore.",
      "Implementing data visualization using Tableau.",
      "Certification number: CISDV 04662.",
    ],
  },
  {
    title: "Fullstack Developer Internship",
    company_name: "PT Jala Informatica",
    icon: jala,
    iconBg: "#E6DEDD",
    date: "January 2022 - March 2022",
    points: [
      "Collaborating with departments and clients to identify end-user requirements and specifications.",
      "Implementing responsive design using Figma and ensuring cross-browser compatibility.",
      "Developing and maintaining web applications using ColdFusion, and other related technologies.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Maintaining servers using SQL Server."

    ],
  },
  {
    title: "UI / UX Designer",
    company_name: "PT Jala Informatica",
    icon: jala,
    iconBg: "#E6DEDD",
    date: "March 2022 - March 2023",
    points: [
      "Collaborating with clients to gather user requirements and create design ideas using storyboards, process flows, and sitemaps.",
      "Designing and developing UI elements, mockups, and prototypes, ensuring user-friendly and visually appealing interfaces using Figma.",
      "Identifying and resolving UX issues, incorporating user feedback, and adhering to style standards for fonts, colors, and images.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "UI / UX Design Mentor",
    company_name: "Freelance",
    icon: freelance,
    iconBg: "#E6DEDD",
    date: "March 2023 - Present",
    points: [
      "Providing mentorship, direction, and sharing your knowledge by interacting with students on a weekly basis.",
      "Lead learning activities and facilitate the learning experience.",
      "Teach and help students learn to design using Figma by providing real-world study cases.",
      "Participating in design reviews and providing constructive feedback to students.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Dio has done a good job, his knowledge of using Figma is at a professional level.",
    name: "Heri Hartawan",
    designation: "CEO",
    company: "PT Jala Informatica",
    image: heri,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients success like Dio does.",
    name: "Tan Andreas",
    designation: "Co-Founder",
    company: "UMKM Moroseneng",
    image: andreas,
  },
  {
    testimonial:
      "We had many projects together, and Dio always did his part outstandingly.",
    name: "Rizqi Nugraha",
    designation: "System Analyst & Design",
    company: "PT Lawson Indonesia",
    image: iqi,
  },
];

const projects = [
  
  {
    name: "Savings and Loans Mobile App",
    description:
      "React-based program that provides easy access for members, allowing them to access information and conduct transactions more easily and quickly.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "sql",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: koperasimobile,
    source_code_link: "https://www.figma.com/proto/4xtcvJdga05ufwkVlFWsVF/Mockup-Koperasi-Simpan-%2F-Pinjam?page-id=251%3A770&type=design&node-id=254-1199&viewport=0%2C216%2C1&scaling=scale-down&starting-point-node-id=254%3A1199",
  },
  {
    name: "Beauty Salon Dashboard App",
    description:
      "A Comperhensive react-based program for administration and management of information systems intended for beauty salon operations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "sql",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: salontablet,
    source_code_link: "https://www.figma.com/proto/dbJ5q7r2Fwwf4TeF1VImNv/%5BTAB%5D-Salon-Mock-Up?page-id=150%3A5926&type=design&node-id=163-15590&viewport=169%2C442%2C0.12&scaling=scale-down&starting-point-node-id=163%3A15590",
  },
  {
    name: "Inventory Procurement App",
    description:
      "React-based customizable inventory application using ERP procurement module that increases user productivity and minize human errors.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "sql",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: inventoryweb,
    source_code_link: "https://www.figma.com/proto/4xtcvJdga05ufwkVlFWsVF/Mockup-Koperasi-Simpan-%2F-Pinjam?page-id=705%3A24030&type=design&node-id=708-28990&viewport=330%2C52%2C0.03&scaling=contain&starting-point-node-id=708%3A28850",
  },
];

export { services, technologies, experiences, testimonials, projects };
