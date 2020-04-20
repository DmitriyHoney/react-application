import React from 'react';
import style from './Users.module.css';
import Pagination from "../../common/Pagination/Pagination";
import Preloader from "../../common/Preloader/Preloader";
import OneUser from "../../common/OneUser/OneUser";

const Users = (props) => {
    let UserList = props.items.map( (user) => {
        return(
            <OneUser
                key={user.id}
                user={user}
                followOnUser={props.followOnUser}
                unFollowOnUser={props.unFollowOnUser}
                usersInSubscribeProcess={props.usersInSubscribeProcess}
            />
        )
    });

    return(
        <div className={style.usersList}>
            <Pagination
                quantityBtn={Math.ceil(props.totalCount / props.countUsers)}
                currentPage={props.currentPage}
                changePage={props.changePage}
                unFollowOnUser={props.unFollowOnUser}
            />
            {props.preloader ? UserList : <Preloader/>}
        </div>
    )
};

export default Users;