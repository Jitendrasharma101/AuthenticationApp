import mongoose from 'mongoose'

const connectDB = async(DATABASE_URL)=>{
    try{
        
        await mongoose.connect(DATABASE_URL)
        console.log('Connected Successfully...')
    }
    catch (error){
        console.log(`the error is ${error}`);
    }
}
export{connectDB}