import React from "react";
import style from './SendMessage.module.css';

const SendMessage = (props) => {
    console.log(props.updateChatTextarea);
    let userMessageElement = React.createRef();

    const sendMessageFriend = () => {
        let textareaMessage = userMessageElement.current;
        alert(textareaMessage.value);
        textareaMessage.value = '';
    }

    const updateTextarea = () => {
        props.updateChatTextarea(userMessageElement.current.value);
    }

    return (
        <div className={style.sendMesage}>
            <textarea
                className={style.sendInput}
                ref={userMessageElement}
                value={props.chatTextarea}
                onChange={updateTextarea}
            />
            <button className="main-btn" onClick={sendMessageFriend}>Send</button>
        </div>
    )
};

export default SendMessage;