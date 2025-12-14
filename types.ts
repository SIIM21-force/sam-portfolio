export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  date: string;
  stats?: {
    stars: number;
    forks: number;
  };
}

export interface Experience {
  company: string;
  url?: string;
  role: string;
  period: string;
  points: string[];
}

export interface SkillCategory {
  category: string;
  tools: string;
}

export interface Education {
  institution: string;
  url?: string;
  degree: string;
  period: string;
  details: string;
}