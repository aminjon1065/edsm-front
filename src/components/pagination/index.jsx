import React from 'react';

const Index = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="flex items-center justify-center mt-6">
            <ul className="pagination">
                {pageNumbers.map((number) => (
                    <li
                        key={number}
                        className={`px-2 py-1 mx-1 cursor-pointer ${
                            number === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200'
                        }`}
                        onClick={() => onPageChange(number)}
                    >
                        {number}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Index;
