import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {withRouter} from "react-router-dom";
import {
    getProfilePageThunkCallback,
    getUserStatusThunkCallback, savePhotoThunkCallback,
    updateUserStatusThunkCallback, handleProfileEditFormThunkCallback
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
        this.requestUserData();
    }

    requestUserData = () => {
        let userId = this.props.match.params.userId || this.props.profilePage.myId;
        this.props.getProfilePageThunkCallback(userId);
        this.props.getUserStatusThunkCallback(userId);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.requestUserData();
        }
    }

    savePhoto = (photoFile) => {
        return this.props.savePhotoThunkCallback(photoFile);
    }


    render() {
        return(
            <Profile
                savePhoto={this.savePhoto}
                profilePage={this.props.profilePage}
                updateUserStatusThunkCallback={this.props.updateUserStatusThunkCallback}
                handleProfileEditForm={this.props.handleProfileEditFormThunkCallback}
            />
        )
    }
}



export default compose(
    connect(mapStateToProps, {
        getProfilePageThunkCallback, getUserStatusThunkCallback, updateUserStatusThunkCallback,
        savePhotoThunkCallback, handleProfileEditFormThunkCallback
    }),
    withAuthRedirect,
    withRouter
)(ContainerProfile)
