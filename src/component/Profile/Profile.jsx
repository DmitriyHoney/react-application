import React from 'react';
import style from './Profile.module.css';
import MyPost from "./MyPost/MyPost";
import UserCard from "./UserCard/UserCard";
import MainAvatar from "./MainAvatar/MainAvatar";

const Profile = (props) => {
    console.log(props);
    return (
        <div className={style.profileSection}>
            <MainAvatar/>
            <UserCard/>
            <MyPost postData={props.posts} addPost={props.addPost} updatePost={props.updatePost}/>
        </div>
    )
}

export default Profile;