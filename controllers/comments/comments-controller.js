import * as dao from "./comments-dao.js"
import * as eventsDao from "../events/events-dao.js";

const CommentsController = (app) => {
    const addComment = async (req, res) => {
        const body = req.body;
        const currentUser = req.session['currentUser'];
        let currentEvent;

        currentEvent = await eventsDao.findEventById(body.event['eventId'])
        if (!currentEvent) {
            currentEvent = await eventsDao.addEvent(body.event);
        }

        const actualComment = await dao.addComment(
          {
              comment: body.comment,
              user: currentUser._id,
              event: currentEvent._id
          });
        res.json(actualComment)
    }
    const findCommentsByEventId = async (req, res) => {
        const eventId = req.params.eventId;
        const currentEvent = await eventsDao.findEventById(eventId)
        let comments = [];
        if (currentEvent) {
            comments = await dao.findCommentsByEvent(currentEvent._id)
        }
        res.json(comments)
    }
    const findCommentsByUser = async (req, res) => {
        const user = req.params.user;
        const comments = await dao.findCommentsByUser(user)
        res.json(comments)
    }
    app.post('/comments', addComment)
    app.get('/events/:eventId/comments', findCommentsByEventId)
    app.get('/users/:user/comments', findCommentsByUser)
}
export default CommentsController;