import mongoose from "mongoose";

const commentsSchema = mongoose.Schema({
    comment: String,
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EventModel'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
    }
}, {collection: 'comments'});
export default commentsSchema;