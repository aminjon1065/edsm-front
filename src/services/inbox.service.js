import {useEffect, useState} from 'react';
import axios from 'axios';

const useBackendApi = () => {
    const [api, setApi] = useState(null);
    useEffect(() => {
        const initializeApi = () => {
            const instance = axios.create({
                baseURL: 'https://localhost:8000/api/v1',
            });

            instance.interceptors.request.use(
                (config) => {
                    // Можете здесь вставить логику для добавления заголовков, обработки токена и т.д.
                    return config;
                },
                (error) => {
                    return Promise.reject(error);
                }
            );

            instance.interceptors.response.use(
                (response) => {
                    // Можете здесь добавить логику для обработки успешных ответов

                    return response;
                },
                (error) => {
                    // Можете здесь добавить логику для обработки ошибок
                    return Promise.reject(error);
                }
            );

            setApi(instance);
        };

        initializeApi();
    }, []);

    return api;
};

export default useBackendApi;
