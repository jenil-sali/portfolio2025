import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Database, Globe, Server, CheckCircle2 } from 'lucide-react';
import './Hero.css';

const SystemVisual = () => {
  const [uptime, setUptime] = useState(99.9);

  useEffect(() => {
    const interval = setInterval(() => {
      setUptime(prev => prev >= 99.99 ? 99.9 : prev + 0.01);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="system-visual">
      <div className="console-header">
        <div className="console-dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <div className="console-title">system_status</div>
      </div>
      
      <div className="console-body">
        <div className="console-row">
          <span className="tech-text prompt">&gt; developer.init()</span>
        </div>
        
        <div className="console-section">
          <span className="console-label">stack:</span>
          <div className="status-grid">
            <div className="status-item"><Globe size={14}/> React <CheckCircle2 size={12} className="status-ok" /></div>
            <div className="status-item"><Server size={14}/> Node.js <CheckCircle2 size={12} className="status-ok" /></div>
            <div className="status-item"><Server size={14}/> Laravel <CheckCircle2 size={12} className="status-ok" /></div>
            <div className="status-item"><Database size={14}/> MySQL <CheckCircle2 size={12} className="status-ok" /></div>
          </div>
        </div>

        <div className="console-section mt-3">
          <span className="console-label">services:</span>
          <ul className="service-list">
            <li><span className="pulse-dot"></span> API Gateway</li>
            <li><span className="pulse-dot"></span> Redis Cache</li>
            <li><span className="pulse-dot"></span> WebSockets</li>
          </ul>
        </div>
        
        <div className="console-footer">
          <span className="tech-text uptime">uptime: {uptime.toFixed(2)}%</span>
          <span className="cursor-blink">_</span>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="hero-section section-container">
      <div className="hero-content">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="availability-badge">
            <span className="pulse-dot green"></span>
            AVAILABLE FOR OPPORTUNITIES
          </div>
          
          <h1 className="hero-title">
            Hi, I'm <span className="accent-text">Jenil Sali</span>.
          </h1>
          <h2 className="hero-subtitle">Software Developer</h2>
          
          <p className="hero-description">
            Building scalable web applications, robust APIs, and real-world software systems designed for performance and reliability.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="/resume.pdf" download="Jenil_Sali_Resume.pdf" className="btn-secondary">Download Resume</a>
          </div>

          <div className="hero-tech">
            <span className="tech-text">React</span>
            <span className="tech-separator">•</span>
            <span className="tech-text">Node.js</span>
            <span className="tech-separator">•</span>
            <span className="tech-text">Laravel</span>
            <span className="tech-separator">•</span>
            <span className="tech-text">MySQL</span>
            <span className="tech-separator">•</span>
            <span className="tech-text">JavaScript</span>
          </div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <SystemVisual />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
