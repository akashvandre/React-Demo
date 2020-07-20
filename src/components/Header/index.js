import React from 'react';
import './style.css';
import SocialMediaIcons from "../SocialMediaIcons";

const Header = props => {
    return (
        <header className="header">
            <nav className="headerMenu">
                <a href="#">Home</a> 
                <a href="#">About Us</a>
                <a href="#">Contact Us</a>
            </nav>
            <div>
                <SocialMediaIcons/>
            </div>
        </header>
    );
}

export default Header;