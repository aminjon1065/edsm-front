import React, {useEffect} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Login from "./Auth/Login";
import {useDispatch, useSelector} from "react-redux";
import {checkAuth} from "../state/slices/signIn";
import Loader from "../components/Loader";

const Index = () => {
    const isAuth = useSelector(state => state.auth.isAuth);
    const dispatch = useDispatch()
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            dispatch(checkAuth(token))
        }
    }, [dispatch])
    const selector = useSelector(state => state.auth.isLoading);
    return (
        <>
            {
                selector
                    ?
                    <div className={"h-screen flex justify-center items-center"}>
                        <Loader/>
                    </div>
                    :
                    <BrowserRouter>
                        {
                            isAuth
                                ?
                                <Routes>
                                    <Route index element={<Home/>}/>
                                </Routes>
                                :
                                <Routes>
                                    <Route index path="/*" element={<Login/>}/>
                                </Routes>
                        }
                    </BrowserRouter>
            }
        </>
    );
};

export default Index;