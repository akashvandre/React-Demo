import React from 'react';
import './style.css';

const SocialMediaIcons = props => {
    return (
        <ul className="social_media_icons">
            <li>
                <a href="#"><i class="fa fa-facebook"></i></a>
            </li>
            <li>
                <a href="#"><i class="fa fa-twitter"></i></a>

            </li>
            <li>
                <a href="#"><i class="fa fa-google-plus"></i></a>
            </li>
            <li>
                <a href="#"><i class="fa fa-instagram"></i></a>
            </li>

        </ul>
    );
}

export default SocialMediaIcons;