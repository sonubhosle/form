import React from 'react'
import Heading from '../../Components/Heading/Heading'
import { Link } from 'react-router-dom'
import './Apply.css'

const button_data = [
  {
    "id": 1,
    "title": "Full Stack internship - Java",
    "path": ""
  },
  {
    "id": 1,
    "title": "Java Internship",
    "path": ""
  },
  {
    "id": 1,
    "title": "Web Developement internship",
    "path": ""
  },
  {
    "id": 1,
    "title": "Paython Internship",
    "path": ""
  },
  {
    "id": 1,
    "title": "Data Science Internship",
    "path": ""
  },
  {
    "id": 1,
    "title": "React Js Internship",
    "path": ""
  },
]

const grid_data = [
  {
    "id":1,
    "heading":"Learn by Doing",
    "desc":"Work on real-world projects that help you understand the latest industry practices."
  },
  {
    "id":1,
    "heading":"Expert Mentorship",
    "desc":"Get guidance from experienced professionals to grow your skills and career."
  },
  {
    "id":1,
    "heading":"Earn a Certificate",
    "desc":"Receive a recognized certificate upon completion to add to your portfolio."
  },
]
const Apply = () => {
  return (
    <div className='apply'>
      <Heading heading={'Ready to Start Your Career Journey?'} subtitle={'Join our internship program and gain practical experience, real-world skills, and a certificate to showcase your achievements. Don’t miss out on this opportunity to build a strong foundation for your future career!'} />
      <div className="button_grid">
        {
          button_data.map((btn,index) =><Link key={index} to={btn.path}>{btn.title}</Link>)
        }
      </div>
      <p>Seats are limited, so apply early to secure your spot!</p>

        <div className="grid_box">
          {
            grid_data.map((item,index)=>{
              return(
                <div className="grid_card" key={item.id}>
                    <div className="heading">{item.heading}</div>
                    <div className="desc">{item.desc}</div>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default Apply