import React from 'react';
import './fonts/fontawesome/css/all.css';
import './App.css';
import Header from './component/Header/Header';
import Aside from './component/Aside/Aside';
import Profile from './component/Profile/Profile';
import Dialogs from "./component/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Feed from "./component/Feed/Feed";
import Friend from "./component/Friend/Friend";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <div className="main container">
                    <Aside/>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/feed' component={Feed}/>
                    <Route path='/friend' component={Friend}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
