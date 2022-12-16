import ticketsModel from "./tickets-model.js";

export const addTickets = (ticketsObj) =>
	ticketsModel.create(ticketsObj)

export const findTicketsByEvent = (event) =>
    ticketsModel
        .findOne({event}, {event: false})

export const updateTickets = (tid, updates) =>
    ticketsModel
			.updateOne({_id: tid}, {$set: updates})