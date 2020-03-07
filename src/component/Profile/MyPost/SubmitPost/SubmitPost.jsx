import React from "react";
import style from "./SubmitPost.module.css";
import SmallAvatar from "../../SmallAvatar/SmallAvatar";

let referenceTextarea = React.createRef();

const SubmitPost = (props) => {
    console.log(props.updatePost);
    const handleMyPost = () => {
        props.addPost();
    }

    let handleTextarea = () => {
        let elemNewValue = referenceTextarea.current.value;
        props.updatePost(elemNewValue);
    }

    return (
        <div className={`default-card ${style.submitPost}`}>
            <SmallAvatar src="https://i.pinimg.com/originals/b7/8f/05/b78f052268a91c0d5c0bfdde7187833d.jpg"/>
            <textarea
                onChange={handleTextarea}
                className={style.submitPost__text}
                placeholder="What`s new?"
                ref={referenceTextarea}
                value={props.value}
            />
            <button className="main-btn" onClick={handleMyPost}>Post</button>
        </div>
    )
}

export default SubmitPost;