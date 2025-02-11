import React from 'react'
import './Pricing.css'
import { Link } from 'react-router-dom'
import Heading from '../../Components/Heading/Heading'
import { FaCheck } from "react-icons/fa";

const price_data = [
  {
    "id": 1,
    "heading": "Standard ID Card",
    "price": "₹100",
    "sub_text": "Mandatory ID card for all interns to participate.",
    "features": [
      {
        "f1": "Basic ID card"
      }
    ],
    "path": "/login"
  },
  {
    "id": 2,
    "heading": "Premium ID Card",
    "price": "₹200",
    "sub_text": "Includes exclusive workshops, networking, and a certificate of completion.",
    "features": [
      {
        "f1": "Premium ID card with additional perks"
      },
      {
        "f1": "Access to workshops & networking events"
      },
      {
        "f1": "Certificate of completion"
      }
    ],
    "path": "/login"
  },
]

const Pricing = () => {
  return (
    <>
      <Heading heading={'Choose Your Internship Package'} subtitle={'Select a package that best suits your learning goals and time commitment.'} />
      <div className='pricing_section'>
        {price_data.map((item) => {
          const isPremium = item.price === "₹200"; 
          return (
            <div className={`price_card ${item.price === "₹200" ? "highlight" : ""}`} key={item.id}>
            <div className="heading">🚀{item.heading}</div>
            <div className="price">{item.price}</div>
            <div className="sub_text">{item.sub_text}</div>
            <div className="features">
              {item.features.map((fea, indx) =>{
                return(
                  <div className="feature" key={indx}>
                    <div className="check"><FaCheck  color='green'/></div>
                    <div className="fea">{fea.f1}</div>
                  </div>
                )
              } )}
            </div>
            <div className="btn_start">
              <Link to={item.path} className={item.price === "₹200" ? "premium_btn" : ""}>Get Started</Link>
            </div>
          </div>
          
          );
        })}
      </div>
    </>
  );
};
export default Pricing