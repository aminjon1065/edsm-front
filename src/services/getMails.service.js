import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {API_APP} from "../helper/CONSTANTS";

export const messagesApi = createApi({
    reducerPath: "messagesApi",
    baseQuery: fetchBaseQuery({
        baseUrl: API_APP,
        method: "post",
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token")
            headers.set('authorization', `Bearer ${token}`)
            return headers
        }
    }),
    endpoints: (build) => ({
        getMessages: build.query({
            query: ({page, searchQuery, startDate, endDate, type}) => {
                let queryString = `${type}?page=${page}&query=&startDate=&endDate=`;
                if (searchQuery) {
                    queryString = `${type}?page=&query=${searchQuery}&startDate=&endDate=`;
                }
                if (startDate && endDate) {
                    queryString = `${type}?page=&query=&startDate=${startDate}&endDate=${endDate}`;
                }
                if (searchQuery && startDate && endDate) {
                    queryString = `${type}?page=&query=${searchQuery}&startDate=${startDate}&endDate=${endDate}`;
                }
                return queryString;
            },
        })
    })
});

export const {useGetMessagesQuery} = messagesApi