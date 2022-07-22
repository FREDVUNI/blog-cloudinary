const express = require("express")
const app = express()
const morgan = require("morgan")
const path = require("path")
const dotenv = require("dotenv")
const connectDB = require("./database/connect")

app.use(morgan("tiny"))
dotenv.config({path:".env"}) 
app.set("view engine","ejs")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
  
app.use("/",require("./routes"))

app.use("/images",express.static(path.resolve(__dirname,"public/assets/images")))
app.use("/css",express.static(path.resolve(__dirname,"public/assets")))

const PORT = process.env.PORT || 8080 

connectDB()
app.listen(PORT,()=>{
    console.log(`server started on http:localhost:${PORT}`)
})