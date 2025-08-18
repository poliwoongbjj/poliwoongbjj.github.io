import wankiImg from '../assets/images/wanki-img.png?url';
import outcostImg from '../assets/images/outcost-img.png?url';

export const projects = [
  {
    id: 1,
    title: "Wanki - Spaced Repetition Learning Platform",
    description: "A full-stack application utilizing the SuperMemo 2 algorithm, enhancing learning efficiency and improving vocabulary retention rates by 40% compared to traditional methods. Features intuitive flashcard management and customized online lesson plans.",
    image: wankiImg,
    technologies: ["JavaScript", "React", "MySQL", "Node.js", "SuperMemo 2"],
    githubUrl: "https://github.com/poliwoongbjj/korean-srs-app",
    liveUrl: "https://wankiweb.com",
    featured: true,
    category: "Full Stack"
  },
  {
    id: 2,
    title: "OutCosT - Livestock Disease Cost Calculator",
    description: "A comprehensive web application for calculating costs of 112 different items related to livestock disease outbreaks. Developed in collaboration with UAB's Veterinary Department, transforming an Excel-based tool into a live web application for farmers and veterinarians.",
    image: outcostImg,
    technologies: ["Python", "Shiny", "Data Analysis", "Agricultural Economics"],
    githubUrl: "https://github.com/FAOEuFMD",
    liveUrl: "https://eufmd.shinyapps.io/outcost/",
    featured: true,
    category: "Full Stack"
  },
  {
    id: 3,
    title: "UTOWN - Ethnic Cuisine Delivery Service",
    description: "A comprehensive web application for ethnic cuisine delivery service in Korea. Features separate mobile web application for users and web application for admin management. Target audience includes foreigners and multicultural residents of Korea.",
    image: "/api/placeholder/400/250",
    technologies: ["Java", "Spring Boot", "MySQL", "React", "Mobile Web"],
    githubUrl: "https://github.com/Habsida-Projects",
    liveUrl: null,
    featured: true,
    category: "Full Stack"
  }
];

export const getProjectsByCategory = (category) => {
  if (category === "All") return projects;
  return projects.filter(project => project.category === category);
};

export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};