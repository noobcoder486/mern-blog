import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import userRoute from './routes/user.routes.js'
dotenv.config()

const app = express()

mongoose.connect(process.env.MONGO).then(
    ()=>{console.log("Mongo DB is Connect hogayi")}
).catch((err)=>{console.log(err)})



app.listen(3000, ()=>{
    console.log("Server is running at Port 3000 !")
});

app.use('/api/user',userRoute)