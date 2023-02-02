import React from 'react'
import '../css/Test.css'

function Test() {
  return (
     <div className='LoginScreen'>
        <div className='LoginScreen__background'>
              <img className='LoginScreen__logo' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"  alt='Logo banner' />
              <button className='LoginScreen__button'>Sign In</button>                  
        </div>
              
        <div className='LoginScreen__gradient'></div>           
          
      </div>
  )
}

export default Test