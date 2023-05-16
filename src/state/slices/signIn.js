import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isAuth: false,
    user: {},
    message: ""
};

export const SignInSlice = createSlice({
    name: "SignIn",
    initialState,
    reducers: {
        signIn: (state, action) => {
            state.isAuth = true
            state.user = action.payload?.data
            state.message = action.payload?.message
        },
        signInError: (state) => {
            state.isAuth = false
            state.user = {}
        },
        signOut: (state) => {
            state.isAuth = false
            state.user = {}
        },
        isAuth: (state, action) => {
            state.isAuth = true
            state.user = action.payload
        }
    }
});


export const {signIn, signInError, signOut, isAuth} = SignInSlice.actions;

export default SignInSlice.reducer;