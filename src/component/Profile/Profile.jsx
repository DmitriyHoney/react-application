import React from 'react';
import style from './Profile.module.css';
import MyPost from "./MyPost/MyPost";
import ProfileCard from "./ProfileCard/ProfileCard";
import UserStatus from "./UserStatus/UserStatus";

const Profile = (props) => {
    return (
        <div className={style.profileSection}>
            <ProfileCard
                currentUser={props.profilePage.currentUser}
                status={props.profilePage.status}
                updateUserStatusThunkCallback={props.updateUserStatusThunkCallback}
                savePhoto={props.savePhoto}
                isMyPage={props.profilePage.isMyPage}
                handleProfileEditForm={props.handleProfileEditForm}
            />
            {props.profilePage.isMyPage && <MyPost posts={props.profilePage.posts} newPostValue={props.profilePage.newPostValue}/>}
        </div>
    )
}

export default Profile;