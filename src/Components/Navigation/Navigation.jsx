import React, { useEffect, useState } from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
import { PiStudentBold } from "react-icons/pi";
import { FaRegHandPointLeft } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);


  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };


  return (
    <header className='navbar'>
      <Link className="logo">
        <div className="icon"><PiStudentBold color='#2D336B' size={50} /></div>
        <div className="details">
          <div className="name">SKY BRICKS</div>
          <div className="slogan">Think Develop Achieve</div>
        </div>
      </Link>

      {/* Menu Links - These will show only if the menu is open */}
      <div className={`meuns ${menuOpen ? 'show-menu' : ''} flex items-center gap-20`}>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to="/pricing" className='color'>Pricing</Link>
        <Link to='/career'>Career</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/apply' className='button'>
          Apply Now <p><FaRegHandPointLeft size={24} color='white' /></p>
        </Link>
      </div>

      {/* Hamburger Icon - This shows when the menu is closed */}
      <div className={`hamburger-menu ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        {!menuOpen ? <IoMenu className='menu_icon' size={30}/> : <IoClose className='close_icon' size={30}/>}
      </div>
    </header>
  );
};

export default Navigation;
