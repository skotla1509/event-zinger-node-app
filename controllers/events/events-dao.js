import eventsModel from "./events-model.js";

export const findEventById = async (eventId) => await eventsModel.findOne({eventId: eventId});
export const findAllEvents = async () => await eventsModel.find();
export const addEvent = async (event) => await eventsModel.create(event);