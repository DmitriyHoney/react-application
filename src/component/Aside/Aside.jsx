import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './Aside.module.css';

function Aside() {
    return(
        <aside className={style.asideSection}>
            <nav>
                <ul className={style.menu}>
                    <li className={style.item}>
                        <NavLink to="/profile" className={style.itemLink}>
                            <i className="fa fa-home"></i>
                            My Profile
                        </NavLink>
                    </li>
                    <li className={style.item}>
                        <NavLink to="/feed" className={style.itemLink}>
                            <i className="fa fa-align-left"></i>
                            News
                        </NavLink>
                    </li>
                    <li className={style.item}>
                        <NavLink to="/dialogs" className={style.itemLink}>
                            <i className="fa fa-comments"></i>
                            Messages
                        </NavLink>
                    </li>
                    <li className={style.item}>
                        <NavLink to="/friend" className={style.itemLink}>
                            <i className="fa fa-user"></i>
                            Friends
                        </NavLink>
                    </li>
                    <li className={style.item}>
                        <a href="#" className={style.itemLink}>
                            <i className="fa fa-users"></i>
                            Communities!!!
                        </a>
                    </li>
                    <li className={style.item}>
                        <a href="#" className={style.itemLink}>
                            <i className="fa fa-music"></i>
                            Music!!!
                        </a>
                    </li>
                    <li className={style.item}>
                        <a href="#" className={style.itemLink}>
                            <i className="fa fa-film"></i>
                            Videos!!!
                        </a>
                    </li>
                    <li className={style.item}>
                        <a href="#" className={style.itemLink}>
                            <i className="fa fa-gamepad"></i>
                            Games!!!
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Aside;