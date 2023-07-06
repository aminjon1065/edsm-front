import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {useGetInboxByIdQuery} from "../../services/show.mail.service";
import LoaderMail from "../../components/LoaderMail";
import {PaperClipIcon} from '@heroicons/react/20/solid';
import {PUBLIC_APP_URL_DOCUMENTS} from "../../helper/CONSTANTS";
import {UserIcon} from "@heroicons/react/20/solid";
import {useSelector} from "react-redux";
import api from "../../services/api";
import Select from "react-tailwindcss-select";
import {fetchUsers} from "../../services/fetchUsers.service";
import PdfViewer from "../../components/pdfViewer";
import ReplyMailModaL from './../../components/replyMailModal';
import formatterDay from "../../utils";

const Index = () => {
    const location = useLocation();
    const me = useSelector(state => state.auth.user);
    const [open, setOpen] = useState(false)
    const [userSelected, setUserSelected] = useState(null);
    const [usersList, setUsersList] = useState([]);
    const [showFilesContainer, setShowFilesContainer] = useState(true);
    const handleChange = (value) => {
        setUserSelected(value);
    };
    useEffect(() => {
        fetchUsers().then((res) => {
            setUsersList(res.data)
        });
    }, []);
    // Используем метод match для поиска совпадений
    const mailId = location.pathname.replace(/\/inbox\//, "");
    const {data, isLoading, isError} = useGetInboxByIdQuery(mailId);
    const openedMail = (id) => {
        api.post(`/showed/${id}`).then((res) => {
            console.log('res')
        }).catch((err) => {
            console.log('err')
        })
    }
    if (isLoading) {
        return <div className={"min-h-screen flex items-center justify-center"}><LoaderMail/></div>
    }
    if (isError) {
        return <span>Error!</span>
    }

    if (data) {
        if (data.opened_mail[0].opened === 0) {
            openedMail(data.opened_mail[0].id)
        }
    }
    const replyShowModal = () => {
        setOpen(true)
    }
    const showFilesContainerFn = () => {
        setShowFilesContainer(prevState => !prevState);
    }
    return (
        <>
            <div>
                <div className="flex flex-row justify-between">
                    <div className={"w-10/12"}>
                        <div className="px-4 sm:px-0">
                            <div className="flex flex-row">
                                <div className="container">
                                    <h3 className="text-base leading-7 text-gray-500">Отправитель: <strong
                                        className={"text-gray-900"}>{data.from_user_name}</strong></h3>
                                    <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Регион: <strong
                                        className={"text-gray-900"}>{data.document.region}</strong>
                                    </p>
                                    <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Управление: <strong
                                        className={"text-gray-900"}>{data.document.department}</strong>
                                    </p>
                                </div>
                                <div>
                                    <button
                                        onClick={replyShowModal}
                                        className={'px-4 py-2 bg-indigo-800 text-white rounded hover:bg-indigo-700'}>
                                        Ответить
                                    </button>
                                </div>
                            </div>
                        </div>
                        <ReplyMailModaL open={open} setOpen={setOpen} mailId={mailId} userId={data.from}
                                        type={data.document.type}/>
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
                                        <div dangerouslySetInnerHTML={{__html: data.document.content}}></div>
                                    </dd>
                                </div>
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Файлы</dt>
                                    <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                        <ul
                                            className="divide-y divide-gray-100 rounded-md border border-gray-200">
                                            {
                                                data.document.file.length > 0
                                                    ?
                                                    data.document.file.map((item, index) => (
                                                        <li key={item.id}
                                                            className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                                            <div className="flex w-0 flex-1 items-center">
                                                                <PaperClipIcon
                                                                    className="h-5 w-5 flex-shrink-0 text-gray-400"
                                                                    aria-hidden="true"
                                                                />
                                                                <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                                                <span
                                                                    className="truncate
                                                                    font-medium"
                                                                >
                                                                    {item.name_file}
                                                                </span>
                                                                    <span
                                                                        className="flex-shrink-0 text-gray-400"
                                                                    >
                                                                    {item.size}мб
                                                                </span>
                                                                </div>
                                                            </div>
                                                            <div className="ml-4 flex-shrink-0">
                                                                <a
                                                                    href={`${PUBLIC_APP_URL_DOCUMENTS}${data.document.region}/${item.name_file}`}
                                                                    download
                                                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                                                >
                                                                    Скачать
                                                                </a>
                                                            </div>
                                                        </li>
                                                    ))
                                                    :
                                                    <span>Файлов нет!</span>
                                            }
                                        </ul>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                    <div className={"ml-5"}>
                        <div className="mt-6 flow-root">
                            <div className={"mb-5"}>
                                <span>
                                    Исполнители
                                </span>
                            </div>
                            <ul className="-mb-8">
                                {
                                    data.document.history.map((item, Idx) => (
                                        <li key={item.id}>
                                            <div className="relative pb-8">
                                                {Idx !== data.document.history.length - 1 ? (
                                                    <span
                                                        className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                                                        aria-hidden="true"
                                                    />
                                                ) : null}
                                                <div className="relative flex space-x-3">
                                                    <div>
                                                      <span
                                                          className={'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'}
                                                      >
                                                        <UserIcon className="w-5 h-5" aria-hidden="true"/>
                                                      </span>
                                                    </div>
                                                    <div
                                                        className={`min-w-0 flex-1 px-4 py-2 rounded pt-1.5 flex justify-between space-x-4  text-gray-500 ${item.recipient.id === me.id ? 'bg-orange-500 text-slate-950' : null}`}>
                                                        <div>
                                                            <p className="text-sm">
                                                                {item.recipient.id === me.id ? 'Вы' : item.recipient.full_name}
                                                            </p>
                                                            <p className="text-sm">
                                                                {item.status}
                                                            </p>
                                                        </div>
                                                        <div className="text-right text-sm whitespace-nowrap">
                                                            <time
                                                                dateTime={item.created_at}>{formatterDay(item.created_at)}</time>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        {
                            me.id === 1
                                ?
                                <div className={"mt-5 border p-3 rounded bg-slate-100"}>
                                    <div className="container mb-5">
                                        <Select
                                            id={"username"}
                                            primaryColor={"indigo"}
                                            noOptionsMessage={"Такого пользователя не существует"}
                                            searchInputPlaceholder={""}
                                            isSearchable
                                            isMultiple
                                            value={userSelected}
                                            onChange={handleChange}
                                            options={usersList}
                                            className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-0"
                                        />
                                    </div>
                                    <button
                                        onClick={() => console.log("CLICK")}
                                        className={"bg-gray-800 text-white px-4 py-2 rounded hover:bg-slate-700"}
                                    >
                                        Перенаправить
                                    </button>
                                </div>
                                :
                                null
                        }
                    </div>
                </div>
                {
                    data.document.file.length > 0
                        ?
                        <button
                            className={"bg-slate-800 px-4 py-2 hover:bg-slate-700 text-white rounded mb-5"}
                            onClick={showFilesContainerFn}
                        >
                            {showFilesContainer ? 'Скрыть файлы' : 'Показывать файлы'}
                        </button>

                        :
                        null
                }
                <div
                    className={`flex flex-wrap w-full ease-in-out transition-all duration-200 ${showFilesContainer ? "opacity-100" : "opacity-0"}`}>
                    {
                        data.document.file.length > 0
                            ?
                            data.document.file.map((item, index) => (
                                (item.extension_file === 'pdf'
                                        ?
                                        <div className={"w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-full mb-5"}>
                                            <div className={"w-full h-5/6 rounded block"}>
                                                <div className="h-screen">
                                                    <PdfViewer
                                                        pdfFile={`${PUBLIC_APP_URL_DOCUMENTS}${data.document.region}/${item.name_file}`}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        item.extension_file === 'jpg' || item.extension_file === 'png'
                                            ?
                                            <div className={"w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-5"}>
                                                <div key={item.id}>
                                                    <div className="ml-4 flex-shrink-0">
                                                        <img
                                                            src={`${PUBLIC_APP_URL_DOCUMENTS}${data.document.region}/${item.name_file}`}
                                                            alt={item.name_file}
                                                            className="font-medium text-indigo-600 hover:text-indigo-500 w-96 rounded-lg"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            :
                                            item.extension_file === "doc" || "docx"
                                                ?
                                                <div className={"w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-full mb-5"}>
                                                    <div className={"w-full h-5/6 rounded block"}>
                                                        <div className={""}>
                                                            <iframe
                                                                className={"mx-auto"}
                                                                src={`https://view.officeapps.live.com/op/embed.aspx?src=http://ieee802.org/secmail/docIZSEwEqHFr.doc`}
                                                                width='1366px' height='623px'>This is an
                                                                embedded <a target='_blank' href='http://office.com'>Microsoft
                                                                    Office</a> document, powered by <a target='_blank'
                                                                                                       href='http://office.com/webapps'>Office
                                                                    Online</a>.
                                                            </iframe>
                                                        </div>
                                                    </div>
                                                </div>
                                                :
                                                null
                                )))
                            :
                            <span>Файлов нет!</span>
                    }
                </div>
                {
                    data.reply_to
                        ?
                        <div className={"bg-gray-200"}>
                            <span>{data.reply_to.document.title_document}</span>
                        </div>
                        :
                        null
                }
            </div>
        </>
    );
};

export default Index;