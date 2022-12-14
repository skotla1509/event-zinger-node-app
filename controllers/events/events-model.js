import mongoose from "mongoose";
import eventsSchema from "./events-schema.js";

const eventsModel = mongoose.model('EventModel', eventsSchema)

export default eventsModel