import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:3333'
})

export const apiLogin = axios.create({
    baseURL: 'http://localhost:8001'
})

export default api;
