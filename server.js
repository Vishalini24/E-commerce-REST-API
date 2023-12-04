import dotenv from "dotenv";
import express from "express";
import bodyParser from 'body-parser';
import { connectUsingMongoose } from "./config/dbConfig.js";
import productRouter from "./routes/product.routes.js";

//Create server
const server = express();

dotenv.config();

//use body-parser
server.use(bodyParser.json());

//route for product features
server.use("/api/products/",productRouter);

//Specify port
server.listen(4000, ()=>{
    console.log('Server is listening on port 4000');
    connectUsingMongoose();
})