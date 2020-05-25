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
                currentPage={props.currentPage} //Текущая страница для выделения
                changePage={props.changePage} //Запрос на сервер
                portions={10} //Сколько отображаем кнопок за раз
                allPages={Math.ceil(props.totalCount / 7)}
            />
            {props.preloader ? UserList : <Preloader/>}
        </div>
    )
};

export default Users;