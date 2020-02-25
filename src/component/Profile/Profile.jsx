import React from 'react';
import style from './Profile.module.css';
import MyPost from "./MyPost/MyPost";
import UserCard from "./UserCard/UserCard";
import MainAvatar from "./MainAvatar/MainAvatar";

function Profile() {
    return (
        <div className={style.profileSection}>
            <MainAvatar/>
            <UserCard/>
            <MyPost/>
        </div>
    )
}

export default Profile;