import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {withRouter} from "react-router-dom";
import {getProfilePageThunkCallback} from "../../Redux/profile-reducer";

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
};

class ContainerProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() { //Запрос страницы пользователя, если userId нет, тогда переход на свою страницу
        let userId = this.props.match.params.userId;
        this.props.getProfilePageThunkCallback(userId);
    }

    render() {
        return(
            <Profile
                profilePage={this.props.profilePage}
            />
        )
    }
}



export default compose(
    connect(mapStateToProps, {getProfilePageThunkCallback}),
    withAuthRedirect,
    withRouter
)(ContainerProfile)
