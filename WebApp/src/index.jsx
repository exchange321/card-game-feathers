/**
 * Created by Wayuki on 26-Feb-17.
 */
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import Routes from './routes.jsx';

const store = configureStore();

const AppContainer = () => (
    <Provider store={store}>
        <Routes store={store} />
    </Provider>
);

export default AppContainer;
