import Product from "../models/products.js";

// POST
// path: http://localhost:5000/product/create
export const createProduct = async (req, res) => {
    const product = req.body;
    try {
        const newProduct = Product({ ...product });
        await newProduct.save();
        res.status(200).json(newProduct);
    } catch (error) {
        console.log(error)
    }
};

// READ all Porduct
// path: http://localhost:5000/product/getAll

export const getAllProduct = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products)
    } catch (error) {
        console.log(error)
    }
};

// Read Single Product
// path: http://localhost:5000/product/getOne/{productId}'
export const getSingleProduct = async (req, res) => {
    try {
        const { productId } = req.params;
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving product' });
    }
};

// Update a Product
// path: http://localhost:5000/product/update/{productId}
export const updateProduct = async (req, res) => {
    try {
        const { productId } = req.params;
        const { name, description, price } = req.body;

        const updatedProduct = await Product.findByIdAndUpdate(
            productId,
            { $set: { name, description, price } },
            { new: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.json(updatedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating product' });
    }
}

// Delete a Product
// path: http://localhost:5000/product/delete/{productId}
export const deleteProduct = async (req, res) => {
    try {
        const { productId } = req.params;
        await Product.findByIdAndDelete(productId);
        res.status(200).json({ message: "Product Deleted Successfully" })
    } catch (error) {
        console.log(error)
    }
}