import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {withRouter} from "react-router-dom";
import {
    getProfilePageThunkCallback,
    getUserStatusThunkCallback,
    updateUserStatusThunkCallback
} from "../../Redux/profile-reducer";

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage//getProfilePageSelector(state)
    }
};

class ContainerProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() { //Запрос страницы пользователя, если userId нет, тогда переход на свою страницу
        let userId = this.props.match.params.userId;
        this.props.getProfilePageThunkCallback(userId);
        this.props.getUserStatusThunkCallback(userId);
    }

    render() {
        return(
            <Profile
                profilePage={this.props.profilePage}
                updateUserStatusThunkCallback={this.props.updateUserStatusThunkCallback}
            />
        )
    }
}



export default compose(
    connect(mapStateToProps, {getProfilePageThunkCallback, getUserStatusThunkCallback, updateUserStatusThunkCallback}),
    withAuthRedirect,
    withRouter
)(ContainerProfile)
