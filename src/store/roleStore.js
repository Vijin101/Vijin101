import { create } from "zustand";
import { getRoleList } from "../service/roleService";

export const useRoleStore = create((set) => ({
    roleList: [],
    isLoading: true,

    initializeRoleList: async () => {
        try {
            const response = await getRoleList(); // Calls API to check auth
            console.log(response.data);
            set({ roleList: response.data, isLoading: false });
        } catch (error) {
            set({ roleList: [], isLoading: false });
        }
    },
}));
