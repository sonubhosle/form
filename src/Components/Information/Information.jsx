import React, { useState, useEffect } from "react";
import './Information.css'
const Information = () => {
      const menus = [
        {
          id: "Real Projects",
          label: "Real Projects",
          title: "Welcome to Menu 1",
          description: "This is a detailed description for Menu 1. It includes more text and even an image.",
          image: "https://via.placeholder.com/300x150/ff9999/fff?text=Menu+1",
          color: "#ff9999",
        },
        {
          id: "Experienced Mentors",
          label: "Experienced Mentors",
          title: "Explore Menu 2",
          description: "Here is some more content for Menu 2. This section can have a longer paragraph or list.",
          image: "https://via.placeholder.com/300x150/99ccff/fff?text=Menu+2",
          color: "#99ccff",
        },
        {
          id: "Flexible Shedule",
          label: "Flexible Shedule",
          title: "Discover Menu 3",
          description: "Menu 3 contains even more content. Feel free to add as much detail as you need!",
          image: "https://via.placeholder.com/300x150/99ff99/fff?text=Menu+3",
          color: "#99ff99",
        },
      ];
    
      const [activeIndex, setActiveIndex] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setActiveIndex((prevIndex) => (prevIndex + 1) % menus.length);
        }, 3000); // Change every 3 seconds
    
        return () => clearInterval(interval); // Cleanup on unmount
      }, []);
    
      return (
        <div className="menu-container">
          <div className="menu-buttons">
            {menus.map((menu, index) => (
          <div key={menu.id}  onClick={() => setActiveIndex(index)} className={`menu-button ${activeIndex === index ? "active" : ""}`} >
          {menu.label}
        </div>
            ))}
          </div>
    
          <div className="content">
            <h2>{menus[activeIndex].title}</h2>
            <p>{menus[activeIndex].description}</p>
            <img src={menus[activeIndex].image} alt={menus[activeIndex].title} />
          </div>
        </div>
      );
    };
    
    
    
export default Information;
