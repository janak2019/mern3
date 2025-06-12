const express = require('express')
 const app = express()

 app.get("/",(req,res)=>{
    
    res.json({
        message: "This is home Page"
    })
})
 app.get("/about",(req,res)=>{
    
    res.json({
        message: "About Page"
    })
})

 app.listen(3000,()=>{
    console.log("NodeJs project has started")
 })
//  mongodb+srv://withjanak:<db_password>@cluster0.j7iiuep.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
