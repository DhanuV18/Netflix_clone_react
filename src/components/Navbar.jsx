import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/Navbar.css'
import logo from '../images/netflix-logo.png'
import avatar from '../images/Netflix-avatar.png'

function Navbar() {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();
  
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

        <img onClick={()=>navigate('/')} className='navbar__logo' src={ logo }
          alt='netflix logo' /> 
        
        <img onClick={()=>navigate("/profile")} className='navbar__avatar' src={ avatar }
          alt='Nexflix avatar' /> 
        
      </div>

    </div>
  )
}

export default Navbar