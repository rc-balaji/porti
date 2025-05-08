const portfolioData = {
  personal_info: {
    name: "Balaji C",
    title: "Fullstack Developer",
    tagline: "Building innovative web solutions for tomorrow's challenges",
    bio: "I am a passionate full-stack developer with over 5 years of experience creating modern, responsive web applications. Specialized in JavaScript/TypeScript, React, and Node.js, I build scalable solutions with clean, maintainable code. I enjoy solving complex problems and continuously learning new technologies to stay at the forefront of web development.",
    profile_picture: "/assets/images/profile.svg",
    social_links: {
      github: "https://github.com/balajiC",
      linkedin: "https://linkedin.com/in/balajiC",
      facebook: "https://facebook.com/balajiC",
      instagram: "https://instagram.com/balajiC"
    },
    resume: "/assets/resume.pdf",
    availability: "Open to new opportunities",
    location: "Chennai, India",
    languages: ["English", "Tamil", "Hindi"]
  },
  
  skills: [
    { name: "JavaScript", level: "Expert" },
    { name: "React.js", level: "Expert" },
    { name: "Node.js", level: "Expert" },
    { name: "TypeScript", level: "Advanced" },
    { name: "Next.js", level: "Advanced" },
    { name: "HTML/CSS", level: "Expert" },
    { name: "Tailwind CSS", level: "Expert" },
    { name: "MongoDB", level: "Advanced" },
    { name: "PostgreSQL", level: "Intermediate" },
    { name: "Docker", level: "Intermediate" },
    { name: "AWS", level: "Intermediate" },
    { name: "GraphQL", level: "Intermediate" }
  ],
  
  services: [
    {
      name: "Frontend Development",
      description: "Creating responsive, interactive web applications with modern JavaScript frameworks like React and Vue.",
      icon: "code"
    },
    {
      name: "Backend Development",
      description: "Building robust server-side applications with Node.js, Express, and various databases.",
      icon: "server"
    },
    {
      name: "API Development",
      description: "Designing and developing RESTful APIs and GraphQL services for seamless client-server communication.",
      icon: "api"
    },
    {
      name: "UI/UX Design",
      description: "Creating intuitive and aesthetically pleasing user interfaces with a focus on user experience.",
      icon: "layout"
    }
  ],
  
  projects: [
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with product management, user authentication, and payment processing capabilities. This platform provides a seamless shopping experience with an intuitive interface for both customers and administrators.",
      detailed_description: "The E-commerce Platform is a comprehensive solution for online retail businesses. Features include product categorization, search functionality with filters, user accounts with order history, wishlist management, and secure checkout with multiple payment options. The admin dashboard offers inventory management, order processing, customer data analysis, and sales reporting tools. Built with scalability in mind, the platform can handle high traffic volumes and large product catalogs.",
      features: [
        "User authentication with social login options",
        "Product search with multiple filter options",
        "Shopping cart and wishlist functionality",
        "Secure payment processing with Stripe",
        "Admin dashboard for inventory management",
        "Order tracking and history for users",
        "Responsive design for all devices"
      ],
      challenges: "Implementing a secure payment system and optimizing database queries for large product catalogs were the main challenges. Used caching strategies and database indexing to improve performance.",
      tech_stack: ["React", "Node.js", "MongoDB", "Stripe API"],
      image: "/assets/images/project-placeholder.svg",
      gallery: [
        "/assets/images/project-placeholder.svg",
        "/assets/images/project-placeholder.svg",
        "/assets/images/project-placeholder.svg",
        "/assets/images/project-placeholder.svg"
      ],
      demo_link: "https://ecommerce-demo.example.com",
      github_link: "https://github.com/balajiC/ecommerce-platform",
      category: "Full Stack"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team workspace, and progress tracking.",
      detailed_description: "The Task Management App is designed for teams who need to collaborate effectively on projects. The application allows for creating and assigning tasks, setting priorities and deadlines, tracking progress, and communicating within task threads. Real-time updates ensure all team members stay informed of changes, while the dashboard provides visual representations of team and individual progress.",
      features: [
        "Task creation, assignment, and tracking",
        "Real-time collaboration and updates",
        "Deadline notifications and reminders",
        "Custom workflow creation",
        "File attachments and comment threads",
        "Progress visualization with charts",
        "Integration with calendar and email services"
      ],
      challenges: "Implementing real-time updates across all connected clients was challenging. Used Firebase for real-time synchronization and notifications to ensure all team members received updates instantly.",
      tech_stack: ["React", "Firebase", "Tailwind CSS", "Auth0"],
      image: "/assets/images/project-placeholder.svg",
      gallery: [
        "/assets/images/project-placeholder.svg",
        "/assets/images/project-placeholder.svg",
        "/assets/images/project-placeholder.svg",
        "/assets/images/project-placeholder.svg"
      ],
      demo_link: "https://taskmanager-demo.example.com",
      github_link: "https://github.com/balajiC/task-manager",
      category: "Web App"
    },
    {
      title: "Weather Dashboard",
      description: "A weather dashboard displaying current conditions and forecasts using data from multiple weather APIs.",
      detailed_description: "The Weather Dashboard provides comprehensive weather information for locations worldwide. It combines data from multiple weather APIs to offer accurate forecasts, historical weather patterns, and climate analysis. Users can save favorite locations, set up weather alerts, and view detailed meteorological data including temperature, humidity, wind speed, precipitation probability, and air quality index.",
      features: [
        "Current weather conditions with hourly updates",
        "7-day forecast with detailed information",
        "Weather map with radar and satellite imagery",
        "Multiple location saving and comparison",
        "Historical weather data visualization",
        "Severe weather alerts and notifications",
        "Responsive design with dark mode support"
      ],
      challenges: "Integrating multiple weather APIs with different data formats and ensuring reliability when one API fails were significant challenges. Implemented a fallback system that automatically switches to alternative data sources when needed.",
      tech_stack: ["Vue.js", "Chart.js", "Weather API", "Geolocation API"],
      image: "/assets/images/project-placeholder.svg",
      gallery: [
        "/assets/images/project-placeholder.svg",
        "/assets/images/project-placeholder.svg",
        "/assets/images/project-placeholder.svg",
        "/assets/images/project-placeholder.svg"
      ],
      demo_link: "https://weather-dashboard.example.com",
      github_link: "https://github.com/balajiC/weather-dashboard",
      category: "Frontend"
    },
    {
      title: "Real Estate Listings",
      description: "A real estate platform featuring property listings, advanced search, and integration with mapping APIs.",
      detailed_description: "The Real Estate Listings platform connects property buyers, sellers, and agents through an intuitive interface. The platform features detailed property listings with high-quality images, virtual tours, and comprehensive information. Advanced search functionality allows users to filter properties by location, price, size, amenities, and more. Integration with mapping APIs provides neighborhood information, nearby amenities, and commute times.",
      features: [
        "Detailed property listings with virtual tours",
        "Advanced search with multiple filters",
        "Interactive maps showing property locations",
        "Neighborhood information and statistics",
        "Appointment scheduling with agents",
        "Mortgage calculator and affordability tools",
        "Favorites saving and comparison tools"
      ],
      challenges: "Creating an effective search algorithm that balanced speed and accuracy while handling complex filtering options was challenging. Used MongoDB's geospatial indexing and developed a custom relevance scoring system.",
      tech_stack: ["Next.js", "Node.js", "MongoDB", "Google Maps API"],
      image: "/assets/images/project-placeholder.svg",
      gallery: [
        "/assets/images/project-placeholder.svg",
        "/assets/images/project-placeholder.svg",
        "/assets/images/project-placeholder.svg",
        "/assets/images/project-placeholder.svg"
      ],
      demo_link: "https://realestate-demo.example.com",
      github_link: "https://github.com/balajiC/real-estate",
      category: "Full Stack"
    }
  ],
  
  experience: [
    {
      company: "TechSolutions Inc.",
      role: "Senior Frontend Developer",
      duration: "2021 - Present",
      description: "Leading development of enterprise React applications, implementing modern UI patterns, and mentoring junior developers."
    },
    {
      company: "WebDev Studio",
      role: "Full Stack Developer",
      duration: "2018 - 2021",
      description: "Built scalable web applications using React, Node.js, and MongoDB. Implemented authentication systems and RESTful APIs."
    },
    {
      company: "Digital Innovations",
      role: "Junior Developer",
      duration: "2017 - 2018",
      description: "Developed responsive websites and assisted in building client-side applications using JavaScript and jQuery."
    }
  ],
  
  education: [
    {
      institution: "University of Computer Science",
      degree: "Master of Computer Applications",
      year: "2015 - 2017"
    },
    {
      institution: "Technical Institute",
      degree: "Bachelor of Science in Computer Science",
      year: "2012 - 2015"
    }
  ],
  
  achievements: [
    {
      title: "Best Web Application Award",
      year: 2022,
      description: "Received recognition for developing an innovative accessibility-focused web application."
    },
    {
      title: "Hackathon Winner",
      year: 2020,
      description: "Won first place in a 48-hour hackathon for creating a community assistance platform."
    }
  ],
  
  certifications: [
    {
      title: "AWS Certified Developer",
      issued_by: "Amazon Web Services",
      year: 2022
    },
    {
      title: "Professional React Developer",
      issued_by: "React Training Academy",
      year: 2021
    },
    {
      title: "MongoDB Database Administrator",
      issued_by: "MongoDB University",
      year: 2020
    }
  ],
  
  testimonials: [
    {
      name: "John Davis",
      role: "CTO, TechSolutions",
      quote: "Balaji is an exceptional developer who consistently delivers high-quality code and innovative solutions to complex problems.",
      avatar: "/assets/images/profile.svg"
    },
    {
      name: "Sarah Johnson",
      role: "Product Manager, WebDev Studio",
      quote: "Working with Balaji was a great experience. His technical expertise and dedication to meeting project goals made him an invaluable team member.",
      avatar: "/assets/images/profile.svg"
    },
    {
      name: "Michael Chen",
      role: "Founder, AppStartup",
      quote: "Balaji's ability to quickly understand requirements and translate them into functional features is remarkable. Highly recommended!",
      avatar: "/assets/images/profile.svg"
    }
  ],
  
  awards: [
    {
      name: "Developer of the Year",
      year: 2023,
      description: "Recognized for contributions to open-source projects and technical leadership."
    },
    {
      name: "Innovation Excellence",
      year: 2021,
      description: "Awarded for developing a novel approach to real-time data visualization."
    }
  ],
  
  interests: [
    "Open Source Contribution",
    "Tech Blogging",
    "AI and Machine Learning",
    "Mobile App Development",
    "Hiking and Outdoor Activities"
  ],
  
  blogs: [
    {
      title: "Mastering React Hooks",
      url: "https://blog.example.com/react-hooks",
      image: "/assets/images/project-placeholder.svg"
    },
    {
      title: "The Future of JavaScript",
      url: "https://blog.example.com/future-javascript",
      image: "/assets/images/project-placeholder.svg"
    },
    {
      title: "Building Accessible Web Applications",
      url: "https://blog.example.com/web-accessibility",
      image: "/assets/images/project-placeholder.svg"
    }
  ],
  
  contact: {
    email: "balaji@example.com",
    phone: "+91 98765 43210",
    address: "Chennai, Tamil Nadu, India",
    map_link: "https://maps.google.com/?q=Chennai,TamilNadu,India"
  }
};

export default portfolioData;