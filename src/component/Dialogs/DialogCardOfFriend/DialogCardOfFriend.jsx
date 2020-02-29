import React from 'react';
import style from './DialogCardOfFriend.module.css';
import SmallAvatar from "../../Profile/SmallAvatar/SmallAvatar";
import {NavLink} from "react-router-dom";

const DialogCardOfFriend = (props) => {
    return(
        <NavLink to={`/dialogs/${props.userId}`} className={style.dialogItem + ' ' + props.active}>
            <SmallAvatar src={props.src}/>
            <div className="dialog__author">
                {props.name}
            </div>
        </NavLink>
    )
}

export default DialogCardOfFriend;