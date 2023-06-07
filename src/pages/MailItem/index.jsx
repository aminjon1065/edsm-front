import React from 'react';
import {useLocation} from "react-router-dom";
import {useGetInboxByIdQuery} from "../../services/show.mail.service";
import LoaderMail from "../../components/LoaderMail";
import {PaperClipIcon} from '@heroicons/react/20/solid';
import {PUBLIC_APP_URL_DOCUMENTS} from "../../helper/CONSTANTS";

const Index = () => {
    const location = useLocation();
    // Используем метод match для поиска совпадений
    const mailId = location.pathname.replace(/\/inbox\//, "");
    console.log(mailId)
    const {data, isLoading, isError} = useGetInboxByIdQuery(mailId);
    console.log(data)
    if (isLoading) {
        return <div className={"min-h-screen flex items-center justify-center"}><LoaderMail/></div>
    }
    if (isError) {
        return <span>Error!</span>
    }
    return (
        <>
            <div className="flex flex-row">
                <div>
                    <div className="px-4 sm:px-0">
                        <h3 className="text-base leading-7 text-gray-500">Отправитель: <strong
                            className={"text-gray-900"}>{data.from_user_name}</strong></h3>
                        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Регион: <strong
                            className={"text-gray-900"}>{data.document.region}</strong>
                        </p>
                    </div>
                    <div className="mt-6 border-t border-gray-100">
                        <dl className="divide-y divide-gray-100">
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Зоголовок</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{data.document.title_document}
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">About</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    тут должна быть тело документа Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit.
                                    Porro, temporibus.
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Файлы</dt>
                                <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    <ul role="list"
                                        className="divide-y divide-gray-100 rounded-md border border-gray-200">
                                        <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                            <div className="flex w-0 flex-1 items-center">
                                                <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400"
                                                               aria-hidden="true"/>
                                                <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                                <span
                                                    className="truncate font-medium">resume_back_end_developer.pdf</span>
                                                    <span className="flex-shrink-0 text-gray-400">2.4mb</span>
                                                </div>
                                            </div>
                                            <div className="ml-4 flex-shrink-0">
                                                <a href="/"
                                                   className="font-medium text-indigo-600 hover:text-indigo-500">
                                                    Download
                                                </a>
                                            </div>
                                        </li>
                                        <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                            <div className="flex w-0 flex-1 items-center">
                                                <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400"
                                                               aria-hidden="true"/>
                                                <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                                <span
                                                    className="truncate font-medium">coverletter_back_end_developer.pdf</span>
                                                    <span className="flex-shrink-0 text-gray-400">4.5mb</span>
                                                </div>
                                            </div>
                                            <div className="ml-4 flex-shrink-0">
                                                <a href="/"
                                                   className="font-medium text-indigo-600 hover:text-indigo-500">
                                                    Download
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <div className={"ml-5"}>
                    <span>activity</span>
                </div>
            </div>
            <div className="">
                {
                    data.document.file.length > 0
                        ?
                        data.document.file.map((item, index) => (
                            <a key={item.id}
                               href={`${PUBLIC_APP_URL_DOCUMENTS}${data.document.region}/${item.name_file}`}>{item.name_file}</a>
                        ))
                        :
                        <span>Empty</span>
                }
            </div>
        </>
    );
};

export default Index;