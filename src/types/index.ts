export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  impact?: string[];
}

export interface Skill {
  name: string;
  category: 'ai' | 'cloud' | 'data' | 'backend' | 'database' | 'devops' | 'frontend';
  level: number; // 1-5
  icon: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface Highlight {
  metric: string;
  label: string;
}

export interface AboutMe {
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  highlights: Highlight[];
}
