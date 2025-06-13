require('dotenv').config()
const express = require('express')
const connectToDatabase = require('./database')
const app = express()
app.use(express.json)
connectToDatabase()

 app.get("/",(req,res)=>{
    
    res.json({
        message: "This is home Page"
    })
})
//  app.get("/about",(req,res)=>{
    
//     res.json({
//         message: "About Page"
//     })
// })
 app.post("/blog",(req,res)=>{
    console.log(req.body)
    res.status(200).json({
        message: "Blog Api hit successfully"
    })
})


 app.listen(process.env.PORT,()=>{
    console.log("NodeJs project has started")
 })

