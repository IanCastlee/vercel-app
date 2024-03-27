export const makeRequest = axios.create({
    baseURL: "https://vercel-app-client-ten.vercel.app/api/", // Adjust the baseURL here
    withCredentials: true,
});
