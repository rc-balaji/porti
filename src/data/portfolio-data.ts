export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  profile_picture: string;
  social_links: {
    github: string;
    linkedin: string;
    facebook: string;
    instagram: string;
  };
  resume: string;
  availability: string;
  location: string;
  languages: string[];
}

export interface Skill {
  name: string;
  level: string;
}

export interface Service {
  name: string;
  description: string;
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  tech_stack: string[];
  image: string;
  demo_link: string;
  github_link: string;
  category?: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  year: string;
}

export interface Achievement {
  title: string;
  year: number;
  description: string;
}

export interface Certification {
  title: string;
  issued_by: string;
  year: number;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export interface Award {
  name: string;
  year: number;
  description: string;
}

export interface Blog {
  title: string;
  url: string;
  image: string;
}

export interface Contact {
  email: string;
  phone: string;
  address: string;
  map_link: string;
}

export interface PortfolioData {
  personal_info: PersonalInfo;
  skills: Skill[];
  services: Service[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
  achievements: Achievement[];
  certifications: Certification[];
  testimonials: Testimonial[];
  awards: Award[];
  interests: string[];
  blogs: Blog[];
  contact: Contact;
}

const portfolioData: PortfolioData = {
  personal_info: {
    name: "Balaji C",
    title: "Software Engineer",
    tagline: "Building Scalable and Efficient Applications",
    bio: "A passionate software engineer specializing in web development, backend systems, and interactive UI/UX.",
    profile_picture: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    social_links: {
      github: "https://github.com/rc-balaji",
      linkedin: "https://www.linkedin.com/in/rc-balaji-5a848b248/",
      facebook: "https://www.facebook.com/rc.balaji.3?mibextid=ZbWKwL",
      instagram: "https://www.instagram.com/queen.illadha.king.2k3?"
    },
    resume: "/assets/resume.pdf",
    availability: "Open to freelance and full-time opportunities",
    location: "Tamil Nadu, India",
    languages: ["English", "Tamil", "Hindi"]
  },
  skills: [
    { name: "HTML", level: "90%" },
    { name: "CSS", level: "85%" },
    { name: "JavaScript", level: "88%" },
    { name: "Bootstrap", level: "85%" },
    { name: "GSAP", level: "75%" },
    { name: "Three.js", level: "70%" },
    { name: "Node.js", level: "80%" },
    { name: "MongoDB", level: "75%" },
    { name: "React.js", level: "82%" },
    { name: "MySQL", level: "78%" },
    { name: "Python", level: "85%" },
    { name: "Django", level: "70%" }
  ],
  services: [
    {
      name: "Web Development",
      description: "Building responsive and optimized websites using modern web technologies.",
      icon: "laptop-code"
    },
    {
      name: "UI/UX Design",
      description: "Creating visually appealing and user-friendly designs for web applications.",
      icon: "paint-brush"
    },
    {
      name: "Backend Development",
      description: "Developing scalable APIs and backend systems with Node.js, Django, and MySQL.",
      icon: "server"
    },
    {
      name: "Freelance & Consulting",
      description: "Providing expert consulting and freelance services for businesses and startups.",
      icon: "handshake"
    }
  ],
  projects: [
    {
      title: "Awesome Portfolio Website",
      description: "A fully responsive personal portfolio with animations and interactivity.",
      tech_stack: ["HTML", "CSS", "JavaScript", "GSAP"],
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      demo_link: "https://yourportfolio.com",
      github_link: "https://github.com/yourrepo",
      category: "frontend"
    },
    {
      title: "E-commerce Platform",
      description: "A scalable e-commerce solution with a user-friendly UI and backend integration.",
      tech_stack: ["React.js", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      demo_link: "https://yourecommerce.com",
      github_link: "https://github.com/yourecommerce",
      category: "fullstack"
    },
    {
      title: "AI-Powered Chatbot",
      description: "An AI-based chatbot that provides customer support and automation.",
      tech_stack: ["Python", "TensorFlow", "Django"],
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      demo_link: "https://yourchatbot.com",
      github_link: "https://github.com/yourchatbot",
      category: "backend"
    }
  ],
  experience: [
    {
      company: "Tech Company",
      role: "Frontend Developer",
      duration: "Jan 2022 - Present",
      description: "Developing and maintaining scalable front-end applications with modern frameworks."
    },
    {
      company: "Startup XYZ",
      role: "Software Engineer Intern",
      duration: "June 2021 - Dec 2021",
      description: "Worked on full-stack web applications and API integrations."
    }
  ],
  education: [
    {
      institution: "XYZ University",
      degree: "B.Sc. in Computer Science",
      year: "2018 - 2022"
    }
  ],
  achievements: [
    {
      title: "Hackathon Winner",
      year: 2021,
      description: "Won first place in a national-level coding hackathon with 500+ participants."
    },
    {
      title: "Top 10 Finalist in AI Challenge",
      year: 2022,
      description: "Developed an AI model that ranked in the top 10 of an international AI competition."
    }
  ],
  certifications: [
    {
      title: "Full-Stack Web Development",
      issued_by: "Udemy",
      year: 2021
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issued_by: "Amazon Web Services",
      year: 2023
    }
  ],
  testimonials: [
    {
      name: "John Doe",
      role: "CEO, Startup X",
      quote: "Incredible work! Professional and highly skilled in front-end development.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
    },
    {
      name: "Jane Smith",
      role: "Project Manager, Tech Corp",
      quote: "Delivered a high-quality project with outstanding UI/UX design.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
    }
  ],
  awards: [
    {
      name: "Best Developer Award",
      year: 2022,
      description: "Awarded by XYZ Tech for outstanding contributions in software development."
    }
  ],
  interests: [
    "AI & Machine Learning",
    "Cybersecurity",
    "Open Source Contributions",
    "UI/UX Design",
    "3D Web Development"
  ],
  blogs: [
    {
      title: "How to Build an Animated Portfolio with GSAP",
      url: "https://yourblog.com/gsap-portfolio",
      image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=280"
    },
    {
      title: "Top 10 JavaScript Libraries for 2024",
      url: "https://yourblog.com/js-libraries",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=280"
    }
  ],
  contact: {
    email: "rcbalaji2003@gmail.com",
    phone: "+916383579334",
    address: "Tamil Nadu, India",
    map_link: "https://goo.gl/maps/yourlocation"
  }
};

export default portfolioData;
