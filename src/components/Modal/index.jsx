import {Fragment, useRef, useState} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {EnvelopeIcon} from '@heroicons/react/24/outline'
import Select from "react-tailwindcss-select";
import {useDropzone} from 'react-dropzone'

export default function Index({open, setOpen}) {
    const options = [
        {value: "fox", label: "🦊 Fox"},
        {value: "Butterfly", label: "🦋 Butterfly"},
        {value: "Honeybee", label: "🐝 Honeybee"}
    ];
    const [option, setOption] = useState(null)
    const cancelButtonRef = useRef(null)
    const handleChange = (value) => {
        console.log(value);
        setOption(value);
    }
    const {getRootProps, getInputProps} = useDropzone({noClick: false})
    console.log(getRootProps)
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full  items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel
                                className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg md:w-full md:max-w-4xl">
                                <div className="bg-white  px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div
                                            className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-sky-100 sm:mx-0 sm:h-10 sm:w-10">
                                            <EnvelopeIcon
                                                className="h-6 w-6 text-sky-600"
                                                aria-hidden="true"
                                            />
                                        </div>
                                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                            <Dialog.Title as="h3"
                                                          className="text-base font-semibold leading-6 text-gray-900">
                                                Новое письмо
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <form className="space-y-8 divide-y divide-gray-200">
                                                    <div className="space-y-8 divide-y divide-gray-200">
                                                        <div>
                                                            <div
                                                                className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-3">

                                                                <div className="sm:col-span-4">
                                                                    <label htmlFor="username"
                                                                           className="block text-sm font-medium text-gray-700">
                                                                        Кому
                                                                        <sup
                                                                            className={"text-red-500 font-bold"}>*</sup>
                                                                    </label>
                                                                    <div className="mt-1 flex rounded-md shadow-sm">
                                                                        <Select
                                                                            id={"username"}
                                                                            primaryColor={"indigo"}
                                                                            noOptionsMessage={"Такого пользователя не существует"}
                                                                            searchInputPlaceholder={""}
                                                                            isSearchable
                                                                            isMultiple
                                                                            value={option}
                                                                            onChange={handleChange}
                                                                            options={options}
                                                                            className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-0"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="sm:col-span-4">
                                                                    <label htmlFor="title"
                                                                           className="block text-sm font-medium text-gray-700">
                                                                        Заголовок
                                                                        <sup
                                                                            className={"text-red-500 font-bold"}>*</sup>
                                                                    </label>
                                                                    <div className="mt-1 rounded-md shadow-sm">
                                                                        <input
                                                                            type="text"
                                                                            id={"title"}
                                                                            className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-0"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="sm:col-span-6">
                                                                    <label htmlFor="description"
                                                                           className="block text-sm font-medium text-gray-700">
                                                                        Текст
                                                                    </label>
                                                                    <div className="mt-1">
                                                                        <textarea
                                                                            id="description"
                                                                            name="about"
                                                                            rows={3}
                                                                            className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-0"
                                                                            defaultValue={''}
                                                                        />
                                                                    </div>
                                                                    <p className="mt-2 text-sm text-gray-500">Write a
                                                                        few sentences about yourself.</p>
                                                                </div>

                                                                <div className="sm:col-span-6">
                                                                    <label htmlFor="photo"
                                                                           className="block text-sm font-medium text-gray-700">
                                                                        Photo
                                                                    </label>
                                                                    <div className="mt-1 flex items-center">
                                                                        <span
                                                                            className="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                                                                            <svg className="h-full w-full text-gray-300"
                                                                                 fill="currentColor"
                                                                                 viewBox="0 0 24 24">
                                                                                <path
                                                                                    d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"/>
                                                                            </svg>
                                                                        </span>
                                                                        <button
                                                                            type="button"
                                                                            className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                                        >
                                                                            Change
                                                                        </button>
                                                                    </div>
                                                                </div>

                                                                <div className="sm:col-span-6">
                                                                    <label htmlFor="cover-photo"
                                                                           className="block text-sm font-medium text-gray-700">
                                                                        Cover photo
                                                                    </label>
                                                                    <div
                                                                        {...getRootProps()}
                                                                        className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                                                        <div className="space-y-1 text-center">
                                                                            <svg
                                                                                className="mx-auto h-12 w-12 text-gray-400"
                                                                                stroke="currentColor"
                                                                                fill="none"
                                                                                viewBox="0 0 48 48"
                                                                                aria-hidden="true"
                                                                            >
                                                                                <path
                                                                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                                                    strokeWidth={2}
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                            </svg>
                                                                            <div className="flex text-sm text-gray-600">
                                                                                <label
                                                                                    htmlFor="file-upload"
                                                                                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                                                                >
                                                                                    <span>Upload a file</span>
                                                                                    <input
                                                                                        {...getInputProps()}
                                                                                        id="file-upload"
                                                                                        name="file-upload"
                                                                                        type="file"
                                                                                        className="sr-only"/>
                                                                                </label>
                                                                                <p className="pl-1">or drag and drop</p>
                                                                            </div>
                                                                            <p className="text-xs text-gray-500">PNG,
                                                                                JPG, GIF up to 10MB</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="pt-8">
                                                            <div>
                                                                <h3 className="text-lg leading-6 font-medium text-gray-900">Personal
                                                                    Information</h3>
                                                                <p className="mt-1 text-sm text-gray-500">Use a
                                                                    permanent address where you can receive mail.</p>
                                                            </div>
                                                            <div
                                                                className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                                                <div className="sm:col-span-3">
                                                                    <label htmlFor="first-name"
                                                                           className="block text-sm font-medium text-gray-700">
                                                                        First name
                                                                    </label>
                                                                    <div className="mt-1">
                                                                        <input
                                                                            type="text"
                                                                            name="first-name"
                                                                            id="first-name"
                                                                            autoComplete="given-name"
                                                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                                        />
                                                                    </div>
                                                                </div>

                                                                <div className="sm:col-span-3">
                                                                    <label htmlFor="last-name"
                                                                           className="block text-sm font-medium text-gray-700">
                                                                        Last name
                                                                    </label>
                                                                    <div className="mt-1">
                                                                        <input
                                                                            type="text"
                                                                            name="last-name"
                                                                            id="last-name"
                                                                            autoComplete="family-name"
                                                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                                        />
                                                                    </div>
                                                                </div>

                                                                <div className="sm:col-span-4">
                                                                    <label htmlFor="email"
                                                                           className="block text-sm font-medium text-gray-700">
                                                                        Email address
                                                                    </label>
                                                                    <div className="mt-1">
                                                                        <input
                                                                            id="email"
                                                                            name="email"
                                                                            type="email"
                                                                            autoComplete="email"
                                                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                                        />
                                                                    </div>
                                                                </div>

                                                                <div className="sm:col-span-3">
                                                                    <label htmlFor="country"
                                                                           className="block text-sm font-medium text-gray-700">
                                                                        Country
                                                                    </label>
                                                                    <div className="mt-1">
                                                                        <select
                                                                            id="country"
                                                                            name="country"
                                                                            autoComplete="country-name"
                                                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                                        >
                                                                            <option>United States</option>
                                                                            <option>Canada</option>
                                                                            <option>Mexico</option>
                                                                        </select>
                                                                    </div>
                                                                </div>

                                                                <div className="sm:col-span-6">
                                                                    <label htmlFor="street-address"
                                                                           className="block text-sm font-medium text-gray-700">
                                                                        Street address
                                                                    </label>
                                                                    <div className="mt-1">
                                                                        <input
                                                                            type="text"
                                                                            name="street-address"
                                                                            id="street-address"
                                                                            autoComplete="street-address"
                                                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                                        />
                                                                    </div>
                                                                </div>

                                                                <div className="sm:col-span-2">
                                                                    <label htmlFor="city"
                                                                           className="block text-sm font-medium text-gray-700">
                                                                        City
                                                                    </label>
                                                                    <div className="mt-1">
                                                                        <input
                                                                            type="text"
                                                                            name="city"
                                                                            id="city"
                                                                            autoComplete="address-level2"
                                                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                                        />
                                                                    </div>
                                                                </div>

                                                                <div className="sm:col-span-2">
                                                                    <label htmlFor="region"
                                                                           className="block text-sm font-medium text-gray-700">
                                                                        State / Province
                                                                    </label>
                                                                    <div className="mt-1">
                                                                        <input
                                                                            type="text"
                                                                            name="region"
                                                                            id="region"
                                                                            autoComplete="address-level1"
                                                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                                        />
                                                                    </div>
                                                                </div>

                                                                <div className="sm:col-span-2">
                                                                    <label htmlFor="postal-code"
                                                                           className="block text-sm font-medium text-gray-700">
                                                                        ZIP / Postal code
                                                                    </label>
                                                                    <div className="mt-1">
                                                                        <input
                                                                            type="text"
                                                                            name="postal-code"
                                                                            id="postal-code"
                                                                            autoComplete="postal-code"
                                                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="pt-8">
                                                            <div>
                                                                <h3 className="text-lg leading-6 font-medium text-gray-900">Notifications</h3>
                                                                <p className="mt-1 text-sm text-gray-500">
                                                                    We'll always let you know about important changes,
                                                                    but you pick what else you want to hear about.
                                                                </p>
                                                            </div>
                                                            <div className="mt-6">
                                                                <fieldset>
                                                                    <legend
                                                                        className="text-base font-medium text-gray-900">By
                                                                        Email
                                                                    </legend>
                                                                    <div className="mt-4 space-y-4">
                                                                        <div className="relative flex items-start">
                                                                            <div className="flex items-center h-5">
                                                                                <input
                                                                                    id="comments"
                                                                                    name="comments"
                                                                                    type="checkbox"
                                                                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                                                />
                                                                            </div>
                                                                            <div className="ml-3 text-sm">
                                                                                <label htmlFor="comments"
                                                                                       className="font-medium text-gray-700">
                                                                                    Comments
                                                                                </label>
                                                                                <p className="text-gray-500">Get
                                                                                    notified when someones posts a
                                                                                    comment on a posting.</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="relative flex items-start">
                                                                            <div className="flex items-center h-5">
                                                                                <input
                                                                                    id="candidates"
                                                                                    name="candidates"
                                                                                    type="checkbox"
                                                                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                                                />
                                                                            </div>
                                                                            <div className="ml-3 text-sm">
                                                                                <label htmlFor="candidates"
                                                                                       className="font-medium text-gray-700">
                                                                                    Candidates
                                                                                </label>
                                                                                <p className="text-gray-500">Get
                                                                                    notified when a candidate applies
                                                                                    for a job.</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="relative flex items-start">
                                                                            <div className="flex items-center h-5">
                                                                                <input
                                                                                    id="offers"
                                                                                    name="offers"
                                                                                    type="checkbox"
                                                                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                                                />
                                                                            </div>
                                                                            <div className="ml-3 text-sm">
                                                                                <label htmlFor="offers"
                                                                                       className="font-medium text-gray-700">
                                                                                    Offers
                                                                                </label>
                                                                                <p className="text-gray-500">Get
                                                                                    notified when a candidate accepts or
                                                                                    rejects an offer.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </fieldset>
                                                                <fieldset className="mt-6">
                                                                    <div>
                                                                        <legend
                                                                            className="text-base font-medium text-gray-900">Push
                                                                            Notifications
                                                                        </legend>
                                                                        <p className="text-sm text-gray-500">These are
                                                                            delivered via SMS to your mobile phone.</p>
                                                                    </div>
                                                                    <div className="mt-4 space-y-4">
                                                                        <div className="flex items-center">
                                                                            <input
                                                                                id="push-everything"
                                                                                name="push-notifications"
                                                                                type="radio"
                                                                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                                            />
                                                                            <label htmlFor="push-everything"
                                                                                   className="ml-3 block text-sm font-medium text-gray-700">
                                                                                Everything
                                                                            </label>
                                                                        </div>
                                                                        <div className="flex items-center">
                                                                            <input
                                                                                id="push-email"
                                                                                name="push-notifications"
                                                                                type="radio"
                                                                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                                            />
                                                                            <label htmlFor="push-email"
                                                                                   className="ml-3 block text-sm font-medium text-gray-700">
                                                                                Same as email
                                                                            </label>
                                                                        </div>
                                                                        <div className="flex items-center">
                                                                            <input
                                                                                id="push-nothing"
                                                                                name="push-notifications"
                                                                                type="radio"
                                                                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                                            />
                                                                            <label htmlFor="push-nothing"
                                                                                   className="ml-3 block text-sm font-medium text-gray-700">
                                                                                No push notifications
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </fieldset>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 sm:ml-3 sm:w-auto"
                                        onClick={() => setOpen(false)}
                                    >
                                        Отправить
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                        onClick={() => setOpen(false)}
                                        ref={cancelButtonRef}
                                    >
                                        Отмена
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
