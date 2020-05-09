import React from 'react';
import style from './Header.module.css';
import Header from "./Header";
import {connect} from "react-redux";
import {logoutTheSiteCallback} from "../../Redux/auth-reducer";
import {compose} from "redux";

let mapStateToProps = (state) => ({});

class HeaderContainer extends React.Component{
    logOut = () => {
        this.props.logoutTheSiteCallback()
    }

    render() {
        return(
            <Header authPage={this.props.authPage} logOut={this.logOut}/>
        )
    }

}

export default compose(
    connect(mapStateToProps, {logoutTheSiteCallback})
)(HeaderContainer)


