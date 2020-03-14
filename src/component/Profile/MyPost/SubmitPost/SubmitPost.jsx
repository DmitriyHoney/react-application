import React from "react";
import style from "./SubmitPost.module.css";
import SmallAvatar from "../../SmallAvatar/SmallAvatar";
import {addNewPostCreateAction, updatePostTextareaCreateAction} from "../../../../Redux/state";

const SubmitPost = (props) => {
    const handleMyPost = () => {
        props.dispatch(addNewPostCreateAction());
    };

    function handleTextarea(e) {
        let elemNewValue = e.target.value;
        props.dispatch(updatePostTextareaCreateAction(elemNewValue));
    }

    return (
        <div className={`default-card ${style.submitPost}`}>
            <SmallAvatar src="https://i.pinimg.com/originals/b7/8f/05/b78f052268a91c0d5c0bfdde7187833d.jpg"/>
            <textarea
                onChange={handleTextarea}
                className={style.submitPost__text}
                placeholder="What`s new?"
                value={props.value}
            />
            <button className="main-btn" onClick={handleMyPost}>Post</button>
        </div>
    )
};

export default SubmitPost;