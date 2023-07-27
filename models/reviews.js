import mongoose from "mongoose";

const ReviewSchema = mongoose.Schema({
    image: { // profile image
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Date
    },
    star: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
})

const Review = mongoose.model('Review', ReviewSchema);

export default Review;