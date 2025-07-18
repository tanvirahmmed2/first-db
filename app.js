const express= require("express")
const cores= require("cors")
require("./config/db")

const app= express()
app.use(cores())
app.use(express.urlencoded({extended: true}))
app.use(express.json())


const userRouter= require("./routes/users.routes")

app.use("/api/users", userRouter)


app.get("/",(req,res)=>{
    res.sendFile(__dirname +"/./views/index.html")
})


//router err
app.use((req,res)=>{
    res.status(404).json({
        message:"Route Not Found"
    })
})


//server errror
app.use((err, req,res, next)=>{
    res.status(500).json({
        message:"Server or something broken"
    })
})

module.exports= app