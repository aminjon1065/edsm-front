import {configureStore} from '@reduxjs/toolkit';
import authReducer from './slices/signIn';
import apiInboxData from "../services/fetchInboxData";

const store = configureStore({
    reducer: {
        auth: authReducer,
        [apiInboxData.reducerPath]: apiInboxData.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiInboxData.middleware),
});

export default store;
