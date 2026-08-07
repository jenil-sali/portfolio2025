import React from 'react';
import { Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-content">
          
          <div className="footer-brand-info">
            <h3 className="tech-text">Jenil Sali</h3>
            <p className="footer-role">Software Development Engineer</p>
            <div className="system-status">
              <span className="pulse-dot green"></span>
              SYSTEM ONLINE
            </div>
          </div>

          <div className="footer-socials">
            <a href="https://github.com/jenil-sali" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
              <i className="fa-brands fa-github" style={{ fontSize: '20px' }}></i>
            </a>
            <a href="https://linkedin.com/in/jenil-sali" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin" style={{ fontSize: '20px' }}></i>
            </a>
            <a href="mailto:jenilsali2508@gmail.com" className="social-link" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>

        </div>

        <div className="footer-bottom">
          <p className="copyright">&copy; {new Date().getFullYear()} Jenil Sali.</p>
          <p className="tech-stack-info">Built with React • Designed & Developed by Jenil</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
