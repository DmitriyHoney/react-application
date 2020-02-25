import React from 'react';
import style from './Header.module.css';

function Header() {
    return(
        <header className={style.headerSection}>
            <div className="container">
                <a href="#">
                    <img src="https://vk.com/images/svg_icons/ic_head_logo.svg" alt=""/>
                </a>
            </div>
        </header>
    )
}

export default Header;