import React from 'react';
import style from './Profile.module.css';

function Profile() {
    return (
        <div className={style.profileSection}>
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
            <div className={`${style.userInfo} default-card`}>
                <div className={style.userInfo__status}>
                    <h1 className={style.userInfo__name}>
                        Arnold Schwarzenegger
                    </h1>
                    <p className={style.userInfo__twit}>
                        set a status message
                    </p>
                    <span className={style.userInfo__online}>
                        online
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Profile;