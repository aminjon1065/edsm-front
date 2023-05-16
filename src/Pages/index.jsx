import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Login from "./Auth/Login";
import {useSelector} from "react-redux";

const Index = () => {
    const isAuth = useSelector(state => state.auth.token)
    const isAuthUser = useSelector(state => state.auth)
    console.log(isAuthUser)
    return (
        <>
            <BrowserRouter>
                {
                    isAuth
                        ?
                        <Routes>
                            <Route index element={<Home/>}/>
                        </Routes>
                        :
                        <Routes>
                            <Route index element={<Login/>}/>
                        </Routes>
                }
            </BrowserRouter>
        </>
    );
};

export default Index;