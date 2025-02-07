import React, { useState, useEffect } from "react";
import './Information.css';
import { information } from "./info";

const Information = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % information.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="menu-container">
      <div className="menu-buttons">
        {information.map((menu, index) => (
          <div
            key={menu.id}
            onClick={() => setActiveIndex(index)}
            className={`menu-button ${activeIndex === index ? "active" : ""}`}
          >
            {menu.label}
          </div>
        ))}
      </div>

      <div className="content">
        <div className="section_heading">
          <h2>{information[activeIndex].label}</h2>
          <p>{information[activeIndex].desc}</p>
        </div>

        {/* Displaying info_array */}
        <h3>{information[activeIndex].sub_heading}</h3>
        <div className="grid_one">
          {information[activeIndex].info_array.map((item, index) => (
            <div className="card_one" key={index}>{item.value}</div>
          ))}
        </div>

        {/* Displaying details_array */}
        <h3>{information[activeIndex].content_heading}</h3>
        <div  className="grid_two">
          {information[activeIndex].details_array.map((detail, index) => (
            <div className="card_two" key={index}>
              <h4>{detail.title}</h4>
              <span>{detail.info}</span>
            </div>
          ))}
        </div>

        <p>{information[activeIndex].para}</p>
      </div>
    </div>
  );
};

export default Information;
