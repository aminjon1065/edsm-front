import axios from 'axios';

// Создаем экземпляр Axios
const api = axios.create({
    baseURL: 'https://localhost:8000/api/v1',
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