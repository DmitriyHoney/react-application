import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import store from './Redux/redux-store';
import {BrowserRouter, HashRouter} from "react-router-dom";
import {Provider} from 'react-redux';


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <HashRouter >
                <App />
            </HashRouter>
        </Provider>
    </React.StrictMode>
    ,document.getElementById('root')
);

serviceWorker.unregister();
