import axios from 'axios';
import {API_APP} from "../helper/CONSTANTS";

// Создаем экземпляр Axios
const api = axios.create({
    baseURL: `${API_APP}`,
});

// Добавляем перехватчик
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
});

export default api;