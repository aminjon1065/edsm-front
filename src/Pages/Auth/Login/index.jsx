import React, {useState, Fragment} from 'react';
import {LockClosedIcon} from "@heroicons/react/24/solid";
import logo from './../../../assets/images/logo.png';
import usePageTitle from "../../../hooks/usePageTitle";
import {SignIn} from "../../../state/slices/signIn";
import {EyeIcon, EyeSlashIcon, ChevronDownIcon, ChevronUpIcon} from "@heroicons/react/20/solid";
import {Popover, Transition} from '@headlessui/react'


const Index = () => {


    usePageTitle("Войти")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [typePassword, setTypePassword] = useState(false);
    const changeEmail = (event) => {
        setEmail(event.target.value)
    }
    const showPassword = () => {
        console.log("click")
        console.log(typePassword)
        setTypePassword((prevState) => !prevState)
    }
    const changePassword = (event) => {
        setPassword(event.target.value)
    }
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-28 w-auto"
                    src={logo}
                    alt="Logo"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Вход в ваш аккаунт
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email адрес
                        </label>
                        <div className="mt-2">

                            <input
                                value={email}
                                onChange={changeEmail}
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-0"
                            />

                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Пароль
                            </label>
                            <div className="text-sm">
                                <Popover className="relative">
                                    {({open}) => (
                                        <>
                                            <Popover.Button
                                                className={`
                ${open ? '' : 'text-opacity-90'}
                font-semibold text-indigo-600 hover:text-indigo-500 focus:outline-0`}
                                            >
                                                <div className="flex">
                                                    <span>Забыли пароль?</span>
                                                    {open
                                                        ?
                                                        <ChevronUpIcon className={`${open ? '' : 'text-opacity-70'}
                                                        ml-2 h-5 w-5 text-indigo-600 transition duration-150 ease-in-out group-hover:text-opacity-80`}
                                                                       aria-hidden="true"/>
                                                        :
                                                        <ChevronDownIcon
                                                            className={`${open ? '' : 'text-opacity-70'}
                                                        ml-2 h-5 w-5 text-indigo-600 transition duration-150 ease-in-out group-hover:text-opacity-80`}
                                                            aria-hidden="true"
                                                        />
                                                    }

                                                </div>
                                            </Popover.Button>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-200"
                                                enterFrom="opacity-0 translate-y-1"
                                                enterTo="opacity-100 translate-y-0"
                                                leave="transition ease-in duration-150"
                                                leaveFrom="opacity-100 translate-y-0"
                                                leaveTo="opacity-0 translate-y-1"
                                            >
                                                <Popover.Panel
                                                    className="absolute lg:left-0.5/2 lg:w-screen  z-10 mt-3 max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                                                    <div
                                                        className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                                        <div
                                                            className="relative grid gap-8 bg-white p-7">
                                                            <span>Если вы забыли свой пароль, пожалуйста, обращайтесь в <span
                                                                className={"text-green-500 font-bold"}>"Общий отдел"</span> или по номеру <span
                                                                className={"text-red-500 font-bold"}>992911000770</span></span>
                                                        </div>
                                                    </div>
                                                </Popover.Panel>
                                            </Transition>
                                        </>
                                    )}
                                </Popover>
                                {/*<a href="/" className="font-semibold text-indigo-600 hover:text-indigo-500">*/}
                                {/*    Забыли пароль?*/}
                                {/*</a>*/}
                            </div>
                        </div>
                        <div className="mt-2">
                            <div className={"relative block"}>
                                <input
                                    value={password}
                                    onChange={changePassword}
                                    id="password"
                                    name="password"
                                    type={typePassword ? 'text' : 'password'}
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-0"
                                />
                                <span className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                                      onClick={showPassword}>
                                    {
                                        typePassword
                                            ?
                                            <EyeIcon className={'h-5 w-5 fill-black'}/>
                                            :
                                            <EyeSlashIcon className={'h-5 w-5 fill-black'}/>


                                    }
                                </span>
                            </div>


                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                              <LockClosedIcon
                                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                                  aria-hidden="true"
                              />
                            </span>
                            Вход
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Index;
