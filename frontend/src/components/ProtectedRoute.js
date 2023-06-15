import React from 'react'
import { useUserAuth } from './context/userAuthContext'
import { Navigate } from 'react-router-dom';

const ProtectedRoute= ({children})=>{
 let {user}=useUserAuth();
 if(!user){
   return <Navigate to="/"/> ;
 }
 return children;
}

export default ProtectedRoute;
