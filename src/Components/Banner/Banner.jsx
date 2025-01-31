import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
    // <div className='banner_section'>
    //   <img src="https://i.postimg.cc/zDFppgyG/Bannner.jpg" alt="" />
    //   <div className="overlay">
    //     <h1>
    //       Launch Your Career with <br /> <span> Real Experience!" </span> </h1>
    //       <p>Are you looking for a short "About" section for your internship program? Here's a concise version:
    //       "Our internship program offers hands-on experience, mentorship, and real-world projects to help you grow professionally. Gain valuable skills and kickstart your career with us!"</p>
    //     <div className="apply_btn">Apply Now</div>
    //   </div>
    // </div>
<div
  className="bg-gradient-to-br from-blue-500 via-purple-400 to-pink-300 flex items-center justify-center px-4"
  style={{
    height: "450px",
    width: "100%",
    backgroundImage: "url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')",
    backgroundBlendMode: "overlay",
  }}
>
  <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8">
    {/* Left Content */}
    <div className="text-center lg:text-left max-w-2xl">
      <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4 text-white">
        Let’s Work Together to Create Wonders with Us
      </h1>
      <p className="text-gray-200 mb-6">
        A visionary creative, crafting captivating wonders through art and
        design. Adept at turning imagination into extraordinary reality.
      </p>
      <div className="flex gap-4 justify-center lg:justify-start">
        <button className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-lg hover:bg-purple-700 transition">
          Let’s Talk
        </button>
        <button className="px-6 py-3 border-2 border-purple-500 text-purple-100 rounded-lg shadow-lg hover:bg-purple-300 transition">
          Start Project
        </button>
      </div>
      <div className="flex gap-8 mt-8 justify-center lg:justify-start">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white">15+</h3>
          <p className="text-gray-300">Years Experience</p>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white">26K</h3>
          <p className="text-gray-300">Projects Success</p>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white">98%</h3>
          <p className="text-gray-300">Satisfied Rate</p>
        </div>
      </div>
    </div>
    {/* Right Content */}
    <div className="relative">
      <img
        src="https://i.postimg.cc/bw0x6nvs/2-2-man-transparent.png"
        alt="Creative Professional"
        className="rounded-xl shadow-lg"
      />
      <div className="absolute top-10 right-10 bg-white p-4 rounded-lg shadow-lg flex items-center gap-2">
        <span className="bg-green-100 p-2 rounded-full">
          <svg
            className="w-6 h-6 text-green-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 10l-6 6-6-6"
            />
          </svg>
        </span>
        <p className="text-sm font-medium text-gray-600">Illustration</p>
      </div>
      <div className="absolute bottom-10 left-10 bg-white p-4 rounded-lg shadow-lg flex items-center gap-2">
        <span className="bg-green-100 p-2 rounded-full">
          <svg
            className="w-6 h-6 text-green-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 10l-6 6-6-6"
            />
          </svg>
        </span>
        <p className="text-sm font-medium text-gray-600">Graphic Design</p>
      </div>
      <div className="absolute bottom-24 right-10 bg-white p-4 rounded-lg shadow-lg flex items-center gap-2">
        <span className="bg-green-100 p-2 rounded-full">
          <svg
            className="w-6 h-6 text-green-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 10l-6 6-6-6"
            />
          </svg>
        </span>
        <p className="text-sm font-medium text-gray-600">Creative Branding</p>
      </div>
    </div>
  </div>
</div>

  

  )
}

export default Banner