import React from 'react'
import'./css/postbox.css'

function Postbox() {
  return (
        <>
        <div className='postbox'>
        <span class="material-symbols-outlined">
          account_circle
          </span>
        <div class="form-floating">
        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
        <label for="floatingTextarea">What is Your Question or Link ?</label>
        </div>
      </div>
      </>
  )
}

export default Postbox
