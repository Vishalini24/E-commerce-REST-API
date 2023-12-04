import mongoose from "mongoose";

export const productSchema = new mongoose.Schema({
    _id:String,
    name: String,
    quantity: Number
})

export const productModel = mongoose.model('Product',productSchema);