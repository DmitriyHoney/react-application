//Libraries
import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

//Styles
import './fonts/fontawesome/css/all.css';
import './App.css';

//Components
import Header from './component/Header/Header';
import Aside from './component/Aside/Aside';
import Profile from './component/Profile/Profile';
import Dialogs from "./component/Dialogs/Dialogs";
import Feed from "./component/Feed/Feed";
import Friend from "./component/Friend/Friend";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <div className="main container">
                    <Aside sidebar={props.state.sidebar}/>
                    <Route path='/profile' render={() => <Profile page={props.state.profilePage} dispatch={props.dispatch} />}/>
                    <Route path='/dialogs' render={() => <Dialogs page={props.state.dialogsPage} dispatch={props.dispatch}/>}/>
                    <Route path='/feed' render={() => <Feed />}/>
                    <Route path='/friend' render={() => <Friend />}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
