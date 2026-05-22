import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Muhammad Khurram",
  title: "Hi all, I'm Muhammad Khurram",
  subTitle: emoji(
    "Backend-focused Python Developer 🚀 with hands-on experience building production-grade Flask applications, RESTful APIs, and MySQL databases. Delivered a full-stack e-commerce platform and LMS from scratch."
  ),
  resumeLink: "/Muhammad_Khurram_CV_updated.pdf",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/Khurram315048",
  linkedin: "https://www.linkedin.com/in/muhammad-khurram-developer/",
  gmail: "saleemkhurram420@gmail.com",
  companywebsite: "https://robustosolutions.com/",
  display: true
};

const skillsSection = {
  title: "What I Do",
  subTitle:
    "Backend-focused Python Developer building scalable web services, secure APIs, and full-stack applications",
  skills: [
    emoji("⚡ Build RESTful APIs and full-stack apps using Flask, FastAPI, and Django"),
    emoji("⚡ Design and optimize MySQL schemas with 14+ table normalized structures"),
    emoji("⚡ Implement secure authentication systems with bcrypt, session management & brute-force protection"),
    emoji("⚡ Integrate AI models via Python APIs for NLP and data analysis tasks"),
    emoji("⚡ Architect Blueprint-based modular Flask applications with role-based access control"),
    emoji("⚡ Integrate caching and real-time features using Redis and WebSocket")
  ],
  softwareSkills: [
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Flask", fontAwesomeClassname: "fas fa-fire" },
    { skillName: "FastAPI", fontAwesomeClassname: "fas fa-bolt" },
    { skillName: "Django", fontAwesomeClassname: "fab fa-python" },
    { skillName: "PHP", fontAwesomeClassname: "fab fa-php" },
    { skillName: "C++", fontAwesomeClassname: "fas fa-code" },
    { skillName: "MySQL / SQLite", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Redis", fontAwesomeClassname: "fas fa-server" },
    { skillName: "REST APIs", fontAwesomeClassname: "fas fa-network-wired" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" },
    { skillName: "Linux", fontAwesomeClassname: "fab fa-linux" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "HTML/CSS", fontAwesomeClassname: "fab fa-html5" }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of Southern Punjab",
      logo: require("./assets/images/uspLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "July 2022 – July 2027",
      desc: "Pursuing a Bachelor's degree in Computer Science with a strong academic record (GPA: 3.7). Relevant coursework includes Data Structures, Algorithms, Database Systems, OOP, Web Development, and Parallel & Distributed Computing.",
      descBullets: [
        "Built production-grade projects: e-commerce platform, LMS, secure auth system, and AI integration platform",
        "Strengthened skills in Python, MySQL, REST APIs, Flask Blueprint architecture, and system design"
      ]
    },
    {
      schoolName: "Punjab Group of Colleges",
      logo: require("./assets/images/pgcLogo.png"),
      subHeader: "F.Sc Pre-Medical",
      duration: "2019 – 2021",
      desc: "Completed F.Sc Pre-Medical from Punjab Group of Colleges with strong academic performance.",
      descBullets: [
        "Built foundational concepts in biology, chemistry, and mathematics",
        "Actively participated in academic and co-curricular activities"
      ]
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Backend Development (Python, Flask, FastAPI, PHP)", progressPercentage: "85%" },
    { Stack: "Database & SQL (MySQL, Schema Design, Query Optimization)", progressPercentage: "82%" },
    { Stack: "API Development (REST APIs, Auth, RBAC, Validation)", progressPercentage: "80%" },
    { Stack: "Security (Bcrypt, Session Mgmt, Brute-force Protection)", progressPercentage: "75%" },
    { Stack: "Frontend Basics (HTML, CSS, JS, Jinja2)", progressPercentage: "55%" },
    { Stack: "AI/ML Integration (Python APIs, Data Pipelines)", progressPercentage: "60%" }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Self-Employed Backend Developer",
      company: "Robusto Solutions",
      companylogo: require("./assets/images/robustoLogo.png"),
      date: "September 2024 – Present",
      desc: "Architecting and delivering full-stack backend systems for real-world clients including e-commerce platforms, LMS, and secure authentication systems.",
      descBullets: [
        "Built a secure PHP authentication system with bcrypt hashing and brute-force protection — reducing security vulnerabilities by 95%",
        "Integrated multiple AI models via Python APIs, developing NLP and data analysis pipelines",
        "Designed and optimized MySQL schemas with proper indexing — improving query performance by 40%",
        "Developed RESTful API endpoints for seamless frontend-backend communication with robust error handling"
      ]
    },
    {
      role: "Learning Management System (LMS) Developer",
      company: "Robusto Solutions",
      companylogo: require("./assets/images/robustoLogo.png"),
      date: "2025 – Present",
      desc: "Developing a complete LMS using Flask and MySQL with role-based access control for students and instructors.",
      descBullets: [
        "Built RESTful APIs for student enrollment, course management, and assignment submission modules",
        "Designed normalized relational MySQL schema to handle users, courses, modules, and progress tracking",
        "Implemented secure session management and authentication middleware with RBAC"
      ]
    },
    {
      role: "Backend Developer – CRUD & Task Management",
      company: "Robusto Solutions",
      companylogo: require("./assets/images/robustoLogo.png"),
      date: "2023 – 2024",
      desc: "Built and deployed fully functional backend applications using Python, Flask, and MySQL.",
      descBullets: [
        "Implemented all CRUD features with data validation, form handling, and error management",
        "Developed REST API endpoints for task and user management workflows",
        "Designed secure database structure ensuring data integrity and optimized queries"
      ]
    }
  ]
};

const openSource = {
  showGithubProfile: true,
  display: true
};

const bigProjects = {
  title: "Projects",
  subtitle: "Production-grade backend and full-stack projects",
  projects: [
    {
      image: require("./assets/images/lmsProject.png"),
      projectName: "Hero Style — Full-Stack E-Commerce Platform",
      projectDesc:
        "A complete full-stack e-commerce platform for a watch and earbuds store built with Flask Blueprint architecture. Features a full Admin Dashboard with RBAC, product CRUD with image upload, order lifecycle management (cart → checkout → tracking → returns/cancellations), user portal with wishlist, reviews, and order history — all across a normalized 14-table MySQL schema.",
      footerLink: [
        { name: "Source Code", url: "https://github.com/Khurram315048" }
      ]
    },
    {
      image: require("./assets/images/lmsProject.png"),
      projectName: "Learning Management System (LMS)",
      projectDesc:
        "A full-featured LMS platform built with Python, Flask, and MySQL. Includes student enrollment, course management, assignment submission, and instructor dashboards with role-based access control and secure session management.",
      footerLink: [
        { name: "Source Code", url: "https://github.com/Khurram315048/LMS-PythonDevelopment" }
      ]
    },
    {
      image: require("./assets/images/achievementPlaceholder.png"),
      projectName: "Secure Authentication System",
      projectDesc:
        "Production-ready PHP login system with bcrypt password encryption, session management, rate limiting, and account lockout mechanisms to prevent brute-force attacks. Reduced security vulnerabilities by 95%.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/Khurram315048" }
      ]
    },
    {
      image: require("./assets/images/achievementPlaceholder.png"),
      projectName: "AI Model Integration Platform",
      projectDesc:
        "Python-based platform for integrating and testing multiple AI models through a unified API interface. Includes data preprocessing pipelines and an interactive dashboard for model performance monitoring and result visualization.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/Khurram315048" }
      ]
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle: "Selected accomplishments and self-directed milestones",
  achievementsCards: [
    {
      title: "Hero Style — Production E-Commerce Platform",
      subtitle:
        "Built and deployed a multi-module full-stack e-commerce app with a complete admin control panel, user portal, and 14-table MySQL schema — demonstrating end-to-end full-stack development capability.",
      image: require("./assets/images/achievementPlaceholder.png"),
      imageAlt: "Hero Style Project",
      footerLink: [
        { name: "GitHub", url: "https://github.com/Khurram315048" }
      ]
    },
    {
      title: "LMS Platform Development",
      subtitle:
        "Developed a full-featured Learning Management System with RBAC, course management, assignment workflows, and secure authentication using Flask and MySQL.",
      image: require("./assets/images/achievementPlaceholder.png"),
      imageAlt: "LMS Project",
      footerLink: [
        { name: "Source Code", url: "https://github.com/Khurram315048/LMS-PythonDevelopment" }
      ]
    },
    {
      title: "Security Engineering",
      subtitle:
        "Architected a secure PHP authentication system with bcrypt hashing, brute-force protection, and session management — achieving a 95% reduction in potential security vulnerabilities.",
      image: require("./assets/images/achievementPlaceholder.png"),
      imageAlt: "Security Achievement",
      footerLink: []
    }
  ],
  display: true
};

const blogSection = {
  title: "Blogs",
  subtitle: "I occasionally write about backend engineering and Python.",
  displayMediumBlogs: false,
  blogs: [],
  display: false
};

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I love to share knowledge and present on backend topics."),
  talks: [],
  display: false
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I don't currently publish a podcast.",
  podcast: [],
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Want to discuss a project or just say hi? My inbox is open for all.",
  number: "+92-315-0484043",
  email_address: "saleemkhurram420@gmail.com"
};

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};