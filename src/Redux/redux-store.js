import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import messageReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import asideReducer from "./aside-reducer";
import usersReducer from "./users-reducer";
import thunkMiddleware from 'redux-thunk';
import authReducer from "./auth-reducer";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer";


let reducers = combineReducers({
    dialogsPage: messageReducer,
    profilePage: profileReducer,
    sidebar: asideReducer,
    usersPage: usersReducer,
    authPage: authReducer,
    app: appReducer,
    form: formReducer

});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));


window.store = store;

export default store;