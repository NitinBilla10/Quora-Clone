const mongoose = require('mongoose')

const answerschema = new mongoose.Schema({
    answer: String,
    questionId: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "Questions"
    },
    createdAt: {
        type: Date,
        default: Date.now()

    }
    

})
module.exports = mongoose.model("Answers", answerschema)