import React from 'react'
import Profile from './Profile'
import Hamburger from './Hamburger';
import Logo from './Logo';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Hamburger />
            <Logo />
            <Profile/>            
        </nav>
    )
}

export default Navbar;
