import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addUserPost} from "./Redux/state";


export const renderEntireDom = (state) => {
    ReactDOM.render(
        <App state={state} addPost={addUserPost}/>, document.getElementById('root')
    );
}


