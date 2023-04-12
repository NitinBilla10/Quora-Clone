
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

function Content({post}) {
  const editorRef = useRef();
  const[postid,setpostid]=useState('');
        
  const submitanswer= async ()=>{
    
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
    await axios.post("/api/answers",body,config).then((res)=>{
      console.log(res.data);
    }).catch((e)=>{
      alert("Question Can't be add")
      console.log(e);
    })
   } 
    
  }

 
  return (
    
         <>
        <div className='feed'>
        <div className='avatar'><p><span class="material-symbols-outlined">
         account_circle
         </span> <strong>User Name</strong><br/>
         <small><LastSeen date={post?.createdAt} locale="en-US" /></small></p></div>
         
         <div className='leftfeed'>
         <div className='questioncontainer'>
            <p id='feedquestion'>{post?.questionName}</p>
            <img src={post?.questionUrl}/>
            </div></div>
            <div className='rightfeed'>
            <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#contentmodal">Answer</button>
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
       <div className='answerfeed'>
       <p><span class="material-symbols-outlined">
         account_circle
         </span>User_Name<br/><span><LastSeen date={_a?.createdAt} locale="en-US" /></span></p>
         <div id='feedanswer'>{ReactHtmlparser(_a?.answer)}</div>
        </div>
        ))}
        
        <div class="modal fade" id="contentmodal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
       <div class="modal-dialog modal-dialog-centered">
       <div class="modal-content">
       <div class="modal-header">
        <h5 class="modal-title">This Is Question</h5>
        <p>is asked by <span>User_Name</span> on <small>{new Date(post?.createdAt).toLocaleString()}</small></p>
        
       </div>
       <div class="modal-body">
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
       
       <div class="modal-footer">
       <button type="button" class="btn btn-primary" data-bs-dismiss="modal" id='submitanswerbtn'  onClick={submitanswer}>Submit</button>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        
       </div>
       </div>
       </div>
     </div>
       </div>

        </>
  )
}

export default Content
