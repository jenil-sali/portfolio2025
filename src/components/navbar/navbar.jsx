import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, TerminalSquare } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Jenil_Sali_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="hero" smooth={true} className="nav-brand">
          <TerminalSquare className="brand-icon" size={24} />
          <span className="brand-text">JS_</span>
        </Link>

        <div className="nav-links desktop-only">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              spy={true}
              offset={-80}
              className="nav-item"
              activeClass="active"
            >
              {link.name}
            </Link>
          ))}
          <button className="btn-primary" onClick={handleResumeDownload}>
            Resume
          </button>
        </div>

        <div className="mobile-only">
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.to}
            smooth={true}
            spy={true}
            offset={-80}
            className="mobile-nav-item"
            activeClass="active"
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        <button className="btn-primary mobile-resume-btn" onClick={handleResumeDownload}>
          Download Resume
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
