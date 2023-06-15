import React from 'react';

import './App.css';
import {Routes,Route} from 'react-router-dom';
import {Container,Row,Col} from 'react-bootstrap';
import Quora from './components/quora';
import Login from './components/Login';
import Signup from './components/Signup';
import { UserAuthContextProvider } from './components/context/userAuthContext';
import {ProtectedRoute} from './components/ProtectedRoute'

function App() {
  
  return (
    <div className="App" >
      <Container>
        <Row>
          <Col>
          <UserAuthContextProvider>
          <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/home' element={<ProtectedRoute><Quora/></ProtectedRoute>}/>
          </Routes>
          </UserAuthContextProvider>
          </Col>
        </Row>

      </Container>
      
      </div>
  );
}

export default App;
