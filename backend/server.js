const express=require("express")
const app=express()
// This tells the server what to do when the main page is visited
app.get('/', (req, res) => {
    res.send("Server is ready! The Food Blog backend is running.");
});

const dotenv=require("dotenv").config()
const connectDb=require("./config/connectionDB")
const cors=require("cors")

const PORT=process.env.PORT || 3000
connectDb()

app.use(express.json())
app.use(cors())
app.use(express.static("public"))

app.use("/",require("./routes/user"))
app.use("/recipe",require("./routes/recipe"))

app.listen(PORT,(err)=>{
    console.log(`app is listening on port ${PORT}`)
})