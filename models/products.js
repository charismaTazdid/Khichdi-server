import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    offerPrice: {
        type: Number,
        required: true
    },
    regularPrice: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    review: {
        type: Number
    }

});


const Product = mongoose.model('Product', ProductSchema);

export default Product;