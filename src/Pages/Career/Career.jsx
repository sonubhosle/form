import React from 'react'
import Heading from '../../Components/Heading/Heading'
import './Career.css'
import { Link } from 'react-router-dom'
const companyBenefits = [
  {
    title: "Growth Opportunities",
    description: "Develop your skills through challenging projects and learn from industry experts."
  },
  {
    title: "Innovative Work Environment",
    description: "Join a culture that fosters creativity and embraces new technology."
  },
  {
    title: "Competitive Compensation",
    description: "Enjoy an attractive salary package with industry-leading benefits."
  }
]
const Career = () => {
  return (
    <div className='career'> 
      <Heading heading={'Join Our Team'} subtitle={"We’re always looking for talented and motivated individuals. Whether you're an experienced professional or a new graduate, we offer growth opportunities to help you achieve your goals."} />
       <div className="grid_comp">
        {
          companyBenefits.map((cmp,indx) => {
            return(
              <div className="comp_card">
                <div className="heading">{cmp.title}</div>
                <div className="desc">{cmp.description}</div>
              </div>
            )
          })
        }
       </div>
       <Heading heading={'Current Openings'}  subtitle={'Don’t see a role that fits? We’re always interested in meeting talented individuals.'}/>
       <div className="btn_start">
          <Link to='/apply'>Apply For Future Opportunities </Link>
         </div>
    </div>
  )
}

export default Career