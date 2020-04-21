import React from 'react';
import style from './Profile.module.css';
import MyPost from "./MyPost/MyPost";
import ProfileCard from "./ProfileCard/ProfileCard";

const Profile = (props) => {
    return (
        <div className={style.profileSection}>
            <ProfileCard currentUser={props.profilePage.currentUser}/>
            {props.profilePage.isMyPage && <MyPost profilePage={props.profilePage}/>}
        </div>
    )
}

export default Profile;