import inputsModel from "./inputsModel.js";

export const findInputs = () => inputsModel.find();
export const findInputByID = (iid) => inputsModel.findOne({inputID: iid});
export const createInput = (input) => inputsModel.create(input);
export const deleteInput = (inputID) => inputsModel.deleteOne({_id: inputID});
export const updateInput = (inputID, input) => inputsModel.updateOne({_id: inputID}, {$set: input});