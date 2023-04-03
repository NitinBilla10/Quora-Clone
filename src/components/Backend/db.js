

const mongoose = require('mongoose')
const url = "mongodb+srv://admin:admin@cluster0.bufl8pk.mongodb.net/?retryWrites=true&w=majority"


module.exports.connect = ()=>{
    mongoose.connect(url , {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>{
        console.log("MongoDB Connected")
    }).catch((e)=>console.log("Error", e))

}

