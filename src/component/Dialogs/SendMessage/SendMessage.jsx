import React from "react";
import style from './SendMessage.module.css';
import {addNewMessageCreateAction, updateMessageTextareaCreateAction} from "../../../Redux/state";

const SendMessage = (props) => {
    let userMessageElement = React.createRef();

    const updateTextarea = () => {
        props.dispatch(updateMessageTextareaCreateAction(userMessageElement.current.value));
    };

    const handleSendMessage = () => {
        props.dispatch(addNewMessageCreateAction());
    };

    return (
        <div className={style.sendMesage}>
            <textarea
                className={style.sendInput}
                ref={userMessageElement}
                value={props.value}
                onChange={updateTextarea}
            />
            <button className="main-btn" onClick={handleSendMessage}>Send</button>
        </div>
    )
};

export default SendMessage;