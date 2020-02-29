import React from 'react';
import style from './Aside.module.css';
import AsideLinks from "./AsideLinks/AsideLinks";


const Aside = (props) => {


    let renderAsideLinks = props.aside.map( (elem, index) => {
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