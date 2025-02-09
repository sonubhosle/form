import React from 'react'
import './Home.css'
import Banner from '../../Components/Banner/Banner'
import Heading from '../../Components/Heading/Heading'
import Information from '../../Components/Information/Information'
import Certifications from '../../Components/Certifications/Certifications'
import Stories from '../../Components/Stories/Stories'
import Technologies from '../../Components/Technologies/Technologies'
import Questions from '../../Components/Questions/Questions'
import Dev from '../../Components/Dev/Dev'
const Home = () => {
  return (
    <div className='home_section'>
      <Banner />
      <Heading heading={'Why Join Our Internship Program?'} subtitle={"Our program is designed to equip freshers with practical skills and hands-on experience. You'll work on real projects, guided by experienced mentors, and gain insights that can shape your career."} />
      <Information />
      <Heading heading={'Certification'} subtitle={"Receive a certificate upon completion to showcase your skills."} />
      <Certifications />
      <Heading heading={'Success Stories'} subtitle={"Join 100+ Indians who have successfully completed our internships and kick-started their careers. Hear from our interns and clients about their experiences."} />
         <Stories />
      <Heading heading={'Technologies We Use'} subtitle={"We leverage modern tools and technologies to deliver high-quality projects."} />
         <Technologies/>
      <Heading heading={'Frequently Asked Questions'} />
      <Questions />
      <Heading heading={'Custom Web and Mobile Application Development'}  subtitle={'We specialize in creating any type of web and mobile applications at market-competitive prices. From dynamic websites to feature-rich mobile apps, our team can bring your vision to life with high-quality solutions tailored to your needs.'}/>
       <Dev/>
    </div>
  )
}

export default Home