import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '@/data/portfolio';
import { Skill } from '@/types';
import './Skills.scss';

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [filter, setFilter] = useState<string>('all');

  const categories = ['all', 'ai', 'cloud', 'data', 'backend', 'database', 'devops', 'frontend'];
  const categoryLabels: Record<string, string> = {
    all: 'All',
    ai: 'AI/ML',
    cloud: 'Cloud',
    data: 'Data Engineering',
    backend: 'Backend',
    database: 'Databases',
    devops: 'DevOps',
    frontend: 'Frontend',
  };
  
  const filteredSkills = filter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === filter);

  const renderSkillLevel = (level: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span 
        key={i} 
        className={`skill-card__level-dot ${i < level ? 'active' : ''}`}
        aria-hidden="true"
      />
    ));
  };

  return (
    <section className="skills section" id="skills" ref={ref}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Technical Expertise
        </motion.h2>
        
        <div className="skills__filters">
          {categories.map(category => (
            <button
              key={category}
              className={`skills__filter ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
              aria-pressed={filter === category}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </div>
        
        <motion.div 
          className="skills__grid"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filteredSkills.map((skill: Skill, index: number) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.03 }}
            >
              <div className="skill-card__content">
                <h3 className="skill-card__name">{skill.name}</h3>
                <div className="skill-card__level">
                  {renderSkillLevel(skill.level)}
                  <span className="sr-only">Skill level: {skill.level} out of 5</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
