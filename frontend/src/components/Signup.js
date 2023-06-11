import React from 'react'
import "./css/signup.css"
import GoogleButton from 'react-google-button'

function Signup() {
  return (
    <div className='main'>
     <div className='maincontainer'>
      <div class="card">
      <div class="card-body">
        <h5 class="card-title">Sign Up</h5>
        <div class="form-floating">
       <input type="password" class="form-control" id="username" placeholder="Username" />
       <label for="username">Username</label>
       </div>
        <div class="form-floating mb-3">
        <input type="email" class="form-control" id="signupemailinput" placeholder="Email address" />
        <label for="signinemailinput">Email address</label>
      </div>
       <div class="form-floating">
       <input type="password" class="form-control" id="signuppassword" placeholder="Password" />
       <label for="signuppassword">Password</label>
       </div>
       <button type="submit" class="btn btn-primary">Sign Up</button>
       <h5 class="card-title">OR</h5>
       <GoogleButton style={{width:"367px"}}/>
      </div>
    </div>
    </div>
    <div className='footercontainer'>
    <div class="card">
      <div class="card-body">
        <p class="card-title">If you have account?, then <a href='/'>Login</a></p>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Signup
