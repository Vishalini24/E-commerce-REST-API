import { productModel } from "../model/product.schema.js";
import { connectUsingMongoose } from "../config/dbConfig.js";


export default class ProductRepository{
    
     // Create a new product.
     async add(name,quantity)
     {
         try {
            
        // Connect to MongoDB
        const mongooseConnection = await connectUsingMongoose();

        // Access the MongoDB `db` object
        const db = mongooseConnection.connection.db;
                const nextCounter = await this.getNextCounter(db);
         // Create a new product
         const newProduct = new productModel({
          name,
          quantity,
          _id: nextCounter
         });
 
         // Save the product
         const savedProduct = await newProduct.save();

         return savedProduct;
         } catch (error) {
             console.log(error);
             throw error;
         }
     }

     //Get all products from DB
     async getAll()
     {
         try {
         const products = await productModel.find();
         return products;
         } catch (error) {
             console.log(error);
             throw error;
         }
     }

     //Delete a product using product ID
     async delete(id){
        try {
            //Deletes a product by using product ID
            const deletedProduct = await productModel.findByIdAndDelete(id);
            return deletedProduct;
        } catch (error) {
            console.log(error);
            throw error;
        }
     }

     async update(id,quantity){
        try {
            //Updates a product by using product ID
            const updatedProduct = await productModel.findByIdAndUpdate(
                id,
                { quantity },
                { new: true ,select:'-__v'}
            );
            console.log(updatedProduct);
            return updatedProduct;
        } catch (error) {
            console.log(error);
            throw error;
        }
     }

     //This is used to change product id from object id to a simple counter 
     async getNextCounter(db){
        const resultDocument = await db.collection("counters").findOneAndUpdate(
            {_id:'productId'},
            {$inc:{value: 1}},
            {returnDocument:'after'}
        )  
        return resultDocument.value;
    }
 
}