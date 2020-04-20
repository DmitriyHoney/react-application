import React from "react";
import s from './LoginForm.module.css'
import {compose} from "redux";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import { Field, reduxForm } from 'redux-form'
import {maxLength, required} from "../../utils/validator/validator";

let mapStateToProps = (state) => {
    return {
        isAuth: state.authPage.isAuth
    }
}

class LoginForm extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.isAuth) {
            return <Redirect to='/profile' />
        } else {
            return (
                <div className={`default-card ${s.loginForm}`}>
                    <form className="form" onSubmit={this.props.handleSubmit}>
                        <Field name="email" type="text" placeholder="E-mail" component={"input"}/>
                        <Field name="password" type="text" placeholder="Password" component={renderField}  validate={[required, maxLength5]}/>
                        <div className={s.rememberMe}>
                            <label htmlFor="rememberMe">Remember me</label>
                            <Field name="rememberMe" type="checkbox" component={"input"} className={s.remember}/>
                        </div>
                        <button className="main-btn">Войти</button>
                    </form>
                </div>
            )
        }
    }

};

const maxLength5 = maxLength(5);
const renderInput = renderField(input);

const renderField = (tagName) => {
    return ({label, input, type, touched, error, warning}) => {
        return(
            <div>
                <label>{label}</label>
                <div>
                    <input {...input} placeholder={label} type={type} />
                    {touched &&
                    ((error && <span>{error}</span>) ||
                        (warning && <span>{warning}</span>))}
                </div>
            </div>
        )
    }
}





export default compose(
    reduxForm({form: 'loginForm'}),
    connect(mapStateToProps, {}),
)(LoginForm)
