import React from 'react';
import style from './ListsFriend.module.css';
import {NavLink} from 'react-router-dom';
import SmallAvatar from "../Profile/SmallAvatar/SmallAvatar";

const ListsFriend = (props) => {

    function renderFriendsList(state, show) {
        let result = [];
        state.forEach((elem, index) => {
            if (index <= show - 1) result.push(<NavLink to={String(elem.userId)} key={index}><SmallAvatar src={elem.src}/></NavLink>);
        });
        return result;
    }

    let result = renderFriendsList(props.state, props.show);

    return (
        <div className={style.listWrap}>
            <h4 className={style.listHead}>Friends</h4>
            <div className={style.listImageWrap}>
                {result}
            </div>
        </div>

    )
}

export default ListsFriend;