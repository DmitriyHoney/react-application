import React from 'react';
import style from './Dialogs.module.css';
import DialogCardOfFriend from "./DialogCardOfFriend/DialogCardOfFriend";
import ChatMessage from "./ChatMessage/ChatMessage";
import SendMessage from "./SendMessage/SendMessage";


const Dialogs = (props) => {
    let renderDialogsData = props.page.friends.map( (dialog, index) => {
        return <DialogCardOfFriend key={index} userId={dialog.userId} name={dialog.name} src={dialog.src}/>;
    });

    return(
        <div className={`default-card ${style.dialogsWrap}`}>
            <div>
                {renderDialogsData}
            </div>
            <div className={style.chatWrap}>
                <ChatMessage send="friend" message="Hello, how are you?" src="https://avatars.mds.yandex.net/get-pdb/1935444/7ad1efd1-cc5f-48fc-96ad-c65bab20970c/s1200"/>
                <ChatMessage send="me" message="Hello, I`m fine, thanks!" src="https://avatars.mds.yandex.net/get-zen_doc/236854/pub_5a316bb4830905958b6dbad4_5a316bda77d0e6afcba2ac2d/scale_1200"/>
                <SendMessage value={props.page.chatTextarea} dispatch={props.dispatch}/>
            </div>
        </div>
    )
}


export default Dialogs;