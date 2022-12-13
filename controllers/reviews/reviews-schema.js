import mongoose from "mongoose";

const reviewsSchema = mongoose.Schema({
    review: String,
    eventId: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
    }
}, {collection: 'reviews'})
export default reviewsSchema;