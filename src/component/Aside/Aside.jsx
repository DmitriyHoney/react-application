import React from 'react';
import AsideLinks from './AsideLinks/AsideLinks';
import style from './Aside.module.css';
import ListsFriend from "../ListsFriend/ListsFriend";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {connect} from "react-redux";
import {getFilterSidebarLinks, getSidebarFriends} from "../../utils/selectors/selectors";

let mapStateToProps = state => {
    return {
        links: getFilterSidebarLinks(state),
        friends: getSidebarFriends(state),
    }
}

class Aside extends React.Component {
    render() {
        let renderAsideLinks = this.props.links.map((elem, index) => {
            return <AsideLinks key={index} url={elem.url} icon={elem.icon} text={elem.text}/>;
        });

        return (
            <aside className={style.asideSection}>
                <nav>
                    <ul className={style.menu}>
                        {renderAsideLinks}
                    </ul>
                </nav>
                <ListsFriend show='3' state={this.props.friends}/>
            </aside>
        )
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {})
)(Aside)