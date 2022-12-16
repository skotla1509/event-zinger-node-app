import mongoose from "mongoose";
import transactionSchema from "./transaction-schema.js";

const transactionModel = mongoose.model('TransactionModel', transactionSchema)

export default transactionModel