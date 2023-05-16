import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    token: localStorage.getItem('token') || null,
    user: null,
    isLoading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginStart(state) {
            state.isLoading = true;
            state.error = null;
        },
        loginSuccess(state, action) {
            state.isLoading = false;
            state.error = null;
            state.token = action.payload?.token;
            state.user = action.payload?.data;
            localStorage.setItem('token', action.payload?.token);
        },
        loginFailure(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        logout(state) {
            state.isLoading = false;
            state.error = null;
            state.token = null;
            state.user = null;
            localStorage.removeItem('token');
        },
    },
});

export const {loginStart, loginSuccess, loginFailure, logout} = authSlice.actions;

export const login = (email, password, device, ip) => async (dispatch) => {
    dispatch(loginStart());
    try {
        const response = await axios.post('http://localhost:8000/api/v1/login', {
            email: email,
            password: password,
            device: device,
            ip: ip
        });
        console.log(response)
        dispatch(loginSuccess(response.data));
    } catch (error) {
        dispatch(loginFailure(error.message));
    }
};

export default authSlice.reducer;
