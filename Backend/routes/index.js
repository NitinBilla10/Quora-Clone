const express = require('express')
const router = express.Router();
const questionRouter = require('./question')
//  const answerRouter = require('./answer')

router.get('/', (res, req)=>{
    req.send("This is api")
})
 router.use('/questions', questionRouter)
//  router.use('/answers', answerRouter)


module.exports=router;