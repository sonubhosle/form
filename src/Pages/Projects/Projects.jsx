import React from 'react'
import './Projects.css'
import Heading from '../../Components/Heading/Heading'
import { Link } from 'react-router-dom'

const projects = [
  {
    "id":1,
    "img":"https://www.thedevelopersarena.com/assets/images/ecommerce.png",
    "name":"E-commerce Websites",
    "desc":"Complete solutions for online shopping with cart, payment, and inventory management."
  },
  {
    "id":2,
    "img":"https://www.thedevelopersarena.com/assets/images/professional.png",
    "name":"Professional Websites",
    "desc":"Showcase your business or portfolio with sleek, modern designs."
  },
  {
    "id":3,
    "img":"https://www.thedevelopersarena.com/assets/images/blog.png",
    "name":"Blog Websites",
    "desc":"Share your ideas with the world using feature-rich, SEO-friendly blogs."
  },
  {
    "id":4,
    "img":"https://www.thedevelopersarena.com/assets/images/responsive.png",
    "name":"Responsive Web Applications",
    "desc":"Seamless experiences across all devices and screen sizes."
  },
  {
    "id":5,
    "img":"https://www.thedevelopersarena.com/assets/images/modern.png",
    "name":"Modern UI Development",
    "desc":"Interactive, user-friendly designs with smooth user experiences."
  },
  {
    "id":6,
    "img":"https://www.thedevelopersarena.com/assets/images/restfullapi.png",
    "name":"RESTful APIs & Microservices",
    "desc":"Scalable and efficient backend solutions."
  },
  {
    "id":7,
    "img":"https://www.thedevelopersarena.com/assets/images/payment.png",
    "name":"We will teach interns how to integrate Payment Gateway Integration",
    "desc":""
  },
  {
    "id":8,
    "img":"https://www.thedevelopersarena.com/assets/images/mobile.png",
    "name":"Mobile Applications",
    "desc":"Cutting-edge Android and iOS apps to expand your reach."
  },
]
const Projects = () => {
  return (
    <div>
      <Heading heading={'Real Projects for Real Growth'} subtitle={'Dive into projects that give you hands-on experience and industry-relevant skills, designed to accelerate your career.'} />
    
         <div className="products_grid">
          {
            projects.map((product,indx) =>{
              return(
                <div className="product_card" key={indx}>
                  <div className="poster">
                    <img src={product.img} alt={product.name} />
                  </div>
                  <div className="name">{product.name}</div>
                  <div className="info">{product.desc}</div>
                </div>
              )
            })
          }
         </div>
         <Heading heading={'Got a Project in Mind?'} subtitle={'Let us help you achieve your goals. Reach out for customized solutions that align with your vision.'} />
         <div className="btn_start">
          <Link>Get Started</Link>
         </div>
    </div>
  )
}

export default Projects