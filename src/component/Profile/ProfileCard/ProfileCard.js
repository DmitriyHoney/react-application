import React from 'react';
import s from './ProfileCard.module.css';
import MainAvatar from "../MainAvatar/MainAvatar";
import UserInfo from "../UserInfo/UserInfo";

const ProfileCard = (props) => {
    let {aboutMe, contacts: {...contacts}, lookingForAJob, lookingForAJobDescription, fullName, userId, photos: {...photos}} = props.currentUser;
    return(
        <div className={s.profileSection}>
            <MainAvatar avatarSrc={photos.large}/>
            <UserInfo name={fullName} aboutMe={aboutMe} contacts={contacts} status={props.status}/>
        </div>
    )
}

export default ProfileCard;