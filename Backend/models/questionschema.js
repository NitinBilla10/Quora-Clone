const mongoose = require('mongoose')

const questionschema = new mongoose.Schema({
    questionName: String,
    questionUrl: String,
    createdAt: {
        type: Date,
        default: Date.now()

    },
    allAnswers:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "question"
    }
    
})
module.exports = mongoose.model("question", questionschema)