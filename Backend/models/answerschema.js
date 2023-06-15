const mongoose = require('mongoose')

const answerschema = new mongoose.Schema({
    answer: String,
    username:String,
    questionId: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "questions"
    },
    createdAt: {
        type: Date,
        default: Date.now()

    }
    

})
module.exports = mongoose.model("answers", answerschema)