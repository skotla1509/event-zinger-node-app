import * as dao from "./reviews-dao.js"

const ReviewsController = (app) => {
    const createReview = async (req, res) => {
        const review = req.body
        const currentUser = req.session['currentUser']
        review.author = currentUser._id
        const actualReview = await dao.createReview(review)
        res.json(actualReview)
    }
    const findReviewsByEventId = async (req, res) => {
        const eventId = req.params.eventId;
        const reviews = await dao.findReviewsByEventId(eventId)
        res.json(reviews)
    }
    const findReviewsByAuthor = async (req, res) => {
        const author = req.params.author
        const reviews = await dao.findReviewsByAuthor(author)
        res.json(reviews)
    }
    app.post('/reviews', createReview)
    app.get('/events/:eventId/reviews', findReviewsByEventId)
    app.get('/users/:author/reviews', findReviewsByAuthor)
}
export default ReviewsController;