// Importing createAsyncThunk function from Redux Toolkit
import { createAsyncThunk } from "@reduxjs/toolkit";
// Importing service functions for authentication from the auth-service module
import * as authService from "./auth-service.js";

// Thunk action creator to login asynchronously
export const loginThunk = createAsyncThunk(
    "user/login", async (credentials) => {
        const user = await authService.login(credentials);
        return user;
    }
);

// Thunk action creator to logout asynchronously
export const logoutThunk = createAsyncThunk(
    "auth/logout", async () => {
        return await authService.logout();
    }
);


// Thunk action creator to fetch user profile asynchronously
export const profileThunk = createAsyncThunk(
    "auth/profile", async() => {
        const response = await authService.profile();
        return response.data;
    }
);

// Thunk action creator to update user information asynchronously
export const updateUserThunk = createAsyncThunk(
    "user/updateUser", async (user) => {
        await authService.updateUser(user);
        return user;
    }
);