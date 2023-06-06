import React from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "../components/Layout";
import Department from "../pages/Department";
import Files from "../pages/Files";
import NotFound from "../pages/NotFound";
import Calendar from "../pages/Calendar";
import Reports from "../pages/Reports";
import Documents from "../pages/Documents";
import Favorites from "../pages/Favorites";
import Inbox from "../pages/Inbox";
import Sent from "../pages/Sent";
import MailItem from "../pages/MailItem";

const ProtectedRoutes = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Inbox/>}/>
                    <Route path={'/inbox/:id'} element={<MailItem/>}/>
                    <Route path={"department"} element={<Department/>}/>
                    <Route path={"files"} element={<Files/>}/>
                    <Route path={"calendar"} element={<Calendar/>}/>
                    <Route path={"documents"} element={<Documents/>}/>
                    <Route path={"reports"} element={<Reports/>}/>
                    <Route path={"sent"} element={<Sent/>}/>
                    <Route path={"favorites"} element={<Favorites/>}/>
                    <Route path={"*"} element={<NotFound/>}/>
                </Route>
            </Routes>
        </>
    );
};

export default ProtectedRoutes;