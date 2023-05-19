import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const apiInboxData = createApi({
    reducerPath: 'apiInboxData',
    baseQuery: fetchBaseQuery({baseUrl: '/api'}), // Замените '/api' на URL вашего бэкенда
    endpoints: (builder) => ({
        loadData: builder.query({
            query: () => 'data',
        }),
    }),
});

export const {useLoadDataQuery} = apiInboxData;
export default apiInboxData;
