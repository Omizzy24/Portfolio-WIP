import { Project, Skill } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Cloud Infrastructure Automation',
    description: 'Automated AWS infrastructure deployment using Terraform and CI/CD pipelines',
    longDescription: 'Built a comprehensive infrastructure-as-code solution that reduced deployment time by 70% and improved system reliability.',
    image: '/projects/cloud-infra.jpg',
    tags: ['Cloud', 'DevOps'],
    technologies: ['AWS', 'Terraform', 'Docker', 'Kubernetes', 'GitHub Actions'],
    githubUrl: 'https://github.com/Omizzy24',
    featured: true,
  },
  {
    id: '2',
    title: 'Real-time Data Analytics Platform',
    description: 'Scalable data processing pipeline handling millions of events per day',
    longDescription: 'Designed and implemented a real-time analytics platform using serverless architecture and stream processing.',
    image: '/projects/analytics.jpg',
    tags: ['Data Science', 'Backend'],
    technologies: ['Python', 'AWS Lambda', 'DynamoDB', 'Kinesis', 'Apache Spark'],
    githubUrl: 'https://github.com/Omizzy24',
    featured: true,
  },
  {
    id: '3',
    title: 'Modern Web Application',
    description: 'Full-stack application with React, TypeScript, and Node.js',
    longDescription: 'Developed a performant web application with focus on user experience and accessibility.',
    image: '/projects/webapp.jpg',
    tags: ['Frontend', 'Backend'],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/Omizzy24',
    featured: true,
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'frontend', level: 5, icon: 'FaReact' },
  { name: 'TypeScript', category: 'frontend', level: 5, icon: 'SiTypescript' },
  { name: 'JavaScript', category: 'frontend', level: 5, icon: 'FaJs' },
  { name: 'HTML/CSS', category: 'frontend', level: 5, icon: 'FaHtml5' },
  { name: 'SCSS', category: 'frontend', level: 4, icon: 'FaSass' },
  
  // Backend
  { name: 'Node.js', category: 'backend', level: 5, icon: 'FaNode' },
  { name: 'Express', category: 'backend', level: 4, icon: 'SiExpress' },
  { name: 'Python', category: 'backend', level: 5, icon: 'FaPython' },
  { name: 'PostgreSQL', category: 'backend', level: 4, icon: 'SiPostgresql' },
  
  // Cloud
  { name: 'AWS', category: 'cloud', level: 5, icon: 'FaAws' },
  { name: 'Lambda', category: 'cloud', level: 5, icon: 'SiAwslambda' },
  { name: 'DynamoDB', category: 'cloud', level: 4, icon: 'SiAmazondynamodb' },
  { name: 'S3', category: 'cloud', level: 5, icon: 'SiAmazons3' },
  
  // Data Science
  { name: 'Pandas', category: 'data', level: 4, icon: 'SiPandas' },
  { name: 'NumPy', category: 'data', level: 4, icon: 'SiNumpy' },
  { name: 'TensorFlow', category: 'data', level: 3, icon: 'SiTensorflow' },
  
  // Tools
  { name: 'Docker', category: 'tools', level: 5, icon: 'FaDocker' },
  { name: 'Kubernetes', category: 'tools', level: 4, icon: 'SiKubernetes' },
  { name: 'Terraform', category: 'tools', level: 4, icon: 'SiTerraform' },
  { name: 'Git', category: 'tools', level: 5, icon: 'FaGit' },
];

export const aboutMe = {
  name: 'Omar Al-Shammary',
  title: 'Software Engineer | Data Scientist | Cloud Architect',
  bio: `I'm a passionate technologist who loves building scalable solutions that make a difference. 
  With expertise spanning full-stack development, cloud architecture, and data science, I bring a 
  unique perspective to solving complex problems. I thrive on learning new technologies and 
  applying them to create innovative, user-centric applications.`,
  email: 'omar.alshammary@proton.me',
  github: 'https://github.com/Omizzy24',
  linkedin: 'https://linkedin.com/in/omar-al-shammary',
  resumeUrl: '/resume.pdf',
};
