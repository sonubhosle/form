import React from 'react'
import './Students_Freshers.css'
import Heading from '../../Components/Heading/Heading'
import { Link } from 'react-router-dom'

const projects = [
  {
    "id":1,
    "img":"https://www.thedevelopersarena.com/assets/images/student.png",
    "name":"Learn & Build",
    "desc":"Master the latest technologies by working on industry-level projects."
  },
  {
    "id":2,
    "img":"https://www.thedevelopersarena.com/assets/images/fresher.png",
    "name":"Enhance Your Skills",
    "desc":"Polish your technical expertise and soft skills with professional guidance."
  },
  {
    "id":3,
    "img":"https://www.thedevelopersarena.com/assets/images/internship.png",
    "name":"Internship Opportunities",
    "desc":"Gain real-time experience that prepares you for the professional world."
  },
]
const Students_Freshers = () => {
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
       <Heading heading={'Start Your Journey Today!'}  subtitle={`Join Skybricks to transform your potential into success.`}/>
       
       <div className="btn_start">
        <Link to={'/apply'}>Apply Now</Link>
       </div>
  </div>
  )
}

export default Students_Freshers