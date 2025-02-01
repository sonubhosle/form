import React from 'react'
import './Heading.css'

const Heading = ({heading,subtitle}) => {
  return (
    <div className='heading_section'>
        <h2>{heading}</h2>
        <p>{subtitle}</p>
    </div>
  )
}

export default Heading