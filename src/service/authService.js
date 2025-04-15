import publicApiClient from "./publicApiClient";
import { endpoints } from "../config/apiUrl";
import privateApiClient from "./privateApiClient";
import { decrypt } from "../config/encryption";
// Example: Login API Call
export const signUpApi = async (credentials) => {
    const response = await publicApiClient.post(endpoints.auth.signup, credentials);
    return response.data;
};

// Example: Login API Call
export const loginApi = async (credentials) => {
    const response = await publicApiClient.post(endpoints.auth.login, credentials);
    if (process.env.NODE_ENV !== 'production') {
        return response.data;
    }
    return decrypt(response.data.data);
};

// Example: Login API Call
export const emailVerification = async (token) => {
    const response = await publicApiClient.post(endpoints.auth.emailVerification, token);
    return response.data;
};

// Refresh access token
export const refreshToken = async () => {
    try {
        const response = await publicApiClient.get(endpoints.auth.refresh);
        return response.data;
    } catch (error) {
        console.error("Refresh token error:", error.response?.data || error.message);
        throw error;
    }
};

// Logout user
export const logoutApi = async () => {
    const response = await publicApiClient.get(endpoints.auth.logout);
    return response.data;
};



// validate token user
export const validateTokenApi = async () => {
    console.log("validateTokenApi");
    const response = await privateApiClient.get(endpoints.auth.validateToken);
    if (process.env.NODE_ENV !== 'production') {
        return response.data;
    }
    const data = decrypt(response.data.data);
    return data
};
