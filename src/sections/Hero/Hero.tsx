import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import { aboutMe } from '@/data/portfolio';
import './Hero.scss';

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      <div className="hero__background">
        <div className="hero__gradient"></div>
      </div>
      
      <div className="container hero__content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="hero__name">{aboutMe.name}</h1>
          <h2 className="hero__title">{aboutMe.title}</h2>
          <p className="hero__subtitle">{aboutMe.subtitle}</p>
          {aboutMe.location && (
            <p className="hero__location">{aboutMe.location}</p>
          )}
          
          <div className="hero__cta">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
              aria-label="View my projects"
            >
              View Projects
            </button>
            <button 
              className="btn btn-outline"
              onClick={() => scrollToSection('contact')}
              aria-label="Contact me"
            >
              Get In Touch
            </button>
          </div>
          
          <div className="hero__social">
            <a 
              href={aboutMe.github} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
            <a 
              href={aboutMe.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
            <a 
              href={`mailto:${aboutMe.email}`}
              aria-label="Email me"
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.div>
      </div>
      
      <motion.button
        className="hero__scroll"
        onClick={() => scrollToSection('about')}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        aria-label="Scroll to about section"
      >
        <FaChevronDown />
      </motion.button>
    </section>
  );
};

export default Hero;
