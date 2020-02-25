import React from "react";
import style from "./MainAvatar.module.css";

function MainAvatar() {
    return (
        <div className={`${style.avatar} default-card`}>
            <a href="#" className={style.avatarImg}>
                <img src="https://farm2.static.flickr.com/1235/1264548661_57f72bd57b_b.jpg" alt="avatar" className={style.avatarImg} />
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