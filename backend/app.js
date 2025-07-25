import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
const app=express()
const port=process.env.port||3000

const corsOptions={
    origin:'http://localhost:3000',
    credentials:true,
    optionsSuccessStatus:200,
};
app.use(cors(corsOptions))
app.listen(port,()=>{
    
    console.log(`Server listening at http://localhost:${port}`)
})