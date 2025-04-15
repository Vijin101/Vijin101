import privateApiClient from "./privateApiClient"; // Import private axios instance
import { endpoints } from "../config/apiUrl"; // Import the endpoints configuration
import { decrypt } from "../config/encryption";
export const getUserStatsAnalytics = async () => {
    try {
        const response = await privateApiClient.get(endpoints.analytics.getUserStatsAnalytics);
        if (process.env.NODE_ENV !== 'production') {
            return response.data;
        }
        return decrypt(response.data.data);
    } catch (error) {
        console.error("Error fetching analytics", error);

        if (error.response && error.response.status === 401) {
            throw new Error(error.response?.data?.message || "Unauthorized access - Please login again.");
        } else if (error.response && error.response.status === 500) {
            throw new Error(error.response?.data?.message || "Server error - Please try again later.");
        } else {
            throw new Error(error.response?.data?.message || "An error occurred while fetching analytics.");
        }
    }
};
