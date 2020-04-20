import React from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

export const withAuthRedirect = (Component) => {
    let mapStateToProps = (state) => {
        return {
            isAuth: state.authPage.isAuth
        }
    }

    class RedirectComponent extends React.Component{
        constructor(props) {
            super();
        }

        render() {
            if (this.props.isAuth) return <Component {...this.props}/>
            else return <Redirect to={'/login'} />
        }
    }

    return connect(mapStateToProps, {})(RedirectComponent);
}



