import React from 'react';
import style from './ChatMessage.module.css';
import SmallAvatar from "../../Profile/SmallAvatar/SmallAvatar";

const ChatMessage = (props) => {
    let completeStyle;

    if (props.send === 'friend') {
        completeStyle = style.friendMessage;
    } else {
        completeStyle = style.myMessage;
    }

    return(
        <div className={completeStyle}>
            <SmallAvatar src={props.src}/>
            <p>{props.message}</p>
        </div>
    )
};

export default ChatMessage;