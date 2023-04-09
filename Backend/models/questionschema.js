const mongoose = require('mongoose')

const questionschema = new mongoose.Schema({
    questionName: String,
    questionUrl: String,
    createdAt: {
        type: Date,
        default: Date.now()

    },
    answers: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "answers"
    }

})
module.exports = mongoose.model("questions", questionschema)