import React from 'react';
import '../../components/componantStyle.css';
import logo from '../../assests/logoOriginal.png';
import { Link } from 'react-scroll';
import contactImg from '../../assests/pdf-file-format.png'

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className='logo' />
            <div className="desktopMenu">
                <Link className="desktopMenuListItem">Home</Link>
                <Link className="desktopMenuListItem">About</Link>
                <Link className="desktopMenuListItem">Skills</Link>
            </div>
            <button className="desktopMenuBtn">
                <img src={contactImg} alt="" className="desktopMenuIcon" />Resume
            </button>
        </nav>
    )
}

export default Navbar