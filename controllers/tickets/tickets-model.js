import mongoose from "mongoose";
import ticketsSchema from "./tickets-schema.js";

const ticketsModel = mongoose.model('TicketModel', ticketsSchema)

export default ticketsModel