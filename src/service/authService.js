import publicApiClient from "./publicApiClient";
import { endpoints } from "../config/apiUrl";
import privateApiClient from "./privateApiClient";
// Example: Login API Call
export const signUpApi = async (credentials) => {
    const response = await publicApiClient.post(endpoints.auth.signup, credentials);
    return response.data;
};

// Example: Login API Call
export const loginApi = async (credentials) => {
    const response = await publicApiClient.post(endpoints.auth.login, credentials);
    return response.data;
};

// Example: Login API Call
export const emailVerification = async (token) => {
    const response = await publicApiClient.post(endpoints.auth.emailVerification, token);
    return response.data;
};

// Refresh access token
export const refreshToken = async () => {
    const response = await publicApiClient.get(endpoints.auth.refresh);
    return response.data; // Assuming the new access token is in `response.data.accessToken`
};

// Logout user
export const logoutApi = async () => {
    const response = await publicApiClient.get(endpoints.auth.logout);
    return response.data;
};



// validate token user
export const validateTokenApi = async () => {
    const response = await privateApiClient.get(endpoints.auth.validateToken);
    return response.data;
};
