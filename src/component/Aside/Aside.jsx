import React from 'react';
import AsideLinks from './AsideLinks/AsideLinks';
import style from './Aside.module.css';
import ListsFriend from "../ListsFriend/ListsFriend";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";



const Aside = (props) => {

    let renderAsideLinks = props.sidebar.links.map( (elem, index) => {
        return <AsideLinks key={index} url={elem.url} icon={elem.icon} text={elem.text}/>;
    });

    return (
        <aside className={style.asideSection}>
            <nav>
                <ul className={style.menu}>
                    {renderAsideLinks}
                </ul>
            </nav>
            <ListsFriend show='3' state={props.sidebar.friends}/>
        </aside>
    )
}

export default withAuthRedirect(Aside);