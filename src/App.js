import React, {useEffect} from 'react';
import {BrowserRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {checkAuth} from "./state/slices/signIn";
import Loader from "./components/Loader";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
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
                                <ProtectedRoutes/>
                                :
                                <MainRoutes/>
                        }
                    </BrowserRouter>
            }
        </>
    );
};

export default App;