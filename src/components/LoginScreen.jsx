import React from 'react'
import { useState } from 'react'
import '../css/LoginScreen.css'

import SignupScreen from './SignupScreen';


function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  return (
      <div className='LoginScreen'>
        <div className='LoginScreen__background'>
              <img className='LoginScreen__logo' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"  alt='Logo banner' />
              
        <button onClick={() => setSignIn(true)} className='LoginScreen__button'>Sign In</button>                  
              
              <div className='LoginScreen__gradient'></div>           
        <div className='LoginScreen__body'>
          {
            signIn ? (
              <SignupScreen /> ) : ( 
                    <>
                      <h1>Unlimited films, TV programms and more.</h1>
                      <h2>Watch anywhere. Cancel at anytime.</h2>
                      <h3 className='LoginScreen__heading-3'>Ready to watch? Enter your email to create or restart your membership.</h3>
                      <div className='LoginScreen__input'>
                        <form>
                          <input type="email" placeHolder="Email Address" className='LoginScreen__input-text'/>
                          <button onClick={() => setSignIn(true)} className='LoginScreen__getStarted'>
                            Get Started
                          </button>
                        </form>
                      </div>
                    </>                
              )
            
          }
        </div>
          </div>
      </div>
  )
}

export default LoginScreen