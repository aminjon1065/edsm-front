import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";
import axios from "axios";

const inboxAPI = createApi({
    reducerPath: 'inboxAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://localhost:8000/api/v1",
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('token');
            headers.set('Authorization', `Bearer ${token}`);
            return headers;
        },
        fetchFn: async (url, options) => {
            const response = await axios(url, options);

            if (response.status === 401) {
                // Обработка ошибки авторизации, если необходимо
            }

            return response;
        },
    }),
    endpoints: (build) => ({
        fetchMails: build.query({
            query: () => '/inbox'
        })
    })
})

export const {useFetchMails} = inboxAPI;
export default inboxAPI;