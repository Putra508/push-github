import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import barangRoute from "./routes/barangRoute.js"

dotenv.config()

const app=express()

app.use(cors())
app.use(express.json())
app.use("/api", barangRoute);

const PORT=8000
app.listen(PORT,()=>{
    console.log("server berjalan..ok!!");
})