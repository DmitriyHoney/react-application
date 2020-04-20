import React from 'react';
import style from './Feed.module.css';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const Feed = (props) => {
    return(
        <div className={`default-card`}>
            Feed
        </div>
    )
}

export default withAuthRedirect(Feed);