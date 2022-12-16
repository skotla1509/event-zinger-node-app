import * as dao from "./tickets-dao.js"
import * as eventsDao from "../events/events-dao.js";

const TicketsController = (app) => {

    const findTicketsByEvent = async (req, res) => {
        const eventId = req.params.eventId;
        const currentEvent = await eventsDao.findEventById(eventId)
        let tickets = [];
        if (currentEvent) {
            tickets = await dao.findTicketsByEvent(currentEvent._id)
        }
        res.json(tickets)
    }

    app.get('/events/:eventId/tickets', findTicketsByEvent);
}
export default TicketsController;