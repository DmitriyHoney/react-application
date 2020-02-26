import React from 'react';
import style from './SmallAvatar.module.css';

function SmallAvatar(props) {
    return (
        <div className={style.user__avatar}>
            <img src={props.src} alt="avatar"/>
        </div>
    )
}

export default SmallAvatar;