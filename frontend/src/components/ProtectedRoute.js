import React from 'react'
import { useUserAuth } from './context/userAuthContext';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({children}) {
    let {user}=useUserAuth();
    if(!user){
       <Navigate path="/"/>
    }
    return children;
 
}

export default ProtectedRoute;

