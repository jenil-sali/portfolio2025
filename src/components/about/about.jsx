import React from 'react';
import { motion } from 'framer-motion';
import { Code2, MonitorPlay, Layers } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section section-container">
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="tech-text">01.</span> About Me
      </motion.h2>

      <div className="about-content">
        <motion.div
          className="about-text-container"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="about-description">
            I am a passionate and dedicated Software Developer with hands-on experience in crafting scalable and efficient software solutions.
            I specialize in building robust web applications using modern programming languages, frameworks, and development tools.
          </p>
          <p className="about-description">
            With a strong foundation in software engineering principles, I thrive in solving complex problems, optimizing performance, and delivering clean, maintainable code.
            I’m also well-versed in Agile methodologies, allowing me to collaborate effectively in fast-paced team environments.
          </p>

          <div className="focus-areas">
            <div className="focus-item">
              <Code2 className="focus-icon" />
              <div>
                <h3>Software Development</h3>
                <p>Building robust and scalable applications using clean, efficient code.</p>
              </div>
            </div>
            <div className="focus-item">
              <Layers className="focus-icon" />
              <div>
                <h3>System Architecture</h3>
                <p>Designing modern, responsive systems that are optimized for scale.</p>
              </div>
            </div>
            <div className="focus-item">
              <MonitorPlay className="focus-icon" />
              <div>
                <h3>UI / UX Engineering</h3>
                <p>Focusing on intuitive, user-centered designs that enhance experience.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="about-stats-container"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-value">2+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">Multi</div>
              <div className="stat-label">Production Systems</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">Full Stack</div>
              <div className="stat-label">Development Focus</div>
            </div>
            <div className="stat-card highlight">
              <div className="stat-value">Open</div>
              <div className="stat-label">To Opportunities</div>
            </div>
          </div>

          <div className="name-acronym">
            <h3 className="tech-text mb-2">/whoami</h3>
            <ul>
              <li><span className="accent-text">J</span> – Just makes things work</li>
              <li><span className="accent-text">E</span> – Engineer of scalable systems</li>
              <li><span className="accent-text">N</span> – Navigating code with clarity</li>
              <li><span className="accent-text">I</span> – Innovating via clean architecture</li>
              <li><span className="accent-text">L</span> – Lover of logic & UX</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
