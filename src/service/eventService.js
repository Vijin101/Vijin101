import privateApiClient from "./privateApiClient"; // Import private axios instance
import { endpoints } from "../config/apiUrl"; // Import the endpoints configuration
import { decrypt } from "../config/encryption";

export const createEventApi = async (eventData) => {
    try {
        const response = await privateApiClient.post(endpoints.event.createEvent, eventData);
        if (process.env.NODE_ENV !== 'production') {
            return response.data;
        }
        return decrypt(response.data.data);
    } catch (error) {
        console.error("Error creating event", error);

        if (error.response && error.response.status === 401) {
            throw new Error(error.response?.data?.message || "Unauthorized access - Please login again.");
        } else if (error.response && error.response.status === 500) {
            throw new Error(error.response?.data?.message || "Server error - Please try again later.");
        } else {
            throw new Error(error.response?.data?.message || "An error occurred while creating the event.");
        }
    }
}

// Function to get all events
export const getAllEventsApi = async (query) => {
    console.log("Query Parameters:", query);

    try {
        const params = new URLSearchParams({
            page: query.page || 1,
            limit: query.limit || 10,
        });

        if (query.search) params.append("search", query.search);
        if (query.status) params.append("status", query.status);
        if (query.type?.length) params.append("type", query.type.join(","));

        if (query.download) params.append("download", query.download);

        console.log("API Request URL:", `${endpoints.user.getAllUsers}?${params.toString()}`);

        const response = await privateApiClient.get(`${endpoints.event.getAllEvents}?${params.toString()}`);
        if (process.env.NODE_ENV !== 'production') {
            return response.data;
        }
        return decrypt(response.data.data);
    } catch (error) {
        console.error("Error fetching events", error);

        if (error.response && error.response.status === 401) {
            throw new Error(error.response?.data?.message || "Unauthorized access - Please login again.");
        } else if (error.response && error.response.status === 500) {
            throw new Error(error.response?.data?.message || "Server error - Please try again later.");
        } else {
            throw new Error(error.response?.data?.message || "An error occurred while fetching the events.");
        }
    }
}

// Function to get event by ID
export const getEventByIdApi = async (eventId) => {
    try {
        const response = await privateApiClient.get(endpoints.event.getEventById(eventId));
        if (process.env.NODE_ENV !== 'production') {
            return response.data;
        }
        return decrypt(response.data.data);
    } catch (error) {
        console.error("Error fetching event by ID", error);

        if (error.response && error.response.status === 401) {
            throw new Error(error.response?.data?.message || "Unauthorized access - Please login again.");
        } else if (error.response && error.response.status === 500) {
            throw new Error(error.response?.data?.message || "Server error - Please try again later.");
        } else {
            throw new Error(error.response?.data?.message || "An error occurred while fetching the event.");
        }
    }
}

// Function to update event by ID

export const updateEventApi = async ({ id, data }) => {
    try {
        const response = await privateApiClient.put(endpoints.event.updateEvent(id), data);
        if (process.env.NODE_ENV !== 'production') {
            return response.data;
        }
        return decrypt(response.data.data);
    } catch (error) {
        console.error("Error updating event", error);

        if (error.response && error.response.status === 401) {
            throw new Error(error.response?.data?.message || "Unauthorized access - Please login again.");
        } else if (error.response && error.response.status === 500) {
            throw new Error(error.response?.data?.message || "Server error - Please try again later.");
        } else {
            throw new Error(error.response?.data?.message || "An error occurred while updating the event.");
        }
    }
}

// Function to delete event by ID
export const deleteEventApi = async (eventId) => {
    try {
        const response = await privateApiClient.delete(endpoints.event.deleteEvent(eventId));
        if (process.env.NODE_ENV !== 'production') {
            return response.data;
        }
        return decrypt(response.data.data);
    } catch (error) {
        console.error("Error deleting event", error);

        if (error.response && error.response.status === 401) {
            throw new Error(error.response?.data?.message || "Unauthorized access - Please login again.");
        } else if (error.response && error.response.status === 500) {
            throw new Error(error.response?.data?.message || "Server error - Please try again later.");
        } else {
            throw new Error(error.response?.data?.message || "An error occurred while deleting the event.");
        }
    }
}