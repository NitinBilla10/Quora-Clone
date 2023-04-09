const express = require('express')
const router = express.Router();

const questionDB = require('../models/questionschema')

router.post('/', async (req,res) =>{
   console.log(req.body)

   try{
    await questionDB.create({
        questionName: req.body.questionName,
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

router.get('/',async (req,res)=>{
try{
    await questionDB.aggregate([
        {
            $lookup: {
                from:'answers',
                localField:'_id',
                foreignField:'questionId',
                as:"allAnswers"
            }
        }
     ]).exec().then((doc)=>{
        res.status(200).send(doc)
    }).catch((err)=>
    {res.status(500).send({
        status:false,
        message:"unable to get question"})
    })
} catch{
    res.status(500).send({
        status:false,
        message:"Unknown error in getting question"
    })
}
})



module.exports = router

