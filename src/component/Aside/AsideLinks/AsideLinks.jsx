import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './AsideLinks.module.css';

const AsideLinks = (props) => {
    let url = props.url,
        iconClass = `fa ${props.icon}`,
        linkText = props.text;
    return (
        <li className={style.item}>
            <NavLink to={url} className={style.itemLink}>
                <i className={iconClass}></i>
                {linkText}
            </NavLink>
        </li>
    )
};


export default AsideLinks;