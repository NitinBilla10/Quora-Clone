import React from 'react';
import './css/login.css';
import {GoogleButton} from 'react-google-button';

function Login() {
  return (
    <div className='main'>
     <div className='maincontainer'>
      <div class="card">
      <div class="card-body">
        <h5 class="card-title">Login</h5>
        <div class="form-floating mb-3">
        <input type="email" class="form-control" id="loginemailinput" placeholder="Email address" />
        <label for="loginemailinput">Email address</label>
      </div>
       <div class="form-floating">
       <input type="password" class="form-control" id="loginpassword" placeholder="Password" />
       <label for="loginpassword">Password</label>
       </div>
       <button type="submit" class="btn btn-primary">Login</button>
       <h5 class="card-title">OR</h5>
       <GoogleButton style={{width:"367px"}}/>
      </div>
    </div>
    </div>
    <div className='footercontainer'>
    <div class="card">
      <div class="card-body">
        <p class="card-title">If you don't have account?, then <a href='/signup'>Sign Up</a></p>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Login
