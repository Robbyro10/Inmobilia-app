import axios from "axios";

export const inmobiliaApi = axios.create({
    baseURL: 'http://localhost:3001/api/'
})