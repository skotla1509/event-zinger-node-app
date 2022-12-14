import * as eventsDao from './events-dao.js'

const EventsController = (app) => {

    const addEvent   = async (req, res) => {
        const event = req.body;
        const actualEvent = await eventsDao.addEvent(event)
        res.send(actualEvent)
    }
    const findAllEvents = async (req, res) => {
        const eventsInDatabase = await eventsDao.findAllEvents()
        res.send(eventsInDatabase)
    }
    const findEventById = async (req, res) => {
        const eventId = req.params['eventId']
        const actualEvent = await eventsDao.findEventById(eventId);
        res.send(actualEvent)
    }

    app.post  ('/events', addEvent)
    app.get   ('/events', findAllEvents)
    app.get   ('/events/:eventId', findEventById)
}

export default EventsController;