import mongoose from "mongoose";

const eventsSchema = mongoose.Schema({
    eventId: {type: String, required: true},
    name: {type: String, required: true},
    img: {type: String}
}, {collection: 'events'});

export default eventsSchema