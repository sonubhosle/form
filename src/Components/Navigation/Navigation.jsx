import React, { useEffect, useState } from 'react'
import './Navigation.css'
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
    <nav className="nav-menu">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </nav>
    <div className="search-profile">
      <input type="text" placeholder="Search..." />
      <div className="profile" onClick={toggleProfileMenu}>
        Profile
        <div className={`dropdown ${isProfileOpen ? 'open' : ''}`}>
          <ul>
            <li>Settings</li>
            <li>Log Out</li>
          </ul>
        </div>
      </div>
    </div>
  </header>

  )
}

export default Navigation