import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import Login from './Login';
import ProtectedRoute from './ProtectedRoute';
import Dashboard from "./Pages/Dashboard";

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        try {
            const response = await axios.get('/api/user');
            if (response.status === 200) {
                // Авторизован
                setIsLoggedIn(true);
            }
        } catch (error) {
            console.error(error);
            // Неавторизован
        }
    };

    return (
        <Router>
            <Switch>
                <ProtectedRoute path="/" component={Home} isLoggedIn={isLoggedIn} exact />
                <ProtectedRoute path="/dashboard" component={Dashboard} isLoggedIn={isLoggedIn} />
                <Route path="/login">
                    <Login setIsLoggedIn={setIsLoggedIn} />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
