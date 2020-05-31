import React from 'react';
import style from './Login.module.css';
import LoginForm from "../LoginForm/LoginForm";
import {compose} from "redux";
import {connect} from "react-redux";
import {loginTheSiteThunkCallback} from "../../Redux/auth-reducer";
import Preloader from "../../common/Preloader/Preloader";

let mapStateToProps = (state) => {
    return {
        preloader: state.authPage.preloader,
        captchaUrl: state.authPage.captchaUrl
    }
};

class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    onSubmit = (formData) => {
        console.log(formData);
        this.props.loginTheSiteThunkCallback(formData);
    }

    render() {
        console.log(this.props);
        return(
            <div>
                {this.props.preloader && <Preloader/>}
                {!this.props.preloader && <LoginForm onSubmit={this.onSubmit} {...this.props} captchaUrl={this.props.captchaUrl}/>}
            </div>
        )
    }
}


export default compose(
    connect(mapStateToProps, {loginTheSiteThunkCallback})
)(Login);