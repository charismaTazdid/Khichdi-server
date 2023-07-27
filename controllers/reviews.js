import Review from "../models/reviews.js"

// POST
// path: http://localhost:5000/review/create
export const createReview = async (req, res) => {
    const review = req.body;
    try {
        const newReview = Review({ ...review });
        await newReview.save();
        res.status(200).json(newReview);
    } catch (error) {
        console.log(error)
    }
}

// READ all 
// path: http://localhost:5000/review/getAll
export const getAllReview = async (req, res) => {
    try {
        const reviews = await Review.find({});
        res.status(200).json(reviews)
    } catch (error) {
        console.log(error)
    }
};

// Read Single Review
export const getSingleReview = (req, res) => {
    res.status(200).json({ message: "Here is a Single Review and Request id is: " })
};

// Update a Review
// path: http://localhost:5000/review/update/{reviewId}
export const updateReview = async (req, res) => {
    try {
        const { reviewId } = req.params;
        const { name, comment, star, image } = req.body;

        const updatedReview = await Review.findByIdAndUpdate(
            reviewId,
            { $set: { name, comment, star, image } },
            { new: true }
        );

        if (!updatedReview) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.json(updatedReview);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating product' });
    }
}

// Delete a Review
export const deleteReview = (req, res) => {
    res.send("Let's Delete Bad review")
}