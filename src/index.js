import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import state from "./Redux/state";
import {addUserPost, updateFieldNewPost, updateChatTextarea, subscribe} from './Redux/state';




let renderEntireDom = (state, updatePost, updateChatTextarea) => {
    ReactDOM.render(
        <App state={state} addPost={addUserPost} updatePost={updatePost} updateChatTextarea={updateChatTextarea}/>, document.getElementById('root')
    );
};

renderEntireDom(state, updateFieldNewPost, updateChatTextarea);

subscribe(renderEntireDom);





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
