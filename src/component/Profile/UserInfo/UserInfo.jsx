import React, {useState} from 'react';
import style from './UserInfo.module.css';
import UserStatusFunc from "../UserStatus/UserStatusFunc";
import EditProfileReduxForm from "../EditProfileForm/EditProfileForm";

const UserInfo = props => {
    let [editMode, setEditMode] = useState(false);

    const toggleEditMode = (bool) => {
        setEditMode(bool);
    };
    const hadleProfileEditForms = formData => {
        props.handleProfileEditForm(formData).then(
            () => toggleEditMode(false),
            () => toggleEditMode(true)
        );
    }

    return(
        <div className={`${style.userInfo} default-card`}>
            <UserStatusFunc
                name={props.fullName} status={props.status}
                updateUserStatusThunkCallback={props.updateUserStatusThunkCallback}
            />
            <AboutMe aboutMe={props.aboutMe}/>
            <div>
                <p>В поисках работы: {props.lookingForAJob ? 'true' : 'false'}</p>
                <p>Описание для работодателя: {props.lookingForAJobDescription}</p>
            </div>
            <UserSocial contacts={props.contacts}/>
            {props.isMyPage && <button onClick={() => toggleEditMode(true)}>Edit</button>}
            {editMode && <EditProfileReduxForm onSubmit={hadleProfileEditForms} initialValues={props} />}
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