import React from "react";
import style from "./SubmitPost.module.css";
import SmallAvatar from "../../SmallAvatar/SmallAvatar";

function SubmitPost() {
    return (
        <div className={`default-card ${style.submitPost}`}>
            <SmallAvatar src="https://i.pinimg.com/originals/b7/8f/05/b78f052268a91c0d5c0bfdde7187833d.jpg"/>
            <textarea className={style.submitPost__text} placeholder="What`s new?"></textarea>
            <button className="main-btn">Post</button>
        </div>
    )
}

export default SubmitPost;