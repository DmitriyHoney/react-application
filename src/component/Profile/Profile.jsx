import React from 'react';
import style from './Profile.module.css';
import MyPost from "./MyPost/MyPost";
import UserCard from "./UserCard/UserCard";
import MainAvatar from "./MainAvatar/MainAvatar";

const Profile = (props) => {

    return (
        <div className={style.profileSection}>
            <MainAvatar/>
            <UserCard/>
            <MyPost postData={props.page} dispatch={props.dispatch} />
        </div>
    )
}

export default Profile;