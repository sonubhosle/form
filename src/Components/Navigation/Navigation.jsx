import React, { useEffect, useState } from 'react'
import './Navigation.css'
import { Link } from 'react-router-dom';

import { FaRegHandPointRight } from "react-icons/fa";

const Navigation = () => {

  const [scrolling, setScrolling] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const toggleProfileMenu = () => {
    setIsProfileOpen(prev => !prev);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className={`navbar ${scrolling ? 'scrolled' : ''}`}>
      <div className="logo">Logo</div>

      <div className="meuns flex items-center gap-20">
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/career'>Career</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/apply' className='button'><FaRegHandPointRight size={24} color='white'/> Apply Now</Link>
      </div>

    </header>

  )
}

export default Navigation