
import React from 'react'
import Feed from './feed'
import Quoraheader from './quoraheader'
import Sidebar from './sidebar'
import Widget from './widget'
import "./css/quora.css"



function Quora() {
  return (
    <div>
      <Quoraheader/>
      <div className='content'>
        <div className='container'>
          <div className='row'>
          <div className='col-lg'><Sidebar/></div>
          <div className='col-lg'><Feed/></div>
          <div className='col-lg'><Widget/></div>   
        </div>
        </div>
      </div>
    </div>
  )
}

export default Quora
