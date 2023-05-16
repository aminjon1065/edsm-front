import React from 'react';
import {Route, redirect} from 'react-router-dom';

const ProtectedRoute = ({component: Component, isLoggedIn, ...rest}) => (
    <Route
        {...rest}
        render={(props) => (
            isLoggedIn ? (
                    <Component {...props} />
                ) :
                redirect('/login')
        )}
    />
);

export default ProtectedRoute;
