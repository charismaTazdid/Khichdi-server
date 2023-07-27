import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    address: {
        street: {
            type: String,
            required: true
        },
        building: {
            type: String
        },
        city: {
            type: String,
            required: true
        },
        // Add more properties as needed (e.g., state, postalCode)
    },
    orderList: [{
        menu: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
    }],
    deliveryFee: {
        type: Number
    },
    totalPrice: {
        type: Number
    },
    orderStatus: {
        type: String,
        default: "Accepted"
    },
    orderDate: {
        type: Date,
        default: Date.now
    },
    orderTime: {
        type: String
    }
});


const Order = mongoose.model('Order', OrderSchema);

export default Order;