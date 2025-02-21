import React from 'react'
import './Footer.css'
import { MdChevronRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { FaLocationDot } from 'react-icons/fa6'
import { FaPhoneAlt, FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn, FaGooglePlusG, FaPinterestP, FaInstagram } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
const Footer = () => {
  return (
    <div className='footer_section'>
      <div className="footer_grid">
        <div className="grid_box">
           <h2> Get In Touch</h2>
          <p><IoMdMail />mail@gmail.com</p>
          <div className="social_media">
            <Link><FaFacebookF /></Link>
            <Link><FaTwitter /></Link>
            <Link><FaYoutube /></Link>
            <Link><FaLinkedinIn /></Link>
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
          <Link><FaYoutube className='icon' /> Youtube</Link>
          {/* <Link><FaTwitter className='icon' /> Twitter</Link> */}
          <Link><FaLinkedinIn className='icon' /> Linkedin</Link>
          <Link><FaInstagram className='icon' /> Instagram</Link>
        </div>

      </div>
      <div className="bottom_footer">
        <div className="left_sect">&copy; skybricks.com All Rights Reserved</div>
  
      </div>
    </div>
  )
}

export default Footer