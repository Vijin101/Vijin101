import { create } from "zustand";
import { validateTokenApi, loginApi, logoutApi } from "../service/authService";
import { getUserProfile } from "../service/userService";

export const useAuthStore = create((set) => ({
    user: null,
    isAuthenticated: false,
    isLoading: true,

    initializeAuth: async () => {
        try {
            const response = await validateTokenApi(); // Calls API to check auth
            if (response.data.isValid) {
                const userData = await getUserProfile();
                console.log(userData);
                set({ user: userData.data, isAuthenticated: response.data.isValid, isLoading: false });
            }
            else {
                set({ user: null, isAuthenticated: false, isLoading: false });
            }
        } catch (error) {
            set({ user: null, isAuthenticated: false, isLoading: false });
        }
    },

    login: (userData) => {
        set({ user: userData, isAuthenticated: true, isLoading: false });
    },

    logout: async () => {
        try {
            await logoutApi();
            set({ user: null, isAuthenticated: false, isLoading: false });
        } catch (error) {
            console.error('Logout failed:', error);
        }
    },
}));
