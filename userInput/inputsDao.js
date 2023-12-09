// Importing the inputsModel module which represents the model/schema for inputs in the database
import inputsModel from "./inputsModel.js";

// Function to find all inputs
export const findInputs = () => inputsModel.find();
// Function to find an input by its ID
export const findInputByID = (iid) => inputsModel.findOne({inputID: iid});
// Function to create a new input
export const createInput = (input) => inputsModel.create(input);
// Function to delete an input by its ID
export const deleteInput = (inputID) => inputsModel.deleteOne({_id: inputID});
// Function to update an input by its ID with new data
export const updateInput = (inputID, input) => inputsModel.updateOne({_id: inputID}, {$set: input});