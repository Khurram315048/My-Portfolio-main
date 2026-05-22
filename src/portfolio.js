import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

//import myResume from "./assets/khuraamCV.pdf"; 

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
  title: "Hi all, I'm Python Developer",
  subTitle: emoji(
    "A passionate Python Developer 🚀 having an experience of building Web applications."
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
  title: "What I do",
  subTitle: "Back-end focused Python Developer building scalable web services and APIs",
  skills: [
    emoji("⚡ Build RESTful APIs using Flask, FastAPI and Django"),
    emoji("⚡ Design and optimize SQL databases and queries (SQLAlchemy, raw SQL)"),
    emoji("⚡ Implement authentication, data validation and error handling"),
    emoji("⚡ Integrate caching and realtime features (Redis, WebSocket)")
  ],
  softwareSkills: [
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Flask", fontAwesomeClassname: "fas fa-fire" },
    { skillName: "FastAPI", fontAwesomeClassname: "fas fa-bolt" },
    { skillName: "Django", fontAwesomeClassname: "fab fa-python" },
    { skillName: "SQL / SQLAlchemy", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Redis", fontAwesomeClassname: "fas fa-server" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" },
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
      duration: "March 2023 – March 2027",
      desc: "Completed a Bachelor's degree in Computer Science with a strong academic record (GPA: 3.7). Developed multiple projects in Python, Flask, SQL, and MERN stack technologies.",
      descBullets: [
        "Worked on academic projects including CRUD systems, task management apps, and LMS",
        "Strengthened skills in Python, SQL, APIs, and modern web development"
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
    { Stack: "Backend Development (Python, Flask, FastAPI, Django)", progressPercentage: "85%" },
    { Stack: "Database & SQL (Queries, Models, CRUD)", progressPercentage: "80%" },
    { Stack: "API Development (REST APIs, Data Validation)", progressPercentage: "75%" },
    { Stack: "Frontend Basics (HTML, CSS, JS)", progressPercentage: "50%" },
    { Stack: "Programming & Problem Solving", progressPercentage: "70%" }
  ],
  displayCodersrank: false
};

// ❗ FIXED NAME
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Learning Management System (LMS) Developer",
      company: "Robusto Solutions",
      companylogo: require("./assets/images/robustoLogo.png"),
      date: "2025 – Present",
      desc: "Developing a complete LMS using Flask and SQL with modules for course management, student progress tracking, and user handling.",
      descBullets: [
        "Designed and implemented FastAPI endpoints for smooth data interaction",
        "Created database models and optimized SQL queries for performance",
        "Implemented backend logic for assignments, users, and course workflows"
      ]
    },
    {
      role: "Backend Developer – CRUD Operations",
      company: "Robusto Solutions",
      companylogo: require("./assets/images/robustoLogo.png"),
      date: "2024 – 2024",
      desc: "Built and deployed a fully functional CRUD backend application using Python, SQL, and Flask.",
      descBullets: [
        "Built database schema and implemented all CRUD features",
        "Handled data validation, form handling, and error management",
        "Improved application reliability through optimized queries"
      ]
    },
    {
      role: "Backend Developer – Task Management System",
      company: "Robusto Solutions",
      companylogo: require("./assets/images/robustoLogo.png"),
      date: "2023 – 2023",
      desc: "Developed a Task Management System for managing tasks, users, and project workflows.",
      descBullets: [
        "Implemented backend logic using Python, Flask, and SQL",
        "Developed REST API endpoints for tasks and users",
        "Designed database structure and ensured secure data flow"
      ]
    }
  ]
};

// ❗ FIXED NAME
const openSource = {
  showGithubProfile: true,
  display: true
};

const bigProjects = {
  title: "Big Projects",
  subtitle: "Selected backend and full-stack projects",
  projects: [
    {
      image: require("./assets/images/lmsProject.png"),
      projectName: "LMS - Learning Management System",
      projectDesc: "A Learning Management System built with Flask, SQLAlchemy and FastAPI endpoints. Features user authentication, course & assignment management, progress tracking, and admin controls.",
      footerLink: [
        { name: "Source Code", url: "https://github.com/Khurram315048/LMS-PythonDevelopment" }
      ]
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Selected certificates and accomplishments",
  achievementsCards: [
    {
      title: "Backend Development Projects",
      subtitle: "Built and maintained scalable backend systems using Flask, FastAPI and SQL.",
      image: require("./assets/images/achievementPlaceholder.png"),
      imageAlt: "Project Image",
      footerLink: [
        { name: "LMS Project", url: "https://github.com/Khurram315048/LMS-PythonDevelopment" }
      ]
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
  subtitle: `I don't currently publish a podcast.`,
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
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3150484043",
  email_address: "saleemkhurram420@gmail.com"
};

// ❗ FIXED NAME
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
  workExperiences,   // fixed
  openSource,        // fixed
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,    // fixed
  isHireable,
  resumeSection
};
