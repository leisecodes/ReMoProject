// Importing axios for making HTTP requests
import axios from 'axios';

// API endpoint for inputs
const INPUTS_API = 'https://remo-project-server.onrender.com/api/inputs';

// Function to create a new input
export const createInput = async (input) => {
    const response = await axios.post(INPUTS_API, input);
    return response.data;
}

// Function to fetch all inputs
export const findInputs = async () => {
    const response = await axios.get(INPUTS_API);
    const inputs = response.data;
    return inputs;
}

// Function to delete an input by ID
export const deleteInput = async (iid) => {
    const response = await axios.delete(`${INPUTS_API}/${iid}`)
    return response.data;
}

// Function to update an input
export const updateInput = async (input) => {
    const response = await axios.put(`${INPUTS_API}/${input._id}`, input);
    return input;
}