import React from 'react';
import s from './ProfileCard.module.css';
import MainAvatar from "../MainAvatar/MainAvatar";
import UserInfo from "../UserInfo/UserInfo";

const ProfileCard = (props) => {
    return(
        <div className={s.profileSection}>
            <MainAvatar
                avatarSrc={props.currentUser.photos.large}
                savePhoto={props.savePhoto}
                isMyPage={props.isMyPage}
            />
            <UserInfo
                {...props.currentUser}
                isMyPage={props.isMyPage}
                handleProfileEditForm={props.handleProfileEditForm}
            />
        </div>
    )
}

export default ProfileCard;