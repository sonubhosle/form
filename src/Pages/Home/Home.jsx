import React from 'react'
import './Home.css'
import Banner from '../../Components/Banner/Banner'
import Heading from '../../Components/Heading/Heading'
import Information from '../../Components/Information/Information'
const Home = () => {
  return (
    <div className='home_section'>
      <Banner/>
      <Heading  heading={'Why Join Our Internship Program?'} subtitle={"Our program is designed to equip freshers with practical skills and hands-on experience. You'll work on real projects, guided by experienced mentors, and gain insights that can shape your career."}/>
         <Information />
         <Heading  heading={'Certification'} subtitle={"Receive a certificate upon completion to showcase your skills."}/>
         <Heading  heading={'Success Stories'} subtitle={"Join 100+ Indians who have successfully completed our internships and kick-started their careers. Hear from our interns and clients about their experiences."}/>
         <Heading  heading={'Technologies We Use'} subtitle={"We leverage modern tools and technologies to deliver high-quality projects."}/>

         <Heading  heading={'Frequently Asked Questions'} />

    </div>
  )
}

export default Home