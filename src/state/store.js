import {combineReducers, configureStore} from '@reduxjs/toolkit';
import authReducer from './slices/signIn';
import {messagesApi} from "../services/getMails.service";
import {inboxApiById} from "../services/show.mail.service";

const rootReducer = combineReducers({
    auth: authReducer,
    // [inboxAPIService.reducerPath]:inboxAPIService.reducer
    [messagesApi.reducerPath]: messagesApi.reducer,
    [inboxApiById.reducerPath]: inboxApiById.reducer
})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([messagesApi.middleware, inboxApiById.middleware]),
});

export default store;
