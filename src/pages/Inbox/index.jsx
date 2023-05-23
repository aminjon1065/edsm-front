import React, {useState} from 'react';
import usePageTitle from "../../hooks/usePageTitle";
import {useGetMessagesQuery} from "../../services/inbox.service";

const Index = () => {
    usePageTitle("Входящие")
    const [pageNum, setPageNum] = useState(1);
    const {data = [], isLoading, error} = useGetMessagesQuery(pageNum);
    const [pageLinks, setPageLinks] = useState([]);
    const prevPage = () => {
        if (pageNum === 1) {
            setPageNum(1)
        }
        if (pageNum > 1) {
            setPageNum(pageNum - 1)
        }
    }

    const nextPage = () => {
        if (data.next_page_url) {
            setPageNum(pageNum + 1)
        }
    }

    const lastPage = () => {
        setPageNum(data.last_page)
    }

    const firstPage = () => {
        setPageNum(1)
    }

    if (isLoading) {
        return <span>Loading...</span>
    }

    if (error) {
        return <span>Error!</span>
    }
    return (
        <div>
            Inbox
        </div>
    );
};

export default Index;