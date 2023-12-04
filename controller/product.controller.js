import ProductRepository from "../repository/product.repository.js";


export default class ProductController{

    constructor(){
      this.productRepository = new ProductRepository();
    }

    //Gets all products 
    async getAllProducts(req,res){
      try{
         const products = await this.productRepository.getAll();
         res.status(200).json({
            data:{
                products
            }
         });
      }
      catch(error){
         console.log(error);
         return res.status(200).send('Something went wrong');
      }
    }

    // Adds a product by getting name and quantity from the user
    async addProduct(req,res){
      try{
         const {name,quantity} = req.body;
         const createdRecord = await this.productRepository.add(name,quantity);
         console.log(createdRecord);
         if(createdRecord){
            res.status(201).json({
                data: {
                    product:{
                        name,
                        quantity
                    }
                }
             });
         }
      }catch(error){
         console.log(error);
         return res.status(200).send('Something went wrong');
      }
    }

    //Delete a product using product id
    async deleteProduct(req,res){
        try{
           const id = req.params.id;
           const deletedRecord = await this.productRepository.delete(id);
           if(deletedRecord){
            res.status(200).json({
                data:{
                    message:"product deleted"
                }
            });
           } 
        }catch(error){
           console.log(error);
           return res.status(200).send('Something went wrong');
        }
    }

    //Update quantity of product using product id
    async updateProduct(req,res){
        try{
           const {quantity} = req.query;
           const id = req.params.id;
           const updatedRecord = await this.productRepository.update(id,quantity);
           console.log('Controller',updatedRecord);
           if(updatedRecord){
            res.status(200).json({
                data: {
                    product:updatedRecord,
                    message:"updated successfully"
                }
             });
           }
        }catch(error){
           console.log(error);
           return res.status(200).send('Something went wrong');
        }
    }

}
