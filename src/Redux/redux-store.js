import {combineReducers, createStore} from "redux";
import messageReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import asideReducer from "./aside-reducer";

let reducers = combineReducers({
    dialogsPage: messageReducer,
    profilePage: profileReducer,
    sidebar: asideReducer
});

let store = createStore(reducers);

export default store;