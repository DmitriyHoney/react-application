import React from 'react';

function Aside() {
    return(
        <aside>
            <nav className="aside">
                <ul className="aside-menu">
                    <li className="aside-menu__item">
                        <a href="#">
                            <i className="fa fa-home"></i>
                            My Profile
                        </a>
                    </li>
                    <li className="aside-menu__item">
                        <a href="#">
                            <i className="fa fa-align-left"></i>
                            News
                        </a>
                    </li>
                    <li className="aside-menu__item">
                        <a href="#">
                            <i className="fa fa-comments"></i>
                            Messages
                        </a>
                    </li>
                    <li className="aside-menu__item">
                        <a href="#">
                            <i className="fa fa-user"></i>
                            Friends
                        </a>
                    </li>
                    <li className="aside-menu__item">
                        <a href="#">
                            <i className="fa fa-users"></i>
                            Communities
                        </a>
                    </li>
                    <li className="aside-menu__item">
                        <a href="#">
                            <i className="fa fa-music"></i>
                            Music
                        </a>
                    </li>
                    <li className="aside-menu__item">
                        <a href="#">
                            <i className="fa fa-film"></i>
                            Videos
                        </a>
                    </li>
                    <li className="aside-menu__item">
                        <a href="#">
                            <i className="fa fa-gamepad"></i>
                            Games
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Aside;