const express = require("express");
const router = express.Router();
const { createProductController, getAllTheProducts, updateTheProduct, deleteProduct } = require("../controllers/productController");

// Create a Product
router.post("/product", createProductController);


// Get All the Products
router.get("/products", getAllTheProducts);

// Update the product by id 
router.put("/product/:id", updateTheProduct)

// Delete the procut
router.delete("/product/:id",deleteProduct);


module.exports = router;

