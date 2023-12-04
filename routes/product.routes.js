//Manage routes to product controller

import express from 'express';
import ProductController from '../controller/product.controller.js';


//Initialize express router
const productRouter = express.Router();

const productController = new ProductController();


//Get All Products
productRouter.get("/",(req,res)=>{
    productController.getAllProducts(req,res);
});

//Add a Product
productRouter.post("/create",(req,res)=>{
    productController.addProduct(req,res);
});

//Delete a Product
productRouter.delete("/:id",(req,res)=>{
    productController.deleteProduct(req,res);
});

//Update quantity of a Product
productRouter.put("/:id/update_quantity/",(req,res)=>{
    productController.updateProduct(req,res);
});


export default productRouter;