const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const path = require('path')
const PORT = 3000;
const cors = require('cors')
const db = require('./db')
const router = require('./routes')



//database connection
db.connect();


//middle ware
app.use(bodyParser.json({limit: "50mb"}))
app.use(bodyParser.urlencoded({extended: true , limit: "50mb"}))

//cors
app.use(( req, res, next) =>{
    req.header("Access-Control-Allow-Origin","*")
    req.header("Access-Control-Allow-Headers","*")
    next()
})

//Routes
app.use('/uploads', express.static(path.join(__dirname, "/../uploads")))
app.use('/uploads', express.static(path.join(__dirname, "/../forntend/build")))

// app.get("*",(req,res)=>
// {
//     try{
//          res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`))
//     }catch(e){
//         res.send("Unexpected Error !!!")
//     }
// }

// )

app.use(cors())

app.listen(process.env.PORT || PORT , ()=>{
    console.log(`Listening at Port: ${PORT}`)
})


app.use("/api", router)