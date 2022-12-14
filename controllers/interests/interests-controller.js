import * as dao from "./interests-dao.js"
import * as eventsDao from "../events/events-dao.js";

const InterestsController = (app) => {
    const markInterested = async (req, res) => {
        const body = req.body
        const currentUser = req.session['currentUser']
        let currentEvent;
        currentEvent = await eventsDao.findEventById(body.event['eventId'])
        if (!currentEvent) {
            currentEvent = await eventsDao.addEvent(body.event);
        }

        const actualInterest = await dao.markInterested(
          {
              user: currentUser._id,
              event: currentEvent._id
          });
        res.json(actualInterest)
    }
    const findInterestsByEventId = async (req, res) => {
        const eventId = req.params.eventId;
        const currentEvent = await eventsDao.findEventById(eventId)
        let interests = [];
        if (currentEvent) {
            interests = await dao.findInterestsByEvent(currentEvent._id);
        }
        res.json(interests)
    }
    const findInterestsByUser = async (req, res) => {
        const user = req.params.user
        const interests = await dao.findInterestsByUser(user)
        res.json(interests)
    }
    app.post('/interests', markInterested)
    app.get('/events/:eventId/interests', findInterestsByEventId)
    app.get('/users/:user/interests', findInterestsByUser)
}
export default InterestsController;