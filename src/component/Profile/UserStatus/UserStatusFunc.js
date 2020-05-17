import style from "../UserInfo/UserInfo.module.css";
import React, {useEffect, useState} from "react";

const UserStatusFunc = props => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    let onEditMode = () => {
        setEditMode(true);
    };
    let offEditMode = () => {
        setEditMode(false);
        if(status !== props.status) props.updateUserStatusThunkCallback(status);
    };
    let handleInput = (e) => {
        setStatus(e.target.value);
    };

    return (

        <div className={style.userInfo__status}>
            <h1 className={style.userInfo__name}>
                {props.name}
            </h1>
            <div>
                {
                    editMode
                        ?  <input type="text" autoFocus={true} onBlur={offEditMode} onChange={handleInput} value={status}/>
                        : <p className={style.userInfo__twit} onDoubleClick={onEditMode}>
                            {props.status || 'set status'}
                        </p>
                }
            </div>
            <span className={style.userInfo__online}>
            online
        </span>
        </div>
    )

}



export default UserStatusFunc;