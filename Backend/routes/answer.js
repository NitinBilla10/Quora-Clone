const express = require('express')
const router = express.Router();

const questionDB = require('../models/answerschema')

router.post('/', async (req,res) =>{
   console.log(req.body)

   try{
    await questionDB.create({
        answers: req.body.questionName,
        questionUrl: req.body.questionUrl,
    }).then(()=>{
        res.status(201).send({
            status: true,
            message: "Successful created Question"

        })
    }).catch((err)=>{
        res.status(400).send({
            status: false,
            message: "Bad Format",
        })
    })
   } catch(er){
    res.status(500).send({
        status: 500,
        message:"Error During Adding Question"
    })
   }
})
module.exports = router

