import React from "react";
import s from './LoginForm.module.css'
import {compose} from "redux";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import { Field, reduxForm } from 'redux-form'
import {required, minLengthCreator, email} from "../../utils/validator/validator";
import {Input} from "../../common/FormsControls/FormsControls";


let mapStateToProps = (state) => {
    return {
        isAuth: state.authPage.isAuth
    }
}


let minLength5 = minLengthCreator(5);

class LoginForm extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.isAuth) return <Redirect to='/profile' />
        else return <LoginFormComponent handleSubmit={this.props.handleSubmit} error={this.props.error}/>
    }

};

const LoginFormComponent = props => {
    return(
        <div className={`default-card ${s.loginForm}`}>
            <form className="form" onSubmit={props.handleSubmit}>
                <Field name="email" type="text" placeholder="E-mail" component={Input} validate={[required, email]}/>
                <Field name="password" type="password" placeholder="Password" component={Input} validate={[required, minLength5]}/>
                <div className={s.rememberMe}>
                    <label htmlFor="rememberMe">Remember me</label>
                    <Field name="rememberMe" type="checkbox" component={"input"} className={s.remember}/>
                </div>
                <button className="main-btn">Войти</button>
                {props.error &&
                    <div className={s.commonError}>
                        {props.error}
                    </div>
                }
            </form>
        </div>
    )
};





export default compose(
    reduxForm({form: 'loginForm'}),
    connect(mapStateToProps, {}),
)(LoginForm)
