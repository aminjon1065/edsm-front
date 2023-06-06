import React from 'react';
import {useLocation} from "react-router-dom";

const Index = () => {
    const location = useLocation();
    console.log(location)
    const regex = /\d+/; // Регулярное выражение для поиска цифр
    const match = location.pathname.match(regex); // Используем метод match для поиска совпадений
    console.log(match[0])
    return (
        <>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, quas.{match[0]}</span>
        </>
    );
};

export default Index;