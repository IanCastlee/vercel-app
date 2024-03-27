import axios from "axios";

export const makeRequest = axios.create({
    baseURL: "https://localhost:8801/api/",
    withCredentials: true,
});