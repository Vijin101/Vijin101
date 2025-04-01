// src/services/privateApiClient.js
import axios from "axios";
import { API_BASE_URL, DEFAULT_HEADERS } from "../config/apiUrl";
import { refreshToken } from "./authService";




const privateApiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: DEFAULT_HEADERS,
    withCredentials: true, // ✅ Required to send HTTP-only cookies
});

// Response interceptor to handle token refresh
privateApiClient.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // If 401 (Unauthorized) and the request was not retried yet
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true; // Prevent infinite retry loop
            try {
                await refreshToken(); // ✅ Automatically refresh access token

                // Retry the failed request (tokens are sent automatically)
                return privateApiClient(originalRequest);
            } catch (refreshError) {
                console.error("Token refresh failed:", refreshError);
                window.location.href = "/signin"; // Redirect to login
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export default privateApiClient;
