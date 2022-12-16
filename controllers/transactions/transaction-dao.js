import transactionModel from "./transaction-model.js";

export const addTransaction = (sellObj) =>
    transactionModel
			.create(sellObj)

export const findAllTransactionsByEventId = (event) =>
    transactionModel
        .find({event})
        .populate('user')
				.populate('event')
        .exec()

export const findAllTransactionsByUser = (user) =>
    transactionModel.find({user})
			.populate('event')
			.populate('user')
			.exec()
