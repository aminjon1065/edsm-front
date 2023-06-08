import React from 'react';
import {NavLink} from "react-router-dom";

const Index = () => {
    return (
        <section className="flex items-center h-full p-16">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-9xl text-gray-500">
                        <span className="sr-only">Error</span>404
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl text-red-500">Ошибка, такой страницы не
                        существует</p>
                    <NavLink to={"/"}>
                    <button rel="noopener noreferrer"
                            className="px-8 py-3 text-white font-semibold rounded bg-indigo-500 hover:bg-indigo-600 dark:bg-indigo-400 dark:text-gray-900 mt-4"
                    >

                            Back to homepage
                    </button>
                    </NavLink>
                </div>
            </div>
        </section>
    );
};

export default Index;