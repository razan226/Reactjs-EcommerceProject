import React from 'react'

import './CSS/LoginSignup.css'

export const LoginSignup = () => {
  return (
    <div className='loginSinup'>
      <div className='loginSinup-container'>
        <h1>Sign Up</h1>
        <div className='loginSinup-fields'>
          <input type='text' placeholder='Your Name'/>
          <input type='email' placeholder='Email Address'/>
          <input type='password' placeholder='Password'/>

        </div>
        <button>Continue</button>
        <p className='loginSinup-login'> Already have an account? <span>Login here</span></p>
        <div className='loginSinup-agree'>
          <input type='checkbox' name='' id=''/>
          <p>By continuing, i agree to the terms of use &privacy policy.
          </p>
        </div>
      </div>
    </div>
  )
}
export default LoginSignup