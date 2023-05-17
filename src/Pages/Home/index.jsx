import React from 'react';
import {Route, Routes} from "react-router-dom";
import Dashboard from "../Dashboard";
import Department from "../Department";

const Index = () => {
    return (
        <Routes>
            <Route index element={<Dashboard/>}/>
            <Route  element={<Department/>}/>
        </Routes>
    );
};

export default Index;