import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    address: {
        type: String,
    },
    orders: {
        type: ""
    },
    password: {
        type: String,
        required: true
    },
});

const User = mongoose.model('User', UserSchema);

export default User;