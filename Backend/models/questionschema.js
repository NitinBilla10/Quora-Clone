const mongoose = require('mongoose')

const questionschema = new mongoose.Schema({
    questionName: String,
    questionUrl: String,
    createdAt: {
        type: Date,
        default: Date.now()

    },
    allAnswers:[]
    
})
module.exports = mongoose.model("questions", questionschema)