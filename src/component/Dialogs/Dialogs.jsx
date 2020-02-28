import React from 'react';
import style from './Dialogs.module.css';
import SmallAvatar from "../Profile/SmallAvatar/SmallAvatar";
import {NavLink} from "react-router-dom";




const Dialogs = () => {
    let dialogsData = [
        {userId: 1, name: 'Pavel Durov', src: 'https://rossaprimavera.ru/static/files/2c7ca8526ecb.jpg'},
        {userId: 2, name: 'Geralt of Rivia', src: 'http://gamebomb.ru/files/galleries/001/2/23/330556.jpg'},
        {userId: 3, name: 'Jennifer Connelly', src: 'https://avatars.mds.yandex.net/get-pdb/1935444/7ad1efd1-cc5f-48fc-96ad-c65bab20970c/s1200'},
        {userId: 4, name: 'Harry Potter', src: 'https://avatars.mds.yandex.net/get-zen_doc/236854/pub_5a316bb4830905958b6dbad4_5a316bda77d0e6afcba2ac2d/scale_1200'},
        {userId: 5, name: 'Jack Sheppard', src: 'http://static2.kinootziv.com/source/files/wallpapers/matt/matthewfox67978.jpg'}
    ];

    let renderDialogsData = dialogsData.map( (dialog, index) => {
        return <UserDialog key={index} userId={dialog.userId} name={dialog.name} src={dialog.src}/>;
    });

    return(
        <div className={`default-card ${style.dialogsWrap}`}>
            <div>
                {renderDialogsData}
            </div>
            <div className={style.chatWrap}>
                <MyMessage message="Hello, how are you?"/>
                <FriendMessage message="Hello, I`m fine, thanks!"/>
            </div>
        </div>
    )
}

const MyMessage = (props) => {
    return(
        <div className={style.myMessage}>
            {props.message}
        </div>
    )
}

const FriendMessage = (props) => {
    return(
        <div className={style.friendMessage}>
            {props.message}
        </div>
    )
}

const UserDialog = (props) => {
    return(
        <NavLink to={`/dialogs/${props.userId}`} className={style.dialogItem + ' ' + props.active}>
            <SmallAvatar src={props.src}/>
            <div className="dialog__author">
                {props.name}
            </div>
        </NavLink>
    )
}

export default Dialogs;