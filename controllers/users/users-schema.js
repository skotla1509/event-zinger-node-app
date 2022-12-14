import mongoose from "mongoose";

const obj = {
    userName: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    userRole: {type: String, required: true, enum: ['CUSTOMER', 'EVENT_MANAGER', 'ADMINISTRATOR']},
    firstName: {type: String},
    lastName: {type: String},
    gender: {type: String, enum: ['MALE', 'FEMALE']},
    avatar: {type: String},
    dateOfJoining: {type: String},
    addressLine1: {type: String},
    addressLine2: {type: String},
    pinCode: {type: String},
    city: {type: String},
    state: {type:String},
    country: {type: String}
}

const schema = mongoose.Schema(obj, {collection: 'users'});

export default schema;
