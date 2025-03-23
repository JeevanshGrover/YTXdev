import mongoose from "mongoose";

import { DB_NAME } from "../constants.js";


//db is in another continent
const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);   //see this on console
    }
    catch (error){
        console.log("MongoDB connection failed");
        process.exit(1);  //study about this in nodejs
    }
}


export default connectDB;