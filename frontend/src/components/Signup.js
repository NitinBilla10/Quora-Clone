import React from 'react'
import "./css/signup.css"
import GoogleButton from 'react-google-button'
import { useState } from 'react'
import {useUserAuth} from './context/userAuthContext'
import { Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Signup() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState('');
  const [error,setError]=useState('');
  const {signup} = useUserAuth();
  const navigate = useNavigate();
  const handlesubmit = async(e)=>{
    e.preventDefault();
    try{
     await signup(email,password);
     console.log('user successfully created');
     setError('');
     navigate('/');
     
    }catch(err){
      setError(err.message);
    }

  }
   
  return (
    <div className='main'>
     <div className='maincontainer'>
      <div class="card">
      <div class="card-body">
        <h5 class="card-title">Sign Up</h5>
        {error && <Alert variant='danger'>{error}</Alert>}
        <div class="form-floating">
       <input type="text" class="form-control" id="username" placeholder="Username" />
       <label for="username">Username</label>
       </div>
        <div class="form-floating mb-3">
        <input type="email" class="form-control" id="signupemailinput" placeholder="Email address" onChange={(e)=>setEmail(e.target.value)} />
        <label for="signinemailinput">Email address</label>
      </div>
       <div class="form-floating">
       <input type="password" class="form-control" id="signuppassword" placeholder="Password"  onChange={(e)=>setPassword(e.target.value)}/>
       <label for="signuppassword">Password</label>
       </div>
       <button type="submit" onClick={handlesubmit} class="btn btn-primary">Sign Up</button>
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
