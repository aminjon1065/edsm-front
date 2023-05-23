import {combineReducers, configureStore} from '@reduxjs/toolkit';
import authReducer from './slices/signIn';
import {messagesApi} from "../services/inbox.service";

const rootReducer = combineReducers({
    auth: authReducer,
    // [inboxAPIService.reducerPath]:inboxAPIService.reducer
    [messagesApi.reducerPath]: messagesApi.reducer
})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(messagesApi.middleware),
});

export default store;
