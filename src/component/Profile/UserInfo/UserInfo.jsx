import React from 'react';
import style from './UserInfo.module.css';
import UserStatus from "../UserStatus/UserStatus";
import UserStatusFunc from "../UserStatus/UserStatusFunc";

const UserInfo = (props) => {
    return(
        <div className={`${style.userInfo} default-card`}>
            <UserStatusFunc name={props.name} status={props.status} updateUserStatusThunkCallback={props.updateUserStatusThunkCallback}/>
            <AboutMe aboutMe={props.aboutMe}/>
            <UserSocial contacts={props.contacts}/>
        </div>
    )
}


const AboutMe = props => {
    return(
        <div className={style.userDescr}>
            <h3 className={style.userDescrTitle}>
                About me
            </h3>
            <div className={style.userDescrText}>
                {props.aboutMe || `Пользователь не рассказал о себе`}
            </div>
        </div>
    )
};
const UserSocial = props => {
    function getSocialList(objContacts) {
        let result = [];
        let i = 0;
        for (let key in objContacts) {
            let elem = (
                <li className={style.item} key={i++}><a href={objContacts[key]}>{key}</a></li>
            );
            objContacts[key] && result.push(elem);
        }
        return result;
    }

    let socialList = getSocialList(props.contacts);

    if (socialList.length > 0) {
        return (
            <div>
                <h3 className={style.userDescrTitle}>
                    Social
                </h3>
                <ul>
                    {socialList}
                </ul>
            </div>
        )
    } else return <></>
};

export default UserInfo;