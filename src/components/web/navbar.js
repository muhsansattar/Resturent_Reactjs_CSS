import React, { useState } from "react";
import './navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <div className="fixed-width">
            <nav>
                <a href="#"><img className="amplify-logo" src="" alt="Amplify Logo" /></a>
                <div className="toggle-button" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={menuOpen ? 'active' : ''}>
                    <li><a className="lato-bold" href="#">Home</a></li>
                    <li><a className="lato-bold" href="#">About Us</a></li>
                    <li><a className="lato-bold" href="#">Our Services</a></li>
                    <li><a className="lato-bold" href="#">Portfolio</a></li>
                    <li><a className="lato-bold" href="#">Contact Us</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
