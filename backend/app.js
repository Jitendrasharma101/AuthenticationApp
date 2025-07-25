import dotenv from 'dotenv'
import { connectDB } from './config/connectdb.js';
dotenv.config()
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
const app=express()
const port=process.env.PORT
const DATABASE_URL=process.env.DATABASE_URL

const corsOptions={
    origin:process.env.FRONTEND_HOST,
    credentials:true,
    optionsSuccessStatus:200,
};
app.use(cors(corsOptions))
connectDB(DATABASE_URL)
app.use(express.json())
app.use(cookieParser())

app.listen(port,()=>{
    
    console.log(`Server listening at http://localhost:${port}`)
})