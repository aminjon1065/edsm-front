import React from 'react';
import {Outlet} from "react-router-dom";
import NavigationBar from "../header/NavigationBar";

const Index = () => {
    return (
        <>
            <div className="min-h-full">
                <NavigationBar/>
                <div className="md:pl-64 flex flex-col flex-1">
                    <main className="flex-1">
                        <div className="py-6">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                                {/* Replace with your content */}
                                <div className="">
                                    <Outlet/>
                                </div>
                                {/* /End replace */}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
};

export default Index;