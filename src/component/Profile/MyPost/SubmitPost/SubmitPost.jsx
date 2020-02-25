import React from "react";
import style from "./SubmitPost.module.css";
import SmallAvatar from "../../SmallAvatar/SmallAvatar";

function  SubmitPost() {
    return(
        <div className={`default-card ${style.submitPost}`}>
            <SmallAvatar />
            <textarea className={style.submitPost__text} placeholder="What`s new?"></textarea>
            <button className="main-btn">Post</button>
        </div>
    )
}

export default SubmitPost;