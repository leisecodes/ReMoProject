import * as inputsDao from '../userInput/inputsDao.js';

const inputController = (app) => {
    app.get('/api/inputs', findAllInputs); 
    app.get('/api/inputs/:iid', findInputByID);
    app.post('/api/inputs', createInput);
    app.delete('/api/inputs/:iid', deleteInput);
    app.put('/api/inputs/:iid', updateInput);

}

const findAllInputs = async (req, res) => {
    const inputs = await inputsDao.findInputs({})
    res.json(inputs);
}

const findInputByID = async (req, res) => {
    const inputId = req.params.iid;
    const input = await inputsDao.findInputByID(inputId);
    res.json(input);
}

const createInput = async (req, res) => {
    const newInput = req.body;
    const insertedInput = await inputsDao.createInput(newInput);
    res.json(insertedInput);
}

const deleteInput = async (req, res) => {
    const inputIDtoDelete = req.params.iid;
    const status = await inputsDao.deleteInput(inputIDtoDelete);
    res.json(status);
}

const updateInput = async (req, res) => {
    const inputIDtoUpdate = req.params.iid;
    const updates = req.body;
    const status = await inputsDao.updateInput(inputIDtoUpdate, updates);
    res.json(status);
}

export default inputController;