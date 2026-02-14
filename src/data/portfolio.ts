import { Project, Skill, AboutMe } from '@/types';

export const projects: Project[] = [
  {
    id: 'metagenai',
    title: 'MetagenAI',
    description: 'Enterprise metadata ingestion and retrieval platform for LLM systems',
    longDescription: 'Architected and deployed a production-grade AI metadata platform.',
    image: '/projects/metagenai.jpg',
    tags: ['AI/ML', 'Cloud'],
    technologies: ['Python', 'OpenAI API', 'LangGraph', 'AWS Lambda'],
    githubUrl: 'https://github.com/Omizzy24',
    featured: true,
    impact: ['50% improvement', '$2M funding', 'Enterprise-scale'],
  },
];

export const skills: Skill[] = [
  { name: 'OpenAI API', category: 'ai', level: 5, icon: 'SiOpenai' },
  { name: 'LangGraph', category: 'ai', level: 5, icon: 'FaBrain' },
  { name: 'AWS Lambda', category: 'cloud', level: 5, icon: 'SiAwslambda' },
  { name: 'Python', category: 'backend', level: 5, icon: 'FaPython' },
  { name: 'Terraform', category: 'devops', level: 5, icon: 'SiTerraform' },
];

export const aboutMe: AboutMe = {
  name: 'Omar Al-Shammary',
  title: 'Applied AI / Machine Learning Engineer',
  subtitle: 'Production Generative AI Systems | Cloud Infrastructure',
  bio: 'I architect and deploy production-scale AI systems.',
  email: 'omar.alshammary@proton.me',
  github: 'https://github.com/Omizzy24',
  linkedin: 'https://linkedin.com/in/omar-al-shammary',
  resumeUrl: '/resume.pdf',
  highlights: [
    { metric: '$2M', label: 'AI Funding Secured' },
    { metric: '95%', label: 'Cost Reduction' },
  ],
};
