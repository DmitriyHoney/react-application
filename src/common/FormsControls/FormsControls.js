import React from "react";
import s from "./FormsControls.module.css";

export const createElement = Component => ({input, meta, ...props}) => {
    let hasError = meta.touched && meta.error;
    return(
        <div className={s.formControl + ` ` + (hasError ? s.error : ``) }>
            <div>
                <Component {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
};

export const Textarea = createElement('textarea');
export const Input = createElement('input');


//For Training
const createFormElement = TagName => ({input, meta, ...props}) => {
    let hasErrorNow = meta.touched && meta.error;
    return(
        <div className={s.formControl + ` ` + (hasErrorNow ? s.error : ``) }>
            <TagName {...input} {...props}/>
            {hasErrorNow && <span>{meta.error}</span>}
        </div>
    )
}


export const customTextarea = createFormElement('textarea');
export const customInput = createFormElement('input');

































