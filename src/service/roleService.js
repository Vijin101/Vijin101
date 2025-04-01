// src/services/roleService.js
import privateApiClient from "./privateApiClient"; // Import private axios instance
import { endpoints } from "../config/apiUrl"; // Import the endpoints configuration

export const getRoleList = async () => {
    try {
        const response = await privateApiClient.get(endpoints.role.getRoleList);
        return response.data;
    } catch (error) {
        // Log error for debugging
        console.error("Error fetching role list", error);

        // Provide a more user-friendly message
        if (error.response && error.response.status === 401) {
            throw new Error("Unauthorized access - Please login again.");
        } else if (error.response && error.response.status === 500) {
            throw new Error("Server error - Please try again later.");
        } else {
            throw new Error("An error occurred while fetching role list.");
        }
    }
};