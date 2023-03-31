import React from 'react'
import './css/content.css'

function Content() {
  return (
         <>
        <div className='feed'>
        <div className='avatar'><p><span class="material-symbols-outlined">
         account_circle
         </span> <strong>User Name</strong><br/>
         <small>Timestamp</small></p></div>
         
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
        <button type="button" class="btn btn-primary-outlined"><span class="material-symbols-outlined">
           autorenew
        </span></button>
        <button type="button" class="btn btn-primary-outlined"><span class="material-symbols-outlined">
           chat
        </span></button>
        <p id='numberofanswers'>1 Answers</p>
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
        <div className='clear'></div>
       </div>
       
       <div className='answerfeed'>
       <p><span class="material-symbols-outlined">
         account_circle
         </span>User_Name<br/><span>Timestamp</span></p>
         <p id='feedanswer'><strong>This is Answer</strong></p>
        </div>
       </div>
        </>
  )
}

export default Content
