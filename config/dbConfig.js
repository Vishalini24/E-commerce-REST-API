import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

//getting the DB_URL from .env file
const url = process.env.DB_URL;

export const connectUsingMongoose = async()=>{

    try{
        //connect to mongodb using the connection string
        const mongooseConnection = await mongoose.connect(url,{
            useNewUrlParser: true,
            useUnifiedTopology:true
        });
        console.log('Mongodb connected using mongoose');
        return mongooseConnection;
    }
    catch(err){
        console.log('Error while connecting to db');
        console.log(err);
    }
  
}

