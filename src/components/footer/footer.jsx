import React from 'react';
import { Link } from 'react-scroll';
import Gmail from '../../assests/gmail.svg';
import Instagram from '../../assests/instagram.svg';

const Footer = () => {
    return (
        <footer className="portfolio-footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <h2>Jenil Sali</h2>
                    <p>Software Development Engineer - I</p>
                </div>

                <div className="footer-links">
                    <Link
                        onClick={() => {
                            document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Home
                    </Link>
                    <Link
                        onClick={() => {
                            document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        About
                    </Link>
                    <Link
                        onClick={() => {
                            document.getElementById('skillSection')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Skills
                    </Link>
                    <Link
                        onClick={() => {
                            document.getElementById('contactUs')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Contact Me
                    </Link>
                </div>

                <div className="footer-socials">
                    <a href="https://github.com/jenil-sali" target="_blank" aria-label="GitHub">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
                    </a>
                    <a href="https://linkedin.com/in/jenil-sali" target="_blank" aria-label="LinkedIn">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" />
                    </a>
                    <a href="mailto:jenilsali2508@gmail.com" target="_blank" aria-label="Email">
                        <img src={Gmail} alt="Email" />
                    </a>
                    <a href="https://www.instagram.com/__.j_e_n_u.__/" target="_blank" aria-label="Instagram">
                        <img src={Instagram} alt="Instagram" />
                    </a>
                </div>
            </div>

            <div className="footer-bottom">
                &copy; 2025 Jenil Sali. All rights reserved.
            </div>
        </footer>

    )
}

export default Footer