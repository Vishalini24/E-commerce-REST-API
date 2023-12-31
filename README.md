# E-commerce-REST-API
This project is a simple Node.js and MongoDB-based API for managing product inventory in an ecommerce platform.

# Features
* **Add Products:** Add new products to the database.
* **List Products:** Retrieve a list of all products in the inventory.
* **Delete Products:** Remove a product from the inventory.
* **Update Product Quantity:** Increment or decrement the quantity of a product.

# Tech Stack
* Node.js
* MongoDB

# Instructions for Setup
* **Clone the repository**
  
  git clone https://github.com/your-username/ecommerce-api.git
  cd ecommerce-api
  
* **Install dependencies:**
  
  npm install
  
* **Set up MongoDB:**
  
  Ensure that you have MongoDB installed and running.
  
  Update the MongoDB connection URI in the config.js file.
  
* **Start the server:**
  
  npm start

  # API Endpoints
    **1. Add Products**
    
    **URL:** /products/create
    
    **Method:** POST
    
    **2. List Products**
    
    **URL:** /products
    
    **Method:** GET
    
    **3. Delete Products**
    
    **URL:** /products/:id
    
    **Method:** DELETE
    
    **4. Update Product Quantity**
    
    **URL:** /products/:id/update_quantity/?number=10
    
    **Method:** POST
