import React, { useEffect, useState } from 'react'
import "./css/feed.css"
import Postbox from './Postbox'
import Content from './content'
import axios from 'axios'

function Feed() {
  const[posts,setposts]=useState([])
  useEffect(()=>{
    axios.get('/api/questions')
    .then((res)=>{
      console.log(res.data)
      setposts(res.data);
    }).catch((e)=>{
      console.log(e);
    })
  },[])
  return (
    <div>
      <div className='contentwriting'>
        <Postbox/>
        </div>
        <div className='feedpost'>
          { posts.map((post,index)=>(<Content key={index} post={post}/>))
          }
          </div>
      
    </div>
  )
}

export default Feed
