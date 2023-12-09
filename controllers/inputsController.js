// Importing the inputsDao module which contains database operations
import * as inputsDao from '../userInput/inputsDao.js';

// Controller for handling input-related routes
const inputController = (app) => {
    // Route to fetch all inputs
    app.get('/api/inputs', findAllInputs); 
    // Route to find an input by its ID
    app.get('/api/inputs/:iid', findInputByID);
    // Route to create a new input
    app.post('/api/inputs', createInput);
    // Route to delete an input by its ID
    app.delete('/api/inputs/:iid', deleteInput);
    // Route to update an input by its ID
    app.put('/api/inputs/:iid', updateInput);

}

// Function to find all inputs
const findAllInputs = async (req, res) => {
    const inputs = await inputsDao.findInputs({})
    res.json(inputs);
}

// Function to find an input by its ID
const findInputByID = async (req, res) => {
    const inputId = req.params.iid;
    const input = await inputsDao.findInputByID(inputId);
    res.json(input);
}

// Function to create a new input
const createInput = async (req, res) => {
    const newInput = req.body;
    const insertedInput = await inputsDao.createInput(newInput);
    res.json(insertedInput);
}

// Function to delete an input by its ID
const deleteInput = async (req, res) => {
    const inputIDtoDelete = req.params.iid;
    const status = await inputsDao.deleteInput(inputIDtoDelete);
    res.json(status);
}

// Function to update an input by its ID with new data
const updateInput = async (req, res) => {
    const inputIDtoUpdate = req.params.iid;
    const updates = req.body;
    const status = await inputsDao.updateInput(inputIDtoUpdate, updates);
    res.json(status);
}

// Exporting the inputController to be used in other parts of the application
export default inputController;