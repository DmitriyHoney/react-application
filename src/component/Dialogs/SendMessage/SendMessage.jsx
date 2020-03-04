import React from "react";
import style from './SendMessage.module.css';

const SendMessage = () => {
    let userMessageElement = React.createRef();

    const sendMessageFriend = () => {
        let textareaMessage = userMessageElement.current;
        alert(textareaMessage.value);
        textareaMessage.value = '';
    }

    return (
        <div className={style.sendMesage}>
            <textarea className={style.sendInput} ref={userMessageElement}></textarea>
            <button className="main-btn" onClick={sendMessageFriend}>Send</button>
        </div>
    )
};

export default SendMessage;