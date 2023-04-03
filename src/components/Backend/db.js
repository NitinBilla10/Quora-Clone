

const mongoose=require('mongoose') 


module.exports.connect = ()=>{
    mongoose.connect(url , {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>{
        console.log("MongoDB Connected")
    }).catch((e)=>console.log("Error", e))

}

