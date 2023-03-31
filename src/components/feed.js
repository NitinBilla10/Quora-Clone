import React from 'react'
import "./css/feed.css"
import Postbox from './Postbox'
import Content from './content'

function Feed() {
  return (
    <div>
      <div className='contentwriting'>
        <Postbox/>
        </div>
        <div className='content'>
          <Content/>
          </div>
      
    </div>
  )
}

export default Feed
