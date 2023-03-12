import axios from "axios";

export const inmobiliaApi = axios.create({
    baseURL: process.env.API_URL
})