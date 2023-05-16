import React from 'react';
import {Provider} from 'react-redux';
import store from './state/store';
import Pages from "./pages";

const App = () => {
    return (
        <>
            <Provider store={store}>
                <Pages/>
            </Provider>
        </>
    );
};

export default App;
