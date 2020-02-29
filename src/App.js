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


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <div className="main container">
                    <Aside aside={props.aside}/>
                    <Route path='/profile' render={() => <Profile posts={props.posts} />}/>
                    <Route path='/dialogs' render={() => <Dialogs dialogs={props.dialogs} />}/>
                    <Route path='/feed' component={Feed}/>
                    <Route path='/friend' component={Friend}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
