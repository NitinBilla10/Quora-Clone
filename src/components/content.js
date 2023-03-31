import React from 'react'
import './css/content.css'

function Content() {
  return (
         <>
        <div className='feed'>
        <span class="material-symbols-outlined">
         account_circle
         </span> <p><strong>User Name</strong><br/>
         <small>Timestamp</small></p>
         
         <div className='leftfeed'>
         <div className='questioncontainer'>
            <p id='feedquestion'>This is Question ?</p>
            </div></div>
            <div className='rightfeed'>
            <button type="button" class="btn btn-outline-primary">Answer</button>
        </div>
        <div className='clear'></div>
        
        
        <div className='feedmenu'>
            <div className='leftfeed'>
        <input type="checkbox" class="btn-check" id="btn-check-outlined1" autocomplete="off"/>
        <label class="btn btn-outline-primary" for="btn-check-outlined1"><span class="material-symbols-outlined">
           arrow_upward
           </span></label>
        <input type="checkbox" class="btn-check" id="btn-check-outlined2" autocomplete="off"/>
        <label class="btn btn-outline-primary" for="btn-check-outlined2"><span class="material-symbols-outlined">
        arrow_downward
        </span></label>
        <input type="checkbox" class="btn-check" id="btn-check-outlined2" autocomplete="off"/>
           <label class="btn btn-outline-primary" for="btn-check-outlined2"><span class="material-symbols-outlined">
           autorenew
        </span></label>
        <input type="checkbox" class="btn-check" id="btn-check-outlined2" autocomplete="off"/>
           <label class="btn btn-outline-primary" for="btn-check-outlined2"><span class="material-symbols-outlined">
           chat
        </span></label>
        </div>
        <div className='rightfeed'>
            <a href='/'><span class="material-symbols-outlined">
             share
             </span></a>
             <a href='/'>
             <span class="material-symbols-outlined">
              more_horiz
              </span>
             </a>
        </div>
       </div>
       <div className='clear'></div>
       <div className='answerfeed'>
       <span class="material-symbols-outlined">
         account_circle
         </span><p>User_Name<br/><span>Timestamp</span></p>
         <p id='feedanswer'>This is Answer</p>
        </div>
       </div>
        </>
  )
}

export default Content
