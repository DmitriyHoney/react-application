import React from "react";
import style from './SendMessage.module.css';
import {addNewMessageCreateAction, updateMessageTextareaCreateAction} from "../../../Redux/state";

const SendMessage = (props) => {
    const updateTextarea = (e) => {
        props.dispatch(updateMessageTextareaCreateAction(e.target.value));
    };

    const handleSendMessage = () => {
        props.dispatch(addNewMessageCreateAction());
    };

    return (
        <div className={style.sendMesage}>
            <textarea
                className={style.sendInput}
                value={props.value}
                onChange={updateTextarea}
            />
            <button className="main-btn" onClick={handleSendMessage}>Send</button>
        </div>
    )
};

export default SendMessage;