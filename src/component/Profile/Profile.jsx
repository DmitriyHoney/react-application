import React from 'react';
import style from './Profile.module.css';
import MyPost from "./MyPost/MyPost";
import UserCard from "./UserCard/UserCard";
import MainAvatar from "./MainAvatar/MainAvatar";

const Profile = (props) => {

    let postData = [
        {message: "My first post! Hello, world!", likeCount: 7},
        {message: "You don`t know me, but believe me", likeCount: 25},
        {message: "В частности, сплочённость команды профессионалов представляет собой интересный эксперимент проверки существующих финансовых и административных условий.", likeCount: 42},
    ];


    return (
        <div className={style.profileSection}>
            <MainAvatar/>
            <UserCard/>
            <MyPost postData={postData}/>
        </div>
    )
}

export default Profile;