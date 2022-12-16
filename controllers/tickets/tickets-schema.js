import mongoose from "mongoose";

const ticketsSchema = mongoose.Schema({
    totalTickets: {type: Number, default: 0},
    remainingTickets: {type: Number, default: 0},
    event: {
        type: mongoose.Schema.Types.ObjectId,
        unique: true,
        ref: 'EventModel'
    }
}, {collection: 'tickets'});
export default ticketsSchema;