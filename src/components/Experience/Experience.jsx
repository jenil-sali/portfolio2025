import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    id: 1,
    role: "Software Development Engineer I",
    company: "Agami Tech Pvt. Ltd.",
    year: "July 2024 - May 2026",
    tech: ["Laravel", "MySQL", "Redis", "FreeSWITCH", "Lua", "Node.js"],
    description: "Improved platform reliability for enterprise communication systems by engineering backend modules. Reduced downtime by diagnosing production issues on Linux servers. Optimized performance via Redis caching and extended capabilities with FreeSWITCH and Lua scripting."
  },
  {
    id: 2,
    role: "Software Development Intern",
    company: "Agami Tech Pvt. Ltd.",
    year: "January 2024 - July 2024",
    tech: ["Laravel", "MySQL", "Redis", "Git", "Linux"],
    description: "Supported on-time feature delivery by assisting in backend development of Laravel-based applications. Improved integration stability by debugging API issues and built foundational backend skills."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section section-container">
      <motion.h2 
        className="section-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="tech-text">02.</span> Experience
      </motion.h2>

      <div className="timeline-container">
        <div className="timeline-line"></div>
        
        {experiences.map((exp, index) => (
          <motion.div 
            key={exp.id}
            className="timeline-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="timeline-node">
              <div className="node-core"></div>
            </div>
            
            <div className="timeline-content">
              <div className="timeline-header">
                <h3 className="role">{exp.role}</h3>
                <span className="tech-text year">{exp.year}</span>
              </div>
              <div className="company">
                <Briefcase size={16} className="company-icon" />
                {exp.company}
              </div>
              
              <p className="description">{exp.description}</p>
              
              <div className="tech-stack">
                {exp.tech.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
