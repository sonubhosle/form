import React, { useRef, useState } from 'react'
import './Contact.css'
import emailjs from  'emailjs-com'
const Contact = () => {


  const form = useRef();

  const [formData, setFormData] = useState({
    user_name: "",
    user_surname: "",
    user_email: "",
    user_message: "",
    user_number: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_aqy77yc",
        "template_qe9vdqj",
        form.current,
        "eIJjUwYH9psQBhPrj"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error(error.text);
          alert("Failed to send message. Please try again.");
        }
      );

    e.target.reset(); // Reset form fields
    setFormData({ user_name: "", user_email: "", user_message: "" }); // Reset state
  };


  return (
    <div className="contact-form">
      <form ref={form} onSubmit={sendEmail} >
        <h2>Get In Touch</h2>
        <div className="form_group">
          <div className="input_box">
            <div className="name">Name</div>
            <input type="text" name="user_name" id="user_name" placeholder="Enter your name" value={formData.user_name} onChange={handleChange} required />
          </div>
          <div className="input_box">
            <div className="name">Surname</div>
            <input type="text" name="user_surname" id="user_surname" placeholder="Enter your Surname" value={formData.user_surname} onChange={handleChange} required />
          </div>
        </div>
        <div className="form_group">
          <div className="input_box">
            <div className="name">Email</div>
            <input type="email" name="user_email" id="user_email" placeholder="Enter your email" value={formData.user_email} onChange={handleChange} required />
          </div>
          <div className="input_box">
            <div className="name">Mobile</div>
            <input type="number" name="user_number" id="user_number" placeholder="Enter your Number" value={formData.user_number} onChange={handleChange} required />

          </div>
        </div>
        <div className="form_group">
          <div className="input_box">
            <div className="name">Message</div>
            <textarea name="user_message" id="user_message" placeholder="Write your message" value={formData.user_message} onChange={handleChange} required rows="5" ></textarea>
          </div>
        </div>

        <button type="submit"  >  Send </button>
      </form>
    </div>
  )
}

export default Contact