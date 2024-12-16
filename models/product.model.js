const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();


// Database Connection
mongoose.connect(process.env.MongoDB_URL).then(()=>{
    console.log("MongoDB Connected...");
}).catch((err)=>{
    console.log("Database Connected failed...");
});

const productSchema = mongoose.Schema({
    name:String,
    description:String,
    price:Number
});

const Product = mongoose.model("Product",productSchema);

module.exports = Product;
