
import React, { useState } from 'react'
import './css/quoraheader.css';




function Quoraheader() {
  const[headermodallink,Setheadermodallink]=useState("");
  const[updatedheadermodallink,Setupdatedheadermodallink]=useState('');
  return (
    
    <>
    <div className='header'>
    <div className='container'>
    <div className='row'>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <div className='col-sm'>
  <div className='headerlogo'><a className="navbar-brand" href='/'><img src="https://video-public.canva.com/VAD8lt3jPyI/v/ec7205f25c.gif"
            alt="logo"/></a></div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    </div>
    <div className='col-lg'>
      <div className='searchbar'>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      </div>
      </div>
    
        
      <div className='col-lg'>
      <div className='menu'>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <div><li className="nav-item">
          <a className="nav-link" aria-current="page" href='/'><span class="material-symbols-outlined">
                      home
            </span></a>
        </li></div>
        <div><li className="nav-item">
          <a className="nav-link" href='/'><span class="material-symbols-outlined">
             feed
        </span></a>
        </li></div>
        <div><li className="nav-item">
          <a className="nav-link" href='/'><span class="material-symbols-outlined">
          assignment_turned_in
         </span></a>
        </li></div>
        <div><li className="nav-item">
          <a className="nav-link" href='/'><span class="material-symbols-outlined">
         group
         </span></a>
        </li></div>
        <div><li className="nav-item">
          <a className="nav-link" href='/'><span class="material-symbols-outlined">
           notifications
           </span></a>
        </li></div>
        <div><li className="nav-item">
        <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn btn-outline-primary">
      <span class="material-symbols-outlined">
          add
      </span> 
      Add Question</button>
        </li></div>
        <div className='avatar'>
        <li className="nav-item">
          <a className="nav-link" href='/'><span class="material-symbols-outlined">
          account_circle
           </span></a>
        </li></div>
      </ul>
      </div>
      </div>
      
  </div>
  
</nav>
</div>
 </div>
 
 <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Add Question</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div className='avatar'></div>
      <input type="email" class="form-control" id="headermodalquestion"  placeholder="Start Your Question With 'How', 'What','Why',etc ?"/>
      <input type="email" class="form-control" id="headermodallink" value={ headermodallink}
                 onChange={  (event) => {
                     Setheadermodallink(event.target.value);
                 }}
                 onKeyDown={(e)=>{if(e.key==='Enter'){Setupdatedheadermodallink(headermodallink);}}}
       placeholder="Optional :Add Link For Context"/>
      <div>{updatedheadermodallink!==""&&<img src={updatedheadermodallink} alt=''/>}</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Add Question</button>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        
      </div>
    </div>
  </div>
</div>

 </div>
   
    </>
      
  )
}

export default Quoraheader
