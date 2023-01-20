import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import '../css/Navbar.css'
import logo from '../images/netflix-logo.png'
import avatar from '../images/Netflix-avatar.png'

function Navbar() {
  const [show, handleShow] = useState(false);
  
  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    }
    else {
      handleShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar); 
  },[]);

  return (
    <div className={`nav ${show && "nav__black"}`}>

      <div className='nav__content'>

        <img className='navbar__logo' src={ logo }
          alt='netflix logo' /> 
        
        <img className='navbar__avatar' src={ avatar }
          alt='Nexflix avatar' /> 
        
      </div>

    </div>
  )
}

export default Navbar