import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const inboxAPIService = createApi({
    reducerPath: 'api/inbox',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8000/api/v1/'}),
    endpoints: build => ({
        getMails:build.query(({query: (arg)=> 'inbox'}))
    })
})

export const {useGetMailsQuery} = inboxAPIService;