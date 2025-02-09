import React, { useEffect, useState } from 'react'
import './Navigation.css'
import { Link } from 'react-router-dom';
import { PiStudentBold } from "react-icons/pi";

import { FaRegHandPointLeft } from "react-icons/fa";

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
      <Link className="logo">
      <div className="icon"><PiStudentBold color='#2D336B' size={50} /></div>
      <div className="details">
        <div className="name">SKY BRICKS</div>
        <div className="slogan">Think Develop Achieve</div>
      </div>
      </Link>

      <div className="meuns flex items-center gap-20">
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to="/pricing" className='color'> Pricing</Link>
        <Link to='/career'>Career</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/apply' className='button'>    Apply Now <p><FaRegHandPointLeft size={24} color='white'/></p></Link>
      </div>

    </header>

  )
}

export default Navigation