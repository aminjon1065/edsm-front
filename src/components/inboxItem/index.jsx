import React from 'react';

const Index = () => {
    return (
        <>
            <div className="flex flex-col rounded mx-auto shadow-md sm:w-80 md:min-w-full animate-pulse h-96 py-2 align-middle sm:px-6 lg:px-8 ">
                <div className="h-48 rounded-t dark:bg-gray-300"></div>
                <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-300">
                    <div className="w-full h-6 rounded dark:bg-gray-200"></div>
                    <div className="w-full h-6 rounded dark:bg-gray-200"></div>
                    <div className="w-3/4 h-6 rounded dark:bg-gray-200"></div>
                </div>
            </div>
        </>
    );
};

export default Index;