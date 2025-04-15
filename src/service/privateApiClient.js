// src/services/privateApiClient.js
import axios from "axios";
import { API_BASE_URL, DEFAULT_HEADERS } from "../config/apiUrl";
import { refreshToken } from "./authService";
import { useAuthStore } from "../store";




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

        if (error.response) {
            const { status } = error.response;

            if (status === 401 && !originalRequest._retry) {
                originalRequest._retry = true;
                try {
                    await refreshToken();
                    return privateApiClient(originalRequest);
                } catch (refreshError) {
                    console.error("Token refresh failed:", refreshError);
                    useAuthStore.setState((state) => ({
                        ...state,
                        user: null,
                        isAuthenticated: false,
                    }));
                    return Promise.reject(refreshError);
                }
            }

            // Handle other error cases
            if (status === 403) {
                console.warn("Access Denied: Logging out user.");
                useAuthStore.setState((state) => ({
                    ...state,
                    user: null,
                    isAuthenticated: false,
                }));
            }

            if (status >= 500) {
                console.error("Server error:", error.response.data.message || "Unexpected Error");
            }
        }

        return Promise.reject(error);
    }
);


export default privateApiClient;
