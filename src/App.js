import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Auth/Login";

const App = () => {
    const isAuth = false;
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

export default App;
