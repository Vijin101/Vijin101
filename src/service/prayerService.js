import privateApiClient from "./privateApiClient"; // Import private axios instance
import { endpoints } from "../config/apiUrl"; // Import the endpoints configuration
import { decrypt } from "../config/encryption";

// Function to create a prayer

export const createPrayerApi = async (prayerData) => {
    try {
        const response = await privateApiClient.post(endpoints.prayer.createPrayer, prayerData);
        if (process.env.NODE_ENV !== 'production') {
            return response.data;
        }
        return decrypt(response.data.data);
    } catch (error) {
        console.error("Error creating prayer", error);

        if (error.response && error.response.status === 401) {
            throw new Error(error.response?.data?.message || "Unauthorized access - Please login again.");
        } else if (error.response && error.response.status === 500) {
            throw new Error(error.response?.data?.message || "Server error - Please try again later.");
        } else {
            throw new Error(error.response?.data?.message || "An error occurred while creating the prayer.");
        }
    }
}

// Function to get all prayer requests

export const getAllPrayerRequestsApi = async (query) => {
    try {
        const params = new URLSearchParams({
            page: query.page || 1,
            limit: query.limit || 10,
        });

        if (query.search) params.append("search", query.search);
        if (query.status) params.append("status", query.status);
        if (query.publish) params.append("publish", query.publish);

        const response = await privateApiClient.get(`${endpoints.prayer.getAllPrayerRequests}?${params.toString()}`);
        if (process.env.NODE_ENV !== 'production') {
            return response.data;
        }
        return decrypt(response.data.data);
    } catch (error) {
        console.error("Error fetching prayer requests", error);

        if (error.response && error.response.status === 401) {
            throw new Error(error.response?.data?.message || "Unauthorized access - Please login again.");
        } else if (error.response && error.response.status === 500) {
            throw new Error(error.response?.data?.message || "Server error - Please try again later.");
        } else {
            throw new Error(error.response?.data?.message || "An error occurred while fetching the prayer requests.");
        }
    }
}

// Function to get a prayer request by ID

export const getPrayerRequestByIdApi = async (id) => {
    try {
        const response = await privateApiClient.get(endpoints.prayer.getPrayerRequestById(id));
        if (process.env.NODE_ENV !== 'production') {
            return response.data;
        }
        return decrypt(response.data.data);
    } catch (error) {
        console.error("Error fetching prayer request by ID", error);

        if (error.response && error.response.status === 401) {
            throw new Error(error.response?.data?.message || "Unauthorized access - Please login again.");
        } else if (error.response && error.response.status === 500) {
            throw new Error(error.response?.data?.message || "Server error - Please try again later.");
        } else {
            throw new Error(error.response?.data?.message || "An error occurred while fetching the prayer request by ID.");
        }
    }
}

// Function to update a prayer request

export const updatePrayerRequestApi = async ({ id, data }) => {
    try {
        const response = await privateApiClient.put(endpoints.prayer.updatePrayerRequest(id), data);
        if (process.env.NODE_ENV !== 'production') {
            return response.data;
        }
        return decrypt(response.data.data);
    } catch (error) {
        console.error("Error updating prayer request", error);

        if (error.response && error.response.status === 401) {
            throw new Error(error.response?.data?.message || "Unauthorized access - Please login again.");
        } else if (error.response && error.response.status === 500) {
            throw new Error(error.response?.data?.message || "Server error - Please try again later.");
        } else {
            throw new Error(error.response?.data?.message || "An error occurred while updating the prayer request.");
        }
    }
}

// Function to delete a prayer request

export const deletePrayerRequestApi = async (id) => {
    try {
        const response = await privateApiClient.delete(endpoints.prayer.deletePrayerRequest(id));
        if (process.env.NODE_ENV !== 'production') {
            return response.data;
        }
        return decrypt(response.data.data);
    } catch (error) {
        console.error("Error deleting prayer request", error);

        if (error.response && error.response.status === 401) {
            throw new Error(error.response?.data?.message || "Unauthorized access - Please login again.");
        } else if (error.response && error.response.status === 500) {
            throw new Error(error.response?.data?.message || "Server error - Please try again later.");
        } else {
            throw new Error(error.response?.data?.message || "An error occurred while deleting the prayer request.");
        }
    }
}

// Function to send mail for prayer response

export const sendMailPrayerResponseApi = async ({ id, data }) => {
    try {
        const response = await privateApiClient.post(endpoints.prayer.sendMailPrayerResponse(id), data);
        if (process.env.NODE_ENV !== 'production') {
            return response.data;
        }
        return decrypt(response.data.data);
    } catch (error) {
        console.error("Error sending mail for prayer response", error);

        if (error.response && error.response.status === 401) {
            throw new Error(error.response?.data?.message || "Unauthorized access - Please login again.");
        } else if (error.response && error.response.status === 500) {
            throw new Error(error.response?.data?.message || "Server error - Please try again later.");
        } else {
            throw new Error(error.response?.data?.message || "An error occurred while sending mail for prayer response.");
        }
    }
}