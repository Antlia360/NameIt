import React from 'react';
import './Header.css';
import Logo from './logo.svg';




const Header = ({ headTitle, headerExpanded }) => {
    return (
        <div className="head-container">
            <img src={Logo}
                className={`head-image ${headerExpanded ? 'head-image-expanded' : 'head-image-contracted'}`}
                alt="headerImage">

            </img>
            <h1 className={`head-text ${headerExpanded
                ? 'head-text-expanded'
                : 'head-text-contracted'}`}>
                {headTitle}</h1>
        </div>
    );
};

export default Header;
