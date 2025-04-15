// src/services/userService.js
import privateApiClient from "./privateApiClient"; // Import private axios instance
import { endpoints } from "../config/apiUrl"; // Import the endpoints configuration
import { decrypt } from "../config/encryption";

export const getUserProfile = async () => {
    try {
        const response = await privateApiClient.get(endpoints.user.getProfile);
        if (process.env.NODE_ENV !== 'production') {
            return response.data;
        }
        return decrypt(response.data.data);
    } catch (error) {
        // Log error for debugging
        console.error("Error fetching user profile", error);

        // Provide a more user-friendly message
        if (error.response && error.response.status === 401) {
            throw new Error(error.response?.data?.message || "Unauthorized access - Please login again.");
        } else if (error.response && error.response.status === 500) {
            throw new Error(error.response?.data?.message || "Server error - Please try again later.");
        } else {
            throw new Error(error.response?.data?.message || "An error occurred while fetching user profile.");
        }
    }
};

export const updateUserProfileApi = async (data) => {
    try {
        const response = await privateApiClient.put(endpoints.user.updateProfile, data);
        if (process.env.NODE_ENV !== 'production') {
            return response.data;
        }
        return decrypt(response.data.data);
    } catch (error) {
        console.error("Error updating user profile", error);
        throw new Error(error.response?.data?.message || "An error occurred while updating user profile.");
    }
};

// get all users

export const getAllUsersApi = async (query) => {
    try {
        console.log("Received Query:", query);

        const params = new URLSearchParams({
            page: query.page || 1,
            limit: query.limit || 10,
        });

        if (query.search) params.append("search", query.search);
        if (query.role_name?.length) params.append("role_name", query.role_name.join(","));
        if (query.user_status?.length) params.append("user_status", query.user_status.join(","));

        if (query.download) params.append("download", query.download);

        console.log("API Request URL:", `${endpoints.user.getAllUsers}?${params.toString()}`);

        const response = await privateApiClient.get(`${endpoints.user.getAllUsers}?${params.toString()}`);
        if (process.env.NODE_ENV !== 'production') {
            return response.data;
        }
        return decrypt(response.data.data);
    } catch (error) {
        console.error("Error fetching all users", error);
        throw new Error(error.response?.data?.message || "An error occurred while fetching all users.");
    }
};


// admin create user

export const createUserApi = async (data) => {
    try {
        const response = await privateApiClient.post(endpoints.user.createUser, data);
        if (process.env.NODE_ENV !== 'production') {
            return response.data;
        }
        return decrypt(response.data.data);
    } catch (error) {
        console.error("Error creating user", error);
        throw new Error(error.response?.data?.message || "An error occurred while creating user.");
    }
};

// admin update user

export const updateUserApi = async ({ id, data }) => {
    try {
        console.log(id, data, "id and data");
        const response = await privateApiClient.put(endpoints.user.updateUser(id), data);
        if (process.env.NODE_ENV !== 'production') {
            return response.data;
        }
        return decrypt(response.data.data);
    } catch (error) {
        console.error("Error updating user", error);
        throw new Error(error.response?.data?.message || "An error occurred while updating user.");
    }
};

// admin delete user

export const deleteUserApi = async ({ id, deleteType = 'soft' }) => {
    try {
        const response = await privateApiClient.delete(`${endpoints.user.deleteUser(id)}?deleteType=${deleteType}`);
        if (process.env.NODE_ENV !== 'production') {
            return response.data;
        }
        return decrypt(response.data.data);
    } catch (error) {
        console.error("Error deleting user", error);
        throw new Error(error.response?.data?.message || "An error occurred while deleting user.");
    }
};



