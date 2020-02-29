import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './Aside.module.css';
import AsideLinks from "./AsideLinks/AsideLinks";


const Aside = (props) => {
    let asideLinkData = [
        {url: '/profile', icon: 'fa-home', text: 'My Profile'},
        {url: '/feed', icon: 'fa-align-left', text: 'News'},
        {url: '/dialogs', icon: 'fa-comments', text: 'Messages'},
        {url: '/friend', icon: 'fa-user', text: 'Friends'},
        {url: '#', icon: 'fa-users', text: 'Communities!!!'},
        {url: '#', icon: 'fa-music', text: 'Music!!!'},
        {url: '#', icon: 'fa-film', text: 'Videos!!!'},
        {url: '#', icon: 'fa-gamepad', text: 'Games!!!'},
    ];

    let renderAsideLinks = asideLinkData.map( (elem, index) => {
        return <AsideLinks key={index} url={elem.url} icon={elem.icon} text={elem.text}/>;
    });

    return (
        <aside className={style.asideSection}>
            <nav>
                <ul className={style.menu}>
                    {renderAsideLinks}
            </ul>
        </nav>
        < /aside>
    )
}

export default Aside;