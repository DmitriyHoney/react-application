import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {addNewPostCreateAction, updatePostTextareaCreateAction} from "../../Redux/profile-reducer";

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        updatePostTextarea: (text) => {
            dispatch(updatePostTextareaCreateAction(text));
        },
        addNewPost: () => {
            dispatch(addNewPostCreateAction());
        }
    }
};

const ContainerProfile = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ContainerProfile;