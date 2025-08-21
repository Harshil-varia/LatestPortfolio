import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Harshil Varia",
  initials: "HV",
  url: "https://harshilvaria.ca", // Update with your portfolio URL
  location: "Halifax, NS",
  locationLink: "https://www.google.com/maps/place/halifax",
  description: "Computer Science Student | AI/ML Enthusiast | Full-Stack Developer",
  summary: "Third-year Computer Science student at Dalhousie University with hands-on experience in AI/ML, IoT systems, and full-stack development. Passionate about building solutions that bridge technology and healthcare.",
  avatarUrl: "/me.png", // Update path
  skills: [
    "Java",
    "Python",
    "C/C++",
    "SQL",
    "JavaScript",
    "React",
    "TensorFlow",
    "Azure",
    "AWS",
    "REST APIs",
    "Docker",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "harshilvaria@dal.ca",
    tel: "+19024402053",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Harshil-Varia",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/harshilvaria",
        icon: Icons.linkedin,
        navbar: true,
      }
  
      
    },

  },
  work: [
    { company: "Atlantic Economic Council",
      href: "#",
      badges: [],
      location: "Halifax, NS",
      title: "Data Scientist Co-op",
      logoUrl: "AEC.jpeg", 
      start: "May 2025",
      end: "Aug 2025",
      description:
      "Engineered an automated ETL pipeline using Python (Pandas, PyPDF2) to extract and clean 50+ complex tables from unstructured PDFs. Developed an interactive Power BI dashboard and deployed a production-ready web application on Vercel to visualize key economic data and geospatially map regional investments."
      },
    {
      company: "LED Roadway Lighting Ltd.",
      href: "#",
      badges: [],
      location: "Halifax, NS",
      title: "AI Computer Vision Analytics Researcher & Developer (Co-Op)",
      logoUrl: "Liveablecities.png", 
      start: "Aug 2024",
      end: "Dec 2024",
      description:
        "Enhanced video analytics accuracy by 25% through AI model optimization. Developed ML models improving PM2.5 sensor reliability by 20%. Engineered energy-saving scripts reducing consumption by 35%."
    }
  ],
  education: [
    {
      school: "Dalhousie University",
      href: "https://dal.ca",
      degree: "Bachelor of Computer Science",
      logoUrl: "dal.png",
      start: "2022",
      end: "2026",
    }
  ],
  projects: [
    {
      title: "Project Management & Timesheet System",
      href: "#",
      dates: "July 2025 - Aug 2025", 
      active: true, 
      description: "Transformed tightly-coupled Excel timesheet processes into a scalable web application with automated reporting, role-based access control, and comprehensive project budget tracking.",
      technologies: ["Next.js", "Prisma ORM", "TypeScript", "PostgreSQL", "Vercel"],
      links: [
        { 
          type: "GitHub", 
          href: "https://github.com/Harshil-varia/ProjectManagementSaas", 
          icon: <Icons.github className="size-3" /> 
        },
      ]
    },
    {
      title: "AI-Powered Website Builder",
      href: "#",
      dates: "Feb 2024 - Present",
      active: true,
      description: "A website platform generating React/Express code via natural language prompts using Anthropic API.",
      technologies: ["React", "Express", "JavaScript", "Anthropic API"],
      links: [
        { type: "GitHub", href: "https://github.com/Harshil-varia/AIWebsiteBuilder", icon: <Icons.github className="size-3" /> }
      ]
    },
    {
      title: "Fitness Activity Recognition System",
      href: "#",
      dates: "Jan 2024 - Present",
      active: true,
      description: "CNN model achieving 95% exercise classification accuracy with TensorFlow.",
      technologies: ["Python", "TensorFlow", "SQL"],
      links: [
        { type: "GitHub", href: "https://github.com/Harshil-varia/MotionSensor", icon: <Icons.github className="size-3" /> }
      ]
    },{
      title: "To-do List AI Agent",
      href: "#",
      dates: "Jan 2025 - Jan 2025",
      active: true,
      description: "Developed a task manager with predictive analytics to estimate completion times, boosting user efficiency by 15%.",
      technologies: ["Postgress Sql", "Drizzle ORM", "JavaScript",], 
      links: [
        { type: "GitHub", href: "https://github.com/Harshil-varia/AI_TODO", icon: <Icons.github className="size-3" /> }
      ]
    }
  ],
  hackathons: [
    {
      title: "Annual Game Jam Hackathon",
      dates: "2024",
      location: "Halifax, NS",
      description: "Developed 2D puzzle game focusing on innovative problem-solving mechanics."
    },{
      title: "Halifax Innovation Challenge ",
      dates: "2024",
      location: "Halifax, NS",
      description: "Achieved runner-up in skill trade challenge by developing and presenting a compelling, tech-driven proposal to a panel of executives and academic leaders, demonstrating critical thinking and problem-solving skills under tight deadlines"
    }
    
  ],
  certifications: [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      dates: "2024"
    },
    {
      name: "Oracle Cloud Infrastructure Generative AI Certified",
      issuer: "Oracle",
      dates: "2024"
    }
  ]
} as const;