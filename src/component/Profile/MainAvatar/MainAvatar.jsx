import React from "react";
import style from "./MainAvatar.module.css";

import defaultUser from "../../../assets/image/default-user.png";

const MainAvatar = (props) => {
    let handleInput = e => {
        if (e.target.files.length > 0) {
            props.savePhoto(e.target.files[0]);
        }
    }

    return (
        <div className={`${style.avatar} default-card`}>
            <a href="#" className={style.avatarImg}>
                <img src={props.avatarSrc || defaultUser} alt="avatar" className={style.avatarImg} />
            </a>
            {props.isMyPage
                && (<div className={style.avatarEdit}>
                        <input type="file" onChange={handleInput}/>
                    </div>
                    )
            }

        </div>
    )
}

export default MainAvatar;