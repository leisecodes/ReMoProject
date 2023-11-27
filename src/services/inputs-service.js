import axios from 'axios';

const INPUTS_API = 'https://remo-project-server.onrender.com/api/inputs';

export const createInput = async (input) => {
    const response = await axios.post(INPUTS_API, input);
    return response.data;
}

export const findInputs = async () => {
    const response = await axios.get(INPUTS_API);
    const inputs = response.data;
    return inputs;
}

export const deleteInput = async (iid) => {
    const response = await axios.delete(`${INPUTS_API}/${iid}`)
    return response.data;
}

export const updateInput = async (input) => {
    const response = await axios.put(`${input._id}`, input);
    return input;
}