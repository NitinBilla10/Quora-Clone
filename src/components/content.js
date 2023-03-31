import React from 'react'

function Content() {
  return (
         <>
        <div className='content'>
        <span class="material-symbols-outlined">
         account_circle
         </span> <p><strong>User Name</strong></p>
         <small>Timestamp</small>
         <div className='questioncontainer'>
            <p id='feedquestion'>This is Question ?</p>
            <button type="button" class="btn btn-outline-primary">Answer</button>
        </div>
        <div className='feedmenu'>
            <div className='leftfeedmenu'>
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
        <div className='rightfeedmenu'>
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
       <div className='answerfeed'>
        
       </div>
        </div>
        </>
  )
}

export default Content
