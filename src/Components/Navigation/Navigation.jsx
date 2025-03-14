import React, { useState } from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
import { PiStudentBold } from "react-icons/pi";
import { IoMenu, IoClose } from "react-icons/io5";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className='navbar'>
      <Link className="logo">
            <img src="https://i.postimg.cc/d0Jc0sFF/LOGO.jpg" alt="" />
          <div className="name">THE SKYBRISK</div>

      </Link>

      {/* Menu Links */}
      <div className={`meuns ${menuOpen ? 'show-menu' : ''}`}>
        <Link to='/' onClick={toggleMenu}>Home</Link>
        <Link to='/projects' onClick={toggleMenu}>Projects</Link>
        <Link to='/students/freshers' onClick={toggleMenu}>Students & Freshers</Link>
        <Link to='/career' onClick={toggleMenu}>Career</Link>
        <Link to="/pricing" className='color' onClick={toggleMenu}>Pricing</Link>
        <Link to='/apply' onClick={toggleMenu}>Apply</Link>
        <Link to='/about' onClick={toggleMenu}>About</Link>
        <Link to='/contact' onClick={toggleMenu}>Contact</Link>
        <Link to='/privacy_policies'  onClick={toggleMenu}>Privacy Policy</Link>
        <Link to='/term_conditions'  onClick={toggleMenu}>Terms & Conditions</Link>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger-menu" onClick={toggleMenu}>
        {menuOpen ? <IoMenu className='close_icon' size={30} /> : <IoMenu className='menu_icon' size={30} />}
      </div>
    </header>
  );
};

export default Navigation;
