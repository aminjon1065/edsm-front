import React from 'react';
import usePageTitle from "../../hooks/usePageTitle";

export default function Index() {
    usePageTitle("Dashboard")
    return (
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
            </div>
        </>
    )
}
