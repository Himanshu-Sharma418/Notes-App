import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5001/api"        // So that you don't have to type it everytime
});

export default api;