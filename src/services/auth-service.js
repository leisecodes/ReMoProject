// Importing axios for making HTTP requests
import axios from 'axios';

//const SERVER_API_URL = 'http://localhost:5000/api';
//const USERS_URL = `${SERVER_API_URL}/students`;

// API endpoints for user-related operations
const USERS_URL = 'https://remo-project-server.onrender.com/api/students';

// Creating an instance of axios with credentials enabled
const api = axios.create({ withCredentials: true });

// Function to perform user login
export const login = async ({ username, password }) => {
    const response = await api.post(`${USERS_URL}/login`, { username, password });
    const user = response.data;
    console.log(user);
    return user;
    
};

// Function to perform user logout
export const logout = async () => {
    const response = await api.post(`${USERS_URL}/logout`);
    return response.data;
};


// Function to fetch user profile
export const profile = async () => {
    const response = await api.post(`${USERS_URL}/profile`);
    return response;
};

// Function to update user information
export const updateUser = async (user) => {
    const response = await api.put(`${USERS_URL}/update/${user._id}`, {user});
    return response.data;
};

