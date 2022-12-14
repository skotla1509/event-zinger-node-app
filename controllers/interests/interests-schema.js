import mongoose from "mongoose";

const interestsSchema = mongoose.Schema(
	{
		event: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'EventModel'
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'UserModel'
		}
	}, {collection: 'interests'});

export default interestsSchema;