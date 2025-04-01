
// src/services/apiConfig.js
export const API_BASE_URL = "https://church-server-two.vercel.app/api"; // Replace with your API base URL
// export const API_BASE_URL = " http://localhost:8000/api"; // Replace with your API base URL

export const DEFAULT_HEADERS = {
    "Content-Type": "application/json",
};

export const endpoints = {
    auth: {
        signup: "/v1/auth/email-signup",
        login: "/v1/auth/email-signin",
        logout: "/v1/auth/logout",
        refresh: "/v1/auth/refresh-token",
        emailVerification: "/v1/auth/email-verification",
        validateToken: "/v1/auth/validate-token",
    },
    user: {
        getProfile: "/v1/user/profile",
        updateProfile: "/v1/user/update-profile",
        getAllUsers: "/v1/user/get-all-users",
        createUser: "/v1/user/create-user",
        updateUser: (id) => `/v1/user/update-user/${id}`,
        deleteUser: (id) => `/v1/user/delete-user/${id}`,
    },
    role: {
        getRoleList: "/v1/roles/get-roles",
    },
};
