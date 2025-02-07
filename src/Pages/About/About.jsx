import React from 'react'
import './About.css'
import Heading from '../../Components/Heading/Heading'

const companyBenefits = [
  {
    title: "Skill Development",
    description: "Get equipped with essential tech skills through structured projects and mentorship from experienced professionals."
  },
  {
    title: "Real-World Projects",
    description: "Work on real-world projects that mirror current industry challenges, helping you gain practical insights and experience."
  },
  {
    title: "Networking Opportunities",
    description: "Connect with peers and mentors, building a professional network that supports your growth in the tech world."
  }
]

const About = () => {
  return (
    <div>
      <Heading heading={'About Our Internship Program'} subtitle={'Our internship program is designed to provide freshers with hands-on experience and industry-relevant skills. We aim to bridge the gap between theoretical knowledge and practical application, preparing you for a successful career in tech.'} />
      <div className="grid_comp">
        {
          companyBenefits.map((cmp, indx) => {
            return (
              <div className="comp_card">
                <div className="heading">{cmp.title}</div>
                <div className="desc">{cmp.description}</div>
              </div>
            )
          })
        }
      </div>
      <Heading heading={'Program Highlights'} />
      <div className="highlights">
        <p> 📈 Comprehensive curriculum covering key technologies and tools</p>
        <p> 🛠 Hands-on learning with guidance from industry experts</p>
         <p>📜 Certificate of completion to validate your skills</p>
         <p>💼 Opportunities to showcase projects and receive constructive feedback</p>
      </div>
    </div>
  )
}

export default About