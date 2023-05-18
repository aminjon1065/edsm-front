import React from 'react';
import {Route, Routes} from "react-router-dom";
import PublicLayout from "../components/Layout/PublicLayout";
import Login from "../pages/Auth/Login";
import NotFound from "../pages/NotFound";

const MainRoutes = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<PublicLayout/>}>
                    <Route index element={<Login/>}/>
                    <Route path={"*"} element={<NotFound/>}/>
                </Route>
            </Routes>
        </>
    );
};

export default MainRoutes;