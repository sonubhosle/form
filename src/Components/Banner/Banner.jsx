import React from 'react'
import './Banner.css'
import { Link } from 'react-router-dom'
import { FaRegHandPointLeft} from 'react-icons/fa'

const Banner = () => {
  return (
    <div className='banner_section'>
        <h1>
          Launch Your Career with <br /> <span> Real Experience!" </span> </h1>
          <p>Are you looking for a short "About"  section for your internship program? Here's a concise version <br />
          "Our internship program offers hands-on experience, mentorship, and real-world projects to help you grow professionally. Gain valuable skills and kickstart your career with us!"</p>
          <Link to='/apply' className='button-2'>Get Started <p><FaRegHandPointLeft size={24} color='white'/></p></Link>

    </div>


  

  )
}

export default Banner