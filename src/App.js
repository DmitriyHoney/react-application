//Libraries
import React from 'react';
import {Route} from "react-router-dom";

//Styles
import './fonts/fontawesome/css/all.css';
import './App.css';

//Components
import Header from './component/Header/Header';
import Aside from './component/Aside/Aside';
import Feed from "./component/Feed/Feed";
import Friend from "./component/Friend/Friend";

import ContainerDialogs from "./component/Dialogs/ContainerDialogs";
import ContainerProfile from "./component/Profile/ContainerProfile";
import ContainerUsers from "./component/Users/ContainerUsers";
import Login from "./component/Login/Login";
import HeaderContainer from "./component/Header/HeaderContainer";


const App = (props) => {
    return (
            <div className="App">
                <HeaderContainer/>
                <div className="main container">
                    <Aside sidebar={props.state.sidebar}/>
                    <Route path='/profile/:userId?' render={() => <ContainerProfile />}/>
                    <Route path='/dialogs' render={() => <ContainerDialogs />} />
                    <Route path='/feed' render={() => <Feed />}/>
                    <Route path='/friend' render={() => <Friend />}/>
                    <Route path='/users' render={() => <ContainerUsers />}/>
                    <Route path='/login' render={() => <Login />}/>
                </div>
            </div>
    );
};

export default App;
