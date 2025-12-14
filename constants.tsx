import { Project, Experience, SkillCategory, Education } from './types';
import { Github, Linkedin, Mail } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Samarth M Katageri",
  title: "DevOps Engineer",
  email: "katagerisamarth9@gmail.com",
  phone: "8660462356",
  linkedin: "https://www.linkedin.com/in/samarth-m-katageri-a24090391/",
  github: "https://github.com/SIIM21-force",
  summary: `An Electronics & Communication Engineering graduate who has specialized in transitioning theoretical knowledge into practical, automated cloud solutions. Gained foundational experience as a trainee in Embedded Systems and practical development experience at Rooman Technologies. I have a proven ability to excel in collaborative environments and deliver solutions focusing on efficiency and scalability.`,
  tagline: "Automation-focused professional with hands-on experience in Infrastructure as Code (Terraform), Continuous Integration/Delivery (Jenkins), and leveraging major cloud platforms (AWS, Azure, OCI)."
};

export const SKILLS: SkillCategory[] = [
  { category: "Infrastructure as Code (IaC)", tools: "Terraform, Ansible, AWS CloudFormation" },
  { category: "CI/CD & Version Control", tools: "Jenkins, Git & GitHub, Automated Deployment Pipelines" },
  { category: "Containerization", tools: "Docker (Container Build & Management)" },
  { category: "Cloud Platforms", tools: "AWS, Azure, OCI" },
  { category: "OS", tools: "Ubuntu, CentOS, Windows" },
  { category: "Languages", tools: "Python (Scripting/Automation), Bash, Java, JavaScript, React, C++" }
];

export const INTERNSHIPS: Experience[] = [
  {
    company: "Rooman Technologies Pvt. Ltd.",
    url: "https://rooman.com/",
    role: "Cloud Application Developer",
    period: "Mar 2025 – Jun 2025",
    points: [
      "Developed and deployed over 5 applications in cloud environments, focusing on efficiency and scalability.",
      "Successfully collaborated on a 3-person team for the \"Cloud-Native Blueprint\" project, building a secure, serverless employee directory.",
      "Acquired core skills in serverless computing, cloud security, and scalability to build robust cloud-based solutions."
    ]
  },
  {
    company: "Karnataka German Technical Training Institute (KGTTI)",
    url: "https://www.kgtti.com/bengaluru.html",
    role: "Embedded Technology Trainee",
    period: "Oct 2023 – Nov 2023",
    points: [
      "Gained practical expertise and foundational knowledge in embedded systems design, programming, and hardware-software integration using 8/16/32-bit microcontrollers."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "Dr. Ambedkar Institute of Technology",
    url: "https://www.drait.edu.in/",
    degree: "B.E. in Electronics and Communication",
    period: "Dec 2021 – Aug 2025",
    details: "CGPA: 7.71/10.00"
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Low-cost Semi-Automatic Medicine Vending Machine",
    description: "Engineered an Embedded Systems solution using Arduino MEGA and biometric authentication for secure, 24/7 medication dispensing. Integrated with Adafruit IO Cloud for real-time monitoring.",
    tags: ["Arduino", "IoT", "C++"],
    link: "https://github.com/SIIM21-force/semiautomatic-medicine-vending-machine-iot-project",
    date: "February 12, 2025",
    stats: { stars: 0, forks: 0 }
  },
  {
    title: "Secure Serverless Directory",
    description: "The \"Secure Serverless Directory\" is a full-stack, CRUD employee directory using AWS Lambda, API Gateway, and DynamoDB. Achieved 99.9% availability and 100% savings on infra costs using free-tier.",
    tags: ["AWS", "Serverless", "React"],
    link: "https://github.com/SIIM21-force/secure-serverless-directory",
    date: "June 12, 2025",
    stats: { stars: 0, forks: 1 }
  },
  {
    title: "Configuration Management Automation",
    description: "Implemented comprehensive configuration management using Ansible to automate server provisioning and software updates, ensuring infrastructure consistency across development and production environments.",
    tags: ["Ansible", "DevOps", "Automation"],
    link: "https://github.com/SIIM21-force/configure-management",
    date: "May 20, 2025",
    stats: { stars: 0, forks: 0 }
  },
  {
    title: "Dockerized Django Notes App",
    description: "Containerized a full-stack Django Notes application using Docker and Docker Compose. Standardized the development environment and simplified deployment processes.",
    tags: ["Docker", "Django", "Python"],
    link: "https://github.com/SIIM21-force/dockerized-django-notes-app",
    date: "April 05, 2025",
    stats: { stars: 0, forks: 0 }
  }
];

export const SOCIAL_LINKS = [
  { icon: Mail, label: "Email", href: `mailto:${PERSONAL_INFO.email}`, display: PERSONAL_INFO.email },
  { icon: Linkedin, label: "LinkedIn", href: PERSONAL_INFO.linkedin, display: "linkedin.com/in/samarth-m-katageri" },
  { icon: Github, label: "GitHub", href: PERSONAL_INFO.github, display: "github.com/SIIM21-force" },
];