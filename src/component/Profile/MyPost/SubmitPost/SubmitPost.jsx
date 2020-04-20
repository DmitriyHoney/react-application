import React from "react";
import style from "./SubmitPost.module.css";
import SmallAvatar from "../../SmallAvatar/SmallAvatar";
import AddPostFormRedux from "../../../../common/AddPostForm/AddPostForm";
import {compose} from "redux";
import {connect} from "react-redux";
import {addNewPostThuhnkCallback} from "../../../../Redux/profile-reducer";

let mapStateToProps = state => ({})


class SubmitPost extends React.Component {
    constructor(props) {
        super(props);
    }

    onSubmit = (formData) => {
        let textNewPost = formData.newMessage;
        this.props.addNewPostThuhnkCallback(textNewPost);
    }

    render() {
        return(
            <div className={`default-card ${style.submitPost}`}>
                <SmallAvatar src="https://i.pinimg.com/originals/b7/8f/05/b78f052268a91c0d5c0bfdde7187833d.jpg"/>
                <AddPostFormRedux onSubmit={this.onSubmit}/>
            </div>
        )
    }


};


export default compose(
    connect(mapStateToProps, {addNewPostThuhnkCallback})
)(SubmitPost);