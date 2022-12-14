import interestsModel from "./interests-model.js";

export const markInterested = (interest) =>
	interestsModel.create(interest)

export const findInterestsByEvent = (event) =>
	interestsModel
		.find({event})
		.populate('user')
		.exec()

export const findInterestsByUser = (user) =>
	interestsModel.find({user})
		.populate('event')
		.exec()