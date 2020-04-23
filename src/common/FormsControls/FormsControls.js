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
    