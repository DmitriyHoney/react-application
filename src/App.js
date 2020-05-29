//Libraries
import React, {Suspense} from 'react';
import {Route} from "react-router-dom";

//Styles
import './fonts/fontawesome/css/all.css';
import './App.css';

//Components
import Aside from './component/Aside/Aside';
import Feed from "./component/Feed/Feed";
import Friend from "./component/Friend/Friend";


import Login from "./component/Login/Login";
import HeaderContainer from "./component/Header/HeaderContainer";

import TrainSection from "./component/Training/Forms";
import {compose} from "redux";
import {connect} from "react-redux";
import {getInitializeStateThunkCallback} from "./Redux/app-reducer";

import Preloader from "./common/Preloader/Preloader";
import {getAuthPageSelector, getInitializeSelector} from "./utils/selectors/selectors";
import withSuspense from "./hoc/withSuspense";

const ContainerUsers = React.lazy(() => import('./component/Users/ContainerUsers'));
const ContainerProfile = React.lazy(() => import('./component/Profile/ContainerProfile'));
const ContainerDialogs = React.lazy(() => import("./component/Dialogs/ContainerDialogs"));

const mapStateToProps = state => {
    return {
        initialize: getInitializeSelector(state),
        authPage: getAuthPageSelector(state)
    }
}

class App extends React.Component {
    componentDidMount() {
        this.props.getInitializeStateThunkCallback();
    }

    render() {
        if (!this.props.initialize) return <Preloader/>
        return (
            <div className="App">
                <HeaderContainer authPage={this.props.authPage}/>
                <div className="main container">
                    <Aside />
                        <Route path='/profile/:userId?' render={() => withSuspense(ContainerProfile)}/>
                        <Route path='/dialogs' render={() => withSuspense(ContainerDialogs)}/>
                        <Route path='/feed' render={() => <Feed/>}/>
                        <Route path='/friend' render={() => <Friend/>}/>
                        <Route path='/users' render={() => withSuspense(ContainerUsers)}/>
                        <Route path='/login' render={() => <Login/>}/>
                        <Route path='/training' render={() => <TrainSection/>}/>
                </div>
            </div>
        )
    }
}



export default compose(
    connect(mapStateToProps, {getInitializeStateThunkCallback}),
)(App)

