import React, {useState} from 'react';
import usePageTitle from "../../hooks/usePageTitle";
import {useGetMessagesQuery} from "../../services/inbox.service";
import Loader from "../../components/Loader";
import {useSelector} from "react-redux";

const Index = () => {
    usePageTitle("Входящие")
    const [pageNum, setPageNum] = useState(1);
    const {data = [], isLoading, error} = useGetMessagesQuery(pageNum);
    const [pageLinks, setPageLinks] = useState([]);
    const userSelector = useSelector(state => state.auth.user)
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
        return <div className={"min-h-screen flex items-center justify-center"}><Loader/></div>
    }

    if (error) {
        return <span>Error!</span>
    }
    console.log(data.data.data)
    console.log(userSelector)
    return (
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Название документа
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    ТИП
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    От
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Role
                                </th>
                                <th scope="col" className="relative px-6 py-3">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                            {data.data.data.map((mail) =>
                                mail.opened_mail.map((item) =>
                                    item.user_id===userSelector.id
                                    ?

                                    (
                                    <tr key={mail.id} className={ `${item.opened ? "bg-slate-50" : "bg-slate-300"} cursor-pointer`}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{mail.document.title_document}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{mail.document.type === '1' ?
                                            <span
                                                className={"bg-orange-300 text-slate-950 px-4 py-2 rounded"}>Вне</span> :
                                            <span
                                                className={"bg-green-300 text-slate-950 px-4 py-2 rounded"}>Локальный</span>}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{mail.from_user_name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{mail.id}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                Edit
                                            </a>
                                        </td>
                                    </tr>
                                )
                                :
                                        <span>lorem</span>
                                )
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Index;