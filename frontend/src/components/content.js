
import React, {  useRef, useState} from 'react';
import { Editor } from '@tinymce/tinymce-react';
import './css/content.css'
import axios from 'axios';
import ReactTimeAgo from 'react-time-ago';
import ReactHtmlparser from 'html-react-parser';


function LastSeen({ date }) {
  return (
    <div>
      <ReactTimeAgo date={date} locale="en-US" timeStyle="round"/>
    </div>
  )
}

function Content({post}){
  const editorRef = useRef();
  const [modal,setmodal] =useState(false);
 
 async function submitanswer(postid){
  // setpostid(post?._id)
    if(editorRef.current.getContent()!==""){
      const config = {
        Headers:{
          "Content-Type":"application/json"
        }
      }
      
      const body={
      answer: editorRef.current.getContent() ,
      questionId: postid,
      createdAt:Date.now()

      }
      console.log(post?._id)
    await axios.post("/api/answers",body,config).then((res)=>{
      console.log(res.data);
    }).catch((e)=>{
      alert("Answer Can't be add")
      console.log(e);
    })
   } 
    
  }

 
  return (
          
        <div className='feed'>
        <div className='avatar'><p><span class="material-symbols-outlined">
         account_circle
         </span> <strong>User Name</strong><br/>
         <small><LastSeen date={post?.createdAt} locale="en-US" /></small></p></div>
         
         <div className='leftfeed'>
         <div className='questioncontainer'>
            <p id='feedquestion'>{post?.questionName}</p>
            <img src={post?.questionUrl} alt=''/>
            </div></div>
            <div className='rightfeed'>
            <button type="button" class="btn btn-outline-primary" onClick={()=>setmodal(true)}>Answer</button>
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
        <p id='numberofanswers'>{post?.allAnswers.length}  Answers</p>
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
       {
        post?.allAnswers?.map((_a)=>(
          <>
       <div className='answerfeed'>
       <p><span class="material-symbols-outlined">
         account_circle
         </span>User_Name<br/><span><LastSeen date={_a?.createdAt} locale="en-US" /></span></p>
         <div id='feedanswer'>{ReactHtmlparser(_a?.answer)}</div>
         </div></>))}
       
        {
        modal && 
        <div className='modal_wrapper'>
        <div className='modal_container'>
          <div className='title' >
            <h3>{post?._id}</h3>
          </div>
          <div className="modal_content">
       <Editor
        apiKey='88t10moj4univfqtqwyov2vck22tgiq0i3ly2h4qwfl0x10u'
        onInit={(evt, editor) => editorRef.current = editor}
        init={{
          height: 400,
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
        
        setan
       />
       </div>
       <div class="modal_footer">
    <button type="button" class="btn btn-primary"     onClick={()=>submitanswer(post?._id)}>Submit</button>
        <button type="button" class="btn btn-secondary" onClick={()=>setmodal(false)}>Cancel</button>
        </div>
       </div></div>}
       </div>
       
     
       
    
  )
}

export default Content
