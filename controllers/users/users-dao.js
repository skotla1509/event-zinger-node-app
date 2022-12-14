import usersModel from "./users-model.js";

export const findAllUsers = async () => await usersModel.find();
export const findUserById = async (uid) => await usersModel.findById(uid);
export const findUserByName = async (name) => await usersModel.find({userName: name});
export const findUserByCredentials = async (username, password) => await usersModel.findOne({username, password});
export const createUser = async (user) => await usersModel.create(user);
export const deleteUser = async (uid) => await usersModel.deleteOne({_id: uid});
export const updateUser = async (uid, user) => await usersModel.updateOne({_id: uid}, {$set: user})