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


const App = (props) => {
    return (
            <div className="App">
                <Header/>
                <div className="main container">
                    <Aside sidebar={props.state.sidebar}/>
                    <Route path='/profile' render={() => <ContainerProfile />}/>
                    <Route path='/dialogs' render={() => <ContainerDialogs />} />
                    <Route path='/feed' render={() => <Feed />}/>
                    <Route path='/friend' render={() => <Friend />}/>
                </div>
            </div>
    );
};

export default App;
