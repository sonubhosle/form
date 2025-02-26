import React from 'react'
import './Footer.css'
import { MdChevronRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { FaLocationDot, FaTelegram } from 'react-icons/fa6'
import { FaPhoneAlt, FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
const Footer = () => {
  return (
    <div className='footer_section'>
      <div className="footer_grid">
        <div className="grid_box">
           <h2> Get In Touch</h2>
          <p><IoMdMail />mail@gmail.com</p>
          <div className="social_media">
            <Link to="https://whatsapp.com/channel/0029Vb350ya3wtbGFUxVBT3P"><FaWhatsapp /></Link>
            <Link to="https://t.me/+HLMdD_vGOxRkZWM1"><FaTelegram /></Link>
            <Link to="https://www.youtube.com/channel/UChma2-a1Ig3J4bGh4SqlDaA"><FaYoutube /></Link>
            <Link to="https://www.linkedin.com/company/the-skybrisk/"><FaLinkedinIn /></Link>
          </div>
        </div>
        <div className="grid_box">
          <h2>Quick Links</h2>
          <Link to='/'><MdChevronRight /> Home</Link>
          <Link to='/about'><MdChevronRight /> About Us</Link>
          <Link to='/contact'><MdChevronRight /> Contact Us</Link>
          <Link to='/contact'><MdChevronRight /> Career</Link>
          <Link to='/projects'><MdChevronRight /> Projects</Link>
          <Link to='/apply'><MdChevronRight /> Apply</Link>
          <Link to="/privacy_policies"><MdChevronRight /> Privacy Policy</Link>
          <Link to='/term_conditions'><MdChevronRight /> Term & Conditions</Link>
        </div>
        <div className="grid_box">
          <h2>Follow Us</h2>
          <Link to="https://www.youtube.com/channel/UChma2-a1Ig3J4bGh4SqlDaA"><FaYoutube className='icon' /> Youtube</Link>
          <Link to="https://www.linkedin.com/company/the-skybrisk/"><FaLinkedinIn className='icon' /> Linkedin</Link>
          <Link to="https://t.me/+HLMdD_vGOxRkZWM1"><FaTelegram className='icon' /> Instagram</Link>
        </div>

      </div>
      <div className="bottom_footer">
        <div className="left_sect">&copy; 2025 - skybrisk.com All Rights Reserved</div>
  
      </div>
    </div>
  )
}

export default Footer