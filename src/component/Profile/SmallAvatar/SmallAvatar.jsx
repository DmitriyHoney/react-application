import React from 'react';
import style from './SmallAvatar.module.css';

function SmallAvatar() {
    return (
        <div className={style.user__avatar}>
            <img src="https://i.pinimg.com/originals/b7/8f/05/b78f052268a91c0d5c0bfdde7187833d.jpg" alt="avatar"/>
        </div>
    )
}

export default SmallAvatar;