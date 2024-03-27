import axios from "axios";

export const makeRequest = axios.create({
    baseURL: "https://vercel-app-api-three.vercel.app/api/",
    withCredentials: true,
});
