import mongoose from "mongoose";
import interestsSchema from "./interests-schema.js";

const interestsModel = mongoose.model('InterestsModel', interestsSchema)

export default interestsModel