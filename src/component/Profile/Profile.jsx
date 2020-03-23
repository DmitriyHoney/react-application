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
            <MyPost profilePage={props.profilePage} addNewPost={props.addNewPost} updatePostTextarea={props.updatePostTextarea}/>
        </div>
    )
}

export default Profile;