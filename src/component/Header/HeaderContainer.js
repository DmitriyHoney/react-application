import React from 'react';
import style from './Header.module.css';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthStateUser, logoutTheSiteCallback} from "../../Redux/auth-reducer";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
    return {
        authPage: state.authPage
    }
}

class HeaderContainer extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getAuthStateUser();
    }

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
    connect(mapStateToProps, {getAuthStateUser, logoutTheSiteCallback})
)(HeaderContainer)


