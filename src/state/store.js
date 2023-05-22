import {combineReducers, configureStore} from '@reduxjs/toolkit';
import authReducer from './slices/signIn';
import inboxAPI from "../services/inboxApi";


const rootReducer = combineReducers({
    auth:authReducer,
    [inboxAPI.reducerPath]:inboxAPI.reducer
})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(inboxAPI.middleware),
});

export default store;
