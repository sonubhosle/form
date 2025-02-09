import React from 'react'
import './Dev.css'
import { Link } from 'react-router-dom'

const dev_data = [
    {
       "id":1,
       "title":"Web Applications",
       "desc":"Develop powerful, scalable, and user-friendly web applications that are responsive and optimized for performance."
    },
    {
        "id":2,
        "title":"Mobile Applications",
        "desc":"Build cross-platform mobile applications with seamless user experiences for Android and iOS platforms."
     },
]
const Dev = () => {
  return (
   <>
       <div className='dev_section'>
        {
            dev_data.map((dev) =>{
                 return(
                    <div className="dev_card">
                        <div className="title">{dev.title}</div>
                        <div className="desc">{dev.desc}</div>
                    </div>
                 )
            })
        }
    </div>
            <p className='p'>Get in touch to learn how we can create the perfect app for your business at an affordable price!</p>
            <div className="btn_start">
          <Link to='/contact'>Contact Us</Link>
         </div>
   </>
  )
}

export default Dev