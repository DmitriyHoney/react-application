

import React from "react";
import {Field, reduxForm} from "redux-form";
import {requireField} from "../../utils/validator/validator";
import {customInput} from "../../common/FormsControls/FormsControls";

const UsualForm = props => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="text" placeholder={"Name"} component={customInput} name={"name"} validate={[requireField]}/>
            </div>
            <div>
                <Field type="text" placeholder={"Age"} component={"input"} name={"age"}/>
            </div>
            <button className="main-btn">Send</button>
        </form>
    )
};

const UsualFormContainer = props => {
    let handleSubmit = formData => {
        console.log(formData);
    };
    return(
        <div>
            <ReduxForm onSubmit={handleSubmit}/>
        </div>
    )
}

const ReduxForm = reduxForm({form: 'bank'})(UsualForm);


export default UsualFormContainer;