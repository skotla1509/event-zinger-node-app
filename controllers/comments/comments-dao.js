import commentsModel from "./comments-model.js";

export const addComment = (comment) =>
    commentsModel.create(comment)

export const findCommentsByEvent = (event) =>
    commentsModel
        .find({event})
        .populate('user')
        .exec()

export const findCommentsByUser = (user) =>
    commentsModel.find({user})
			.populate('event')
			.exec()