import axios from 'axios';

//const SERVER_API_URL = 'http://localhost:5000/api';
//const USERS_URL = `${SERVER_API_URL}/students`;

const USERS_URL = 'https://remo-project-server.onrender.com/api/students';

const api = axios.create({ withCredentials: true });

export const login = async ({ username, password }) => {
    const response = await api.post(`${USERS_URL}/login`, { username, password });
    const user = response.data;
    console.log(user);
    return user;
    
};

export const logout = async () => {
    const response = await api.post(`${USERS_URL}/logout`);
    return response.data;
};

export const profile = async () => {
    const response = await api.post(`${USERS_URL}/profile`);
    return response;
};

export const updateUser = async (user) => {
    const response = await api.put(`${USERS_URL}/update/${user._id}`, {user});
    return response.data;
};

