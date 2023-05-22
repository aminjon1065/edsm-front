import React from 'react';
import usePageTitle from "../../hooks/usePageTitle";
import {useFetchMails} from "../../services/inboxApi";

const Index = () => {
    usePageTitle("Входящие")
    const {data} = useFetchMails();
    console.log(data)
    return (
        <div>
            Inbox
        </div>
    );
};

export default Index;