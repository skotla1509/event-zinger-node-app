import mongoose from "mongoose";

const transactionSchema = mongoose.Schema({
    tickets: {type: Number},
    type: {type: String, enum: ["BUY", "SELL"]},
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EventModel'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
    }
}, {collection: 'transactions'});
export default transactionSchema;