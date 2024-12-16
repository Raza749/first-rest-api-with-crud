const Product = require("../models/product.model");



const createProductController = async (req, res) => {
    const product = await Product.create(req.body);
    res.status(200).json({
        success: true,
        product
    });
};

const getAllTheProducts = async (req, res) => {
    const allProducts = await Product.find();
    res.status(201).json({
        success: true,
        allProducts
    });
};

const updateTheProduct = async (req, res) => {
    let product = await Product.findById(req.params.body);
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        useFindAndModify: false,
        runValidators: true
    });
    res.status(200).json({
        success: true,
        product
    });
};

const deleteProduct = async (req, res) => {
    let product = await Product.findById(req.params.body);

    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }

    await product.remove();
    res.status(200).json({
        success: true,
        message: "Product is deleted successfully..."
    });
};


module.exports = {
    createProductController,
    getAllTheProducts,
    updateTheProduct,
    deleteProduct,
}