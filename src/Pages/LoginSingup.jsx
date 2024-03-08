import React from 'react'
import './css/LoginSignup.css'


const LoginSingup = () => {
  return (
    <div className='LoginSingup'>
      <div className="loginsinup-container">
        <h1>Sing Up</h1>
        <div className="loginsignup-field">
          <input type="text" placeholder='Your Name'/>
          <input type="email" placeholder='Email address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have an account <span>login here</span></p>
        <div className="loginsingnup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSingup