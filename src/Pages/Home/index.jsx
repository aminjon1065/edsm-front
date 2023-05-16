import React from 'react';
import {Route, Routes} from "react-router-dom";
import Dashboard from "../Dashboard";

const Index = () => {
    return (
        <Routes>
            <Route index element={<Dashboard/>}/>
        </Routes>
    );
};

export default Index;