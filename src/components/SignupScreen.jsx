import React from 'react'
import '../css/SignupScreen.css'

function SignupScreen() {
  return (
      <div className='signupScreen'>
      <form>
              <h1 className='signupScreen__heading'>Sign up</h1>
              <input type='email' placeholder="Email" />
              <input type='password' placeholder="Password" />
              <button type='submit'>Sign In</button>

        <h4>
          <span className='signup__link'>New to Netflix? </span>
          <span className='signup__underline'>Sign Up now.</span>
        </h4>
      </form>
    </div>
  )
}

export default SignupScreen