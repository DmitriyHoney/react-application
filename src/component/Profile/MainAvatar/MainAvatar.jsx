import React from "react";
import style from "./MainAvatar.module.css";

import defaultUser from "../../../assets/image/default-user.png";

const MainAvatar = (props) => {
    return (
        <div className={`${style.avatar} default-card`}>
            <a href="#" className={style.avatarImg}>
                <img src={props.avatarSrc || defaultUser} alt="avatar" className={style.avatarImg} />
            </a>
            <div className={style.avatarEdit}>
                <button className="ghost-btn">Edit</button>
                <button className={`ghost-btn ${style.avatarBtnFurther}`}>
                    <i className="fa fa-ellipsis-h"></i>
                </button>
            </div>
        </div>
    )
}

export default MainAvatar;