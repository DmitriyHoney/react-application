import React from 'react';
import style from './Header.module.css';

const Header = (props) => {
    return(
        <header className={style.headerSection}>
            <div className="container">
                <div className={style.links}>
                    <a href="#"><img src="https://vk.com/images/svg_icons/ic_head_logo.svg" alt=""/></a>
                    {props.authPage.isAuth
                        ? <div><a href="#">{props.authPage.login}</a> <button onClick={props.logOut}>Logout</button></div>
                        : <a href="#">Login</a>
                    }
                </div>
            </div>
        </header>
    )
}

export default Header;