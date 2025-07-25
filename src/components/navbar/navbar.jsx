import React from 'react';
import '../../components/componantStyle.css';
import logo from '../../assests/logoOriginal.png';
import { Link } from 'react-scroll';
import contactImg from '../../assests/contactMe.png'

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className='logo' />
            <div className="desktopMenu">
                <Link className="desktopMenuListItem">Home</Link>
                <Link className="desktopMenuListItem">About</Link>
                <Link className="desktopMenuListItem">Portfolio</Link>
                <Link className="desktopMenuListItem">Client</Link>
            </div>
            <button className="desktopMenuBtn">
                <img src={contactImg} alt="" className="desktopMenuIcon" />Contact me
            </button>
        </nav>
    )
}

export default Navbar