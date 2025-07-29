import React, { useState } from "react";
import '../../components/componantStyle.css';
import logo from '../../assests/logoOriginal.svg';
import { Link } from 'react-scroll';
import contactImg from '../../assests/pdf-file-format.png'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleResumeDownload = () => {
        const link = document.createElement('a');
        link.href = '/resume.pdf'; // path relative to public/
        link.download = 'Resume_JenilSali_SDE-I.pdf'; // optional: custom filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo" />

            {/* Mobile Right Section: icon + menu toggle */}
            <div className="mobile-controls">
                <button className="iconOnlyBtn" title="Download Resume" onClick={handleResumeDownload}>
                    <img src={contactImg} alt="Resume" className="iconOnlyIcon" />
                </button>

                <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>

            {/* Navigation Menu */}
            <div className={`desktopMenu ${menuOpen ? "showMenu" : ""}`}>
                <Link
                    className="desktopMenuListItem"
                    onClick={() => {
                        setMenuOpen(false);
                        document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                >
                    Home
                </Link>

                <Link
                    className="desktopMenuListItem"
                    onClick={() => {
                        setMenuOpen(false);
                        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                >
                    About
                </Link>

                <Link
                    className="desktopMenuListItem"
                    onClick={() => {
                        setMenuOpen(false);
                        document.getElementById('skillSection')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                >
                    Skills
                </Link>
            </div>

            <button className="desktopMenuBtn" onClick={handleResumeDownload}>
                <img src={contactImg} alt="Resume" className="desktopMenuIcon" />
                Resume
            </button>
        </nav>
    );
}

export default Navbar