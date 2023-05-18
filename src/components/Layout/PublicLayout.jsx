import React from 'react';
import {Outlet} from "react-router-dom";

const PublicLayout = () => {
    return (
        <div className={"min-h-full"}>
            <Outlet/>
        </div>
    );
};

export default PublicLayout;