import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';
import './Projects.css';
import escalixVideo from '../../assests/Glimps_of_Escalix.mp4';
import intalkVideo from '../../assests/intalk_video.mp4';

const Projects = () => {
  return (
    <section id="projects" className="projects-section section-container">
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="tech-text">04.</span> Featured Projects
      </motion.h2>

      <div className="projects-container">

        <motion.div
          className="featured-project-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="project-visual">
            <div className="visual-overlay"></div>
            <video
              src={intalkVideo}
              autoPlay
              loop
              muted
              playsInline
              className="project-video"
            />
          </div>

          <div className="project-info">
            <div className="project-header">
              <span className="tech-text highlight">PROJECT / PROFESSIONAL EXPERIENCE</span>
              <h3 className="project-title">Intalk.io — Enterprise Communication Platform</h3>
            </div>

            <div className="project-description">
              <p>
                An enterprise contact center and omnichannel communication platform designed for scalability and high availability.
              </p>
              <p>
                Engineered robust backend modules using Laravel, Node.js, and Redis. Implemented real-time workflows and advanced VoIP functionalities using FreeSWITCH and Lua scripting.
              </p>
            </div>

            <div className="project-tech-stack">
              <span>Laravel</span>
              <span>Node.js</span>
              <span>AngularJS</span>
              <span>MySQL</span>
              <span>Redis</span>
              <span>FreeSWITCH</span>
              <span>WebSockets</span>
              <span>Lua</span>
            </div>

            <div className="project-links">
              {/* Added a placeholder or generic link if applicable, or just leave demo */}
              <a href="https://intalk.io" target="_blank" rel="noopener noreferrer" className="btn-primary">
                <PlayCircle size={18} /> View Platform
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="featured-project-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="project-visual">
            <div className="visual-overlay"></div>
            <video
              src={escalixVideo}
              autoPlay
              loop
              muted
              playsInline
              className="project-video"
            />
            {/* <div className="status-badge">
              <span className="pulse-dot green"></span>
              LIVE SYSTEM
            </div> */}
          </div>

          <div className="project-info">
            <div className="project-header">
              <span className="tech-text highlight">PROJECT / FEATURED</span>
              <h3 className="project-title">Escalix — Predict. Alert. Act.</h3>
            </div>

            <div className="project-description">
              <p>
                An AI-powered infrastructure monitoring and intelligent alert escalation platform designed to predict and prevent downtime before it impacts users.
              </p>
              <p>
                Provides real-time monitoring, predictive anomaly detection, IVR-based voice alerts, Slack & Microsoft Teams integrations, and multi-tenant server management for Linux and Windows environments.
              </p>
            </div>

            <div className="project-tech-stack">
              <span>React.js</span>
              <span>TailwindCSS</span>
              <span>Framer Motion</span>
              <span>GoLang</span>
              <span>PostgreSQL</span>
              <span>Redis</span>
              <span>WebSockets</span>
              <span>AI Analytics</span>
            </div>

            <div className="project-links">
              <a href="https://github.com/Escalix-incident-prediction/Escalix" target="_blank" rel="noopener noreferrer" className="btn-primary">
                <i className="fa-brands fa-github" style={{ fontSize: '18px' }}></i> Source Code
              </a>
              <a href="#demo" className="btn-secondary" onClick={(e) => e.preventDefault()}>
                <PlayCircle size={18} /> View Demo
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
