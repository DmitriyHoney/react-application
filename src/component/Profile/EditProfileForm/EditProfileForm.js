import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../../common/FormsControls/FormsControls";
import s from "./EditProfileForm.module.css";

const EditProfileForm = props => {
    return(
        <form onSubmit={props.handleSubmit} className={s.wrapEdit}>
            {props.error && <div className={s.error}>Error: {props.error.map(e => <p>{e}</p>)}</div>}
            <div>
                <span>Изменить имя:</span>
                <Field type={'text'} placeholder={'fullName'} name={'fullName'} component={Input}/>
            </div>

            <div>
                <span>Ищешь работу?</span>
                <Field type={'checkbox'} placeholder={'LookingJob'} name={'lookingForAJob'} component={Input}/>
            </div>

            <div>
                <span>Обо мне:</span>
                <Field type={'checkbox'} placeholder={'aboutMe'} name={'aboutMe'} component={Textarea}/>
            </div>

            <div>
                <span>Опиши свои крутые стороны:</span>
                <Field placeholder={'Job Description'} name={'lookingForAJobDescription'} component={Textarea} className={s.textarea}/>
            </div>

            <div>
                <span>Твои соцсети:</span>
                <div className={s.contacts}>
                    <div>
                        <span>Facebook:</span> <Field name={'facebook'} component={Input}/>
                    </div>
                    <div>
                        <span>Vk:</span> <Field name={'vk'} component={Input}/>
                    </div>
                    <div>
                        <span>instagram:</span> <Field name={'instagram'} component={Input}/>
                    </div>
                    <div>
                        <span>twitter:</span> <Field name={'twitter'} component={Input}/>
                    </div>
                    <div>
                        <span>github:</span> <Field name={'github'} component={Input}/>
                    </div>
                    <div>
                        <span>website:</span> <Field name={'website'} component={Input}/>
                    </div>
                    <div>
                        <span>youtube:</span> <Field name={'youtube'} component={Input}/>
                    </div>
                    <div>
                        <span>mainLink:</span> <Field name={'mainLink'} component={Input}/>
                    </div>
                </div>
            </div>
            <button className={`main-btn`}>Save</button>
        </form>
    )
};



const EditProfileReduxForm = reduxForm({form: "profile-edit"})(EditProfileForm);

export default EditProfileReduxForm;
