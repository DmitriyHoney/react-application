import {Field, reduxForm, reset} from "redux-form";
import s from "./AddPostForm.module.css";
import React from "react";
import {Textarea} from "../FormsControls/FormsControls";

const afterSubmit = (result, dispatch) => dispatch(reset('addPostForm'));


const AddPostForm = props => {
    return(
        <form onSubmit={props.handleSubmit} className={s.addPostForm}>
            <Field name={"newMessage"} component={Textarea} className={s.submitPost__text} placeholder="What`s new?"/>
            <button className="main-btn">Post</button>
        </form>
    )
};

const AddPostFormRedux = reduxForm({form: 'addPostForm', onSubmitSuccess: afterSubmit})(AddPostForm);

export default AddPostFormRedux;