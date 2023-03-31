
import React from 'react'
import './css/quoraheader.css';



function Quoraheader() {
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
        <button type="button" class="btn btn-outline-secondary">
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
 </div>
    </>
      
  )
}

export default Quoraheader
