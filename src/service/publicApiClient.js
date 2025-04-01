// src/services/publicApiClient.js
import axios from "axios";
import { API_BASE_URL, DEFAULT_HEADERS } from "../config/apiUrl";

const publicApiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: DEFAULT_HEADERS,
    withCredentials: true,
});

export default publicApiClient;
