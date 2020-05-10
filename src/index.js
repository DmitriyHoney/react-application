import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import store from './Redux/redux-store';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';

setInterval(() => {
    store.dispatch({type: 'FAIL'});
}, 1000);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    ,document.getElementById('root')
);

serviceWorker.unregister();
