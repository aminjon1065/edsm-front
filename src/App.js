import React from 'react';
import {BrowserRouter, redirect, Route, Routes} from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Home from "./Pages/Home";

const App = () => {
    const isAuth = true;
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {
                        isAuth
                            ?
                            <Route index element={<Home/>}/>
                            :
                            <Route element={<Login/>}/>
                    }
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
