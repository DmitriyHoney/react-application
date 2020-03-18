import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import store from './Redux/redux-store';
import {BrowserRouter} from "react-router-dom";




let renderEntireDom = (store) => {
    ReactDOM.render(
        <BrowserRouter><App state={store.getState()} dispatch={store.dispatch.bind(store)}/></BrowserRouter>, document.getElementById('root')
    );
};

renderEntireDom(store);

store.subscribe(() => {
    renderEntireDom(store);
});





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
