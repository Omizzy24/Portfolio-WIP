import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '@/data/portfolio';
import { Project } from '@/types';
import './Projects.scss';

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [filter, setFilter] = useState<string>('all');

  const tags = ['all', ...Array.from(new Set(projects.flatMap((p: Project) => p.tags)))];
  
  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter((p: Project) => p.tags.includes(filter));

  return (
    <section className="projects section" id="projects" ref={ref}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        
        <div className="projects__filters">
          {tags.map((tag: string) => (
            <button
              key={tag}
              className={`projects__filter ${filter === tag ? 'active' : ''}`}
              onClick={() => setFilter(tag)}
              aria-pressed={filter === tag}
            >
              {tag.charAt(0).toUpperCase() + tag.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="projects__grid">
          {filteredProjects.map((project: Project, index: number) => (
            <motion.article
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="project-card__image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-card__overlay">
                  <div className="project-card__links">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <FaGithub />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} live demo`}
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="project-card__content">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">{project.description}</p>
                
                {project.impact && project.impact.length > 0 && (
                  <div className="project-card__impact">
                    {project.impact.map((item: string, idx: number) => (
                      <span key={idx} className="project-card__impact-item">
                        {item}
                      </span>
                    ))}
                  </div>
                )}
                
                <div className="project-card__technologies">
                  {project.technologies.slice(0, 4).map((tech: string) => (
                    <span key={tech} className="project-card__tech">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="project-card__tech">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
