import * as dao from "./transaction-dao.js"
import * as eventsDao from "../events/events-dao.js";
import * as ticketsDao from "../tickets/tickets-dao.js";

const TransactionController = (app) => {

    const addTransaction = async (req, res) => {
        try {
            const body = req.body;
            const currentUser = req.session['currentUser'];
            let currentEvent;
            let currentTickets;
            // Create document in "events table" if not existing
            currentEvent = await eventsDao.findEventById(body.event['eventId'])
            if (!currentEvent) {
                currentEvent = await eventsDao.addEvent(body.event);
            }
            // Create document in "tickets table" if not existing for the current event
            currentTickets = await ticketsDao.findTicketsByEvent(currentEvent._id);
            if (!currentTickets) {
                currentTickets = await ticketsDao.addTickets({event: currentEvent._id});
            }

            // Add new transaction in "transactions table"
            const actualTransaction = await dao.addTransaction(
              {
                  tickets: body.tickets,
                  type: body.type,
                  user: currentUser._id,
                  event: currentEvent._id
              });

            // Update the number of tickets after the transaction in Tickets table
            const updates = {
                totalTickets: currentTickets.totalTickets,
                remainingTickets: currentTickets.remainingTickets
            }
            if (body.type === "BUY") {
                updates['remainingTickets'] -= body.tickets;
            }
            else {
                updates['totalTickets'] += Number(body.tickets);
                updates['remainingTickets'] += Number(body.tickets);
            }
            const actualTickets = await ticketsDao.updateTickets(currentTickets._id, updates);

            // Return the transaction
            res.json(actualTransaction)
        }
        catch (error) {
            res.sendStatus(400)
        }
    }
    const findAllTransactionsByEventId = async (req, res) => {
        const eventId = req.params.eventId;
        const currentEvent = await eventsDao.findEventById(eventId)
        let transactions = [];
        if (currentEvent) {
            transactions = await dao.findAllTransactionsByEventId(currentEvent._id)
        }
        res.json(transactions)
    }
    const findAllTransactionsByUser = async (req, res) => {
        const user = req.params.user;
        const transactions = await dao.findAllTransactionsByUser(user)
        res.json(transactions)
    }
    app.post('/transactions', addTransaction)
    app.get('/events/:eventId/transactions', findAllTransactionsByEventId)
    app.get('/users/:user/transactions', findAllTransactionsByUser)
}
export default TransactionController;