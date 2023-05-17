import React from 'react';
import NavigationBar from "../../components/header/NavigationBar";
import {Route, Routes} from "react-router-dom";
import Department from "../Department";

export default function Example() {

    return (
        <>
            <div className="min-h-full">
                <NavigationBar/>
                <div className="md:pl-64 flex flex-col flex-1">
                    <main className="flex-1">
                        <div className="py-6">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
                            </div>
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                                {/* Replace with your content */}
                                <div className="py-4">
                                    <Routes>
                                        <Route index path={'/department'} element={<Department/>}/>
                                    </Routes>
                                </div>
                                {/* /End replace */}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}
