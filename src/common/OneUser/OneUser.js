import React from "react";
import s from './OneUser.module.css';
import defaultUser from "../../assets/image/default-usaer.jpg";
import {NavLink} from "react-router-dom";

const OneUser = (props) => {
    let {name, id, photos, status, followed} = props.user;
    let disabledBtn = props.usersInSubscribeProcess.some(e => e === id);
    let userUrl = `/profile/${id}`;
    return(
        <div key={id} className={s.userWrap}>
            <div className={s.userPhoto}>
                <NavLink to={userUrl}>
                    <img className={s.avatar} src={photos.small || defaultUser} alt="avatar"/>
                </NavLink>
                {followed
                    ? <button disabled={disabledBtn} className="main-btn" onClick={() => props.unFollowOnUser(id)}>unfollow</button>
                    : <button disabled={disabledBtn} className="main-btn" onClick={() => props.followOnUser(id)}>follow</button>}
            </div>
            <div className={s.userInfo}>
                <div className={s.userName}>
                    {name}
                </div>
                <div className={s.userStatus}>
                    {status || 'not status'}
                </div>
            </div>
        </div>
    )
}

export default OneUser;