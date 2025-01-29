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
      
  </header>

  )
}

export default Navigation