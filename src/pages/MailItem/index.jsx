import React from 'react';
import {useLocation} from "react-router-dom";
import {useGetInboxByIdQuery} from "../../services/show.mail.service";
import Loader from "../../components/Loader";
import LoaderMail from "../../components/LoaderMail";

const Index = () => {
    const location = useLocation();
    const regex = /\d+/; // Регулярное выражение для поиска цифр
    const match = location.pathname.match(regex); // Используем метод match для поиска совпадений
    const mailId = match[0];
    console.log(mailId)
    const { data, isLoading, isError } = useGetInboxByIdQuery(mailId);

    console.log(data)
    if (isLoading) {
        return <div className={"min-h-screen flex items-center justify-center"}><LoaderMail/></div>
    }

    if (isError) {
        return <span>Error!</span>
    }
    return (
        <>
            <LoaderMail/>
        </>
    );
};

export default Index;