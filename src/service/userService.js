// src/services/orderService.js
import privateApiClient from "./privateApiClient"; // Import private axios instance
import { endpoints } from "../config/apiUrl"; // Import the endpoints configuration

export const getUserProfile = async () => {
    try {
        const response = await privateApiClient.get(endpoints.user.getProfile);
        return response.data.data;
    } catch (error) {
        // Log error for debugging
        console.error("Error fetching user profile", error);

        // Provide a more user-friendly message
        if (error.response && error.response.status === 401) {
            throw new Error("Unauthorized access - Please login again.");
        } else if (error.response && error.response.status === 500) {
            throw new Error("Server error - Please try again later.");
        } else {
            throw new Error("An error occurred while fetching user profile.");
        }
    }
};

export const updateUserProfileApi = async (data) => {
    try {
        const response = await privateApiClient.put(endpoints.user.updateProfile, data);
        return response.data;
    } catch (error) {
        console.error("Error updating user profile", error);
        throw new Error("An error occurred while updating user profile.");
    }
};

// get all users

export const getAllUsersApi = async (query) => {
    try {
        console.log("Received Query:", query);

        // Start with required pagination parameters
        let queryString = `page=${query.page || 1}&limit=${query.limit || 10}`;

        // Add filters dynamically if they exist
        if (query.search) {
            queryString += `&search=${query.search}`;
        }
        if (query.role_name && query.role_name.length > 0) {
            queryString += `&role_name=${query.role_name.join(",")}`; // No extra comma
        }
        if (query.user_status && query.user_status.length > 0) {
            queryString += `&user_status=${query.user_status.join(",")}`;
        }

        console.log("API Request URL:", `${endpoints.user.getAllUsers}?${queryString}`);

        // Send request with manually constructed URL
        const response = await privateApiClient.get(`${endpoints.user.getAllUsers}?${queryString}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching all users", error);
        throw new Error("An error occurred while fetching all users.");
    }
};

// admin create user

export const createUserApi = async (data) => {
    try {
        const response = await privateApiClient.post(endpoints.user.createUser, data);
        return response.data;
    } catch (error) {
        console.error("Error creating user", error);
        throw new Error("An error occurred while creating user.");
    }
};

// admin update user

export const updateUserApi = async ({ id, data }) => {
    try {
        console.log(id, data, "id and data");
        const response = await privateApiClient.put(endpoints.user.updateUser(id), data);
        return response.data;
    } catch (error) {
        console.error("Error updating user", error);
        throw new Error("An error occurred while updating user.");
    }
};

// admin delete user

export const deleteUserApi = async ({ id, deleteType = 'soft' }) => {
    try {
        const response = await privateApiClient.delete(`${endpoints.user.deleteUser(id)}?deleteType=${deleteType}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting user", error);
        throw new Error("An error occurred while deleting user.");
    }
};



