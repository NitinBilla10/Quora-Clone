const express = require('express')
const router = express.Router();

const answerDB = require('../models/answerschema')

router.post('/', async (req,res) =>{
    console.log(req.body)
 
    try{
     await answerDB.create({
         answer: req.body.answer,
         questionId: req.body.questionId,
         username:req.body.username
     }).then(()=>{
         res.status(201).send({
             status: true,
             message: "Successful created Answer"
 
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
 

module.exports=router