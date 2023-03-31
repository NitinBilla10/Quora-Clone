import React from 'react'
import './css/widget.css'
import Widgetcontent from './Widgetcontent'

function Widget() {
  return (
    <div>
      <div className='widget'>
        <h4>Spaces to follow</h4>
          <Widgetcontent/>
        </div>
    </div>
  )
}

export default Widget
