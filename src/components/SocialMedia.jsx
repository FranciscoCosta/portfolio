import React from 'react'
import {BsInstagram, BsGithub, BsLinkedin} from 'react-icons/bs'

function SocialMedia() {
  return (
    <div className='app__social'>
        <div>
            <BsLinkedin
            style={{cursor: "pointer"}}
            onClick={(e) => {
              window.open("https://www.linkedin.com/in/francisco-costa-dev/", "_blank");
      }}/>
        </div>
        <div>
            <BsGithub
            style={{cursor: "pointer"}}
            onClick={(e) => {
              window.open("https://github.com/FranciscoCosta", "_blank");
      }} 
            />
        </div>
        <div>
            <BsInstagram
            style={{cursor: "pointer"}}
            onClick={(e) => {
              window.open("https://www.instagram.com/tuga_no_brasil/", "_blank");
      }}/>
        </div>
    </div>
  )
}

export default SocialMedia