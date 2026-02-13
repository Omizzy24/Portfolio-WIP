import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { aboutMe } from '@/data/portfolio';
import './About.scss';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="about section" id="about" ref={ref}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        
        <div className="about__content">
          <motion.div 
            className="about__text"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>{aboutMe.bio}</p>
            
            <div className="about__highlights">
              <div className="about__highlight">
                <h3>5+</h3>
                <p>Years Experience</p>
              </div>
              <div className="about__highlight">
                <h3>20+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="about__highlight">
                <h3>10+</h3>
                <p>Technologies Mastered</p>
              </div>
            </div>
            
            <a 
              href={aboutMe.resumeUrl} 
              className="btn btn-primary"
              download
              aria-label="Download resume"
            >
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
