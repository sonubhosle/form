import React from 'react'
import './Technologies.css'

const technologies = [
    {
        "id":1,
        "name":"React",
        "logo":"https://www.thedevelopersarena.com/assets/icons/react-icon.png"
    },
    {
        "id":2,
        "name":"Angular",
        "logo":"https://www.thedevelopersarena.com/assets/icons/angular-icon.png"
    },
    {
        "id":3,
        "name":"Node Js",
        "logo":"https://www.thedevelopersarena.com/assets/icons/nodejs-icon.png"
    },
    {
        "id":4,
        "name":"AWS",
        "logo":"https://www.thedevelopersarena.com/assets/icons/aws-icon.png"
    },
    {
        "id":5,
        "name":"Spring Boot",
        "logo":"https://www.thedevelopersarena.com/assets/icons/springboot-icon.png"
    },
    {
        "id":6,
        "name":"Android",
        "logo":"https://www.thedevelopersarena.com/assets/icons/android-icon.png"
    },
    {
        "id":7,
        "name":"Mongo DB",
        "logo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSITHn_TgjDyhdWvePNw0mveDrTUr00GLfv_Q&s"
    },
 
]
const Technologies = () => {
  return (
    <div className='technologies'>
         {
            technologies.map((tech,indx) =>{
                return(
                    <div className="tech_card">
                        <img src={tech.logo} alt="" />
                        <div className="name">{tech.name}</div>
                    </div>
                )
            })
         }
    </div>
  )
}

export default Technologies