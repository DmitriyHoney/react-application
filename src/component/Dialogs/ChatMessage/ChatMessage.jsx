import React from 'react';
import style from './ChatMessage.module.css';
import SmallAvatar from "../../Profile/SmallAvatar/SmallAvatar";

const ChatMessage = (props) => {
    return(
        <div className={style.myMessage}>
            <SmallAvatar src={props.src}/>
            {props.message}
        </div>
    )
}

export default ChatMessage;